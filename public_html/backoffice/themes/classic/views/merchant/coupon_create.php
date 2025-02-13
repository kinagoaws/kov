<nav class="navbar navbar-light justify-content-between">
<?php
$this->widget('zii.widgets.CBreadcrumbs', 
array(
'links'=>isset($links)?$links:array(),
'homeLink'=>false,
'separator'=>'<span class="separator">
<i class="zmdi zmdi-chevron-right"></i><i class="zmdi zmdi-chevron-right"></i></span>'
));
?>
</nav>

  
<?php
$form = $this->beginWidget(
	'CActiveForm',
	array(
		'id' => 'upload-form',
		'enableAjaxValidation' => false,		
	)
);
?>

<div class="card">
  <div class="card-body">

<?php if(Yii::app()->user->hasFlash('success')): ?>
	<div class="alert alert-success">
		<?php echo Yii::app()->user->getFlash('success'); ?>
	</div>
<?php endif;?>

<?php if(Yii::app()->user->hasFlash('error')): ?>
	<div class="alert alert-danger">
		<?php echo Yii::app()->user->getFlash('error'); ?>
	</div>
<?php endif;?>


<div class="form-label-group">    
   <?php echo $form->textField($model,'voucher_name',array(
     'class'=>"form-control form-control-text",
     'placeholder'=>$form->label($model,'voucher_name')     
   )); ?>   
   <?php    
    echo $form->labelEx($model,'voucher_name'); ?>
   <?php echo $form->error($model,'voucher_name'); ?>
</div>



<div class="row mt-4">
  <div class="col-md-6">

  <h6 ><?php echo t("Coupon Type")?></h6>
  <div class="form-label-group">    
   <?php echo $form->dropDownList($model,'voucher_type', (array)$voucher_type,array(
     'class'=>"form-control custom-select form-control-select",     
     'placeholder'=>$form->label($model,'voucher_type'),
   )); ?>         
   <?php echo $form->error($model,'voucher_type'); ?>
  </div>		   

  </div>
  <div class="col-md-6">

  <h6 ><?php echo t("Discount")?></h6>  
  <div class="form-label-group">    
   <?php echo $form->textField($model,'amount',array(
     'class'=>"form-control form-control-text",
     'placeholder'=>$form->label($model,'amount')     
   )); ?>   
   <?php    
    echo $form->labelEx($model,'amount'); ?>
   <?php echo $form->error($model,'amount'); ?>
  </div>

  </div>
</div>


<div class="row mt-4">
<div class="col-md-6">

  <div class="form-label-group">    
    <?php echo $form->textField($model,'min_order',array(
      'class'=>"form-control form-control-text",
      'placeholder'=>$form->label($model,'min_order')     
    )); ?>   
    <?php    
      echo $form->labelEx($model,'min_order'); ?>
    <?php echo $form->error($model,'min_order'); ?>
  </div>

</div>
<div class="col-md-6">

<div class="form-label-group">    
   <?php echo $form->textField($model,'max_order',array(
     'class'=>"form-control form-control-text",
     'placeholder'=>$form->label($model,'max_order')     
   )); ?>   
   <?php    
    echo $form->labelEx($model,'max_order'); ?>
   <?php echo $form->error($model,'max_order'); ?>
</div>

</div>
</div>
<!--row-->


<div class="form-label-group">    
   <?php echo $form->textField($model,'max_discount_cap',array(
     'class'=>"form-control form-control-text",
     'placeholder'=>$form->label($model,'max_discount_cap')     
   )); ?>   
   <?php    
    echo $form->labelEx($model,'max_discount_cap'); ?>
   <?php echo $form->error($model,'max_discount_cap'); ?>
</div>

<h6 class="mb-4"><?php echo t("Days Available")?></h6>
<div class="form-label-group">    
   <?php echo $form->dropDownList($model,'days_available',$days,array(
     'class'=>"form-control custom-select form-control-select select_two",
     'placeholder'=>$form->label($model,'days_available'),
     'multiple'=>true,
   )); ?>         
   <?php echo $form->error($model,'days_available'); ?>
</div>

<div class="form-label-group mb-4">    
   <?php echo $form->textField($model,'expiration',array(
     'class'=>"form-control form-control-text datepick",
     'readonly'=>true,
     'placeholder'=>$form->label($model,'expiration'),     
   )); ?>   
   <?php    
    echo $form->labelEx($model,'expiration'); ?>
   <?php echo $form->error($model,'expiration'); ?>
</div>

<h6 class="mb-3"><?php echo t("Transaction Type")?></h6>
<div class="form-label-group">    
   <?php echo $form->dropDownList($model,'transaction_type',$transaction_list,array(
     'class'=>"form-control custom-select form-control-select select_two",
     'placeholder'=>$form->label($model,'transaction_type'),
     'multiple'=>true,
   )); ?>         
   <?php echo $form->error($model,'transaction_type'); ?>
</div>

<h6 class="mb-3 mt-3"><?php echo t("Coupon Options")?></h6>
<div class="form-label-group">    
   <?php echo $form->dropDownList($model,'used_once', (array)$coupon_options,array(
     'class'=>"form-control custom-select form-control-select coupon_options",     
     'placeholder'=>$form->label($model,'used_once'),
   )); ?>         
   <?php echo $form->error($model,'used_once'); ?>
</div>		  

<DIV class="coupon_max_number_use">
<div class="form-label-group">    
   <?php echo $form->textField($model,'max_number_use',array(
     'class'=>"form-control form-control-text",
     'placeholder'=>$form->label($model,'max_number_use')     
   )); ?>   
   <?php    
    echo $form->labelEx($model,'max_number_use'); ?>
   <?php echo $form->error($model,'max_number_use'); ?>
</div>
</DIV>

<DIV class="coupon_customer">
<h6 class="mb-4"><?php echo t("Select Customer")?></h6>
<div class="form-label-group">    
   <?php echo $form->dropDownList($model,'apply_to_customer',(array)$selected_customer,array(
     'class'=>"form-control custom-select form-control-select select_two_ajax2",
     'placeholder'=>$form->label($model,'apply_to_customer'),
     'multiple'=>true,
     'action'=>'search_customer'
   )); ?>         
   <?php echo $form->error($model,'apply_to_customer'); ?>
</div>
</DIV>

<div class="custom-control custom-switch custom-switch-md">  
  <?php echo $form->checkBox($model,"visible",array(
     'class'=>"custom-control-input checkbox_child",     
     'value'=>1,
     'id'=>"visible",
     'checked'=>$model->visible==1?true:false
   )); ?>   
  <label class="custom-control-label" for="visible">
   <?php echo t("Visible")?>
  </label>
</div>    

<h6 class="mb-4 mt-4"><?php echo t("Status")?></h6>
<div class="form-label-group">    
   <?php echo $form->dropDownList($model,'status', (array)$status,array(
     'class'=>"form-control custom-select form-control-select",     
     'placeholder'=>$form->label($model,'status'),
   )); ?>         
   <?php echo $form->error($model,'status'); ?>
</div>		  

<?php echo CHtml::submitButton('submit',array(
'class'=>"btn btn-green btn-full mt-3",
'value'=>t("Save")
)); ?>

<?php $this->endWidget(); ?>