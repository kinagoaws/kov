import{_ as $,d as C,aA as c,u as y,n as i,p as s,q as n,t,f as o,at as _,a2 as p,a4 as m,Z as Q,$ as S,au as w,F as h,a1 as d,aB as f}from"./index.c29f7992.js";import{Q as v}from"./QToolbarTitle.38b5862b.js";import{Q as V}from"./QCircularProgress.bcda6a33.js";import{Q as P}from"./QBadge.50ff0feb.js";import{Q as D}from"./QToolbar.19752286.js";import{Q as T}from"./QHeader.8a0fa205.js";import{Q as q}from"./QDrawer.85a82f78.js";import{Q as r}from"./QRouteTab.a0aa795c.js";import{Q as B}from"./QTabs.8a6f34eb.js";import{Q as O}from"./QFooter.478b051a.js";import{Q as A,a as L}from"./QLayout.474c7888.js";import{u as z}from"./SearchStore.674246eb.js";import{u as N}from"./CartStore.99e9bb86.js";import"./format.de7e9769.js";import"./QResizeObserver.0e413222.js";import"./TouchPan.5fac99c8.js";import"./touch.9135741d.js";import"./selection.53b1fe34.js";import"./rtl.276c3f1b.js";const E=C({name:"LayoutPromo",components:{NotiButton:c(()=>f(()=>import("./NotiButton.0135fb2a.js"),["assets/NotiButton.0135fb2a.js","assets/index.c29f7992.js","assets/index.8924bfb8.css","assets/QBadge.50ff0feb.js","assets/index.e205827f.js","assets/UserStore.28c5b9df.js"])),PosCart:c(()=>f(()=>import("./PosCart.f19ed390.js"),["assets/PosCart.f19ed390.js","assets/index.c29f7992.js","assets/index.8924bfb8.css","assets/QBadge.50ff0feb.js","assets/QSpace.0d53e539.js","assets/QBtnToggle.d07d4b57.js","assets/QImg.a00dd4e9.js","assets/QItemLabel.1db45aa2.js","assets/QList.04c37cb8.js","assets/QPopupProxy.612ef87b.js","assets/QMenu.074d3579.js","assets/selection.53b1fe34.js","assets/QAjaxBar.c9f7e53a.js","assets/format.de7e9769.js","assets/CartStore.99e9bb86.js"]))},setup(){const e=y(),a=z(),u=N();return{DataStore:e,SearchStore:a,CartStore:u}},data(){return{online:!0,tab:"home",loading:!1,path:""}},created(){this.$q.dark.set(this.DataStore.dark_mode),this.path=this.$route.path},updated(){this.path=this.$route.path},methods:{searchPage(){switch(console.log(this.$route.path),this.$route.path){case"/pos/on-hold":this.$router.push("/pos-order/search-on-hold");break;case"/pos/list":this.$router.push("/search");break;default:this.DataStore.search_item="",this.$router.push("/search/food");break}},setOnline(){let e=this.online?"Confirm Going Online":"Confirm Going Offline",a=this.online?this.$t("Are you sure you want to take your business online and start accepting orders again?"):this.$t("Are you sure you want to take your business offline temporarily? This will prevent new orders from coming in. Your current orders will still be processed.");this.$q.dialog({title:this.$t(e),message:a,cancel:!0,persistent:!0,ok:{color:"dark",flat:!0,"no-caps":!0,label:this.$t("Confirm")},cancel:{color:"primary",flat:!0,"no-caps":!0,label:this.$t("Cancel")}}).onOk(()=>{this.DataStore.setStoreAvailable(this.online)}).onCancel(()=>{this.online=!this.online}).onDismiss(()=>{})}}});function F(e,a,u,U,H,I){const b=i("NotiButton"),g=i("PosCart"),k=i("router-view");return s(),n(A,{view:"lHh Lpr lFf"},{default:t(()=>[o(T,{class:d({"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode}),reveal:"","reveal-offset":"10"},{default:t(()=>[o(D,null,{default:t(()=>[o(_,{modelValue:e.online,"onUpdate:modelValue":[a[0]||(a[0]=l=>e.online=l),e.setOnline],color:"primary",label:e.$t("Online")},null,8,["modelValue","label","onUpdate:modelValue"]),o(v),e.path=="/pos/create"?(s(),p(h,{key:0},[o(m,{round:"",color:"grey",icon:"search",flat:"",onClick:e.searchPage,class:"q-mr-sm"},null,8,["onClick"]),e.CartStore.cart_loading?(s(),n(V,{key:0,rounded:"",value:61,size:"18px",color:"primary",indeterminate:""})):(s(),n(m,{key:1,dense:"",color:"purple",round:"",icon:"las la-shopping-cart",unelevated:"",onClick:a[1]||(a[1]=l=>e.CartStore.cart_drawer=!e.CartStore.cart_drawer)},{default:t(()=>[e.CartStore.hasData?(s(),n(P,{key:0,color:"red",rounded:"",floating:""},{default:t(()=>[Q(S(e.CartStore.getCartCount),1)]),_:1})):w("",!0)]),_:1}))],64)):(s(),p(h,{key:1},[o(b),o(m,{round:"",color:"grey",icon:"search",flat:"",onClick:e.searchPage},null,8,["onClick"])],64))]),_:1})]),_:1},8,["class"]),o(q,{modelValue:e.CartStore.cart_drawer,"onUpdate:modelValue":a[2]||(a[2]=l=>e.CartStore.cart_drawer=l),side:"right",overlay:"",behavior:"mobile",width:250,dark:""},{default:t(()=>[o(g,{ref:"cart"},null,512)]),_:1},8,["modelValue"]),o(O,{bordered:"",class:"bg-white text-dark modified-footer"},{default:t(()=>[o(B,{modelValue:e.tab,"onUpdate:modelValue":a[3]||(a[3]=l=>e.tab=l),dense:"","indicator-color":"transparent","active-color":"secondary",align:"justify",class:d({"bg-mydark text-white":e.$q.dark.mode,"text-dark":!e.$q.dark.mode})},{default:t(()=>[o(r,{name:"home",icon:"las la-home",label:e.$t("Home"),"no-caps":"",to:"/dashboard",class:"routertab_small"},null,8,["label"]),o(r,{name:"information",icon:"o_storefront",label:e.$t("Information"),"no-caps":"",to:"/merchant",class:"routertab_small"},null,8,["label"]),o(r,{name:"login",icon:"o_account_circle",label:e.$t("Login"),"no-caps":"",to:"/merchant/login",class:"routertab_small"},null,8,["label"]),o(r,{name:"address",icon:"o_place",label:e.$t("Address"),"no-caps":"",to:"/merchant/address",class:"routertab_small"},null,8,["label"]),o(r,{name:"settings",icon:"o_settings",label:e.$t("Settings"),"no-caps":"",to:"/merchant/settings",class:"routertab_small"},null,8,["label"]),o(r,{name:"timezone",icon:"o_today",label:e.$t("Time Zone"),"no-caps":"",to:"/merchant/timezone",class:"routertab_small"},null,8,["label"]),o(r,{name:"store_hours",icon:"o_schedule",label:e.$t("Openings"),"no-caps":"",to:"/merchant/store-hours",class:"routertab_small"},null,8,["label"]),o(r,{name:"zone",icon:"o_map",label:e.$t("Zone"),"no-caps":"",to:"/merchant/zone",class:"routertab_small"},null,8,["label"])]),_:1},8,["modelValue","class"])]),_:1}),o(L,{class:d({"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode})},{default:t(()=>[o(k)]),_:1},8,["class"])]),_:1})}var ie=$(E,[["render",F]]);export{ie as default};
