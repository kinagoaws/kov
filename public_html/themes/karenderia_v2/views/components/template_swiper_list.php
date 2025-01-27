<script type="text/x-template" id="xtemplate_swiper_list">          
<template v-if="loading">
   <el-skeleton animated >
      <template #template>        
         <div class="mb-4 mt-4">
            <el-skeleton-item variant="caption" style="height: 20px;width:100%;"  />
         </div>
         <el-skeleton-item variant="rect" style="height: 180px;width:100%;"  />                           
      </template>
   </el-skeleton>
</template>

<template v-else >   
<div v-if="hasData" class="swiperOutsideContainer" >

   <div class="mb-4 mt-4">
       <h3 class="font-weight-bold">{{title}}</h3>
   </div>           
   
   <div class="swiper-container">
         <div class="swiper swiperResto" ref="refSwiperList" style=" position:static;" >
            <div class="swiper-wrapper pb-1">
                  <template v-for="items in data">
                  <div class="swiper-slide swiperSlide" type="button" @click="setUrl(items.url)" href="items.url" >               
                     <div class="position-relative">                      
                        <div class="position-absolute p-2" style="z-index: 9;">
                           <template v-for="promos_items in items.vouchers">
                              <div class="mb-1"><el-tag type="danger">{{promos_items.title}}</el-tag></div>
                           </template>
                           <template v-for="promos_items in items.promos">
                              <div class="mb-1"><el-tag type="warning">{{promos_items.title}}</el-tag></div>
                           </template>
                        </div>
                        <img :src="items.logo" 
                        loading="lazy"                                                      
                        />
                     </div>
                     <div class="p-2">
                        <div class="font-weight-bold mb-2 truncate">{{ items.restaurant_name }}</div>
                        <div class="font-weight-light truncate mb-1">{{ items.cuisines }}</div>
                        <div class="row align-items-center no-gutters">
                           <div class="col">
                              <div class="d-flex">
                                 <div class="mr-2"><i class="fas fa-star gold-color"></i></div>
                                 <div>{{items.review_count}}+ <?php echo t("Ratings")?></div>
                              </div>                        
                           </div>
                           <div v-if="items.estimated_time_min" class="col-5">
                              <div class="d-flex">
                                 <div class="mr-2"><i class="zmdi zmdi-time"></i></div>
                                 <div class="truncate">{{items.estimated_time_min}}</div>
                              </div>                        
                           </div>                     
                        </div>
                     </div>
                  </div>
                  </template>            
            </div>
            <div class="swiper-button-next">
               <el-button circle>
                  <i class="fas fa-arrow-right"></i>
               </el-button>
            </div>
            <div class="swiper-button-prev">
               <el-button circle>
                  <i class="fas fa-arrow-left"></i>
               </el-button>
            </div>
         </div>
   </div>
   <!-- swiper-container -->
</div>
<!-- swiperOutsideContainer -->
</template>
</script>