window.componentsFeaturedItemList={props:["title"],data(){return{swiperList:null,loading:true,data:null}},mounted(){this.getFeaturedItems()},computed:{hasFeaturedItems(){if(this.data){return true}return false}},methods:{getFeaturedItems(){let e=getCookie("currency_code");e=e?e:"";axios.get(ajaxurl+"/getFeaturedItems?language="+language+"&currency_code="+e).then(e=>{if(e.data.code==1){this.data=e.data.details.data;setTimeout(()=>{this.initSwiper()},1)}else{this.data=null}}).catch(e=>{console.error("Error:",e)}).then(e=>{this.loading=false})},initSwiper(){this.swiperList=new Swiper(this.$refs.refSwiperList,{lazy:true,slidesPerView:3.5,spaceBetween:15,autoHeight:true,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{310:{slidesPerView:1,spaceBetween:0},320:{slidesPerView:1,spaceBetween:0},480:{slidesPerView:1,spaceBetween:0},640:{slidesPerView:2,spaceBetween:10},768:{slidesPerView:3,spaceBetween:10},1024:{slidesPerView:3.5,spaceBetween:15}}})}},template:"#xtemplate_featured_item_list"};