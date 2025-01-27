import{_ as g,d as C,aA as p,u as $,n as i,p as s,q as l,t,f as a,at as Q,a2 as c,a4 as d,Z as S,$ as w,au as v,F as h,a1 as m,aB as f}from"./index.c29f7992.js";import{Q as _}from"./QToolbarTitle.38b5862b.js";import{Q as V}from"./QCircularProgress.bcda6a33.js";import{Q as D}from"./QBadge.50ff0feb.js";import{Q as P}from"./QToolbar.19752286.js";import{Q as q}from"./QHeader.8a0fa205.js";import{Q as T}from"./QDrawer.85a82f78.js";import{Q as n}from"./QRouteTab.a0aa795c.js";import{Q as B}from"./QTabs.8a6f34eb.js";import{Q as O}from"./QFooter.478b051a.js";import{Q as A,a as L}from"./QLayout.474c7888.js";import{u as N}from"./SearchStore.674246eb.js";import{u as E}from"./CartStore.99e9bb86.js";import"./format.de7e9769.js";import"./QResizeObserver.0e413222.js";import"./TouchPan.5fac99c8.js";import"./touch.9135741d.js";import"./selection.53b1fe34.js";import"./rtl.276c3f1b.js";const F=C({name:"LayoutPromo",components:{NotiButton:p(()=>f(()=>import("./NotiButton.0135fb2a.js"),["assets/NotiButton.0135fb2a.js","assets/index.c29f7992.js","assets/index.8924bfb8.css","assets/QBadge.50ff0feb.js","assets/index.e205827f.js","assets/UserStore.28c5b9df.js"])),PosCart:p(()=>f(()=>import("./PosCart.f19ed390.js"),["assets/PosCart.f19ed390.js","assets/index.c29f7992.js","assets/index.8924bfb8.css","assets/QBadge.50ff0feb.js","assets/QSpace.0d53e539.js","assets/QBtnToggle.d07d4b57.js","assets/QImg.a00dd4e9.js","assets/QItemLabel.1db45aa2.js","assets/QList.04c37cb8.js","assets/QPopupProxy.612ef87b.js","assets/QMenu.074d3579.js","assets/selection.53b1fe34.js","assets/QAjaxBar.c9f7e53a.js","assets/format.de7e9769.js","assets/CartStore.99e9bb86.js"]))},setup(){const e=$(),o=N(),u=E();return{DataStore:e,SearchStore:o,CartStore:u}},data(){return{online:!0,tab:"home",loading:!1,path:"",id:null}},mounted(){this.id=this.$route.query.id},created(){this.$q.dark.set(this.DataStore.dark_mode),this.path=this.$route.path},updated(){this.path=this.$route.path},methods:{searchPage(){switch(console.log(this.$route.path),this.$route.path){case"/pos/on-hold":this.$router.push("/pos-order/search-on-hold");break;case"/pos/list":this.$router.push("/search");break;default:this.DataStore.search_item="",this.$router.push("/search/food");break}},setOnline(){let e=this.online?"Confirm Going Online":"Confirm Going Offline",o=this.online?this.$t("Are you sure you want to take your business online and start accepting orders again?"):this.$t("Are you sure you want to take your business offline temporarily? This will prevent new orders from coming in. Your current orders will still be processed.");this.$q.dialog({title:this.$t(e),message:o,cancel:!0,persistent:!0,ok:{color:"dark",flat:!0,"no-caps":!0,label:this.$t("Confirm")},cancel:{color:"primary",flat:!0,"no-caps":!0,label:this.$t("Cancel")}}).onOk(()=>{this.DataStore.setStoreAvailable(this.online)}).onCancel(()=>{this.online=!this.online}).onDismiss(()=>{})}}});function R(e,o,u,U,H,z){const b=i("NotiButton"),k=i("PosCart"),y=i("router-view");return s(),l(A,{view:"lHh Lpr lFf"},{default:t(()=>[a(q,{class:m({"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode}),reveal:"","reveal-offset":"10"},{default:t(()=>[a(P,null,{default:t(()=>[a(Q,{modelValue:e.online,"onUpdate:modelValue":[o[0]||(o[0]=r=>e.online=r),e.setOnline],color:"primary",label:e.$t("Online")},null,8,["modelValue","label","onUpdate:modelValue"]),a(_),e.path=="/pos/create"?(s(),c(h,{key:0},[a(d,{round:"",color:"grey",icon:"search",flat:"",onClick:e.searchPage,class:"q-mr-sm"},null,8,["onClick"]),e.CartStore.cart_loading?(s(),l(V,{key:0,rounded:"",value:61,size:"18px",color:"primary",indeterminate:""})):(s(),l(d,{key:1,dense:"",color:"purple",round:"",icon:"las la-shopping-cart",unelevated:"",onClick:o[1]||(o[1]=r=>e.CartStore.cart_drawer=!e.CartStore.cart_drawer)},{default:t(()=>[e.CartStore.hasData?(s(),l(D,{key:0,color:"red",rounded:"",floating:""},{default:t(()=>[S(w(e.CartStore.getCartCount),1)]),_:1})):v("",!0)]),_:1}))],64)):(s(),c(h,{key:1},[a(b),a(d,{round:"",color:"grey",icon:"search",flat:"",onClick:e.searchPage},null,8,["onClick"])],64))]),_:1})]),_:1},8,["class"]),a(T,{modelValue:e.CartStore.cart_drawer,"onUpdate:modelValue":o[2]||(o[2]=r=>e.CartStore.cart_drawer=r),side:"right",overlay:"",behavior:"mobile",width:250,dark:""},{default:t(()=>[a(k,{ref:"cart"},null,512)]),_:1},8,["modelValue"]),a(O,{bordered:"",class:"bg-white text-dark modified-footer"},{default:t(()=>[a(B,{modelValue:e.tab,"onUpdate:modelValue":o[3]||(o[3]=r=>e.tab=r),dense:"","indicator-color":"transparent","active-color":"secondary",align:"justify",class:m({"bg-mydark text-white":e.$q.dark.mode,"text-dark":!e.$q.dark.mode})},{default:t(()=>[a(n,{name:"home",icon:"las la-home",label:e.$t("Home"),"no-caps":"",to:"/dashboard",class:"routertab_small"},null,8,["label"]),a(n,{name:"dailysalesreport",icon:"o_assessment",label:e.$t("Daily"),"no-caps":"",to:"/reports/dailysalesreport",class:"routertab_small"},null,8,["label"]),a(n,{name:"sales",icon:"las la-chart-bar",label:e.$t("Sales"),"no-caps":"",to:"/reports/sales",class:"routertab_small"},null,8,["label"]),a(n,{name:"summary",icon:"las la-chart-pie",label:e.$t("Summary"),"no-caps":"",to:"/reports/summary",class:"routertab_small"},null,8,["label"])]),_:1},8,["modelValue","class"])]),_:1}),a(L,{class:m({"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode})},{default:t(()=>[a(y)]),_:1},8,["class"])]),_:1})}var ie=g(F,[["render",R]]);export{ie as default};
