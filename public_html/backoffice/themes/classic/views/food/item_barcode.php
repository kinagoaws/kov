<?php
$form = $this->beginWidget(
    'CActiveForm',
    array(
        'id' => 'form',
        'enableAjaxValidation' => false,
    )
);
?>

<?php if (Yii::app()->user->hasFlash('success')): ?>
    <div class="alert alert-success">
        <?php echo Yii::app()->user->getFlash('success'); ?>
    </div>
<?php endif; ?>

<?php if (Yii::app()->user->hasFlash('error')): ?>
    <div class="alert alert-danger">
        <?php echo Yii::app()->user->getFlash('error'); ?>
    </div>
<?php endif; ?>

<div id="barcode-wrapper">
    <h4><?php echo t("Barcode for Item") . ": " . CHtml::encode($item->item_name); ?></h4>
    <svg id="barcode"></svg>
    <p><?php echo t("This barcode represents the Item ID:") . " " . CHtml::encode($item->item_id); ?></p>
</div>

<script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.0/dist/JsBarcode.all.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        JsBarcode("#barcode", "<?php echo CHtml::encode($item->item_id); ?>", {
            format: "CODE128",
            lineColor: "#000",
            width: 2,
            height: 50,
            displayValue: true,
        });
    });
</script>

<?php echo CHtml::submitButton('submit', array(
    'class' => "btn btn-green btn-full mt-3",
    'id' => "save",
    'value' => t("Save")
)); ?>

<?php $this->endWidget(); ?>
