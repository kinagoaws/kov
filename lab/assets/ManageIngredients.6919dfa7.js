import{_ as Q,aA as f,u as D,A as o,n as h,p as l,q as d,t as n,f as a,a4 as m,a2 as g,Z as p,$ as c,F as k,au as C,a0 as I,a1 as u,ar as $,av as w,aB as _}from"./index.c29f7992.js";import{Q as S}from"./QToolbarTitle.38b5862b.js";import{Q as T}from"./QToolbar.19752286.js";import{Q as A}from"./QHeader.8a0fa205.js";import{Q as v}from"./QInnerLoading.d034c390.js";import{Q as V}from"./QSpace.0d53e539.js";import{Q as B}from"./QSelect.ae814dfc.js";import{Q as E}from"./QFooter.478b051a.js";import{Q as P}from"./QForm.32515fc9.js";import{Q as z}from"./QPage.1b02519d.js";import{Q as L}from"./QPullToRefresh.9f003a0c.js";import"./QResizeObserver.0e413222.js";import"./QChip.5de2d333.js";import"./QItemLabel.1db45aa2.js";import"./QMenu.074d3579.js";import"./selection.53b1fe34.js";import"./rtl.276c3f1b.js";import"./format.de7e9769.js";import"./TouchPan.5fac99c8.js";import"./touch.9135741d.js";const N={name:"ManageAddonCategory",components:{ConfirmDialog:f(()=>_(()=>import("./ConfirmDialog.f7360be1.js"),["assets/ConfirmDialog.f7360be1.js","assets/QToolbarTitle.38b5862b.js","assets/index.c29f7992.js","assets/index.8924bfb8.css","assets/QToolbar.19752286.js"])),ItemTranslation:f(()=>_(()=>import("./ItemTranslation.4351db51.js"),["assets/ItemTranslation.4351db51.js","assets/index.c29f7992.js","assets/index.8924bfb8.css","assets/QSpace.0d53e539.js","assets/QExpansionItem.13793e1a.js","assets/QItemLabel.1db45aa2.js","assets/QSlideTransition.36283950.js","assets/QList.04c37cb8.js"]))},data(){return{loading_get:!1,loading:!1,id:0,name:"",status:"publish",fields:[{name:"name",title:this.$t("Enter name"),type:"text"}],data_dialog:{title:this.$t("Delete Confirmation"),subtitle:this.$t("Are you sure you want to permanently delete the selected item?"),cancel:this.$t("Cancel"),confirm:this.$t("Delete")},translation_data:[],translation:[],edit_found:!0}},setup(t){return{DataStore:D()}},computed:{isEdit(){return this.id>0}},created(){this.edit_found=!0,this.id=this.$route.query.id,this.id>0&&this.getData()},methods:{refresh(t){this.getData(t)},getData(t){this.loading_get=!0,o.fetchDataByTokenPost("getIngredients","id="+this.id).then(e=>{this.name=e.details.name,this.status=e.details.status,this.translation=e.details.translation}).catch(e=>{this.edit_found=!1,o.notify("dark",e,"error",this.$q)}).then(e=>{this.loading_get=!1,o.empty(t)||t()})},afterInput(t){this.translation_data=t},onSubmit(){this.loading=!0,o.fetchDataByToken("addIngredients",{id:this.id,name:this.name,status:this.status.value?this.status.value:this.status,translation_data:this.translation_data}).then(t=>{o.notify(this.$q.dark.mode?"grey600":"light-green",t.msg,"check_circle",this.$q),this.$router.push("/menu")}).catch(t=>{o.notify("dark",t,"error",this.$q)}).then(t=>{this.loading=!1})},confirmDelete(){this.$refs.confirm_dialog.dialog=!0},afterConfirm(){this.$refs.confirm_dialog.dialog=!1,o.showLoadingBox("",this.$q),o.fetchDataByTokenPost("deleteIngredients","id="+this.id).then(t=>{this.$router.push("/menu")}).catch(t=>{o.notify("dark",t,"error",this.$q)}).then(t=>{o.hideLoadingBox(this.$q)})}}},R={class:"q-gutter-md"};function x(t,e,F,y,i,r){const b=h("ItemTranslation"),q=h("ConfirmDialog");return l(),d(L,{onRefresh:r.refresh},{default:n(()=>[a(A,{class:u({"bg-mydark text-white":t.$q.dark.mode,"bg-white text-dark":!t.$q.dark.mode})},{default:n(()=>[a(T,null,{default:n(()=>[a(m,{onClick:e[0]||(e[0]=s=>t.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",color:t.$q.dark.mode?"white":"dark"},null,8,["color"]),a(S,{class:"text-weight-bold"},{default:n(()=>[r.isEdit?(l(),g(k,{key:0},[p(c(t.$t("Edit Ingredients")),1)],64)):(l(),g(k,{key:1},[p(c(t.$t("Add Ingredients")),1)],64))]),_:1}),r.isEdit&&!i.loading_get?(l(),d(m,{key:0,round:"",color:"mygrey","text-color":"dark",icon:"las la-trash",size:"sm",unelevated:"",onClick:r.confirmDelete},null,8,["onClick"])):C("",!0)]),_:1}),a(I)]),_:1},8,["class"]),a(z,{class:u([{"bg-mydark text-white":t.$q.dark.mode,"bg-white text-dark":!t.$q.dark.mode},"q-pa-md"])},{default:n(()=>[i.loading_get?(l(),d(v,{key:0,showing:!0,color:"primary",size:"md"})):(l(),d(P,{key:1,onSubmit:r.onSubmit},{default:n(()=>[a(V,{class:"q-pa-xs"}),$("div",R,[a(w,{outlined:"",modelValue:i.name,"onUpdate:modelValue":e[1]||(e[1]=s=>i.name=s),label:t.$t("Name"),"stack-label":"",color:"grey-5","lazy-rules":"",rules:[s=>s&&s.length>0||this.$t("This field is required")]},null,8,["modelValue","label","rules"]),a(B,{outlined:"",modelValue:i.status,"onUpdate:modelValue":e[2]||(e[2]=s=>i.status=s),label:t.$t("Status"),color:"grey-5",options:y.DataStore.status_list,"stack-label":"",behavior:"dialog","transition-show":"fade","transition-hide":"fade"},null,8,["modelValue","label","options"]),a(b,{ref:"item_translation",fields:i.fields,update:r.isEdit,data:i.translation,onAfterInput:r.afterInput},null,8,["fields","update","data","onAfterInput"])]),a(E,{class:u(["q-pl-md q-pr-md q-pb-xs",{"bg-mydark ":t.$q.dark.mode,"bg-white ":!t.$q.dark.mode}])},{default:n(()=>[a(m,{type:"submit",color:"primary","text-color":"white",label:t.$t("Submit"),unelevated:"",class:"full-width radius8",size:"lg","no-caps":"",loading:i.loading,disable:!i.edit_found},null,8,["label","loading","disable"])]),_:1},8,["class"])]),_:1},8,["onSubmit"])),a(q,{ref:"confirm_dialog",data:i.data_dialog,onAfterConfirm:r.afterConfirm},null,8,["data","onAfterConfirm"])]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var lt=Q(N,[["render",x]]);export{lt as default};
