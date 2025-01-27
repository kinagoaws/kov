import{_ as f,A as i,p as l,q as d,t as a,f as o,a4 as n,Z as h,$ as g,a0 as c,a1 as u,ar as p,at as b,av as y}from"./index.c29f7992.js";import{Q as _}from"./QToolbarTitle.38b5862b.js";import{Q}from"./QToolbar.19752286.js";import{Q as S}from"./QHeader.8a0fa205.js";import{Q as q}from"./QInnerLoading.d034c390.js";import{Q as v}from"./QSelect.ae814dfc.js";import{Q as I}from"./QFooter.478b051a.js";import{Q as w}from"./QForm.32515fc9.js";import{Q as V}from"./QPage.1b02519d.js";import{Q as $}from"./QPullToRefresh.9f003a0c.js";import{u as T}from"./MenuStore.cd99501e.js";import"./QResizeObserver.0e413222.js";import"./QChip.5de2d333.js";import"./QItemLabel.1db45aa2.js";import"./QMenu.074d3579.js";import"./selection.53b1fe34.js";import"./rtl.276c3f1b.js";import"./format.de7e9769.js";import"./TouchPan.5fac99c8.js";import"./touch.9135741d.js";const B={name:"ItemInventory",data(){return{track_stock:!1,sku:"",supplier_id:"",item_uuid:"",loading_get:!1,loading:!1}},setup(e){return{MenuStore:T()}},created(){this.MenuStore.getSupplier(),this.item_uuid=this.$route.query.item_uuid,i.empty(this.item_uuid)||this.getItem()},methods:{refresh(e){this.MenuStore.getSupplier(),i.empty(this.item_uuid)?e():this.getItem(e)},getItem(e){this.loading_get=!0,i.fetchDataByTokenPost("getItem","id="+this.item_uuid).then(t=>{this.track_stock=t.details.track_stock,this.sku=t.details.sku,this.supplier_id=t.details.supplier_id}).catch(t=>{i.notify("dark",t,"error",this.$q)}).then(t=>{this.loading_get=!1,i.empty(e)||e()})},onSubmit(){this.loading=!0,i.fetchDataByToken("saveInventory",{item_uuid:this.item_uuid,track_stock:this.track_stock,sku:this.sku,supplier_id:this.supplier_id}).then(e=>{i.notify("light-green",e.msg,"check_circle",this.$q)}).catch(e=>{i.notify("dark",e,"error",this.$q)}).then(e=>{this.loading=!1})}}},M={class:"q-pa-md q-gutter-md"};function z(e,t,P,k,r,m){return l(),d($,{onRefresh:m.refresh},{default:a(()=>[o(S,{class:u({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:a(()=>[o(Q,null,{default:a(()=>[o(n,{onClick:t[0]||(t[0]=s=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),o(_,{class:"text-weight-bold"},{default:a(()=>[h(g(e.$t("Item Inventory")),1)]),_:1})]),_:1}),o(c)]),_:1},8,["class"]),o(V,{class:u({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:a(()=>[r.loading_get?(l(),d(q,{key:0,showing:!0,color:"primary",size:"md"})):(l(),d(w,{key:1,onSubmit:m.onSubmit},{default:a(()=>[p("div",M,[p("div",null,[o(b,{modelValue:r.track_stock,"onUpdate:modelValue":t[1]||(t[1]=s=>r.track_stock=s),label:e.$t("Track Stock"),dense:""},null,8,["modelValue","label"])]),o(y,{outlined:"",modelValue:r.sku,"onUpdate:modelValue":t[2]||(t[2]=s=>r.sku=s),label:e.$t("SKU"),"stack-label":"",color:"grey-5","lazy-rules":""},null,8,["modelValue","label"]),o(v,{outlined:"",modelValue:r.supplier_id,"onUpdate:modelValue":t[3]||(t[3]=s=>r.supplier_id=s),label:e.$t("Supplier"),color:"grey-5",options:k.MenuStore.supplier_data,"stack-label":"",behavior:"dialog","transition-show":"fade","transition-hide":"fade","emit-value":"","map-options":""},null,8,["modelValue","label","options"])]),o(I,{class:u(["q-pl-md q-pr-md q-pb-xs",{"bg-mydark ":e.$q.dark.mode,"bg-white ":!e.$q.dark.mode}])},{default:a(()=>[o(n,{type:"submit",color:"primary","text-color":"white",label:e.$t("Save"),unelevated:"",class:"full-width radius8",size:"lg","no-caps":"",loading:r.loading},null,8,["label","loading"])]),_:1},8,["class"])]),_:1},8,["onSubmit"]))]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var ee=f(B,[["render",z]]);export{ee as default};
