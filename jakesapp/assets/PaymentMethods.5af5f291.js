import{_ as $,ad as P,O as A,U as T,bp as V,X as _,l as x,m as o,n as d,p as a,f as e,Q as B,S as i,R as m,af as h,Y as c,F as f,Z as g,$ as k,a0 as l,bd as I,ai as v,ah as S,ac as R,a2 as U}from"./index.c5b868f5.js";import{Q as z}from"./QToolbarTitle.4da9f270.js";import{Q as E}from"./QToolbar.9b15bf0e.js";import{Q as M}from"./QHeader.b374650f.js";import{Q as D}from"./QSkeleton.11b8074a.js";import{Q as O}from"./QSpace.24950ca6.js";import{Q as u}from"./QItemLabel.4665782c.js";import{Q as w}from"./QImg.79fcc1c6.js";import{Q as N}from"./QBadge.f1da1480.js";import{Q as q}from"./QList.9b7158f1.js";import{Q as j}from"./QPage.528ab8a8.js";import{Q as F}from"./QPullToRefresh.85618661.js";import"./QResizeObserver.3ed5059f.js";import"./TouchPan.5486290b.js";import"./touch.9135741d.js";import"./selection.65959ca5.js";import"./format.8ac60962.js";const Y={name:"PaymentMethods",components:{LoaderDialog:P(()=>v(()=>import("./LoaderDialog.6a26f95e.js"),["assets/LoaderDialog.6a26f95e.js","assets/QInnerLoading.ff23f6a9.js","assets/index.c5b868f5.js","assets/index.7897e990.css"])),PaymentComponents:P(()=>v(()=>import("./PaymentComponents.fed87934.js"),["assets/PaymentComponents.fed87934.js","assets/index.c5b868f5.js","assets/index.7897e990.css"]))},data(){return{modal:!1,loading:!1,data:[],payment_list:[],payment_credentials:[],default_payment_uuid:"",redirect:""}},setup(){const t=A(),n=T(),Q=V();return{DataStorePersisted:t,SettingStore:n,UserStore:Q}},mounted(){this.redirect=this.$route.query.redirect,this.paymentListnew()},computed:{hasData(){return Object.keys(this.data).length>0},hasPaymentList(){return Object.keys(this.payment_list).length>0}},methods:{async paymentListnew(){this.loading=!0,_.fetchDataByTokenPost("paymentListnew","currency_code="+this.DataStorePersisted.getUseCurrency()).then(t=>{this.data=t.details.data,this.default_payment_uuid=t.details.default_payment_uuid,this.payment_list=t.details.payment_list,this.payment_credentials=t.details.credentials}).catch(t=>{this.data=[]}).then(t=>{this.loading=!1})},async refresh(t){this.$refs.loader_dialog.modal=!0,_.fetchDataByTokenPost("paymentListnew","currency_code="+this.DataStorePersisted.getUseCurrency()).then(n=>{this.data=n.details.data,this.default_payment_uuid=n.details.default_payment_uuid,this.payment_list=n.details.payment_list,this.payment_credentials=n.details.credentials}).catch(n=>{this.data=[]}).then(n=>{this.$refs.loader_dialog.modal=!1,_.empty(t)||t()})},setDefaultPayment(t){this.$refs.loader_dialog.modal=!0,_.fetchDataByTokenPost("setDefaultPayment","payment_uuid="+t.payment_uuid).then(n=>{this.$router.replace(this.redirect)}).catch(n=>{_.notify("dark",n,"error_outline",this.$q)}).then(n=>{this.$refs.loader_dialog.modal=!1})},onSelectPayment(t){console.log(this.$refs.payment_components),this.$refs.payment_components.onSelectPayment(t.payment_code)},afterAddpayment(){_.empty(this.redirect)?this.refresh(null):this.$router.replace(this.redirect)}}};function H(t,n,Q,s,p,y){const L=x("LoaderDialog"),C=x("PaymentComponents");return o(),d(F,{onRefresh:y.refresh},{default:a(()=>[e(M,{class:h(["bg-whitex",{"bg-mydark text-white":t.$q.dark.mode,"bg-white text-dark":!t.$q.dark.mode}]),reveal:""},{default:a(()=>[e(E,null,{default:a(()=>[e(B,{onClick:n[0]||(n[0]=r=>t.$router.back()),round:"",dense:"",icon:"arrow_back",unelevated:"",color:t.$q.dark.mode?"grey":"mygrey","text-color":t.$q.dark.mode?"grey-9":"dark"},null,8,["color","text-color"]),e(z,{class:"text-weight-bold text-darkx"},{default:a(()=>[i(m(t.$t("Pament Methods")),1)]),_:1})]),_:1})]),_:1},8,["class"]),e(j,{class:"q-pa-md"},{default:a(()=>[p.loading?(o(),c(f,{key:0},[(o(),c(f,null,g(5,r=>e(D,{key:r,height:"40px",class:h(["q-mb-sm",{"bg-grey600":t.$q.dark.mode,"bg-mygrey":!t.$q.dark.mode}])},null,8,["class"])),64)),e(O,{class:"q-pa-md"}),(o(),c(f,null,g(5,r=>e(D,{key:r,height:"40px",class:h(["q-mb-sm",{"bg-grey600":t.$q.dark.mode,"bg-mygrey":!t.$q.dark.mode}])},null,8,["class"])),64))],64)):(o(),c(f,{key:1},[e(q,{separator:""},{default:a(()=>[e(u,{header:"",class:"text-weight-bold text-caption item-normal-height",style:{padding:"5px 16px"}},{default:a(()=>[i(m(t.$t("Linked Methods")),1)]),_:1}),y.hasData?(o(!0),c(f,{key:1},g(p.data,r=>(o(),d(k,{key:r,clickable:"",tag:"label"},{default:a(()=>[e(l,{avatar:""},{default:a(()=>[r.logo_type=="icon"?(o(),c("div",{key:0,class:h(["rounded-borders",s.SettingStore.payment_icons[r.payment_code]?s.SettingStore.payment_icons[r.payment_code].bg:"bg-blue"]),style:{padding:"1px 2px"}},[e(S,{name:s.SettingStore.payment_icons[r.payment_code]?s.SettingStore.payment_icons[r.payment_code].icon:"credit_card",size:"sm",color:"white"},null,8,["name"])],2)):(o(),d(w,{key:1,src:r.logo_image,fit:"contain",style:{"max-height":"40px","max-width":"40px"},"spinner-size":"sm","spinner-color":"primary"},null,8,["src"]))]),_:2},1024),e(l,null,{default:a(()=>[e(u,null,{default:a(()=>[i(m(r.attr1),1)]),_:2},1024),e(u,{caption:""},{default:a(()=>[i(m(r.attr2),1)]),_:2},1024)]),_:2},1024),p.default_payment_uuid==r.payment_uuid?(o(),d(l,{key:0},{default:a(()=>[e(u,null,{default:a(()=>[e(N,{color:"grey-2","text-color":"dark",label:t.$t("Default")},null,8,["label"])]),_:1})]),_:1})):R("",!0),e(l,{side:"",class:"relative-position"},{default:a(()=>[e(U,{modelValue:p.default_payment_uuid,"onUpdate:modelValue":[n[1]||(n[1]=b=>p.default_payment_uuid=b),b=>y.setDefaultPayment(r)],val:r.payment_uuid,color:"yellow-9","checked-icon":"check_circle","unchecked-icon":"panorama_fish_eye",style:{position:"absolute",right:"-13px"},size:"lg"},null,8,["modelValue","val","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024))),128)):(o(),d(k,{key:0},{default:a(()=>[e(l,null,{default:a(()=>[e(u,{caption:""},{default:a(()=>[i(m(t.$t("You don't have link payment")),1)]),_:1})]),_:1})]),_:1}))]),_:1}),e(I,{class:"q-mt-md q-mb-md"}),e(q,{separator:""},{default:a(()=>[e(u,{header:"",class:"text-weight-bold text-caption item-normal-height",style:{padding:"5px 16px"}},{default:a(()=>[i(m(t.$t("Add Methods")),1)]),_:1}),y.hasPaymentList?(o(!0),c(f,{key:1},g(p.payment_list,r=>(o(),d(k,{key:r,clickable:"",onClick:b=>y.onSelectPayment(r)},{default:a(()=>[e(l,{avatar:""},{default:a(()=>[r.logo_type=="icon"?(o(),c("div",{key:0,class:h(["rounded-borders",s.SettingStore.payment_icons[r.payment_code]?s.SettingStore.payment_icons[r.payment_code].bg:"bg-blue"]),style:{padding:"1px 2px"}},[e(S,{name:s.SettingStore.payment_icons[r.payment_code]?s.SettingStore.payment_icons[r.payment_code].icon:"credit_card",size:"sm",color:"white"},null,8,["name"])],2)):(o(),d(w,{key:1,src:r.logo_image,fit:"contain",style:{"max-height":"40px","max-width":"40px"},"spinner-size":"sm","spinner-color":"primary"},null,8,["src"]))]),_:2},1024),e(l,null,{default:a(()=>[e(u,null,{default:a(()=>[i(m(r.payment_name),1)]),_:2},1024)]),_:2},1024),e(l,{side:""},{default:a(()=>[e(S,{name:"chevron_right",color:"grey"})]),_:1})]),_:2},1032,["onClick"]))),128)):(o(),d(k,{key:0},{default:a(()=>[e(l,null,{default:a(()=>[e(u,{caption:""},{default:a(()=>[i(m(t.$t("No payment available")),1)]),_:1})]),_:1})]),_:1}))]),_:1})],64)),e(L,{ref:"loader_dialog"},null,512),e(C,{ref:"payment_components",payment_credentials:p.payment_credentials,onAfterAddpayment:y.afterAddpayment},null,8,["payment_credentials","onAfterAddpayment"])]),_:1})]),_:1},8,["onRefresh"])}var ce=$(Y,[["render",H]]);export{ce as default};
