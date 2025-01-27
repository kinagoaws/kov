import{_ as f,A as a,p as g,q as m,t as r,f as s,a4 as h,Z as b,$ as k,a0 as V,a1 as p,ar as y,at as u,av as _}from"./index.c29f7992.js";import{Q as v}from"./QToolbarTitle.38b5862b.js";import{Q as q}from"./QToolbar.19752286.js";import{Q}from"./QHeader.8a0fa205.js";import{Q as w}from"./QInnerLoading.d034c390.js";import{Q as d}from"./QSelect.ae814dfc.js";import{Q as I}from"./QFooter.478b051a.js";import{Q as A}from"./QForm.32515fc9.js";import{Q as U}from"./QPage.1b02519d.js";import{Q as P}from"./QPullToRefresh.9f003a0c.js";import"./QResizeObserver.0e413222.js";import"./QChip.5de2d333.js";import"./QItemLabel.1db45aa2.js";import"./QMenu.074d3579.js";import"./selection.53b1fe34.js";import"./rtl.276c3f1b.js";import"./format.de7e9769.js";import"./TouchPan.5fac99c8.js";import"./touch.9135741d.js";const S={name:"ItemAttributes",data(){return{points_enabled:!1,packaging_incremental:!1,cooking_ref_required:!1,ingredients_preselected:!1,points_earned:0,packaging_fee:0,cooking_selected:[],ingredients_selected:[],dish_selected:[],delivery_options_selected:[],loading_get:!1,loading:!1,item_uuid:"",cooking_ref:[],ingredients:[],dish:[],transport:[],allergens_selected:[],allergens_list:[]}},computed:{isEdit(){return!a.empty(this.item_uuid)}},created(){this.item_uuid=this.$route.query.item_uuid,this.getItemAttributes()},methods:{refresh(l){a.empty(this.item_uuid)?l():this.getItemAttributes(l)},getItemAttributes(l){this.loading_get=!0,a.fetchDataByTokenPost("getItemAttributes","item_uuid="+this.item_uuid).then(e=>{this.points_enabled=e.details.data.points_enabled,this.packaging_incremental=e.details.data.packaging_incremental,this.cooking_ref_required=e.details.data.cooking_ref_required,this.ingredients_preselected=e.details.data.ingredients_preselected,this.points_earned=e.details.data.points_earned,this.packaging_fee=e.details.data.packaging_fee,this.cooking_selected=e.details.data.cooking_selected,this.ingredients_selected=e.details.data.ingredients_selected,this.dish_selected=e.details.data.dish_selected,this.delivery_options_selected=e.details.data.delivery_options_selected,this.allergens_list=e.details.allergens,this.allergens_selected=e.details.data.allergen_selected,this.cooking_ref=[],this.ingredients=[],this.dish=[],this.transport=[],Object.entries(e.details.cooking_ref).forEach(([o,n])=>{this.cooking_ref.push({label:n,value:o})}),Object.entries(e.details.ingredients).forEach(([o,n])=>{this.ingredients.push({label:n,value:o})}),Object.entries(e.details.dish).forEach(([o,n])=>{this.dish.push({label:n,value:o})}),Object.entries(e.details.transport).forEach(([o,n])=>{this.transport.push({label:n,value:o})})}).catch(e=>{a.notify("dark",e,"error",this.$q)}).then(e=>{this.loading_get=!1,a.empty(l)||l()})},onSubmit(){this.loading=!0,a.fetchDataByToken("saveItemAttributes",{item_uuid:this.item_uuid,points_enabled:this.points_enabled,packaging_incremental:this.packaging_incremental,cooking_ref_required:this.cooking_ref_required,ingredients_preselected:this.ingredients_preselected,points_earned:this.points_earned,packaging_fee:this.packaging_fee,cooking_selected:this.cooking_selected,ingredients_selected:this.ingredients_selected,dish_selected:this.dish_selected,delivery_options_selected:this.delivery_options_selected,allergens_selected:this.allergens_selected}).then(l=>{a.notify("light-green",l.msg,"check_circle",this.$q)}).catch(l=>{a.notify("dark",l,"error",this.$q)}).then(l=>{this.loading=!1})}}},T={class:"q-pa-md q-gutter-md"};function E(l,e,o,n,t,c){return g(),m(P,{onRefresh:c.refresh},{default:r(()=>[s(Q,{class:p({"bg-mydark text-white":l.$q.dark.mode,"bg-white text-dark":!l.$q.dark.mode})},{default:r(()=>[s(q,null,{default:r(()=>[s(h,{onClick:e[0]||(e[0]=i=>l.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",color:l.$q.dark.mode?"white":"dark"},null,8,["color"]),s(v,{class:"text-weight-bold"},{default:r(()=>[b(k(l.$t("Item Attributes")),1)]),_:1})]),_:1}),s(V)]),_:1},8,["class"]),s(U,{class:p({"bg-mydark text-white":l.$q.dark.mode,"bg-white text-dark":!l.$q.dark.mode})},{default:r(()=>[t.loading_get?(g(),m(w,{key:0,showing:!0,color:"primary",size:"md"})):(g(),m(A,{key:1,onSubmit:c.onSubmit},{default:r(()=>[y("div",T,[s(u,{modelValue:t.points_enabled,"onUpdate:modelValue":e[1]||(e[1]=i=>t.points_enabled=i),label:l.$t("Enabled Points"),dense:""},null,8,["modelValue","label"]),s(u,{modelValue:t.packaging_incremental,"onUpdate:modelValue":e[2]||(e[2]=i=>t.packaging_incremental=i),label:l.$t("Enabled Packaging Incrementals"),dense:""},null,8,["modelValue","label"]),s(u,{modelValue:t.cooking_ref_required,"onUpdate:modelValue":e[3]||(e[3]=i=>t.cooking_ref_required=i),label:l.$t("Cooking Reference Mandatory"),dense:""},null,8,["modelValue","label"]),s(u,{modelValue:t.ingredients_preselected,"onUpdate:modelValue":e[4]||(e[4]=i=>t.ingredients_preselected=i),label:l.$t("Ingredients pre-selected"),dense:""},null,8,["modelValue","label"]),s(_,{outlined:"",modelValue:t.points_earned,"onUpdate:modelValue":e[5]||(e[5]=i=>t.points_earned=i),label:l.$t("Points earned"),"stack-label":"",color:"grey-5"},null,8,["modelValue","label"]),s(_,{outlined:"",modelValue:t.packaging_fee,"onUpdate:modelValue":e[6]||(e[6]=i=>t.packaging_fee=i),label:l.$t("Packaging fee"),"stack-label":"",color:"grey-5"},null,8,["modelValue","label"]),s(d,{outlined:"",modelValue:t.allergens_selected,"onUpdate:modelValue":e[7]||(e[7]=i=>t.allergens_selected=i),label:l.$t("Allergens"),color:"grey-5",options:t.allergens_list,"stack-label":"","emit-value":"","map-options":"",multiple:"",behavior:"dialog","transition-show":"fade","transition-hide":"fade"},null,8,["modelValue","label","options"]),s(d,{outlined:"",modelValue:t.cooking_selected,"onUpdate:modelValue":e[8]||(e[8]=i=>t.cooking_selected=i),label:l.$t("Cooking Reference"),color:"grey-5",options:t.cooking_ref,"stack-label":"","emit-value":"","map-options":"",multiple:"",behavior:"dialog","transition-show":"fade","transition-hide":"fade"},null,8,["modelValue","label","options"]),s(d,{outlined:"",modelValue:t.ingredients_selected,"onUpdate:modelValue":e[9]||(e[9]=i=>t.ingredients_selected=i),label:l.$t("Ingredients"),color:"grey-5",options:t.ingredients,"stack-label":"","emit-value":"","map-options":"",multiple:"",behavior:"dialog","transition-show":"fade","transition-hide":"fade"},null,8,["modelValue","label","options"]),s(d,{outlined:"",modelValue:t.dish_selected,"onUpdate:modelValue":e[10]||(e[10]=i=>t.dish_selected=i),label:l.$t("Dish"),color:"grey-5",options:t.dish,"stack-label":"","map-options":"","emit-value":"",multiple:"",behavior:"dialog","transition-show":"fade","transition-hide":"fade"},null,8,["modelValue","label","options"]),s(d,{outlined:"",modelValue:t.delivery_options_selected,"onUpdate:modelValue":e[11]||(e[11]=i=>t.delivery_options_selected=i),label:l.$t("Delivery options"),color:"grey-5",options:t.transport,"stack-label":"","map-options":"","emit-value":"",multiple:"",behavior:"dialog","transition-show":"fade","transition-hide":"fade"},null,8,["modelValue","label","options"])]),s(I,{class:p(["q-pl-md q-pr-md q-pb-xs",{"bg-mydark ":l.$q.dark.mode,"bg-white ":!l.$q.dark.mode}])},{default:r(()=>[s(h,{type:"submit",color:"primary","text-color":"white",label:l.$t("Save"),unelevated:"",class:"full-width radius8",size:"lg","no-caps":"",loading:t.loading},null,8,["label","loading"])]),_:1},8,["class"])]),_:1},8,["onSubmit"]))]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var $=f(S,[["render",E]]);export{$ as default};
