<h6 class="mb-4"><?php echo t("Administrator Login")?></h6>


<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'login-form',
	'enableAjaxValidation'=>false,
)); ?>


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
   <?php echo $form->textField($model,'username',array(
     'class'=>"form-control form-control-text",
     'placeholder'=>Yii::t("app","Username"),
     'autocomplete'=>"new-password",
   )); ?>   
   <?php echo $form->labelEx($model,'username'); ?>
   <?php echo $form->error($model,'username'); ?>
</div>


<div class="form-label-group">    
   <?php echo $form->passwordField($model,'password',array(
     'class'=>"form-control form-control-text",
     'autocomplete'=>"new-password",
     'placeholder'=>Yii::t("app","Password")
   )); ?>
    <?php echo $form->labelEx($model,'password'); ?>
   <?php echo $form->error($model,'password'); ?>
</div>

<?php if($captcha_enabled):?>
<?php
$this->widget('ext.yiiReCaptcha.ReCaptcha', array(
'model'     => $model,
'attribute' => 'verifyCode',
));
?>
<?php echo $form->error($model,'verifyCode'); ?>
<?php endif;?>

<div class="d-flex mb-2">
 <div class="p-2 flex-fill ">
 
    <div class="custom-checkbox ml-3"> 
	   <?php echo $form->checkBox($model,'rememberMe',array(
	     'class'=>"custom-control-input"
	   )); ?>
		<?php echo $form->label($model,'rememberMe',array(
		  'class'=>"dim custom-control-label"
		)); ?>
		<?php echo $form->error($model,'rememberMe'); ?>
	</div>
 
 </div>
 <div class="p-2 flex-fill text-right">
   <a href="<?php echo Yii::app()->createUrl("/forgotpassword")?>" 
	class="dim underline"><?php echo t("Forgot password?")?>
  </a>
 </div>
</div>
<!--flex-->

<div class="row text-left">
<div class="col-md-12 m-0">
<?php echo CHtml::submitButton('Login',array(
'class'=>"btn btn-green btn-full",
'value'=>t("Sign in")
)); ?>
</div>
</div>

<?php if(DEMO_MODE):?>
<div class="card border mt-4">
<div class="card-body p-3">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <p class="m-0">Username : admin</p>
        <p class="m-0">Password&nbsp;&nbsp;: admin</p>
      </div>
      <div>
       <a href="javascript:copyCredentials();" class="btn btn-green normal"><i class="zmdi zmdi-copy"></i></a>
      </div>
    </div>
</div>
</div>
<?php endif;?>

<?php $this->endWidget(); ?>