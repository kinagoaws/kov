const componentsplansRazorpay={props:["title","label","ajax_url","payment_id","key_id","subscription_type"],data(){return{is_loading:false,error:[],stripe:undefined,elements:undefined,cardElement:undefined,cardholder_name:"",button_enabled:false,steps:1,customer_id:"",client_secret:""}},methods:{subscribe(){this.$emit("showLoader");let e="YII_CSRF_TOKEN="+$("meta[name=YII_CSRF_TOKEN]").attr("content");e="&payment_id="+payment_id;axios({method:"POST",url:this.ajax_url+"/createSubscriptions",data:e}).then(e=>{if(e.data.code==1){this.CheckoutSubscriptions(e.data.details)}else{this.$emit("errorMessage",e.data.msg)}}).catch(e=>{}).then(e=>{this.$emit("closeLoader")})},rewewsubscriptions(){this.$emit("showLoader");axios({method:"GET",url:this.ajax_url+"/rewewsubscriptions",params:{payment_id:payment_id}}).then(a=>{if(a.data.code==1){let e=a.data.details;let t={key:this.key_id,subscription_id:e.subscription_id,name:e.name,description:e.description,image:e.image,subscription_card_change:1,callback_url:e.callback_url,theme:{color:"#F37254"}};var i=new Razorpay(t);i.open()}else{this.$emit("errorMessage",a.data.msg)}}).catch(e=>{}).then(e=>{this.$emit("closeLoader")})},updatesubscriptions(){console.log("updatesubscriptions");this.$emit("showLoader");let e="YII_CSRF_TOKEN="+$("meta[name=YII_CSRF_TOKEN]").attr("content");e="&payment_id="+payment_id;axios({method:"POST",url:this.ajax_url+"/updatesubscriptions",data:e}).then(t=>{if(t.data.code==1){let e=t.data.details.next_actions;if(e=="subscribe"){this.subscribe()}else{window.location.href=t.data.details.redirect_url}}else{this.$emit("errorMessage",t.data.msg)}}).catch(e=>{}).then(e=>{this.$emit("closeLoader")})},CheckoutSubscriptions(e){let t={key:this.key_id,subscription_id:e.subscription_id,name:e.name,description:e.description,image:e.image,callback_url:e.callback_url,theme:{color:"#F37254"}};var a=new Razorpay(t);a.open()}},template:`	
	 <div>	 	 
	 </div>
	`};