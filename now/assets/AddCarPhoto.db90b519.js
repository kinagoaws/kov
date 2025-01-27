import{_ as k,ar as y,au as C,X as r,p as v,q as s,t as d,v as l,j as t,ak as P,ae as e,a1 as n,a5 as q,a4 as p,a0 as x,bq as A,aj as f,Z as D,F as w,bv as Q,aP as B}from"./index.5da0f878.js";import{Q as U,a as V}from"./QBar.7b44c673.js";import{Q as _}from"./QSpace.334d24e5.js";import{Q as m}from"./QImg.bfa83115.js";import{C as F}from"./ClosePopup.1829ecf0.js";import{A as u}from"./AppCamera.af5c46dd.js";import"./position-engine.78f240dd.js";import"./selection.a405500a.js";const $={name:"AddCarPhoto",props:["schedule_uuid"],components:{UploaderFile:y(()=>C(()=>import("./UploaderFile.e4c96ce9.js"),["assets/UploaderFile.e4c96ce9.js","assets/index.5da0f878.js","assets/index.96a3fb36.css","assets/QCircularProgress.c739f372.js","assets/format.de7e9769.js"]))},data(){return{loading:!1,dialog:!1,data:[],photo_data:[],upload_enabled:!1,has_photo:!1,upload_path:"",featured_filename:"",featured_url:""}},mounted(){this.data=[],this.$q.platform.is.desktop&&(this.data={data:"dev"})},computed:{hasData(){return!!(Object.keys(this.data).length>0||this.$q.platform.is.desktop)},hasPhotoData(){return Object.keys(this.photo_data).length>0}},methods:{hideDialog(){this.dialog=!1},takePhoto(){this.$q.capacitor?u.isCameraEnabled().then(a=>{u.isFileAccessEnabled().then(h=>{u.getPhoto(1).then(c=>{this.photo_data=c,this.has_photo=!0}).catch(c=>{this.photo_data=[]})}).catch(h=>{r.notify("dark",h,"error",this.$q)})}).catch(a=>{r.notify("dark",a,"error",this.$q)}):this.upload_enabled=!this.upload_enabled},attachCarPhoto(){r.showLoadingBox("",this.$q),this.loading=!0,r.fetchDataByToken("attachCarPhoto",{schedule_uuid:this.schedule_uuid,featured_filename:this.featured_filename,upload_path:this.upload_path,file_data:this.hadData()?this.photo_data.data:"",image_type:this.hadData()?this.photo_data.format:""}).then(a=>{this.dialog=!1,this.$emit("afterAttachphoto",this.schedule_uuid)}).catch(a=>{r.notify("red-5",a,"error_outline",this.$q)}).then(a=>{r.hideLoadingBox(this.$q),this.loading=!1})},afterUploadfile(a){this.featured_filename=a.filename,this.featured_url=a.url_image,this.upload_path=a.upload_path,this.has_photo=!0},clearPhoto(){this.upload_enabled=!1,this.has_photo=!1,this.featured_filename="",this.featured_url="",this.upload_path="",this.photo_data=[]},hadData(){return Object.keys(this.photo_data).length>0}}},j={class:"col text-center"},E={class:"text-weight-bold"},T={class:"border-bottom q-pt-sm q-pb-sm"},N={class:"row items-center"},O={class:"col"},z={class:"font16 text-weight-bold"},I={class:"font14 line-normal"},L={class:"col text-right"};function S(a,h,c,R,o,i){const g=v("UploaderFile");return s(),d(B,{modelValue:o.dialog,"onUpdate:modelValue":h[0]||(h[0]=b=>o.dialog=b),maximized:!0,"transition-show":"slide-up","transition-hide":"slide-down"},{default:l(()=>[t(P,null,{default:l(()=>[t(U,{class:"transparent q-pa-sm",style:{height:"auto"}},{default:l(()=>[e("div",j,[e("div",E,n(a.$t("Take photo")),1)]),q((s(),d(p,{dense:"",flat:"",icon:"close"},{default:l(()=>[t(V,{class:"bg-white text-primary"},{default:l(()=>[x(n(a.$t("Close")),1)]),_:1})]),_:1})),[[F]])]),_:1}),t(_,{class:"q-pa-xs bg-grey-1"}),t(A,null,{default:l(()=>[e("div",T,[e("div",N,[e("div",O,[e("div",z,n(a.$t("Proof of Car")),1),e("p",I,n(a.$t("Add a photo as proof of your vehicle")),1)]),e("div",L,[e("div",null,[o.has_photo?(s(),d(p,{key:0,flat:"",label:a.$t("Delete"),color:"primary","no-caps":"",class:"q-pr-none font17",onClick:i.clearPhoto},null,8,["label","onClick"])):(s(),d(p,{key:1,label:a.$t("Add photo"),flat:"",color:"primary","no-caps":"",class:"q-pl-none q-pr-none",onClick:i.takePhoto},null,8,["label","onClick"]))]),o.has_photo?(s(),d(m,{key:0,src:o.featured_url,"spinner-color":"primary","spinner-size":"sm",fit:"cover",style:{height:"50px","max-width":"50px"},class:"radius8"},null,8,["src"])):i.hasPhotoData?(s(),d(m,{key:1,src:o.photo_data.path,"spinner-color":"primary","spinner-size":"sm",fit:"cover",style:{height:"50px","max-width":"50px"},class:"radius8"},null,8,["src"])):f("",!0)])])]),o.upload_enabled?(s(),D(w,{key:0},[t(_,{class:"q-pa-xs"}),t(g,{ref:"uploader_file",path:"upload/order_proof",onAfterUploadfile:i.afterUploadfile},null,8,["onAfterUploadfile"])],64)):f("",!0)]),_:1}),t(Q,{class:"fixed-bottom"},{default:l(()=>[t(p,{loading:o.loading,onClick:i.attachCarPhoto,disabled:!i.hasData,label:a.$t("Confirm Photo"),color:"primary",unelevated:"",class:"fit font17 text-weight-bold","no-caps":""},null,8,["loading","onClick","disabled","label"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}var Y=k($,[["render",S]]);export{Y as default};
