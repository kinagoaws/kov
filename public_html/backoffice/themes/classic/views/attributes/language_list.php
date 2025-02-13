<nav class="navbar navbar-light justify-content-between">
  <a class="navbar-brand">
  <h5><?php echo CHtml::encode($this->pageTitle)?></h5>
  </a>    
  
  
    <div class="d-flex flex-row justify-content-end  align-items-center">
   
      <div class="p-2">  
      <a type="button" class="btn btn-black btn-circle"
      href="<?php echo Yii::app()->CreateUrl("attributes/language_create")?>">
        <i class="zmdi zmdi-plus"></i>
      </a>  
      </div>
      <div class="p-2 mr-4"><h5><?php echo t("Add new")?></h5></div>	  

      <div class="p-2">
        <a type="button" class="btn btn-yellow btn-circle"
        href="<?php echo Yii::app()->CreateUrl("attributes/language_settings")?>">
          <i class="zmdi zmdi-settings text-white"></i>
        </a>  
      </div>
      <div class="p-2 mr-3"><h5><?php echo t("Settings")?></h5></div>	  

      <div class="p-2">
        <a type="button" class="btn btn-green btn-circle"
        href="<?php echo Yii::app()->CreateUrl("attributes/language_import")?>">
          <i class="zmdi zmdi-file-plus text-white"></i>
        </a>  
      </div>
      <div class="p-2 mr-3"><h5><?php echo t("Import")?></h5></div>	  

      <div class="p-2">
        <a type="button" class="btn btn-info btn-circle"
        href="<?php echo Yii::app()->CreateUrl("attributes/language_updatewords")?>">
          <i class="zmdi zmdi-refresh-sync text-white"></i>
        </a>  
      </div>
      <div class="p-2 mr-3"><h5><?php echo t("Update")?></h5></div>	  

	  </div> <!--flex-->      
	
</nav>


<!--SEARCH -->
<?php echo CHtml::beginForm('','post',array(
  'id'=>"frm_search",
  'class'=>"form-inline justify-content-end frm_search mb-2",
  'onsubmit'=>"return false;"
)); 
?> 

<div class="input-group rounded">
  <input type="search" class="form-control rounded search w-25" placeholder="<?php echo t("Search")?>" required  />
  <button type="submit" class="submit input-group-text border-0 ml-2">
    <i class="zmdi zmdi-search"></i>
  </button>
   <button type="button" class="input-group-text border-0 ml-2 btn-black search_close" >
    <i class="zmdi zmdi-close"></i>
    </button>
</div> <!--input-group-->

<?php echo CHtml::endForm(); ?>
<!--END SEARCH -->

<?php echo CHtml::beginForm('','post',array(
  'id'=>"frm_datatables",
  'class'=>"frm_datatables",
  'onsubmit'=>"return false;"
)); 
?> 

<div class="table-responsive-md">
<table class="ktables_list table_datatables">
<thead>
<tr>
<th width="10%">#</th>
<th width="25%"><?php echo t("Name")?></th>
<th width="10%"><?php echo t("Code")?></th>
<th width="10%"><?php echo t("Sequence")?></th>
<th width="15%"><?php echo t("Actions")?></th>
</tr>
</thead>
<tbody></tbody>
</table>
</div>

<?php echo CHtml::endForm(); ?>

<?php 
$this->renderPartial("/admin/modal_delete");
$this->renderPartial("/admin/modal_restore",array(
  'title'=>t("Restore Confirmation"),
  'content'=>t("Are you sure, this will permanently delete your previous language?"),
  'link'=>Yii::app()->CreateUrl("attributes/language_restore")
));
?>
