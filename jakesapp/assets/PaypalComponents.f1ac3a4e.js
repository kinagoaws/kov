import{Q as p}from"./QSpace.24950ca6.js";import{_ as x,X as o,m as v,Y as C,f as s,p as r,bh as _,af as y,bg as c,P as l,R as m,b8 as f,Q as u,bd as b,bT as w,aX as g,F as k}from"./index.c5b868f5.js";import{C as P}from"./ClosePopup.32eeb9ff.js";import{l as q}from"./index.4f152a18.js";let h;const B={name:"PaypalComponents",props:["title","label","payment_code","payment_credentials"],data(){return{show_modal:!1,data:[],loading:!1,payment_modal:!1,client_id:"",enabled_force:!1,force_currency:"",force_amount:0}},methods:{showPaymentForm(){this.show_modal=!0},close(){this.show_modal=!1},onSubmit(){let t=0;typeof this.payment_credentials[this.payment_code]!="undefined"&&this.payment_credentials[this.payment_code]!==null&&(t=this.payment_credentials[this.payment_code].merchant_id);const e={merchant_id:t,payment_code:this.payment_code};this.loading=!0,o.fetchDataByTokenPost("SavedPaymentProvider",e).then(a=>{this.close(),this.$emit("afterAddpayment")}).catch(a=>{o.notify("dark",a,"error_outline",this.$q)}).then(a=>{this.loading=!1})},PaymentRender(t){this.data=t,this.payment_modal=!0,typeof this.payment_credentials[t.payment_code]!="undefined"&&this.payment_credentials[t.payment_code]!==null&&(this.client_id=this.payment_credentials[t.payment_code].attr2),console.log(t),t.force_payment_data&&t.force_payment_data.enabled_force&&(this.enabled_force=!0,this.force_currency=t.force_payment_data.use_currency_code,this.force_amount=t.force_payment_data.total_exchange),this.initPaypal()},initPaypal(){let t=this.data.currency;this.enabled_force&&(t=this.force_currency),q("https://www.paypal.com/sdk/js?client-id="+this.client_id+"&currency="+t+"&disable-funding=credit,card").then(()=>{this.renderPaypal()}).catch(()=>{o.notify("dark",this.$t("failed loading script"),"error_outline",this.$q)})},renderPaypal(){let t=this.data.total;this.enabled_force&&(t=this.force_amount),h=paypal.Buttons({createOrder:(e,a)=>a.order.create({purchase_units:[{amount:{value:t}}]}),onCancel:e=>{},onError:e=>{o.notify("dark",e,"error_outline",this.$q)},onApprove:(e,a)=>a.order.capture().then(i=>{const n=i.purchase_units[0].payments.captures[0];this.CompletePaymentRequest(n.status,n.id,i.id)})}),h.render(this.$refs.paypal_button)},CompletePaymentRequest(t,e,a){let i={transaction_id:e,order_id:a,order_uuid:this.data.order_uuid,cart_uuid:this.data.cart_uuid};o.showLoadingBox(this.$t("processing_payment"),this.$q),o.PaymentPost("PaypalVerifyPayment",i).then(n=>{this.$emit("afterSuccessfulpayment",n.details)}).catch(n=>{o.notify("dark",n,"error_outline",this.$q)}).then(n=>{o.hideLoadingBox(this.$q)})},Dopayment(t,e){this.jwt_data=t,this.force_amount=e.amount,this.force_currency=e.currency_code,typeof this.payment_credentials[e.payment_code]!="undefined"&&this.payment_credentials[e.payment_code]!==null&&(this.client_id=this.payment_credentials[e.payment_code].attr2),this.PaypalInit()},PaypalInit(){q("https://www.paypal.com/sdk/js?client-id="+this.client_id+"&currency="+this.force_currency+"&disable-funding=credit,card").then(()=>{this.renderPayment()}).catch(()=>{o.notify("dark",this.$t("failed loading script"),"error_outline",this.$q)})},renderPayment(){this.$emit("closePayment");let t=this.force_amount;this.payment_modal=!0,h=paypal.Buttons({createOrder:(e,a)=>a.order.create({purchase_units:[{amount:{value:parseFloat(t)}}]}),onCancel:e=>{},onError:e=>{this.error[0]=this.on_error.error},onApprove:(e,a)=>a.order.capture().then(i=>{var n=i.purchase_units[0].payments.captures[0];this.processPayment(n.status,n.id,i.id)})}),setTimeout(()=>{h.render(this.$refs.paypal_button)},500)},processPayment(t,e,a){this.payment_modal=!1,o.showLoadingBox(this.$t("processing_payment"),this.$q),o.PaymentPost("Paypalprocesspayment",{data:this.jwt_data,transaction_id:e,order_id:a}).then(i=>{this.$emit("afterSuccessfulpayment",i.details)}).catch(i=>{this.$emit("afterCancelPayment",i)}).then(i=>{o.hideLoadingBox(this.$q)})}}},S={class:"text-h6 text-weight-bold"},Q={class:"text-body2"},V={class:"text-h6 text-weight-bold"},A={class:"text-body2"},j={ref:"paypal_button",class:"margin-auto full-width"};function F(t,e,a,i,n,$){return v(),C(k,null,[s(g,{modelValue:n.show_modal,"onUpdate:modelValue":e[1]||(e[1]=d=>n.show_modal=d),persistent:"","transition-show":"scale","transition-hide":"scale",position:this.$q.screen.gt.sm?"standard":"bottom","full-width":!this.$q.screen.gt.sm},{default:r(()=>[s(_,{class:y({"bg-grey600 text-white":t.$q.dark.mode})},{default:r(()=>[s(c,{class:"row items-center q-pb-none"},{default:r(()=>[l("div",S,m(a.title),1),s(p),f(s(u,{icon:"close",flat:"",round:"",dense:""},null,512),[[P]])]),_:1}),s(c,{class:"q-pa-md"},{default:r(()=>[l("div",Q,m(a.label.notes),1)]),_:1}),s(b,{spaced:""}),s(w,null,{default:r(()=>[s(u,{unelevated:"",rounded:"",color:"primary","text-color":"white","no-caps":"",class:"full-width q-mb-sm",label:a.label.submit,size:"lg",loading:n.loading,onClick:e[0]||(e[0]=d=>$.onSubmit())},null,8,["label","loading"])]),_:1})]),_:1},8,["class"])]),_:1},8,["modelValue","position","full-width"]),s(g,{modelValue:n.payment_modal,"onUpdate:modelValue":e[2]||(e[2]=d=>n.payment_modal=d),persistent:"","transition-show":"scale","transition-hide":"scale",position:this.$q.screen.gt.sm?"standard":"bottom","full-width":!this.$q.screen.gt.sm},{default:r(()=>[s(_,{style:{width:"500px","max-width":"80vw"},class:y({"bg-grey600 text-white":t.$q.dark.mode})},{default:r(()=>[s(c,{class:"row items-center q-pb-none"},{default:r(()=>[l("div",V,m(a.label.payment_title),1),s(p),f(s(u,{icon:"close",flat:"",round:"",dense:""},null,512),[[P]])]),_:1}),s(c,{class:"q-pa-md"},{default:r(()=>[l("div",A,m(a.label.payment_subtitle),1)]),_:1}),s(b,{spaced:""}),s(w,null,{default:r(()=>[l("div",j,null,512)]),_:1})]),_:1},8,["class"])]),_:1},8,["modelValue","position","full-width"])],64)}var E=x(B,[["render",F]]);export{E as default};
