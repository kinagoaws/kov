

<div id="vue-location-rate" v-cloak >

<div v-loading="loading">

<div class="text-right">
<el-button type="primary" @click="showAddrate">
    <?php echo t("Add new")?>
</el-button>
</div>

<components-datatable
ref="datatable"
ajax_url="<?php echo isset($ajax_url)?$ajax_url:'' ?>" 
actions="locationRateList"
:table_col='<?php echo json_encode($table_col)?>'
:columns='<?php echo json_encode($columns)?>'
:date_filter='<?php echo false;?>'
:settings="{
    auto_load : '<?php echo true;?>',
    filter : '<?php echo true;?>',   
    ordering :'<?php echo true;?>',  
    order_col :'<?php echo intval($order_col);?>',   
    sortby :'<?php echo $sortby;?>',         
    placeholder : '<?php echo t("Start date -- End date")?>',  
    separator : '<?php echo t("to")?>',
    all_transaction : '<?php echo t("All transactions")?>',
    delete_confirmation : '<?php echo CJavaScript::quote(t("Delete Confirmation"));?>',    
    delete_warning : '<?php echo CJavaScript::quote(t("Are you sure you want to permanently delete the selected item?"));?>',        
    cancel : '<?php echo CJavaScript::quote(t("Cancel"));?>',        
    delete : '<?php echo CJavaScript::quote(t("Delete"));?>',        
  }"  
page_limit = "<?php echo Yii::app()->params->list_limit?>"  
@edit-records="editRecords"
>
</components-datatable>

</div>

<components-addrate 
ref="ref_addrate"
save_action="saveLocationRates"
merchant_id="0"
@after-saverate="afterSaverate"
></components-addrate>

</div>
<!-- vue-tables -->


<script type="text/x-template" id="xtemplate_location_addrate">
<el-dialog
    v-model="modal"
    title="<?php echo t("Add Rate")?>"
    width="500"       
>

<el-form
    label-position="top"
    label-width="auto"    
    style="max-width: 600px"
  >  

  <div class="row">
    <div class="col-md-6">
          <el-form-item label="<?php echo t("Country")?>" label-position="top">
            <el-select
              v-model="country_id"        
              filterable
              remote
              reserve-keyword
              placeholder="<?php echo t("Please enter a keyword")?>"
              remote-show-suffix        
              :loading="loading"        
              size="large"
              class="w-100"
              :automatic-dropdown="true"       
              @change="OnselectCountry" 
            >
              <el-option
                v-for="item in country_list"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
        </el-form-item>
    </div>
    <div class="col-md-6">      
       <el-form-item label="<?php echo t("State/Region")?>" label-position="top">       
          <el-select
            v-model="state_id"        
            filterable
            remote
            reserve-keyword
            placeholder="<?php echo t("Please select")?>"
            remote-show-suffix        
            :loading="loading_state"        
            size="large"
            class="w-100"
            :automatic-dropdown="true"        
            @change="OnselectState" 
          >
            <el-option
              v-for="item in state_list"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
    </div>
  </div>
  
  <div class="row">
    <div class="col-md-6">

      <el-form-item label="<?php echo t("City")?>" label-position="top">
          <el-select
            v-model="city_id"        
            filterable
            remote
            reserve-keyword
            placeholder="<?php echo t("Please select")?>"
            remote-show-suffix        
            :loading="loading_city"        
            size="large"
        class="w-100"
            :automatic-dropdown="true"        
            @change="OnselectCity" 
          >
            <el-option
              v-for="item in city_list"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
      </el-form-item>

    </div>
    <div class="col-md-6">
    
        <el-form-item label="<?php echo t("Distric/Area/neighborhood")?>" label-position="top">
          <el-select
            v-model="area_id"        
            filterable
            remote
            reserve-keyword
            placeholder="<?php echo t("Please select")?>"
            remote-show-suffix        
            :loading="loading_area"        
            size="large"
            class="w-100"
            :automatic-dropdown="true"        
          >
            <el-option
              v-for="item in area_list"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
      </el-form-item>

    </div>
  </div> 

  <div class="row">
     <div class="col-md-6">

        <el-form-item label="<?php echo t("Delivery Fee")?>" label-position="top">      
          <el-input-number
            v-model="fee"
            :min="0"
            :max="999999999"    
            size="large"
            controls-position="right"
            class="w-100"
            >
            </el-input-number>
      </el-form-item>  

    </div>
    <div class="col-md-6">
    
        <el-form-item label="<?php echo t("Minimum Order")?>" label-position="top">      
          <el-input-number
            v-model="minimum_order"
            :min="0"
            :max="999999999"    
            size="large"
            controls-position="right"
            class="w-100"
            >
            </el-input-number>
        </el-form-item>

    </div>
  </div>
    
  <div class="row">
     <div class="col-md-6">

        <el-form-item label="<?php echo t("Maximum Order")?>" label-position="top">      
          <el-input-number
            v-model="maximum_amount"
            :min="0"
            :max="999999999"    
            size="large"
            controls-position="right"
            class="w-100"
            >
          </el-input-number>
      </el-form-item>

    </div>
    <div class="col-md-6">
    
        <el-form-item label="<?php echo t("Min. Order for Free Delivery")?>" label-position="top">      
          <el-input-number
            v-model="free_above_subtotal"
            :min="0"
            :max="999999999"    
            size="large"
            controls-position="right"
            class="w-100"
            >
          </el-input-number>
      </el-form-item>   

    </div>
  </div>
    
</el-form>

<template #footer>
      <div class="dialog-footer">
        <el-button 
        @click="onSubmit" 
        type="primary" 
        size="large"
        :loading="loading_submit"
        >
            <?php echo t("Submit")?>
        </el-button>
      </div>
</template>

</el-dialog> 

</script>