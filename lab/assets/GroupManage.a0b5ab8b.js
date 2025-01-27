import{_ as y,u as v,A as r,p as d,a2 as u,f as o,t as i,a1 as p,F as m,a4 as f,Z as g,$ as c,a0 as $,q as k,av as Q}from"./index.c29f7992.js";import{Q as q}from"./QToolbarTitle.38b5862b.js";import{Q as D}from"./QToolbar.19752286.js";import{Q as _}from"./QHeader.8a0fa205.js";import{Q as S}from"./QInnerLoading.d034c390.js";import{Q as w}from"./QSelect.ae814dfc.js";import{Q as C}from"./QFooter.478b051a.js";import{Q as B}from"./QForm.32515fc9.js";import{Q as T}from"./QPage.1b02519d.js";import{A as h}from"./AppCamera.b25b6351.js";import{u as V}from"./DriverStore.03d03fce.js";import"./QResizeObserver.0e413222.js";import"./QChip.5de2d333.js";import"./QItemLabel.1db45aa2.js";import"./QMenu.074d3579.js";import"./selection.53b1fe34.js";import"./rtl.276c3f1b.js";import"./format.de7e9769.js";const G={name:"GroupManage",components:{},data(){return{id:"",data:[],loading:!1,group_name:"",drivers:[]}},setup(e){const t=v(),s=V();return{DataStore:t,DriverStore:s}},created(){this.DriverStore.DriverList()},mounted(){this.id=this.$route.query.id,r.empty(this.id)||this.getData()},computed:{isEdit(){return!r.empty(this.id)},hasData(){return Object.keys(this.data).length>0},CheckData(){return!r.empty(this.id)&&Object.keys(this.data).length<=0}},methods:{getData(){this.loading=!0,r.fetchDataByTokenPost("getGroup","id="+this.id).then(e=>{this.data=e.details,this.group_name=e.details.group_name,this.drivers=e.details.drivers}).catch(e=>{r.notify("red-5",e,"error_outline",this.$q)}).then(e=>{this.loading=!1})},afterInput(e){this.phone=e},formSubmit(){let e={id:this.id,group_name:this.group_name,drivers:this.drivers};r.showLoadingBox("",this.$q),r.fetchDataByTokenPost(r.empty(this.id)?"AddGroup":"UpdateGroup",e).then(t=>{r.notify("light-green",t.msg,"check_circle",this.$q),this.$router.replace({path:"/delivery-management/groups"})}).catch(t=>{r.notify("red-5",t,"error_outline",this.$q)}).then(t=>{r.hideLoadingBox(this.$q)})},afterUploadfile(e){this.photo=e.filename,this.avatar=e.url_image,this.upload_path=e.upload_path},takePhoto(){this.$q.capacitor?h.isCameraEnabled().then(e=>{h.isFileAccessEnabled().then(t=>{h.getPhoto(1).then(s=>{this.photo_data=s}).catch(s=>{this.photo_data=[]})}).catch(t=>{r.notify("dark",t,"error",this.$q)})}).catch(e=>{r.notify("dark",e,"error",this.$q)}):this.upload_enabled=!this.upload_enabled},hadData(){return Object.keys(this.photo_data).length>0}}};function A(e,t,s,b,l,n){return d(),u(m,null,[o(_,{class:p({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:i(()=>[o(D,null,{default:i(()=>[o(f,{onClick:t[0]||(t[0]=a=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),o(q,{class:"text-weight-bold"},{default:i(()=>[n.isEdit?(d(),u(m,{key:0},[g(c(e.$t("Group Car")),1)],64)):(d(),u(m,{key:1},[g(c(e.$t("Group Car")),1)],64))]),_:1})]),_:1}),o($)]),_:1},8,["class"]),o(T,{class:p([{"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode},"q-pa-md"])},{default:i(()=>[l.loading?(d(),k(S,{key:0,showing:!0,color:"primary",size:"md"})):(d(),k(B,{key:1,onSubmit:n.formSubmit},{default:i(()=>[o(Q,{modelValue:l.group_name,"onUpdate:modelValue":t[1]||(t[1]=a=>l.group_name=a),label:e.$t("Name"),"stack-label":"",outlined:"",color:"grey-5",rules:[a=>a&&a.length>0||this.$t("This field is required")]},null,8,["modelValue","label","rules"]),o(w,{modelValue:l.drivers,"onUpdate:modelValue":t[2]||(t[2]=a=>l.drivers=a),label:e.$t("Select Drivers"),options:b.DriverStore.getDriverList,"stack-label":"",behavior:"dialog",outlined:"",color:"grey-5","emit-value":"","map-options":"",multiple:"",rules:[a=>a&&a.length>0||this.$t("This field is required")]},null,8,["modelValue","label","options","rules"]),o(C,null,{default:i(()=>[o(f,{type:"submit",color:"primary","text-color":"white",label:e.$t("Save"),unelevated:"",class:"full-width radius8",size:"lg","no-caps":"",disable:n.CheckData},null,8,["label","disable"])]),_:1})]),_:1},8,["onSubmit"]))]),_:1},8,["class"])],64)}var X=y(G,[["render",A]]);export{X as default};
