import{_ as Q,aA as u,u as q,A as i,n as f,p as l,q as d,t as n,f as a,a4 as m,a2 as h,Z as g,$ as c,F as p,au as D,a0 as w,a1 as k,ar as S,av as T,aB as _}from"./index.c29f7992.js";import{Q as $}from"./QToolbarTitle.38b5862b.js";import{Q as v}from"./QToolbar.19752286.js";import{Q as A}from"./QHeader.8a0fa205.js";import{Q as I}from"./QInnerLoading.d034c390.js";import{Q as V}from"./QSpace.0d53e539.js";import{Q as B}from"./QSelect.ae814dfc.js";import{Q as E}from"./QFooter.478b051a.js";import{Q as P}from"./QForm.32515fc9.js";import{Q as R}from"./QPage.1b02519d.js";import{Q as x}from"./QPullToRefresh.9f003a0c.js";import"./QResizeObserver.0e413222.js";import"./QChip.5de2d333.js";import"./QItemLabel.1db45aa2.js";import"./QMenu.074d3579.js";import"./selection.53b1fe34.js";import"./rtl.276c3f1b.js";import"./format.de7e9769.js";import"./TouchPan.5fac99c8.js";import"./touch.9135741d.js";const z={name:"ManageCookingref",components:{ConfirmDialog:u(()=>_(()=>import("./ConfirmDialog.f7360be1.js"),["assets/ConfirmDialog.f7360be1.js","assets/QToolbarTitle.38b5862b.js","assets/index.c29f7992.js","assets/index.8924bfb8.css","assets/QToolbar.19752286.js"])),ItemTranslation:u(()=>_(()=>import("./ItemTranslation.4351db51.js"),["assets/ItemTranslation.4351db51.js","assets/index.c29f7992.js","assets/index.8924bfb8.css","assets/QSpace.0d53e539.js","assets/QExpansionItem.13793e1a.js","assets/QItemLabel.1db45aa2.js","assets/QSlideTransition.36283950.js","assets/QList.04c37cb8.js"]))},data(){return{loading_get:!1,loading:!1,id:0,name:"",status:"publish",fields:[{name:"name",title:this.$t("Enter name"),type:"text"}],data_dialog:{title:this.$t("Delete Confirmation"),subtitle:this.$t("Are you sure you want to permanently delete the selected item?"),cancel:this.$t("Cancel"),confirm:this.$t("Delete")},translation_data:[],translation:[],edit_found:!0}},setup(t){return{DataStore:q()}},computed:{isEdit(){return this.id>0}},created(){this.edit_found=!0,this.id=this.$route.query.id,this.id>0&&this.getData()},methods:{refresh(t){this.getData(t)},getData(t){this.loading_get=!0,i.fetchDataByTokenPost("getCooking","id="+this.id).then(e=>{this.name=e.details.name,this.status=e.details.status,this.translation=e.details.translation}).catch(e=>{this.edit_found=!1,i.notify("dark",e,"error",this.$q)}).then(e=>{this.loading_get=!1,i.empty(t)||t()})},afterInput(t){this.translation_data=t},onSubmit(){this.loading=!0,i.fetchDataByToken("addCooking",{id:this.id,name:this.name,status:this.status.value?this.status.value:this.status,translation_data:this.translation_data}).then(t=>{i.notify("light-green",t.msg,"check_circle",this.$q),this.$router.push("/menu")}).catch(t=>{i.notify("dark",t,"error",this.$q)}).then(t=>{this.loading=!1})},confirmDelete(){this.$refs.confirm_dialog.dialog=!0},afterConfirm(){this.$refs.confirm_dialog.dialog=!1,i.showLoadingBox("",this.$q),i.fetchDataByTokenPost("deleteCooking","id="+this.id).then(t=>{this.$router.push("/menu")}).catch(t=>{i.notify("dark",t,"error",this.$q)}).then(t=>{i.hideLoadingBox(this.$q)})}}},L={class:"q-gutter-md"};function N(t,e,F,y,o,r){const b=f("ItemTranslation"),C=f("ConfirmDialog");return l(),d(x,{onRefresh:r.refresh},{default:n(()=>[a(A,{class:k({"bg-mydark text-white":t.$q.dark.mode,"bg-white text-dark":!t.$q.dark.mode})},{default:n(()=>[a(v,null,{default:n(()=>[a(m,{onClick:e[0]||(e[0]=s=>t.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",color:t.$q.dark.mode?"white":"dark"},null,8,["color"]),a($,{class:"text-weight-bold"},{default:n(()=>[r.isEdit?(l(),h(p,{key:0},[g(c(t.$t("Edit Cooking Reference")),1)],64)):(l(),h(p,{key:1},[g(c(t.$t("Add Cooking Reference")),1)],64))]),_:1}),r.isEdit&&!o.loading_get?(l(),d(m,{key:0,round:"",color:"mygrey","text-color":"dark",icon:"las la-trash",size:"sm",unelevated:"",onClick:r.confirmDelete},null,8,["onClick"])):D("",!0)]),_:1}),a(w)]),_:1},8,["class"]),a(R,{class:k([{"bg-mydark text-white":t.$q.dark.mode,"bg-white text-dark":!t.$q.dark.mode},"q-pa-md"])},{default:n(()=>[o.loading_get?(l(),d(I,{key:0,showing:!0,color:"primary",size:"md"})):(l(),d(P,{key:1,onSubmit:r.onSubmit},{default:n(()=>[a(V,{class:"q-pa-xs"}),S("div",L,[a(T,{outlined:"",modelValue:o.name,"onUpdate:modelValue":e[1]||(e[1]=s=>o.name=s),label:t.$t("Name"),"stack-label":"",color:"grey-5","lazy-rules":"",rules:[s=>s&&s.length>0||this.$t("This field is required")]},null,8,["modelValue","label","rules"]),a(B,{outlined:"",modelValue:o.status,"onUpdate:modelValue":e[2]||(e[2]=s=>o.status=s),label:t.$t("Status"),color:"grey-5",options:y.DataStore.status_list,"stack-label":"",behavior:"dialog","transition-show":"fade","transition-hide":"fade"},null,8,["modelValue","label","options"]),a(b,{ref:"item_translation",fields:o.fields,update:r.isEdit,data:o.translation,onAfterInput:r.afterInput},null,8,["fields","update","data","onAfterInput"])]),a(E,{class:"q-pl-md q-pr-md q-pb-xs bg-white"},{default:n(()=>[a(m,{type:"submit",color:"primary","text-color":"white",label:t.$t("Submit"),unelevated:"",class:"full-width radius8",size:"lg","no-caps":"",loading:o.loading,disable:!o.edit_found},null,8,["label","loading","disable"])]),_:1})]),_:1},8,["onSubmit"])),a(C,{ref:"confirm_dialog",data:o.data_dialog,onAfterConfirm:r.afterConfirm},null,8,["data","onAfterConfirm"])]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var lt=Q(z,[["render",N]]);export{lt as default};
