import{_ as q,aA as w,u as x,A as b,n as T,p as s,q as u,t,f as a,a4 as p,Z as d,$ as o,a0 as D,a1 as k,ar as i,av as C,ae as B,au as m,a2 as n,F as f,a3 as V,aB as I,a6 as N,a7 as g}from"./index.c29f7992.js";import{Q as P}from"./QToolbarTitle.38b5862b.js";import{Q as A}from"./QToolbar.19752286.js";import{Q as L}from"./QHeader.8a0fa205.js";import{Q as v}from"./QSpace.0d53e539.js";import{Q as y}from"./QBadge.50ff0feb.js";import{Q as S}from"./QItemLabel.1db45aa2.js";import{Q as R}from"./QList.04c37cb8.js";import{Q as E}from"./QPage.1b02519d.js";import{Q as F}from"./QPullToRefresh.9f003a0c.js";import{u as j}from"./SearchStore.674246eb.js";import"./QResizeObserver.0e413222.js";import"./TouchPan.5fac99c8.js";import"./touch.9135741d.js";import"./selection.53b1fe34.js";import"./format.de7e9769.js";const z={name:"SearchTables",components:{TableSkeleton:w(()=>I(()=>import("./TableSkeleton.3238dea0.js"),["assets/TableSkeleton.3238dea0.js","assets/QSkeleton.81a2bab8.js","assets/index.c29f7992.js","assets/index.8924bfb8.css","assets/QItemLabel.1db45aa2.js","assets/QList.04c37cb8.js"]))},setup(){const e=j(),c=x();return{SearchStore:e,DataStore:c}},data(){return{q:"",loading:!1}},created(){this.SearchStore.data=""},computed:{hasSearch(){return!b.empty(this.q)}},methods:{refresh(e){this.clearSearch(),e()},clearSearch(){this.SearchStore.is_submit=!1,this.q="",this.SearchStore.data=[]},doSearch(){this.loading=!0,this.SearchStore.data=[],this.SearchStore.status=[],this.SearchStore.is_submit=!0,b.fetchDataByTokenPost("tableList","q="+this.q).then(e=>{this.SearchStore.data=e.details.data}).catch(e=>{}).then(e=>{this.loading=!1})}}},H={class:"q-pa-md full-width"},O={class:"flex flex-center text-center"},U={class:"radius8 bg-green-10 text-white q-pa-xs text-center q-pl-sm q-pr-sm"},Z={class:"font14 text-weight-bold"},$={key:0,class:"full-width text-center"},G={key:1,class:"full-width text-center"},J={class:"text-weight-bold"},K={class:"text-weight-light text-grey"};function M(e,c,W,l,h,_){const Q=T("TableSkeleton");return s(),u(F,{onRefresh:_.refresh},{default:t(()=>[a(L,{class:k({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode}),reveal:"","reveal-offset":"50"},{default:t(()=>[a(A,null,{default:t(()=>[a(p,{onClick:c[0]||(c[0]=r=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),a(P,{class:"text-weight-bold"},{default:t(()=>[d(o(e.$t("Search Tables")),1)]),_:1})]),_:1}),a(D)]),_:1},8,["class"]),a(E,{class:k([{"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode},"flex justify-start"])},{default:t(()=>[i("div",H,[a(C,{outlined:"",modelValue:h.q,"onUpdate:modelValue":c[1]||(c[1]=r=>h.q=r),label:e.$t("Search"),color:"grey-5"},{append:t(()=>[l.SearchStore.hasData?(s(),u(B,{key:0,class:"cursor-pointer",name:"close",color:"grey",onClick:_.clearSearch},null,8,["onClick"])):m("",!0),l.SearchStore.hasData?m("",!0):(s(),u(p,{key:1,icon:"search",unelevated:"",color:"dark-grey","no-caps":"",loading:h.loading,round:"",flat:"",onClick:_.doSearch,disable:!_.hasSearch},null,8,["loading","onClick","disable"]))]),_:1},8,["modelValue","label"]),l.SearchStore.hasData?(s(),n(f,{key:0},[a(v,{class:"q-mt-md"}),a(R,{separator:""},{default:t(()=>[(s(!0),n(f,null,V(l.SearchStore.data,r=>(s(),u(N,{key:r,clickable:"",to:{path:"/tables/table_update",query:{id:r.table_uuid}}},{default:t(()=>[a(g,{avatar:"",top:""},{default:t(()=>[i("div",O,[i("div",null,[i("div",U,[i("div",Z," #"+o(r.table_id),1)]),a(v,{class:"q-pa-xs"}),a(p,{dense:"",color:`green-12
`,round:"",icon:"las la-user",unelevated:""},{default:t(()=>[a(y,{color:"primary",floating:""},{default:t(()=>[d(o(r.max_covers),1)]),_:2},1024)]),_:2},1024)])])]),_:2},1024),a(g,{top:""},{default:t(()=>[a(S,{class:"text-dark"},{default:t(()=>[d(o(r.table_name)+" ",1),a(y,{color:r.available_raw==1?"green":"amber"},{default:t(()=>[d(o(r.available),1)]),_:2},1032,["color"])]),_:2},1024),a(S,{class:"text-dark"},{default:t(()=>[l.DataStore.table_room_list_raw[r.room_id]?(s(),n(f,{key:0},[d(o(l.DataStore.table_room_list_raw[r.room_id]),1)],64)):(s(),n(f,{key:1},[d(o(e.$t("Not available")),1)],64))]),_:2},1024),a(S,{caption:""},{default:t(()=>[d(o(r.min_covers)+" - "+o(r.max_covers)+" "+o(e.$t("covers")),1)]),_:2},1024),a(S,{caption:"",class:"font12"},{default:t(()=>[d(o(r.date_created),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})],64)):m("",!0),h.loading?(s(),u(Q,{key:1,rows:10})):m("",!0)]),l.SearchStore.is_submit?(s(),n("div",G,[!l.SearchStore.hasData&&!h.loading?(s(),n(f,{key:0},[i("div",J,o(e.$t("No data available")),1),i("div",K,o(e.$t("Sorry, we couldn't find any results")),1)],64)):m("",!0)])):(s(),n("div",$))]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var fe=q(z,[["render",M]]);export{fe as default};
