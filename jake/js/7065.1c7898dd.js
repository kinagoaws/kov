"use strict";(globalThis["webpackChunkcom_kinago_single"]=globalThis["webpackChunkcom_kinago_single"]||[]).push([[7065],{7065:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Fe});var o=a(1758),s=a(8790);const n={class:"row justify-center q-pa-md q-col-gutter-md"},l={class:"col-md-6 col-sm-12"},r={class:"row items-start q-col-gutter-sm q-mb-lg"},i={class:"col-3"},d={class:"text-h5 no-margin"},c={class:"col-9"},_={key:0,class:"row items-start q-col-gutter-sm"},m={class:"col-3"},h={class:"col-9"},p={key:1,class:"row items-start q-col-gutter-sm"},u={class:"col-3"},g={class:"text-h5 no-margin line-normal"},f={class:"col-9"},k={class:"row items-start q-col-gutter-sm"},y={class:"col-12"},v={class:"text-h6 line-normal"},b={class:"font12 text-weight-thin"},S={key:1,class:"bg-myyellow rounded-borders q-pa-sm text-weight-thin font12"},A={class:"row items-center q-col-gutter-sm"},L={class:"col-3"},P={class:"text-h5 no-margin line-normal"},$={class:"col-9"},w={class:"row items-center"},C={class:"col"},F={class:"row items-start q-col-gutter-sm"},q={class:"col-3"},x={class:"text-h5 no-margin line-normal"},D={class:"col-9"},X={class:"row items-center q-col-gutter-sm"},W={class:"col-3"},V={class:"text-h5 no-margin line-normal"},Q={class:"col-9"},M={key:1,class:"row items-center"},T={class:"col"},E={class:"no-margin"},G={key:0,class:"no-margin font11 text-green"},O={class:"col text-right"},B={class:"row items-center"},K={class:"col-md-3 col-xs-3"},U={class:"text-h5 no-margin line-normal"},I={class:"col-9 col-xs-9"},j={class:"row items-start q-col-gutter-sm"},R={class:"col-3"},z={class:"text-h5 no-margin line-normal"},H={class:"col-9"},J={class:"row items-center"},N={class:"col-md-3 col-xs-6"},Y={class:"text-h5 no-margin line-normal"},Z={class:"col-md-9 col-xs-6 text-right"},ee={class:"row"},te={key:0,class:"col-md-3 col-xs-12"},ae={class:"col-md-9 col-xs-12"},oe={class:"col-xs-12 col-sm-12 col-md-3"};function se(e,t,a,se,ne,le){const re=(0,o.g2)("q-btn"),ie=(0,o.g2)("q-toolbar"),de=(0,o.g2)("q-page-sticky"),ce=(0,o.g2)("TransactionInfo"),_e=(0,o.g2)("q-card-section"),me=(0,o.g2)("q-card"),he=(0,o.g2)("q-skeleton"),pe=(0,o.g2)("Maps"),ue=(0,o.g2)("q-inner-loading"),ge=(0,o.g2)("Div"),fe=(0,o.g2)("AddressInline"),ke=(0,o.g2)("BookingCheckout"),ye=(0,o.g2)("q-toggle"),ve=(0,o.g2)("PointsCart"),be=(0,o.g2)("Tips"),Se=(0,o.g2)("WalletComponents"),Ae=(0,o.g2)("SavedPaymentList"),Le=(0,o.g2)("CartDetails"),Pe=(0,o.g2)("DeliverySched"),$e=(0,o.g2)("LocationModal"),we=(0,o.g2)("AddressDetails"),Ce=(0,o.g2)("ChangePhoneModal"),Fe=(0,o.g2)("PromotionsModal"),qe=(0,o.g2)("PaymentListModal"),xe=(0,o.g2)("q-page-scroller"),De=(0,o.g2)("q-page");return(0,o.uX)(),(0,o.Wv)(De,{padding:""},{default:(0,o.k6)((()=>[(0,o.bF)(de,{expand:"",position:"top"},{default:(0,o.k6)((()=>[(0,o.bF)(ie,{class:"bg-white"},{default:(0,o.k6)((()=>[(0,o.bF)(re,{dense:"",flat:"",color:"dark",icon:"arrow_back_ios",to:"/menu","no-caps":"",label:e.$t("Back")},null,8,["label"])])),_:1})])),_:1}),t[7]||(t[7]=(0,o.Lk)("div",{class:"q-pa-lg"},null,-1)),(0,o.Lk)("div",n,[(0,o.Lk)("div",l,[(0,o.bF)(me,{flat:"",class:"q-mb-sm"},{default:(0,o.k6)((()=>[(0,o.bF)(_e,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",r,[(0,o.Lk)("div",i,[(0,o.Lk)("div",d,(0,s.v_)(e.$t("Order & Time")),1)]),(0,o.Lk)("div",c,[(0,o.bF)(ce,{ref:"transaction_info",show_address:!1,onChangeTransaction:le.changeTransaction,onAfterGetinfo:le.afterGetinfo},null,8,["onChangeTransaction","onAfterGetinfo"])])])])),_:1})])),_:1}),"delivery"==se.DataStorePersisted.transaction_type?((0,o.uX)(),(0,o.Wv)(me,{key:0,flat:"",class:"q-mb-sm"},{default:(0,o.k6)((()=>[(0,o.bF)(_e,null,{default:(0,o.k6)((()=>[ne.loading?((0,o.uX)(),(0,o.CE)("div",_,[(0,o.Lk)("div",m,[(0,o.bF)(he,{type:"rect"})]),(0,o.Lk)("div",h,[(0,o.bF)(he,{height:"130px"}),(0,o.bF)(he,{type:"text",class:"w-50"}),(0,o.bF)(he,{type:"text",class:"w-25"})])])):((0,o.uX)(),(0,o.CE)("div",p,[(0,o.Lk)("div",u,[(0,o.Lk)("div",g,(0,s.v_)(e.$t("Address")),1),(0,o.bF)(re,{flat:"",color:"warning","no-caps":"",class:"no-padding q-ma-none",onClick:t[0]||(t[0]=e=>this.$refs.location_modal.show_modal=!0)},{default:(0,o.k6)((()=>[(0,o.eW)((0,s.v_)(e.$t("Change")),1)])),_:1})]),(0,o.Lk)("div",f,[ne.checkout_address.latitude?((0,o.uX)(),(0,o.CE)(o.FK,{key:0},[(0,o.bF)(ge,{class:"bg-grey-1 maps small q-mb-sm relative-position"},{default:(0,o.k6)((()=>[(0,o.bF)(pe,{ref:"maps",lat:ne.maps_config.default_lat,lng:ne.maps_config.default_lng,keys:ne.maps_config.key,zoom:ne.maps_config.zoom,class_map:"maps small",provider:ne.maps_config.provider,detect_location:!1,marker:ne.marker,onAfterSelectmap:e.afterSelectmap,onDragMarker:e.dragMarker,onShowLoader:e.showLoader},null,8,["lat","lng","keys","zoom","provider","marker","onAfterSelectmap","onDragMarker","onShowLoader"]),(0,o.bF)(ue,{showing:e.loading_map,label:e.$t("Please wait..."),"label-class":"text-dark","label-style":"font-size: 11px"},null,8,["showing","label"])])),_:1}),(0,o.Lk)("div",k,[(0,o.Lk)("div",y,[(0,o.Lk)("div",v,(0,s.v_)(ne.checkout_address.address.formatted_address),1),(0,o.Lk)("p",b,(0,s.v_)(e.$t("Delivery options"))+": "+(0,s.v_)(ne.checkout_address.attributes.delivery_options),1),(0,o.bF)(re,{onClick:t[1]||(t[1]=e=>le.editAddress()),flat:"",color:"warning","no-caps":"",icon:"add",label:e.$t("Add delivery instructions")},null,8,["label"])])])],64)):((0,o.uX)(),(0,o.CE)(o.FK,{key:1},[se.DataStorePersisted.getAddress?((0,o.uX)(),(0,o.Wv)(fe,{key:0,ref:"address_inline",locationdata:se.DataStorePersisted.location_data,maps_config:ne.maps_config,onAfterSaveaddress:le.afterSaveaddress},null,8,["locationdata","maps_config","onAfterSaveaddress"])):((0,o.uX)(),(0,o.CE)("div",S,(0,s.v_)(e.$t("Select your address")),1))],64))])]))])),_:1})])),_:1})):(0,o.Q3)("",!0),se.SettingsStore.getBookingFlag&&"dinein"==se.DataStorePersisted.transaction_type?((0,o.uX)(),(0,o.Wv)(ke,{key:1,ref:"booking"},null,512)):(0,o.Q3)("",!0),se.SettingsStore.enabled_include_utensils?((0,o.uX)(),(0,o.Wv)(me,{key:2,flat:"",class:"q-mb-sm"},{default:(0,o.k6)((()=>[(0,o.bF)(_e,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",A,[(0,o.Lk)("div",L,[(0,o.Lk)("div",P,(0,s.v_)(e.$t("Utensils")),1)]),(0,o.Lk)("div",$,[(0,o.Lk)("div",w,[(0,o.Lk)("div",C,(0,s.v_)(e.$t("Include utensils and condoments")),1),(0,o.Lk)("div",null,[(0,o.bF)(ye,{modelValue:ne.include_utensils,"onUpdate:modelValue":[t[2]||(t[2]=e=>ne.include_utensils=e),le.setUtensil],color:"warning"},null,8,["modelValue","onUpdate:modelValue"])])])])])])),_:1})])),_:1})):(0,o.Q3)("",!0),(0,o.bF)(me,{flat:"",class:"q-mb-sm"},{default:(0,o.k6)((()=>[(0,o.bF)(_e,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",F,[(0,o.Lk)("div",q,[(0,o.Lk)("div",x,(0,s.v_)(e.$t("Phone number")),1),(0,o.bF)(re,{onClick:t[3]||(t[3]=e=>this.$refs.change_phone.show_modal=!0),flat:"",color:"warning","no-caps":"",class:"no-padding q-ma-none"},{default:(0,o.k6)((()=>[(0,o.eW)((0,s.v_)(e.$t("Change")),1)])),_:1})]),(0,o.Lk)("div",D,[ne.loading_phone?((0,o.uX)(),(0,o.Wv)(he,{key:0,type:"text",class:"w-50"})):((0,o.uX)(),(0,o.CE)(o.FK,{key:1},[(0,o.eW)((0,s.v_)(ne.phone_number),1)],64))])])])),_:1})])),_:1}),(0,o.bF)(me,{flat:"",class:"q-mb-sm"},{default:(0,o.k6)((()=>[(0,o.bF)(_e,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",X,[(0,o.Lk)("div",W,[(0,o.Lk)("div",V,(0,s.v_)(e.$t("Promo")),1)]),(0,o.Lk)("div",Q,[ne.loading_promo?((0,o.uX)(),(0,o.Wv)(he,{key:0,type:"text",class:"w-50"})):((0,o.uX)(),(0,o.CE)("div",M,[(0,o.Lk)("div",T,[ne.promo_selected.promo_id>0?((0,o.uX)(),(0,o.CE)(o.FK,{key:0},[(0,o.Lk)("p",E,(0,s.v_)(e.$t("Promotion applied")),1),ne.promo_selected.savings?((0,o.uX)(),(0,o.CE)("p",G,(0,s.v_)(ne.promo_selected.savings),1)):(0,o.Q3)("",!0)],64)):((0,o.uX)(),(0,o.CE)(o.FK,{key:1},[ne.total_promo>0?((0,o.uX)(),(0,o.CE)(o.FK,{key:0},[(0,o.eW)((0,s.v_)(ne.total_promo)+" "+(0,s.v_)(e.$t("promotional available")),1)],64)):((0,o.uX)(),(0,o.CE)(o.FK,{key:1},[(0,o.eW)((0,s.v_)(e.$t("no promo available")),1)],64))],64))]),(0,o.Lk)("div",O,[ne.promo_selected.promo_id>0?((0,o.uX)(),(0,o.Wv)(re,{key:0,onClick:t[4]||(t[4]=e=>this.$refs.promotional.removePromo(ne.promo_selected)),flat:"",color:"warning","no-caps":""},{default:(0,o.k6)((()=>[(0,o.eW)((0,s.v_)(e.$t("Remove")),1)])),_:1})):((0,o.uX)(),(0,o.Wv)(re,{key:1,onClick:t[5]||(t[5]=e=>this.$refs.promotional.show_modal=!0),flat:"",color:"warning","no-caps":""},{default:(0,o.k6)((()=>[(0,o.eW)((0,s.v_)(e.$t("Add")),1)])),_:1}))])]))])])])),_:1})])),_:1}),se.SettingsStore.points_enabled&&se.SettingsStore.loyalty_points_activated?((0,o.uX)(),(0,o.Wv)(me,{key:3,flat:"",class:"q-mb-sm"},{default:(0,o.k6)((()=>[(0,o.bF)(_e,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",B,[(0,o.Lk)("div",K,[(0,o.Lk)("div",U,(0,s.v_)(e.$t("Points discount")),1)]),(0,o.Lk)("div",I,[(0,o.bF)(ve,{ref:"cart_points",currency_code:se.DataStorePersisted.getUseCurrency(),onAfterApplypoints:le.afterApplypoints,use_thresholds:se.SettingsStore.points_use_thresholds,cart_loaded:se.cartStore.cart_loading,cart_updated:se.cartStore.cart_reloading},null,8,["currency_code","onAfterApplypoints","use_thresholds","cart_loaded","cart_updated"])])])])),_:1})])),_:1})):(0,o.Q3)("",!0),le.isTipenabled?((0,o.uX)(),(0,o.Wv)(me,{key:4,flat:"",class:"q-mb-sm"},{default:(0,o.k6)((()=>[(0,o.bF)(_e,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",j,[(0,o.Lk)("div",R,[(0,o.Lk)("div",z,(0,s.v_)(e.$t("Tips")),1)]),(0,o.Lk)("div",H,[(0,o.bF)(be,{ref:"tips",onAfterApplytips:le.afterApplytips,cart_loaded:se.cartStore.cart_loading,cart_updated:se.cartStore.cart_reloading},null,8,["onAfterApplytips","cart_loaded","cart_updated"])])])])),_:1})])),_:1})):(0,o.Q3)("",!0),(0,o.bF)(me,{flat:"",class:"q-mb-sm"},{default:(0,o.k6)((()=>[(0,o.bF)(_e,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",J,[(0,o.Lk)("div",N,[(0,o.Lk)("div",Y,(0,s.v_)(e.$t("Payment")),1)]),(0,o.Lk)("div",Z,[(0,o.bF)(re,{label:e.$t("Add"),"no-caps":"",color:"warning",flat:"",onClick:t[6]||(t[6]=e=>this.$refs.payment_list.dialog=!0)},null,8,["label"])])]),(0,o.Lk)("div",ee,[this.$q.screen.gt.sm?((0,o.uX)(),(0,o.CE)("div",te)):(0,o.Q3)("",!0),(0,o.Lk)("div",ae,[(0,o.bF)(Se,{ref:"digital_wallet",onAfterApplywallet:le.afterApplywallet,cart_loaded:se.cartStore.cart_loading,cart_updated:se.cartStore.cart_reloading},null,8,["onAfterApplywallet","cart_loaded","cart_updated"]),(0,o.bF)(Ae,{ref:"saved_payment",onOnselectPayment:le.onselectPayment,onAfterLoadpaymentlist:le.afterLoadpaymentlist,onSetPaymentuuid:le.setPaymentuuid,onAfterGetpaymentcredentials:le.setPaymentcredentials,wallet_data:ne.wallet_data},null,8,["onOnselectPayment","onAfterLoadpaymentlist","onSetPaymentuuid","onAfterGetpaymentcredentials","wallet_data"])])])])),_:1})])),_:1})]),(0,o.Lk)("div",oe,[(0,o.bF)(me,{flat:""},{default:(0,o.k6)((()=>[(0,o.bF)(_e,{class:"cart"},{default:(0,o.k6)((()=>[(0,o.bF)(Le,{ref:"cart_details",sticky_checkout:!1,payload:["items","merchant_info","service_fee","delivery_fee","packaging","tax","tips","checkout","discount","distance_local","summary","total","items_count","points","points_discount"],onSetCartcount:e.setCartcount,onOnPlaceorder:le.onPlaceorder,onSetMerchantinfo:le.setMerchantinfo},null,8,["onSetCartcount","onOnPlaceorder","onSetMerchantinfo"])])),_:1})])),_:1})])]),(0,o.bF)(Pe,{ref:"delivery_sched",onAfterSavetrans:le.afterSavetrans},null,8,["onAfterSavetrans"]),(0,o.bF)($e,{ref:"location_modal",title:e.$t("Change address"),enabled_search:!0,onAfterSelectaddress:le.afterSelectaddress,onAfterSetplaceid:le.afterSetplaceid},null,8,["title","onAfterSelectaddress","onAfterSetplaceid"]),(0,o.bF)(we,{ref:"address_details",locationdata:ne.location_data,maps_config:ne.maps_config,onAfterSaveaddress:le.afterSaveaddress},null,8,["locationdata","maps_config","onAfterSaveaddress"]),(0,o.bF)(Ce,{ref:"change_phone",onAfterGetphone:le.afterGetphone,onAfterChangephone:le.afterChangephone,onBeforeLoadphone:le.beforeLoadphone,onAfterLoadphone:le.afterLoadphone},null,8,["onAfterGetphone","onAfterChangephone","onBeforeLoadphone","onAfterLoadphone"]),(0,o.bF)(Fe,{ref:"promotional",onAftergetPromo:le.aftergetPromo,onBeforeLoadpromo:le.beforeLoadpromo,onAfterLoadpromo:le.afterLoadpromo,onAfterApplypromo:le.afterApplypromo,onAfterRemovepromo:le.afterRemovepromo,onClearPromo:le.clearPromo,cart_loaded:se.cartStore.cart_loading,cart_updated:se.cartStore.cart_reloading},null,8,["onAftergetPromo","onBeforeLoadpromo","onAfterLoadpromo","onAfterApplypromo","onAfterRemovepromo","onClearPromo","cart_loaded","cart_updated"]),(0,o.bF)(qe,{ref:"payment_list",payment_credentials:ne.payment_credentials,onAfterAddpayment:le.afterAddpayment},null,8,["payment_credentials","onAfterAddpayment"]),(0,o.bF)(xe,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:(0,o.k6)((()=>[(0,o.bF)(re,{fab:"",icon:"keyboard_arrow_up",color:"yellow-9",padding:"10px"})])),_:1})])),_:1})}var ne=a(2911),le=a(9818),re=a(2532),ie=a(3634),de=a(4675),ce=a(8904),_e=a(2302),me=a(1464),he=a(354);const pe={name:"Checkout",data(){return{data:[],include_utensils:!1,modal_phone:!1,modal_promo:!1,edit_address:!1,location_data:[],checkout_address:[],phone_number:"",total_promo:0,promo_selected:[],payment_credentials:[],has_payment_saved:!1,payment_uuid:"",loading:!0,marker:[],maps_config:[],merchant_info:[],loading_phone:!1,loading_promo:!0,enabled_tip:!1,wallet_data:[]}},setup(){const e=(0,re.t)(),t=(0,ie.c)(),a=(0,de.g)(),o=(0,ce.x)(),s=(0,_e.C)(),n=(0,me.Q)();return{transactionStore:e,ifstoreAvailable:t,deliveryschedStore:a,cartStore:o,SettingsStore:s,DataStorePersisted:n}},components:{TransactionInfo:(0,o.$V)((()=>Promise.all([a.e(4121),a.e(996)]).then(a.bind(a,8876)))),DeliverySched:(0,o.$V)((()=>Promise.all([a.e(4121),a.e(996)]).then(a.bind(a,6452)))),LocationModal:(0,o.$V)((()=>Promise.all([a.e(4121),a.e(996)]).then(a.bind(a,5985)))),AddressDetails:(0,o.$V)((()=>Promise.all([a.e(4121),a.e(996)]).then(a.bind(a,6936)))),Maps:(0,o.$V)((()=>Promise.all([a.e(4121),a.e(459)]).then(a.bind(a,459)))),ChangePhoneModal:(0,o.$V)((()=>Promise.all([a.e(4121),a.e(9206)]).then(a.bind(a,9206)))),PromotionsModal:(0,o.$V)((()=>Promise.all([a.e(4121),a.e(7111)]).then(a.bind(a,7111)))),Tips:(0,o.$V)((()=>Promise.all([a.e(4121),a.e(204)]).then(a.bind(a,204)))),SavedPaymentList:(0,o.$V)((()=>Promise.all([a.e(4121),a.e(3007)]).then(a.bind(a,3007)))),CartDetails:(0,o.$V)((()=>Promise.all([a.e(4121),a.e(996),a.e(9635)]).then(a.bind(a,5051)))),PaymentListModal:(0,o.$V)((()=>Promise.all([a.e(4121),a.e(5429)]).then(a.bind(a,5429)))),WalletComponents:(0,o.$V)((()=>Promise.all([a.e(4121),a.e(4386)]).then(a.bind(a,4386)))),BookingCheckout:(0,o.$V)((()=>Promise.all([a.e(4121),a.e(521)]).then(a.bind(a,521)))),PointsCart:(0,o.$V)((()=>Promise.all([a.e(4121),a.e(712)]).then(a.bind(a,712)))),AddressInline:(0,o.$V)((()=>Promise.all([a.e(4121),a.e(540)]).then(a.bind(a,540))))},created(){Object.keys(this.SettingsStore.settings_data).length>0?this.getSettings():this.$watch((()=>this.SettingsStore.$state.settings_data),((e,t)=>{this.getSettings()}))},async mounted(){const e=ne.A.getStorage("include_utensils");ne.A.empty(e)||(this.include_utensils=e),this.checkoutAddress(),setTimeout((()=>{}),1e3)},watch:{merchant_info(e,t){}},computed:{isTipenabled(){return!!(Object.keys(this.SettingsStore.settings_data).length>0&&this.SettingsStore.settings_data.enabled_tip)&&!(Object.keys(this.SettingsStore.settings_data.tips_in_transactions).length>0&&!1===this.SettingsStore.settings_data.tips_in_transactions.includes(this.DataStorePersisted.transaction_type))}},methods:{async getSettings(){const e=await this.SettingsStore.getAsyncSettings();if(Object.keys(e).length>0)try{this.maps_config=(0,he.A)(e.maps_config),this.marker=[{id:0,draggable:!1,icon:this.maps_config.icon,lat:this.maps_config.default_lat,lng:this.maps_config.default_lng}]}catch(e){console.log(e)}},authenticate(){le.A.authenticate().then((e=>{})).catch((e=>{ne.A.notify("negative",e,"error_outline",this.$q),this.$router.push("/login")})).then((e=>{}))},changeTransaction(){this.$refs.delivery_sched.show_modal=!0},afterGetinfo(e){console.log(e)},afterSavetrans(e){this.$refs.cart_details.getCart(!1)},afterSelectaddress(e){console.log("checkoutvue afterSelectaddress",e),this.location_data=e,this.$refs.location_modal.show_modal=!1,this.$refs.address_details.clearData(),this.$refs.address_details.show_modal=!0},checkoutAddress(){this.loading=!0,ne.A.checkoutAddress(this.DataStorePersisted.local_id).then((e=>{this.checkout_address=e.details.data,this.marker=[{id:0,draggable:!1,icon:this.maps_config.icon,lat:this.checkout_address.latitude,lng:this.checkout_address.longitude}]})).catch((e=>{})).then((e=>{this.loading=!1}))},editAddress(){this.location_data=this.checkout_address,this.$refs.address_details.show_modal=!0},afterSaveaddress(){console.log("checkoutvue afterSaveaddress"),this.checkoutAddress(),this.$refs.cart_details.getCart()},afterSetplaceid(){console.log("checkoutvue afterSetplaceid"),this.checkoutAddress(),this.$refs.cart_details.getCart()},setUtensil(e){ne.A.setStorage("include_utensils",e)},beforeLoadphone(){this.loading_phone=!0},afterLoadphone(){this.loading_phone=!1},afterGetphone(e){this.phone_number=e},afterChangephone(e){this.phone_number=e},beforeLoadpromo(){this.loading_promo=!0},afterLoadpromo(){this.loading_promo=!1},aftergetPromo(e){this.total_promo=e.count,this.promo_selected=e.promo_selected},clearPromo(){this.total_promo=0,this.promo_selected=[]},afterApplypromo(){this.$refs.cart_details.getCart(!1)},afterRemovepromo(){this.$refs.cart_details.getCart(!1)},setPaymentcredentials(e){this.payment_credentials=e},onchoosePayment(e){try{console.debug(e),this.$refs[e.payment_code].showPaymentForm()}catch(e){ne.A.notify("negative",e,"error_outline",this.$q)}},afterAddpayment(){this.$refs.saved_payment.SavedPaymentList()},afterLoadpaymentlist(e){this.has_payment_saved=e,e?this.$refs.cart_details.errors=[]:this.$refs.cart_details.errors.push("Please select valid payment method")},onselectPayment(e,t){},setPaymentuuid(e){this.payment_uuid=e},afterApplytips(){this.$refs.cart_details.getCart(!1)},afterApplypoints(){this.$refs.cart_details.getCart(!1)},onPlaceorder(){const e={whento_deliver:this.DataStorePersisted.whento_deliver,delivery_date:this.DataStorePersisted.delivery_date,delivery_time:this.DataStorePersisted.delivery_time_data},t={cart_uuid:ne.A.getStorage("cart_uuid"),local_id:this.DataStorePersisted.local_id,include_utensils:this.include_utensils,payment_uuid:this.payment_uuid,payment_change:this.$refs.saved_payment.payment_change,use_digital_wallet:this.$refs.digital_wallet?this.$refs.digital_wallet.use_wallet:"",guest_number:this.$refs.booking?this.$refs.booking.guest_number:0,room_uuid:this.$refs.booking?this.$refs.booking.room_uuid:"",table_uuid:this.$refs.booking?this.$refs.booking.table_uuid:"",currency_code:this.DataStorePersisted.getUseCurrency(),attributes_data:e,transaction_type:this.DataStorePersisted.transaction_type};this.$refs.cart_details.cart_reloading=!0,ne.A.PlaceOrder(t).then((e=>{"offline"===e.details.payment_instructions.method?this.$router.push({path:"/account/trackorder",query:{order_uuid:e.details.order_uuid}}):this.doPayment(e.details)})).catch((e=>{ne.A.notify("negative",e,"error_outline",this.$q)})).then((e=>{this.$refs.cart_details.cart_reloading=!1}))},doPayment(e){this.$refs.payment_list.doPayment(e)},setMerchantinfo(e){this.merchant_info=e},afterApplywallet(e){this.wallet_data=e}}};var ue=a(2807),ge=a(7716),fe=a(8783),ke=a(6914),ye=a(6384),ve=a(3316),be=a(4189),Se=a(3820),Ae=a(9035),Le=a(6908),Pe=a(4703),$e=a(8582),we=a.n($e);const Ce=(0,ue.A)(pe,[["render",se]]),Fe=Ce;we()(pe,"components",{QPage:ge.A,QPageSticky:fe.A,QToolbar:ke.A,QBtn:ye.A,QCard:ve.A,QCardSection:be.A,QSkeleton:Se.Ay,QInnerLoading:Ae.A,QToggle:Le.A,QPageScroller:Pe.A})}}]);