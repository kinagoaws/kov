const someWords=JSON.parse(some_words);const LocaleLang={el:{pagination:{pagesize:"",total:someWords.total}}};const app_featured=Vue.createApp({data(){return{loading:false,list_data:null,current_page:1,query:null,loading_search:false,filter_featured:false,filter_by_list:null,filter_by:null,filter_all_featured:null,page_size:parseInt(list_limit),pageSizes:JSON.parse(paginationSize),sortField:null,sortOrder:null,selected_rows:[]}},mounted(){this.getItemList(1);this.filter_by_list=JSON.parse(filter_by)},computed:{getItems(){if(this.list_data){return this.list_data.items?this.list_data.items:null}return null},hasItems(){return this.list_data?.items&&Object.keys(this.list_data.items).length>0},getTotalItems(){if(this.list_data){return this.list_data.total_items?this.list_data.total_items:null}return 0},getTotalDisplay(){if(this.list_data){return this.list_data.total_display_items?this.list_data.total_display_items:null}return""},hasSelectedRows(){return Object.keys(this.selected_rows).length>0}},methods:{StatusColor(t){if(t=="rejected"){return"warning"}else if(t=="approved"){return"success"}else{return"primary"}},handleSortChange({prop:t,order:e}){this.sortField=t;this.sortOrder=e==="ascending"?"asc":"desc";this.getItemList(this.current_page>0?this.current_page:1)},getParams(){let t="&filter_by="+(this.filter_by?this.filter_by:"");t+="&query="+(this.query?this.query:"");t+="&filter_all_featured="+(this.filter_all_featured?this.filter_all_featured:"");t+="&page_size="+this.page_size;t+="&sort_field="+(this.sortField?this.sortField:"");t+="&sort_order="+(this.sortOrder?this.sortOrder:"");return t},filteFeatured(){this.filter_all_featured=!this.filter_all_featured;this.getItemList(1)},ApplyFilter(){this.getItemList(1)},ClearSearch(){this.getItemList(1)},getItemList(t){this.loading=true;const e=this.getParams();axios.get(api_url+"/getItemsSuggested?page="+t+e).then(t=>{if(t.data.code==1){this.list_data=t.data.details;this.current_page=t.data.details.current_page}else{this.list_data=null}}).catch(t=>{console.error("Error:",t)}).then(t=>{this.loading=false})},paginationChange(t){this.getItemList(t)},toggleFeatured(e){e.loading=true;const t=new FormData;t.append("item_id",e.item_id);t.append("is_featured",e.is_featured?1:0);t.append("featured_priority",e.featured_priority);axios.post(api_url+"/updateFeatureItems",t).then(t=>{if(t.data.code==1){}else{ElementPlus.ElNotification({title:"",message:t.data.msg,position:"bottom-right",type:"warning"})}}).catch(t=>{}).then(t=>{e.loading=false})},handleApprove(e,s){s.loading=true;const t=new FormData;t.append("id",s.id);axios.post(api_url+"/ApprovedSuggestItems",t).then(t=>{if(t.data.code==1){this.list_data.items.splice(e,1);ElementPlus.ElNotification({title:"",message:t.data.msg,position:"bottom-right",type:"success"})}else{ElementPlus.ElNotification({title:"",message:t.data.msg,position:"bottom-right",type:"warning"})}}).catch(t=>{}).then(t=>{s.loading=false})},handleReject(s,i){ElementPlus.ElMessageBox.prompt(someWords.reason_for_rejection,someWords.reject,{confirmButtonText:someWords.ok,cancelButtonText:someWords.cancel}).then(({value:t})=>{i.loading=true;const e=new FormData;e.append("id",i.id);e.append("reason",t);axios.post(api_url+"/RejectSuggestItems",e).then(t=>{if(t.data.code==1){this.list_data.items.splice(s,1)}else{ElementPlus.ElNotification({title:"",message:t.data.msg,position:"bottom-right",type:"warning"})}}).catch(t=>{}).then(t=>{i.loading=false})}).catch(()=>{})},handleSelectionChange(t){this.selected_rows=t},getSelectedIds(){const s=[];Object.entries(this.selected_rows).forEach(([t,e])=>{s.push(e.item_id)});return s},markAllApproved(){const t=this.getSelectedIds();this.loading=true;axios.post(api_url+"/markAllApproved",{item_ids:t}).then(t=>{if(t.data.code==1){this.selected_rows=[];ElementPlus.ElNotification({title:"",message:t.data.msg,position:"bottom-right",type:"success"});this.getItemList(1)}else{ElementPlus.ElNotification({title:"",message:t.data.msg,position:"bottom-right",type:"warning"})}}).catch(t=>{}).then(t=>{this.loading=false})},confirmMarkRejected(){ElementPlus.ElMessageBox.confirm(someWords.confirm_reject_all,someWords.confirm,{confirmButtonText:someWords.ok,cancelButtonText:someWords.cancel,type:"warning"}).then(()=>{this.markAllRejected()}).catch(()=>{})},markAllRejected(){console.log("markAllRejected",this.selected_rows);const t=this.getSelectedIds();this.loading=true;axios.post(api_url+"/markAllRejected",{item_ids:t}).then(t=>{if(t.data.code==1){this.selected_rows=[];ElementPlus.ElNotification({title:"",message:t.data.msg,position:"bottom-right",type:"success"});this.getItemList(1)}else{ElementPlus.ElNotification({title:"",message:t.data.msg,position:"bottom-right",type:"warning"})}}).catch(t=>{}).then(t=>{this.loading=false})}}});app_featured.use(ElementPlus,{locale:LocaleLang});const vm_featured=app_featured.mount("#vue-feature-items");