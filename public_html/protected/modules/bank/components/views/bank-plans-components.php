<components-plans-bank
ref="<?php echo $payment_code?>"
title="<?php echo t("Enter your card details")?>"	 	  
ajax_url = "<?php echo Yii::app()->createAbsoluteUrl("$payment_code/apiv2")?>"
@show-loader="showLoader"
@close-loader="closeLoader"
@error-message="errorMessage"
:payment_id="payment_id"
:subscription_type="subscription_type"
/>
</components-plans-bank>