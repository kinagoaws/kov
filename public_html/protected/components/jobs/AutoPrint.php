<?php
class AutoPrint 
{
    public $data;

    public function __construct($data) {
        $this->data = $data;
    }
    
    public function execute()
    {        
        try { 
            
            $logs = '';            
            $order_uuid  = isset($this->data['order_uuid'])?$this->data['order_uuid']:null;
            $language = isset($this->data['language'])?$this->data['language']:null;
            if($language){
                Yii::app()->language = $language;
            } 

            $options = AR_admin_meta::getMeta2(['auto_print_status']);
            $auto_print_status = isset($options['auto_print_status'])?$options['auto_print_status']:null;            
            
            $auto_print_status = CommonUtility::safeStrtolower($auto_print_status);     
            $model_order = COrders::getWithoutCache($order_uuid);     
            $merchant_id = $model_order->merchant_id;
            $status = CommonUtility::safeStrtolower($model_order->status);       

            $merchant_options = OptionsTools::find(['auto_print_status'],$merchant_id);
            $mt_auto_print_status = isset($merchant_options['auto_print_status'])?$merchant_options['auto_print_status']:null;            
            $auto_print_status = !empty($mt_auto_print_status)?$mt_auto_print_status:$auto_print_status;
                                

            if($auto_print_status=="none"){
                return;
            }

            if($auto_print_status!=$status){                
                return ;
            }            
            
            $merchant_ids = array();
			$merchant_ids[] = $merchant_id;			
			$merchant_ids[] = 0;			

            // BLUETOOTH/WIFI PRINTER STARTS HERE
            $printers = CMerchants::getPrinterAutoPrinterAll($merchant_ids,[
                'bluetooth','wifi'
            ]);            
            if(!$printers){
                Yii::log( "NO BT PRINTER FOUND" , CLogger::LEVEL_INFO);               
            }                     
                        
            $merchant = CMerchants::get($merchant_id);
            $merchant_uuid = $merchant->merchant_uuid;
            
            $settings = CNotificationData::getRealtimeSettings();
            $provider = isset($settings['provider'])?$settings['provider']:'';            

            if(is_array($printers) && count($printers)>=1){
                foreach ($printers as $printer) {
                    $merchantId = $printer['merchant_id'];
                    $channel = $merchantId<=0?'admin-channel':$merchant_uuid;
                    $settings['notication_channel'] = $channel;
                    $settings['notification_event'] = Yii::app()->params->realtime['notification_event'] ;                           
                    CNotifier::send($provider,$settings,[
                        'notification_type'=>'auto_print',
                        'order_uuid'=>$order_uuid,
                        'printer_model'=>$printer['printer_model'],
                        'printer_details'=>$printer
                    ]);
                }
            }                        

            // CHINESE PRINTER STARTS HERE            
            $printers = CMerchants::getPrinterAutoPrinterAll($merchant_ids,[
                'feieyun'
            ]);
            if(!$printers){
                return;
            }                        
            
			COrders::getContent($order_uuid,Yii::app()->language);                
            $merchant_info = COrders::getMerchant($merchant_id,Yii::app()->language);				
			$order_items = COrders::getItems();				
			$summary = COrders::getSummary();
			$order = COrders::orderInfo();
			$order_id = $order['order_info']['order_id'];
            
            if(is_array($printers) && count($printers)>=1){
                foreach ($printers as $printer) {
                    $tpl = FPtemplate::ReceiptTemplate(
						$printer['paper_width'],
						$order['order_info'],
						$merchant_info,
						$order_items,
						$summary
					);                      
                    $printer_user = $printer['printer_user'];
                    $printer_ukey = $printer['printer_ukey'];
                    $printer_sn = $printer['printer_sn'];
                    $printer_key = $printer['printer_key'];

                    try {
                        $stime = time();
                        $sig = sha1($printer_user.$printer_ukey.$stime);               
                        $result = FPinterface::Print($printer_user,$stime,$sig,$printer_sn,$tpl);                        
                    } catch (Exception $e) {
                        $result = $e->getMessage();
                    }            
                    
                    $logs = new AR_printer_logs();
					$logs->order_id = intval($order_id);
					$logs->merchant_id = intval($printer['merchant_id']);
					$logs->printer_number = $printer_sn;
					$logs->print_content = $tpl;
					$logs->job_id = $result;
					$logs->status = 'process';
					$logs->save();                    
                }
                // end for
            }
        } catch (Exception $e) {                                            
            $logs = $e->getMessage();            
            Yii::log( "BT ERROR Exception  $logs" , CLogger::LEVEL_INFO);
        }        
        //Yii::log( $logs, CLogger::LEVEL_ERROR);
    }
}
// end class