import{_ as D,u as P,A as s,p as a,q as p,t as l,f as i,a4 as m,a2 as f,Z as y,$ as c,F as b,a0 as v,a1 as h,ar as _,av as u,ae as q,a5 as k}from"./index.c29f7992.js";import{Q as I}from"./QToolbarTitle.38b5862b.js";import{Q as T}from"./QToolbar.19752286.js";import{Q as C}from"./QHeader.8a0fa205.js";import{Q as $}from"./QInnerLoading.d034c390.js";import{Q as V}from"./QSelect.ae814dfc.js";import{Q as S}from"./QDate.053d7758.js";import{Q}from"./QPopupProxy.612ef87b.js";import{Q as B}from"./QFooter.478b051a.js";import{Q as U}from"./QForm.32515fc9.js";import{Q as z}from"./QPage.1b02519d.js";import{Q as E}from"./QPullToRefresh.9f003a0c.js";import{C as w}from"./ClosePopup.ab93d23e.js";import{u as F}from"./MenuStore.cd99501e.js";import"./QResizeObserver.0e413222.js";import"./QChip.5de2d333.js";import"./QItemLabel.1db45aa2.js";import"./QMenu.074d3579.js";import"./selection.53b1fe34.js";import"./rtl.276c3f1b.js";import"./format.de7e9769.js";import"./use-render-cache.3aae9b27.js";import"./date.1357beaa.js";import"./TouchPan.5fac99c8.js";import"./touch.9135741d.js";const L={name:"ItemPromotionCreate",data(){return{dialog_price:!1,item_uuid:"",promo_id:"",loading:!1,loading_get:!1,promo_type:"",buy_qty:0,get_qty:0,item_id_promo:"",discount_start:"",discount_end:"",page:0}},setup(e){const t=F(),g=P();return{MenuStore:t,DataStore:g}},created(){this.DataStore.item_list=[],this.DataStore.getItemList(this.page),this.item_uuid=this.$route.query.item_uuid,this.promo_id=this.$route.query.promo_id,this.promo_id>0&&this.getPromotion()},computed:{isEdit(){return this.promo_id>0}},methods:{refresh(e){this.page=0,this.DataStore.getItemList(this.page),this.promo_id>0?this.getPromotion(e):e()},getPromotion(e){this.loading_get=!0,s.fetchDataByTokenPost("getPromotion","promo_id="+this.promo_id).then(t=>{this.promo_type=t.details.promo_type,this.buy_qty=t.details.buy_qty,this.get_qty=t.details.get_qty,this.item_id_promo=t.details.item_id_promo,this.discount_start=t.details.discount_start,this.discount_end=t.details.discount_end}).catch(t=>{s.notify("dark",t,"error",this.$q)}).then(t=>{this.loading_get=!1,s.empty(e)||e()})},onScroll(e,t){this.page++,this.DataStore.total_item>this.page&&this.DataStore.getItemList(this.page,t)},onSubmit(){this.loading=!0,s.fetchDataByToken("createPromotion",{promo_id:this.promo_id,item_uuid:this.item_uuid,promo_id:this.promo_id,promo_type:this.promo_type,buy_qty:this.buy_qty,get_qty:this.get_qty,item_id_promo:this.item_id_promo,discount_start:this.discount_start,discount_end:this.discount_end}).then(e=>{s.notify("light-green",e.msg,"check_circle",this.$q),this.$router.replace({path:"/item/promotionlist",query:{item_uuid:this.item_uuid}})}).catch(e=>{s.notify("dark",e,"error",this.$q)}).then(e=>{this.loading=!1})}}},A={class:"q-pa-md q-gutter-md"},N={class:"row items-center justify-end"},R={class:"row items-center justify-end"};function j(e,t,g,d,r,n){return a(),p(E,{onRefresh:n.refresh},{default:l(()=>[i(C,{class:h({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:l(()=>[i(T,null,{default:l(()=>[i(m,{onClick:t[0]||(t[0]=o=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),i(I,{class:"text-weight-bold"},{default:l(()=>[n.isEdit?(a(),f(b,{key:0},[y(c(e.$t("Edit Item Promo")),1)],64)):(a(),f(b,{key:1},[y(c(e.$t("Add Item Promo")),1)],64))]),_:1})]),_:1}),i(v)]),_:1},8,["class"]),i(z,{class:h({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:l(()=>[r.loading_get?(a(),p($,{key:0,showing:!0,color:"primary",size:"md"})):(a(),p(U,{key:1,onSubmit:n.onSubmit},{default:l(()=>[_("div",A,[i(V,{outlined:"",modelValue:r.promo_type,"onUpdate:modelValue":t[1]||(t[1]=o=>r.promo_type=o),label:e.$t("Promo Type"),color:"grey-5","stack-label":"",behavior:"dialog","transition-show":"fade","transition-hide":"fade",options:d.DataStore.promo_type,loading:d.DataStore.loading,"map-options":"","emit-value":"",rules:[o=>o&&o.length>0||this.$t("This field is required")]},null,8,["modelValue","label","options","loading","rules"]),i(u,{outlined:"",modelValue:r.buy_qty,"onUpdate:modelValue":t[2]||(t[2]=o=>r.buy_qty=o),label:e.$t("Buy(qty)"),"stack-label":"",color:"grey-5","lazy-rules":"",rules:[o=>o&&o.length>0||this.$t("This field is required")]},null,8,["modelValue","label","rules"]),i(u,{outlined:"",modelValue:r.get_qty,"onUpdate:modelValue":t[3]||(t[3]=o=>r.get_qty=o),label:e.$t("Get (qty)"),"stack-label":"",color:"grey-5","lazy-rules":"",rules:[o=>o&&o.length>0||this.$t("This field is required")]},null,8,["modelValue","label","rules"]),i(V,{outlined:"",modelValue:r.item_id_promo,"onUpdate:modelValue":t[4]||(t[4]=o=>r.item_id_promo=o),label:e.$t("Select Item"),color:"grey-5","stack-label":"",behavior:"dialog","transition-show":"fade","transition-hide":"fade","emit-value":"","map-options":"",rules:[o=>o&&o.length>0||this.$t("This field is required")],options:d.DataStore.item_list,loading:d.DataStore.loading,onVirtualScroll:n.onScroll},null,8,["modelValue","label","rules","options","loading","onVirtualScroll"]),i(u,{outlined:"",modelValue:r.discount_start,"onUpdate:modelValue":t[6]||(t[6]=o=>r.discount_start=o),label:e.$t("Discount Start"),"stack-label":"",color:"grey-5",readonly:""},{append:l(()=>[i(q,{name:"event",class:"cursor-pointer"},{default:l(()=>[i(Q,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:l(()=>[i(S,{modelValue:r.discount_start,"onUpdate:modelValue":t[5]||(t[5]=o=>r.discount_start=o)},{default:l(()=>[_("div",N,[k(i(m,{label:e.$t("Close"),color:"primary",flat:"","no-caps":""},null,8,["label"]),[[w]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","label"]),i(u,{outlined:"",modelValue:r.discount_end,"onUpdate:modelValue":t[8]||(t[8]=o=>r.discount_end=o),label:e.$t("Discount End"),"stack-label":"",color:"grey-5",readonly:""},{append:l(()=>[i(q,{name:"event",class:"cursor-pointer"},{default:l(()=>[i(Q,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:l(()=>[i(S,{modelValue:r.discount_end,"onUpdate:modelValue":t[7]||(t[7]=o=>r.discount_end=o)},{default:l(()=>[_("div",R,[k(i(m,{label:e.$t("Close"),color:"primary",flat:"","no-caps":""},null,8,["label"]),[[w]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","label"])]),i(B,{class:h(["q-pl-md q-pr-md q-pb-xs",{"bg-mydark ":e.$q.dark.mode,"bg-white ":!e.$q.dark.mode}])},{default:l(()=>[i(m,{type:"submit",color:"primary","text-color":"white",label:e.$t("Save"),unelevated:"",class:"full-width radius8",size:"lg","no-caps":"",loading:r.loading},null,8,["label","loading"])]),_:1},8,["class"])]),_:1},8,["onSubmit"]))]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var _e=D(L,[["render",j]]);export{_e as default};
