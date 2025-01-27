window.ItemsModal={props:["limit"],data(){return{modal:false,loading:false,list_data:null,items_selected:[],current_page:1,query:null,page_size:parseInt(list_limit),pageSizes:[10,25,50,100],loading_submit:false}},computed:{getItems(){if(this.list_data){return this.list_data.items?this.list_data.items:null}return null},hasItems(){return this.list_data?.items&&Object.keys(this.list_data.items).length>0},getTotalItems(){if(this.list_data){return this.list_data.total_items?this.list_data.total_items:null}return 0},getTotalDisplay(){if(this.list_data){return this.list_data.total_display_items?this.list_data.total_display_items:null}return""},hasSelected(){if(Object.keys(this.items_selected).length>0){if(this.items_selected.length<this.limit){return true}}return false}},methods:{OnOpen(){this.items_selected=[]},ApplyFilter(){this.getList(1)},ClearSearch(){this.getList(1)},showModal(){this.modal=true;if(this.list_data){return}this.getList(1)},getList(t){this.loading=true;axios.get(apibackend+"/ItemsList?page="+t+"&query="+(this.query?this.query:"")+"&page_size="+this.page_size).then(t=>{if(t.data.code==1){this.list_data=t.data.details;this.current_page=t.data.details.current_page}else{this.list_data=null}}).catch(t=>{console.error("Error:",t)}).then(t=>{this.loading=false})},paginationChange(t){console.log("paginationChange",t);this.getList(t)},SubmitItems(){this.modal=false;this.$emit("afterSelecteditems",this.items_selected)}},template:"#xtemplate_items_modal"};