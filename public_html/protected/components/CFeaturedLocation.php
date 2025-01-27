<?php
class CFeaturedLocation
{
	
	public static function Details($featured_name='')
	{		
		$dependency = CCacheData::dependency(); 
		$model = AR_featured_location::model()->cache(Yii::app()->params->cache, $dependency)->find('featured_name=:featured_name AND status=:status', 
		array(
		  ':featured_name'=>$featured_name,
		  ':status'=>'publish'
		)); 		
		if($model){
			return array(  
			  'location_name'=>Yii::app()->input->stripClean($model->location_name),
			  'latitude'=>$model->latitude,
			  'longitude'=>$model->longitude,
			);
		}
		throw new Exception( 'no results' );
	}
	
	public static function Listing($featured_name='', $lang = KMRS_DEFAULT_LANGUAGE)
	{
		$stmt="
		SELECT 
		a.merchant_id,
		a.restaurant_name,
		a.restaurant_slug,
		a.logo,
		a.path,
		a.header_image,
		a.path2,

		cm.cuisines,
		rt.review_count,
        rt.ratings,
			
		(
		select option_value
		from {{option}}
		where option_name='merchant_delivery_charges_type'
		and merchant_id = a.merchant_id
		) as charge_type		
		
		FROM {{merchant}} a		

		LEFT JOIN (
          select merchant_id,cuisines from {{view_cuisine_merchant}} where language=".q($lang)."
        ) cm 
        on a.merchant_id = cm.merchant_id

		LEFT JOIN (
          select merchant_id,review_count,ratings from {{view_ratings}} 
        ) rt 
        on a.merchant_id = rt.merchant_id

		WHERE a.status='active'  AND a.is_ready ='2' 
		AND a.merchant_id IN (
		  select merchant_id from {{merchant_meta}}
		  where merchant_id = a.merchant_id 
		  and meta_name='featured'
		  and meta_value=".q($featured_name)."
		)	
		ORDER BY a.date_created ASC
		LIMIT 0,50			
		";			
		if($res = CCacheData::queryAll($stmt)){
			$merchants = [];
			foreach ($res as $val) {						
				$merchants[] = $val['merchant_id'];
				$ratings = isset($val['ratings'])?$val['ratings']:0;
                $ratings = $ratings>0? number_format($val['ratings'],0) : 0;
				$data[] = [
					'merchant_id'=>$val['merchant_id'],
					'restaurant_name'=>CommonUtility::safeDecode($val['restaurant_name']),
					'cuisines'=>CommonUtility::safeDecode($val['cuisines']),
					'review_count'=>$val['review_count'],
					'ratings'=>$ratings,
                    'ratings_pretty'=>t("{ratings} Ratings",[
                        '{ratings}'=>$ratings
                    ]),
					'url'=>Yii::app()->createAbsoluteUrl($val['restaurant_slug']),
					'logo'=> CMedia::getImage($val['logo'],$val['path'],Yii::app()->params->size_image_medium,CommonUtility::getPlaceholderPhoto('merchant_logo')),
					'bglogo'=> !empty($val['header_image'])? CMedia::getImage($val['header_image'],$val['path2'],Yii::app()->params->size_image_medium,CommonUtility::getPlaceholderPhoto('merchant_logo')) :'',
					'charge_type'=>$val['charge_type'],
				];
			}			
			return [
				'data'=>$data,
				'merchants'=>$merchants,
			];
		}
		throw new Exception( 'no results' );
	}
	
	public static function services($featured_name='')
	{
		$data = array();
		$stmt="
		SELECT a.meta_value as service_name,
		a.merchant_id
		
		FROM {{merchant_meta}} a
		WHERE 
		a.merchant_id IN (
		  select merchant_id from {{merchant_meta}}
		  where merchant_id = a.merchant_id 
		  and meta_name='featured'
		  and meta_value=".q($featured_name)."
		)
		AND meta_name ='services'
		";				
		if($res = CCacheData::queryAll($stmt)){
			foreach ($res as $val) {
				$data[$val['merchant_id']][] = $val['service_name'];
			}
			return $data;
		}
		return false;
	}
	
	public static function estimation($featured_name=0)
	{
	    $data = array();
		$stmt="
		SELECT merchant_id,service_code,charge_type,
		estimation
		FROM {{shipping_rate}} a
		WHERE merchant_id  IN (
		    select merchant_id from {{merchant_meta}}
		    where merchant_id = a.merchant_id 
		    and meta_name='featured'
		    and meta_value=".q($featured_name)."
		)
		";				
		if($res = CCacheData::queryAll($stmt)){
			foreach ($res as $val) {
				$data[$val['merchant_id']][$val['service_code']][$val['charge_type']] = array(
				  'service_code'=>$val['service_code'],
				  'charge_type'=>$val['charge_type'],
				  'estimation'=>$val['estimation'],
				);
			}
			return $data;
		}
		return false;
	}	

	public static function merchantsEstimation($merchants=[])
	{
		$stmt = "
		select 
		shipping.id,
		shipping.merchant_id,
		shipping.service_code,
		shipping.charge_type,
		shipping.estimation
		FROM {{shipping_rate}} shipping
		WHERE shipping.merchant_id IN (".CommonUtility::arrayToQueryParameters($merchants).")
		AND shipping_type='standard'
		AND shipping.service_code 
		IN (
			select meta_value from 
			{{merchant_meta}}
			where 
			merchant_id=shipping.merchant_id 
		)
		and shipping.charge_type = (
			select option_value
			from {{option}}
			where option_name='merchant_delivery_charges_type'
			and merchant_id = shipping.merchant_id
		)
		group by shipping.merchant_id,shipping.service_code
		";
		if($res = CCacheData::queryAll($stmt)){
			$data = [];
			foreach ($res as $items) {
				$data[$items['merchant_id']] = $items['estimation'];
			}
			return $data;
		}
		return false;
	}
	
}
/*end class*/