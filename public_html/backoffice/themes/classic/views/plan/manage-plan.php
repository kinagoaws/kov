
<nav class="navbar navbar-light justify-content-between">
<?php
$this->widget('zii.widgets.CBreadcrumbs', 
array(
'links'=>$params['links'],
'homeLink'=>false,
'separator'=>'<span class="separator">
<i class="zmdi zmdi-chevron-right"></i><i class="zmdi zmdi-chevron-right"></i></span>'
));
?>
</nav>

<div id="vue-subscriptions" v-cloak>

<!-- <pre>{{data}}</pre> -->

<el-card shadow="never" v-loading="loading" >    
   <template v-if="hasData">
   <h5>Current Plan: {{data.plan_title}} 
    (<el-text class="mx-1" :type="statusColor(data.status)" >{{data.status_pretty}}</el-text>)    
   </h5>
   

   <div class="mt-3">      
      <div class="mb-3">
        <div>Item Limit</div>
        <el-progress :percentage="data.remaining_items_percentage" ></el-progress>
        <div>Credits Used: {{  data.remaining_items_display }}</div>
      </div>      

      <div class="mb-3">
        <div>Order Limit</div>
        <el-progress :percentage="data.remaining_orders_percentage" ></el-progress>
        <div>Credits Used: {{ data.remaining_orders_display }}</div>
      </div>      
   </div>

   <div v-if="features_list" class="mt-3 mb-2 row align-items-center">  
     <template v-for="(feature_name,feature_id) in features_list">
        <div class="col-3 mb-2">            
            <template v-if="subscription_features">
                <template v-if="subscription_features[feature_id]">
                    <i class="zmdi zmdi-check text-green mr-1 font16"></i> 
                </template>
                <template v-else>
                    <i class="zmdi zmdi-close debit mr-1 font16"></i> 
                </template>
            </template>        
            <template v-else>
                <i class="zmdi zmdi-close debit mr-1 font16"></i> 
            </template>    
            {{feature_name}}
        </div>     
     </template>
   </div>
   
   <template v-if="data.status=='active'">
      <h5>Running out of credits too soon?</h5>
      <p> Upgrade to our more featured plan for more credits and benefits. </p>
   </template>
   <template v-else-if="data.status=='cancelled'">
     <h5 class="text-danger">Your subscription has been cancelled.</h5>
   </template>
   <template v-else-if="data.status=='expired'">
     <h5 class="text-danger">Your subscription expired.</h5>
   </template>
      

   <div>    
    <template v-if="data.status=='active'">  
      <el-button type="warning" plain size="large"  @click="UpdateSubscriptions" >
          <b>Upgrade Plan</b>
      </el-button>    
      
      <el-button type="danger" plain size="large" @click="confirmCancelSubscriptions(data.payment_code)" :loading="loading_cancel" >
          <b>Cancel Subscription</b>
      </el-button>
    </template>

    <template v-else-if="data.status=='pending'">    
      <el-button type="primary" plain size="large" @click="RenewSubscriptions" >
          <b>Renew Plan</b>
      </el-button>    
      <el-button type="warning" plain size="large"  @click="UpdateSubscriptions" >
            <b>Upgrade Plan</b>
      </el-button>    
    </template>

    <template v-else>
      <el-button type="primary" plain size="large" @click="Subscribe" >
          <b>Subscribe</b>
      </el-button>    
    </template>

   </div>
   </template>
   <template v-else>
      <template v-if="!loading">
         <h5>You don't have current subscriptions</h5>
         <div class="mt-3">
            <el-button type="primary" plain size="large" @click="Subscribe" >
              <b>Subscribe</b>
            </el-button>    
         </div>        
      </template>      
   </template>
</el-card>

<div class="m-3"></div>

<template v-if="hasData">
<el-card shadow="never" v-loading="loading" >           
  <el-descriptions title="Current Subscription"  border>
     <el-descriptions-item label="Plan">{{ data.plan_title }}</el-descriptions-item>
     <el-descriptions-item label=" Billing Price">{{ data.price }}</el-descriptions-item>
     <el-descriptions-item label=" Billing Cycle"> {{ data.package_period }} </el-descriptions-item>
     <el-descriptions-item label="Created At">{{ data.created_at }}</el-descriptions-item>
     <el-descriptions-item label="Expiration">{{ data.expiration }}</el-descriptions-item>
     <el-descriptions-item label="Next Due on">{{ data.next_due }}</el-descriptions-item>
  </el-descriptions>  
</el-card>
</template>

<div class="m-3"></div>

<template v-if="hasHistory">
<el-card shadow="never" v-loading="loading_history" >             
  <el-descriptions title="Subscription History">     
  </el-descriptions>


  <el-table :data="history_data" style="width: 100%">
    <el-table-column label="Plan Name">
      <template #default="scope">
          {{ scope.row.plan_title }}
      </template>
    </el-table-column>
    <el-table-column label="Amount">
      <template #default="scope">
         {{ scope.row.amount }}
      </template>
    </el-table-column>    
    <el-table-column label="Start Date">
      <template #default="scope">
         {{ scope.row.current_start }}
      </template>
    </el-table-column>    
    <el-table-column label="End Date">
      <template #default="scope">
         {{ scope.row.current_end }}
      </template>
    </el-table-column>    

    <el-table-column label="Payment">
      <template #default="scope">
         {{ scope.row.payment_code }}
      </template>
    </el-table-column>    

    <el-table-column label="Status">
      <template #default="scope">         
         <el-button
          size="small"
          :type="statusColor(scope.row.status_raw)"          
         >
           {{ scope.row.status }}
         </el-button>
      </template>
    </el-table-column>    

    <el-table-column label="">
      <template #default="scope">         
         <el-link :href="scope.row.payment_link" type="primary" target="_blank">Pay Now</el-link>
      </template>
    </el-table-column>    

  </el-table>  
</el-card>
</template>


<div class="m-4"></div>


<components-plan-selection 
ref="ref_plans"
:subscription_type="subscription_type"
:package_id="data?data.package_id:''"
@create-paymentplan="createPaymentplan"
></components-plan-selection>


</div>
<!-- card -->


<script type="text/x-template" id="xtemplate_planselection">
<el-dialog v-model="modal" :show-close="true"  width="800"  align-center @opened="getSubscriptionList">
    <template  #header="{ close, titleId, titleClass }" >
      <div class="text-center">
        <h3 class="font-weight-bolder">Flexible <span class="text-green">Pricing</span> for Every <span class="text-green">Restaurant</span></h3>
        <h6>Transparent pricing. No hidden costs. Advanced features to elevate your business.</h6>
      </div>
    </template>        
  
    <div class="row justify-content-center pricing-plans q-gutter-md" v-loading="loading" >  
      <template v-for="items in data">
       <div class="plans position-relative mb-3">
        <div class="icon"><i class="zmdi zmdi-fire"></i></div>
        <div class="mt-3 mb-3">
          <h4 class="mb-0">{{ items.title }}</h4>
          <div class="ellipsis-2-lines" v-html="items.description" ></div>
        </div>

        <h4 class=" font-weight-bolder">
          <template v-if="items.promo_price_raw>0">
            <span class="text-muted opacity-60"><del>{{items.price}}</del></span> <span>{{ items.promo_price }}</span>
          </template>
          <template v-else>
            {{items.price}} 
          </template>

          <span class="text-15 billing-text">/{{items.package_period}}</span>
        </h4>

        <template v-if="plan_details">
        <ul>
          <li>
            <i class="zmdi zmdi-check text-green mr-1"></i>
            <?php echo t("Max Order")?> (<template v-if="items.order_limit==0"><?php echo t("Unlimited")?></template> <template v-else>{{items.order_limit}}</template>)
          </li>
          <li>
            <i class="zmdi zmdi-check text-green mr-1"></i>
            <?php echo t("Max Product")?> (<template v-if="items.item_limit==0"><?php echo t("Unlimited")?></template> <template v-else>{{items.item_limit}}</template>)
          </li>
          <template v-for="(features,features_key) in plan_details">
            <li>          
              <i v-if="items[features_key]=='1'" class="zmdi zmdi-check text-green mr-1"></i>
              <i v-else class="zmdi zmdi-close text-red mr-1"></i>
              {{ features }}
              </li>
          </template>      
        </ul>
        </template>

        <div class="mt-3">
         <a @click="setChoosePlan(items.package_id)" class="btn btn-outline-success btn-block">
           <?php echo t("Choose Plan")?>
         </a>      
        </div>

       </div>
       </template>
    </div>


  </el-dialog>
</script>