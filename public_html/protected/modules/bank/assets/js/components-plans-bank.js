const componentsplansBank={props:["title","label","ajax_url","payment_code","payment_id","subscription_type"],data(){return{loading:false}},methods:{subscribe(){this.$emit("showLoader");let t="YII_CSRF_TOKEN="+$("meta[name=YII_CSRF_TOKEN]").attr("content");t="&payment_id="+payment_id;axios({method:"POST",url:this.ajax_url+"/createSubscriptions",data:t}).then(t=>{if(t.data.code==1){window.location.href=t.data.details.redirect}else{this.$emit("errorMessage",t.data.msg)}}).catch(t=>{}).then(t=>{this.$emit("closeLoader")})},updatesubscriptions(){console.log("updatesubscriptions");this.$emit("showLoader");let t="YII_CSRF_TOKEN="+$("meta[name=YII_CSRF_TOKEN]").attr("content");t="&payment_id="+payment_id;axios({method:"POST",url:this.ajax_url+"/updatesubscriptions",data:t}).then(e=>{if(e.data.code==1){let t=e.data.details.next_actions;if(t=="subscribe"){this.subscribe()}else{window.location.href=e.data.details.redirect_url}}else{this.$emit("errorMessage",e.data.msg)}}).catch(t=>{}).then(t=>{this.$emit("closeLoader")})}},template:`		 
	`};