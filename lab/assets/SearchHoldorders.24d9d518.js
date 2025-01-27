import{_ as T,aA as k,u as D,A as b,n as y,p as o,a2 as i,f as a,t,F as m,a1 as Q,a4 as _,Z as c,$ as s,a0 as V,ar as d,av as B,q as S,ae as I,au as f,a3 as H,aB as v,a6 as P,a7 as q}from"./index.c29f7992.js";import{Q as A}from"./QToolbarTitle.38b5862b.js";import{Q as O}from"./QToolbar.19752286.js";import{Q as E}from"./QHeader.8a0fa205.js";import{Q as L}from"./QSpace.0d53e539.js";import{Q as w}from"./QBadge.50ff0feb.js";import{Q as p}from"./QItemLabel.1db45aa2.js";import{Q as N}from"./QList.04c37cb8.js";import{Q as R}from"./QPage.1b02519d.js";import{Q as $}from"./QPullToRefresh.9f003a0c.js";import{u as F}from"./SearchStore.674246eb.js";import"./QResizeObserver.0e413222.js";import"./TouchPan.5fac99c8.js";import"./touch.9135741d.js";import"./selection.53b1fe34.js";import"./format.de7e9769.js";const j={name:"SearchHoldorders",components:{TableSkeleton:k(()=>v(()=>import("./TableSkeleton.3238dea0.js"),["assets/TableSkeleton.3238dea0.js","assets/QSkeleton.81a2bab8.js","assets/index.c29f7992.js","assets/index.8924bfb8.css","assets/QItemLabel.1db45aa2.js","assets/QList.04c37cb8.js"])),HoldOrdersdetails:k(()=>v(()=>import("./HoldOrdersdetails.5e562d4b.js"),["assets/HoldOrdersdetails.5e562d4b.js","assets/QInnerLoading.d034c390.js","assets/index.c29f7992.js","assets/index.8924bfb8.css","assets/QToolbarTitle.38b5862b.js","assets/QSpace.0d53e539.js","assets/QToolbar.19752286.js","assets/QItemLabel.1db45aa2.js","assets/QList.04c37cb8.js","assets/ClosePopup.ab93d23e.js","assets/CartStore.99e9bb86.js"]))},setup(){const e=F(),l=D();return{SearchStore:e,DataStore:l}},data(){return{q:"",loading:!1}},created(){this.SearchStore.data=""},computed:{hasSearch(){return!b.empty(this.q)}},methods:{refresh(e){this.clearSearch(),e()},clearSearch(){this.SearchStore.is_submit=!1,this.q="",this.SearchStore.data=[]},doSearch(){this.loading=!0,this.SearchStore.data=[],this.SearchStore.status=[],this.SearchStore.is_submit=!0,b.fetchDataByTokenPost("onHoldOrders","q="+this.q+"&page=1").then(e=>{this.SearchStore.data=e.details.data}).catch(e=>{}).then(e=>{this.loading=!1})},getCart(e,l,g){this.$refs.details.getCart(e,l,g)}}},z={class:"q-pa-md full-width"},U={class:"flex flex-center text-center"},Z={key:0,class:"full-width text-center"},G={class:"text-weight-bold"},J={class:"text-weight-light text-grey"},K={key:1,class:"full-width text-center"},M={class:"text-weight-bold"},W={class:"text-weight-light text-grey"};function X(e,l,g,n,h,u){const C=y("TableSkeleton"),x=y("HoldOrdersdetails");return o(),i(m,null,[a($,{onRefresh:u.refresh},{default:t(()=>[a(E,{class:Q({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode}),reveal:"","reveal-offset":"50"},{default:t(()=>[a(O,null,{default:t(()=>[a(_,{onClick:l[0]||(l[0]=r=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),a(A,{class:"text-weight-bold"},{default:t(()=>[c(s(e.$t("Search hold orders")),1)]),_:1})]),_:1}),a(V)]),_:1},8,["class"]),a(R,{class:Q([{"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode},"flex justify-start"])},{default:t(()=>[d("div",z,[a(B,{outlined:"",modelValue:h.q,"onUpdate:modelValue":l[1]||(l[1]=r=>h.q=r),label:e.$t("Search"),color:"grey-5"},{append:t(()=>[n.SearchStore.hasData?(o(),S(I,{key:0,class:"cursor-pointer",name:"close",color:"grey",onClick:u.clearSearch},null,8,["onClick"])):f("",!0),n.SearchStore.hasData?f("",!0):(o(),S(_,{key:1,icon:"search",unelevated:"",color:"dark-grey","no-caps":"",loading:h.loading,round:"",flat:"",onClick:u.doSearch,disable:!u.hasSearch},null,8,["loading","onClick","disable"]))]),_:1},8,["modelValue","label"]),n.SearchStore.hasData?(o(),i(m,{key:0},[a(L,{class:"q-mt-md"}),a(N,{separator:""},{default:t(()=>[(o(!0),i(m,null,H(n.SearchStore.data,r=>(o(),S(P,{key:r,clickable:"",onClick:Y=>u.getCart(r.order_reference,r.cart_uuid,r.transaction_type)},{default:t(()=>[a(q,{avatar:"",top:""},{default:t(()=>[d("div",U,[d("div",null,[a(_,{dense:"",color:`green-12
`,round:"",icon:"o_shopping_bag",unelevated:""},{default:t(()=>[a(w,{color:"primary",floating:""},{default:t(()=>[c(s(r.qty),1)]),_:2},1024)]),_:2},1024)])])]),_:2},1024),a(q,{top:""},{default:t(()=>[a(p,{class:"text-dark"},{default:t(()=>[c(s(r.order_reference)+" ",1),a(w,{color:"amber"},{default:t(()=>[c(s(r.transaction_name),1)]),_:2},1024)]),_:2},1024),a(p,{class:"text-dark"},{default:t(()=>[c(s(r.customer_name),1)]),_:2},1024),a(p,{caption:"",class:"font12"},{default:t(()=>[c(s(r.date_created),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})],64)):f("",!0),h.loading?(o(),S(C,{key:1,rows:10})):f("",!0)]),n.SearchStore.is_submit?(o(),i("div",K,[!n.SearchStore.hasData&&!h.loading?(o(),i(m,{key:0},[d("div",M,s(e.$t("No data available")),1),d("div",W,s(e.$t("Sorry, we couldn't find any results")),1)],64)):f("",!0)])):(o(),i("div",Z,[d("div",G,s(e.$t("Search for hold order")),1),d("div",J,s(e.$t("Search by order reference")),1)]))]),_:1},8,["class"])]),_:1},8,["onRefresh"]),a(x,{ref:"details"},null,512)],64)}var _e=T(j,[["render",X]]);export{_e as default};
