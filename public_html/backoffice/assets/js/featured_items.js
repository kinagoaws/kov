const someWords=JSON.parse(some_words);const LocaleLang={el:{pagination:{pagesize:"",total:someWords.total}}};const app_featured=Vue.createApp({data(){return{loading:false,list_data:null,current_page:1,query:null,loading_search:false,filter_featured:false,filter_by_list:null,filter_by:null,filter_all_featured:null,page_size:parseInt(list_limit),pageSizes:JSON.parse(paginationSize),sortField:null,sortOrder:null}},mounted(){this.getItemList(1);this.filter_by_list=JSON.parse(filter_by)},computed:{getItems(){if(this.list_data){return this.list_data.items?this.list_data.items:null}return null},hasItems(){return this.list_data?.items&&Object.keys(this.list_data.items).length>0},getTotalItems(){if(this.list_data){return this.list_data.total_items?this.list_data.total_items:null}return 0},getTotalDisplay(){if(this.list_data){return this.list_data.total_display_items?this.list_data.total_display_items:null}return""}},methods:{handleSortChange({prop:t,order:e}){this.sortField=t;this.sortOrder=e==="ascending"?"asc":"desc";this.getItemList(this.current_page>0?this.current_page:1)},getParams(){let t="&filter_by="+(this.filter_by?this.filter_by:"");t+="&query="+(this.query?this.query:"");t+="&filter_all_featured="+(this.filter_all_featured?this.filter_all_featured:"");t+="&page_size="+this.page_size;t+="&sort_field="+(this.sortField?this.sortField:"");t+="&sort_order="+(this.sortOrder?this.sortOrder:"");return t},filteFeatured(){this.filter_all_featured=!this.filter_all_featured;this.getItemList(1)},ApplyFilter(){this.getItemList(1)},ClearSearch(){this.getItemList(1)},getItemList(t){this.loading=true;const e=this.getParams();axios.get(api_url+"/getAllItemList?page="+t+e).then(t=>{if(t.data.code==1){this.list_data=t.data.details;this.current_page=t.data.details.current_page}else{this.list_data=null}}).catch(t=>{console.error("Error:",t)}).then(t=>{this.loading=false})},paginationChange(t){this.getItemList(t)},toggleFeatured(e){e.loading=true;const t=new FormData;t.append("item_id",e.item_id);t.append("is_featured",e.is_featured?1:0);t.append("featured_priority",e.featured_priority);axios.post(api_url+"/updateFeatureItems",t).then(t=>{if(t.data.code==1){}else{ElementPlus.ElNotification({title:"",message:t.data.msg,position:"bottom-right",type:"warning"})}}).catch(t=>{}).then(t=>{e.loading=false})}}});app_featured.use(ElementPlus,{locale:LocaleLang});const vm_featured=app_featured.mount("#vue-feature-items");