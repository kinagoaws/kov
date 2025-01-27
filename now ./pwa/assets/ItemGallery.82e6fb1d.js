import{_ as w,aA as b,u as C,A as o,n as Q,p as r,a2 as l,f as a,t as d,F as h,a1 as p,a4 as f,Z as g,$ as c,a0 as y,q as u,ar as n,au as _,a3 as x,aB as q}from"./index.c29f7992.js";import{Q as I}from"./QToolbarTitle.38b5862b.js";import{Q as $}from"./QToolbar.19752286.js";import{Q as B}from"./QHeader.8a0fa205.js";import{Q as A}from"./QInnerLoading.d034c390.js";import{Q as G}from"./QImg.a00dd4e9.js";import{Q as P}from"./QPage.1b02519d.js";import{Q as T}from"./QPullToRefresh.9f003a0c.js";import"./QResizeObserver.0e413222.js";import"./TouchPan.5fac99c8.js";import"./touch.9135741d.js";import"./selection.53b1fe34.js";import"./format.de7e9769.js";const S={name:"ItemAddPrice",components:{ConfirmDialog:b(()=>q(()=>import("./ConfirmDialog.f7360be1.js"),["assets/ConfirmDialog.f7360be1.js","assets/QToolbarTitle.38b5862b.js","assets/index.c29f7992.js","assets/index.8924bfb8.css","assets/QToolbar.19752286.js"]))},data(){return{dialog_price:!1,id:"",loading:!0,data:[],edit:!1,data_to_delete:[],title:""}},setup(e){return{DataStore:C()}},computed:{hasData(){return Object.keys(this.data).length>0||!o.empty(this.id)},hasData2(){return Object.keys(this.data).length>0}},created(){this.id=this.$route.query.item_uuid,o.empty(this.id)?this.loading=!1:this.getItemGallery()},methods:{refresh(e){this.getItemGallery(e)},getItemGallery(e){this.loading=!0,o.fetchDataByTokenPost("getItemGallery","id="+this.id).then(t=>{this.data=t.details}).catch(t=>{this.data=[]}).then(t=>{this.loading=!1,o.empty(e)||e()})},confirmDelete(e,t){this.data_to_delete=e,this.data_to_delete.index=t,this.$refs.confirm_dialog.dialog=!0},afterConfirm(){this.$refs.confirm_dialog.dialog=!1,o.showLoadingBox("",this.$q),o.fetchDataByTokenPost("deleteItemGallery","item_uuid="+this.id+"&id="+this.data_to_delete.id).then(e=>{this.data.splice(this.data_to_delete.index,1)}).catch(e=>{o.notify("dark",e,"error",this.$q)}).then(e=>{o.hideLoadingBox(this.$q)})}}},z={class:"row items-center justify-between"},L={class:"text-weight-bold"},V={class:"row items-stretch items-center q-gutter-md"},E={class:"col-3"},N={key:1,class:"full-width text-center"},O={class:"text-weight-bold"};function R(e,t,j,k,i,s){const D=Q("ConfirmDialog");return r(),l(h,null,[a(T,{onRefresh:s.refresh},{default:d(()=>[a(B,{class:p({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:d(()=>[a($,null,{default:d(()=>[a(f,{onClick:t[0]||(t[0]=m=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),a(I,{class:"text-weight-bold"},{default:d(()=>[g(c(e.$t("Gallery")),1)]),_:1})]),_:1}),a(y)]),_:1},8,["class"]),a(P,{class:p([{"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode,"flex flex-center":!i.loading&&!s.hasData},"q-pa-md"])},{default:d(()=>[i.loading?(r(),u(A,{key:0,showing:!0,color:"primary",size:"md"})):(r(),l(h,{key:1},[s.hasData?(r(),l(h,{key:0},[n("div",z,[n("div",L,c(e.$t("Gallery")),1),s.hasData2?(r(),u(f,{key:0,label:i.edit?this.$t("Done"):this.$t("Edit"),flat:"","no-caps":"",color:"primary",onClick:t[1]||(t[1]=m=>i.edit=!i.edit)},null,8,["label"])):_("",!0)]),a(y,{class:"q-mb-lg"}),n("div",V,[(r(!0),l(h,null,x(i.data,(m,v)=>(r(),l("div",{class:"col-3 relative-position",key:m},[i.edit?(r(),u(f,{key:0,round:"",color:"primary",icon:"las la-trash",dense:"",unelevated:"",size:"sm",class:"absolute-top-left z-max",style:{top:"-10px"},onClick:F=>s.confirmDelete(m,v)},null,8,["onClick"])):_("",!0),a(G,{src:m.image_url,style:{"max-width":"100px",height:"70px"},fit:"cover",class:"radius8 col-3","spinner-color":"primary","spinner-size":"sm"},null,8,["src"])]))),128)),n("div",E,[a(f,{color:"primary","text-color":"white",class:"line-normal radius8 font13",unelevated:"",style:{"min-height":"70px"},"no-caps":"",to:{path:"/item/create-gallery",query:{item_uuid:i.id}}},{default:d(()=>[g(" + "+c(e.$t("Add")),1)]),_:1},8,["to"])])])],64)):(r(),l("div",N,[n("div",O,c(e.$t("ID is missing")),1),n("div",null,c(e.$t("Oops sorry we cannot find what your looking for")),1)]))],64))]),_:1},8,["class"])]),_:1},8,["onRefresh"]),a(D,{ref:"confirm_dialog",data:k.DataStore.data_dialog,onAfterConfirm:s.afterConfirm},null,8,["data","onAfterConfirm"])],64)}var ie=w(S,[["render",R]]);export{ie as default};
