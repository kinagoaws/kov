<?php
class ItemIdentity
{

	public static function initializeIdentity($object)
	{						
		$resp = self::instantiateIdentity();				
		if(!$resp){
			Yii::app()->getController()->redirect( Yii::app()->createUrl('login/error') );	
			return false;
		}
		return true;
	}
	
	public static function instantiateIdentity()
	{	
		try {					
						
			$domain = Yii::app()->request->getServerName();
			$params = ['id' => Yii::app()->params->item_identity ,'domain'=>$domain ];
			
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, "https://bastisapp.com/activation/index/check?".http_build_query($params));
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			$result = curl_exec($ch);			
			if (curl_errno($ch)) {				
				return false;
			}

			if ($result === false) {
				return false;
			}
			curl_close($ch);

			$json = json_decode($result,true);			
			$code = isset($json['code'])?$json['code']:null;
			if($code==1){
				return true;
			}
			return false;
		} catch(Exception $e) {
			return false;
		}
	}

	public static function addonIdentity($addon_name='')
	{
		$addon = AR_addons::model()->find("addon_name=:addon_name",[
			':addon_name'=>$addon_name
		]);
		if($addon){									
			$domain = Yii::app()->request->getServerName();			

			$params = ['id' => $addon->uuid ,'domain'=>$domain ];
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, "https://bastisapp.com/activation/index/check?".http_build_query($params));
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			$result = curl_exec($ch);			
			if (curl_errno($ch)) {				
				return false;
			}

			if ($result === false) {
				return false;
			}
			curl_close($ch);

			$json = json_decode($result,true);
			$code = isset($json['code'])?$json['code']:null;
			$message = isset($json['msg'])?$json['msg']:null;
			if($code==1){
				return true;
			}
			if($message){
				throw new Exception( $message );
			}
			throw new Exception("Activation calls failed");
		}
		throw new Exception("Addon not found");
	}
	
}
/*end class*/