import{_,l as r,u as i,Q as c,R as u,V as n,m as s,n as P,Z as h,f as m,F as C}from"./index.e99838a1.js";const g={name:"PaymentComponents",props:["payment_credentials","payment_details"],components:{PaypalComponents:r(()=>i(()=>import("./PaypalComponents.5b17e39b.js"),["assets/PaypalComponents.5b17e39b.js","assets/QSpace.aa134d93.js","assets/index.e99838a1.js","assets/index.1028cef9.css","assets/QCircularProgress.bceb8870.js","assets/format.2cae61da.js","assets/ClosePopup.05834fd1.js"])),StripeComponents:r(()=>i(()=>import("./StripeComponents.434ce6ef.js"),["assets/StripeComponents.434ce6ef.js","assets/QSpace.aa134d93.js","assets/index.e99838a1.js","assets/index.1028cef9.css","assets/QCircularProgress.bceb8870.js","assets/format.2cae61da.js","assets/ClosePopup.05834fd1.js","assets/index.4f152a18.js"])),RazorPayComponents:r(()=>i(()=>import("./RazorPayComponents.e395b268.js"),["assets/RazorPayComponents.e395b268.js","assets/index.e99838a1.js","assets/index.1028cef9.css","assets/index.4f152a18.js"])),MercadopagoComponents:r(()=>i(()=>import("./MercadopagoComponents.18afaaed.js"),["assets/MercadopagoComponents.18afaaed.js","assets/QSpace.aa134d93.js","assets/index.e99838a1.js","assets/index.1028cef9.css","assets/QCircularProgress.bceb8870.js","assets/format.2cae61da.js","assets/ClosePopup.05834fd1.js","assets/index.4f152a18.js"]))},data(){return{loading:!1}},setup(){const e=c(),a=u();return{RestaurantStore:e,DataPersisted:a}},methods:{doPayment(e){try{console.log("doPayment=>",e),this.$refs[e].initiatePayment()}catch(a){n.notify(this.$q,this.$t("Error"),a,"myerror","highlight_off","bottom")}},paymentCompleted(e){console.log("paymentCompleted",e),n.showLoadingBox(this.$t("Confirming your payment"),this.$q),n.fetchDataPost("PlaceOrder",{transaction_id:e.transaction_id,order_id:e.order_id,cart_uuid:this.DataPersisted.cart_uuid,currency_code:this.DataPersisted.getUseCurrency(),transaction_type:this.DataPersisted.transaction_type,table_uuid:this.DataPersisted.table_number,guest_number:this.DataPersisted.guest_number,payment_code:e.payment_code,attributes_data:{whento_deliver:"now",delivery_date:"",delivery_time:""}}).then(a=>{console.log("data",a),this.DataPersisted.clearData(),this.$router.push({path:"/payment-succesful",query:{order_uuid:a.details.order_uuid}})}).catch(a=>{n.notify(this.$q,this.$t("Error"),a,"myerror","highlight_off","bottom")}).then(a=>{n.hideLoadingBox(this.$q)})}}};function f(e,a,t,D,b,o){const l=s("PaypalComponents"),p=s("StripeComponents"),d=s("RazorPayComponents"),y=s("MercadopagoComponents");return P(),h(C,null,[m(l,{ref:"paypal",payment_code:"paypal",title:e.$t("Add Paypal"),label:{submit:this.$t("Add Paypal"),notes:this.$t("Pay using your paypal account"),payment_title:this.$t("Pay using Paypal"),payment_subtitle:this.$t("You will re-direct to paypal account to login to your account.")},payment_credentials:t.payment_credentials.paypal?t.payment_credentials.paypal:null,payment_details:t.payment_details,onPaymentCompleted:o.paymentCompleted},null,8,["title","label","payment_credentials","payment_details","onPaymentCompleted"]),m(p,{ref:"stripe",payment_code:"stripe",title:e.$t("Stripe"),payment_credentials:t.payment_credentials.stripe?t.payment_credentials.stripe:null,payment_details:t.payment_details,onPaymentCompleted:o.paymentCompleted},null,8,["title","payment_credentials","payment_details","onPaymentCompleted"]),m(d,{ref:"razorpay",payment_code:"razorpay",title:e.$t("Razorpay"),payment_credentials:t.payment_credentials.razorpay?t.payment_credentials.razorpay:null,payment_details:t.payment_details,onPaymentCompleted:o.paymentCompleted},null,8,["title","payment_credentials","payment_details","onPaymentCompleted"]),m(y,{ref:"mercadopago",payment_code:"mercadopago",title:e.$t("Mercadopago"),payment_credentials:t.payment_credentials.mercadopago?t.payment_credentials.mercadopago:null,payment_details:t.payment_details,onPaymentCompleted:o.paymentCompleted},null,8,["title","payment_credentials","payment_details","onPaymentCompleted"])],64)}var R=_(g,[["render",f]]);export{R as default};
