"use strict";(globalThis["webpackChunkcom_kinago_single"]=globalThis["webpackChunkcom_kinago_single"]||[]).push([[9206],{9206:(e,t,o)=>{o.r(t),o.d(t,{default:()=>P});var n=o(1758),i=o(8790);const s={class:"text-h5 text-weight-bold"},a={class:"row q-mt-md q-col-gutter-xs"},l={class:"col-4"},r={class:"col-8"},h={class:"row q-mt-sm q-col-gutter-xs"},d={class:"col-4"},c={class:"col-8"},u={class:"row q-col-gutter-md"},p={class:"col"},m={class:"col"};function _(e,t,o,_,g,f){const b=(0,n.g2)("q-space"),v=(0,n.g2)("q-btn"),x=(0,n.g2)("q-card-section"),q=(0,n.g2)("q-select"),k=(0,n.g2)("q-input"),w=(0,n.g2)("q-card-actions"),A=(0,n.g2)("q-form"),$=(0,n.g2)("q-card"),y=(0,n.g2)("q-dialog"),V=(0,n.g2)("StepsVerification"),C=(0,n.gN)("close-popup");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(y,{modelValue:g.show_modal,"onUpdate:modelValue":t[2]||(t[2]=e=>g.show_modal=e),persistent:"",position:this.$q.screen.gt.sm?"standard":"bottom","full-width":!this.$q.screen.gt.sm},{default:(0,n.k6)((()=>[(0,n.bF)($,{class:"q-pa-md",style:{width:"450px","max-width":"80vw"}},{default:(0,n.k6)((()=>[(0,n.bF)(x,{class:"row items-center q-pb-none no-margin no-padding"},{default:(0,n.k6)((()=>[(0,n.Lk)("div",s,(0,i.v_)(e.$t("Edit phone number")),1),(0,n.bF)(b),(0,n.bo)((0,n.bF)(v,{icon:"ion-close",flat:"",round:"",dense:""},null,512),[[C]])])),_:1}),(0,n.bF)(A,{onSubmit:f.beforeSubmit},{default:(0,n.k6)((()=>[(0,n.bF)(x,null,{default:(0,n.k6)((()=>[(0,n.Lk)("div",a,[(0,n.Lk)("div",l,(0,i.v_)(e.$t("Country")),1),(0,n.Lk)("div",r,(0,i.v_)(e.$t("Phone number")),1)]),(0,n.Lk)("div",h,[(0,n.Lk)("div",d,[(0,n.bF)(q,{outlined:"",dense:"",modelValue:g.phone_prefix,"onUpdate:modelValue":t[0]||(t[0]=e=>g.phone_prefix=e),color:"warning",class:"q-mb-md","transition-show":"scale","transition-hide":"scale",options:g.prefixes},null,8,["modelValue","options"])]),(0,n.Lk)("div",c,[(0,n.bF)(k,{modelValue:g.phone_number,"onUpdate:modelValue":t[1]||(t[1]=e=>g.phone_number=e),maxlength:"20",dense:"","bg-color":"white",color:"warning",outlined:""},null,8,["modelValue"])])])])),_:1}),(0,n.bF)(w,{class:"float-right q-mb-md"},{default:(0,n.k6)((()=>[(0,n.Lk)("div",u,[(0,n.Lk)("div",p,[(0,n.bo)((0,n.bF)(v,{unelevated:"",dense:"",rounded:"",color:"grey-2","text-color":"black","no-caps":"",class:"q-pa-lg",label:e.$t("Cancel"),size:"17px","lazy-rules":"",rules:[t=>t&&t.length>0||e.$t("Please type something")]},null,8,["label","rules"]),[[C]])]),(0,n.Lk)("div",m,[(0,n.bF)(v,{unelevated:"",dense:"",rounded:"",color:"warning","text-color":"black","no-caps":"",class:"full-width q-pa-lg",label:e.$t("Save"),size:"17px",type:"submit",loading:g.loading,disabled:f.hasChangePhone},null,8,["label","loading","disabled"])])])])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1},8,["modelValue","position","full-width"]),(0,n.bF)(V,{ref:"steps_verification",sent_message:g.sent_message,phone_prefix:g.phone_prefix,phone_number:g.phone_number,onAfterVerifycode:f.afterVerifycode},null,8,["sent_message","phone_prefix","phone_number","onAfterVerifycode"])],64)}var g=o(2911);const f={name:"ChangePhoneModal",components:{StepsVerification:(0,n.$V)((()=>o.e(996).then(o.bind(o,7180))))},data(){return{show_modal:!1,loading:!1,phone_prefix:"",phone_number:"",orig_phone_prefix:"",orig_phone_number:"",prefixes:[],sent_message:""}},mounted(){this.getPhone()},computed:{hasChangePhone(){return this.orig_phone_prefix===this.phone_prefix.value&&this.orig_phone_number===this.phone_number}},methods:{getPhone(){this.$emit("beforeLoadphone"),g.A.getPhone(g.A.getStorage("cart_uuid")).then((e=>{this.prefixes=e.details.prefixes,this.phone_prefix=e.details.default_prefix_array,this.phone_number=e.details.contact_number,this.orig_phone_prefix=e.details.default_prefix_array.value,this.orig_phone_number=e.details.contact_number,this.$emit("afterGetphone",e.details.contact_number_w_prefix)})).catch((e=>{g.A.notify("negative",e,"error_outline",this.$q)})).then((e=>{this.$emit("afterLoadphone")}))},beforeSubmit(){this.loading=!0,g.A.RequestEmailCode().then((e=>{this.sent_message=e.msg,this.show_modal=!1,this.$refs.steps_verification.show_modal=!0})).catch((e=>{g.A.notify("negative",e,"error_outline",this.$q)})).then((e=>{this.loading=!1}))},afterVerifycode(e){this.$refs.steps_verification.visible=!0;const t={code:e,phone_prefix:this.phone_prefix.value,phone_number:this.phone_number,cart_uuid:g.A.getStorage("cart_uuid")};g.A.ChangePhone(t).then((e=>{this.$refs.steps_verification.show_modal=!1,g.A.notify("green-5",e.msg,"check_circle",this.$q),this.$emit("afterChangephone",e.details.contact_number)})).catch((e=>{g.A.notify("negative",e,"error_outline",this.$q)})).then((e=>{this.$refs.steps_verification.visible=!1}))}}};var b=o(2807),v=o(2156),x=o(3316),q=o(4189),k=o(3676),w=o(6384),A=o(9200),$=o(2606),y=o(9270),V=o(2669),C=o(8672),F=o(8582),L=o.n(F);const S=(0,b.A)(f,[["render",_]]),P=S;L()(f,"components",{QDialog:v.A,QCard:x.A,QCardSection:q.A,QSpace:k.A,QBtn:w.A,QForm:A.A,QSelect:$.A,QInput:y.A,QCardActions:V.A}),L()(f,"directives",{ClosePopup:C.A})}}]);