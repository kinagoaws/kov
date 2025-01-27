import{_ as x,aA as S,u as D,A as d,n as P,p as a,q as m,t,f as s,a1 as v,a2 as p,a3 as Q,F as y,au as _,ar as l,$ as c,a4 as u,aB as A,a6 as C,a7 as k,Z as q,dy as R}from"./index.c29f7992.js";import{Q as $}from"./QItemLabel.1db45aa2.js";import{Q as L}from"./QList.04c37cb8.js";import{Q as B}from"./QInfiniteScroll.894949b1.js";import{Q as I}from"./QPageSticky.335c1979.js";import{Q as T}from"./QPageScroller.43c9aad6.js";import{Q as z}from"./QPage.1b02519d.js";import{Q as N}from"./QPullToRefresh.9f003a0c.js";import{u as V}from"./AccessStore.abc714c5.js";import"./use-page-sticky.3a081baa.js";import"./TouchPan.5fac99c8.js";import"./touch.9135741d.js";import"./selection.53b1fe34.js";import"./format.de7e9769.js";const E={name:"DynamicRates",components:{TableSkeleton:S(()=>A(()=>import("./TableSkeleton.3238dea0.js"),["assets/TableSkeleton.3238dea0.js","assets/QSkeleton.81a2bab8.js","assets/index.c29f7992.js","assets/index.8924bfb8.css","assets/QItemLabel.1db45aa2.js","assets/QList.04c37cb8.js"]))},setup(){const e=D(),o=V();return{DataStore:e,AccessStore:o}},data(){return{loading:!1,data:[],page:0,status:[],is_refresh:void 0,handle:void 0}},computed:{hasData(){return Object.keys(this.data).length>0}},methods:{deleteItems(e,o,r){d.dialog(this.$t("Delete Confirmation"),this.$t("Are you sure you want to permanently delete the selected item?"),this.$t("Okay"),this.$t("Cancel"),this.$q).then(n=>{this.deleteRecords(e,o,r)}).catch(n=>{})},deleteRecords(e,o,r){this.$q.loading.show({spinnerSize:30,spinnerColor:"primary"}),d.fetchDataByTokenPost("deleteShippingRate","id="+e).then(n=>{o.splice(r,1)}).catch(n=>{d.notify("red-5",n,"error_outline",this.$q)}).then(n=>{this.$q.loading.hide()})},refresh(e){this.resetPagination(),this.is_refresh=e},List(e,o){this.loading=!0,d.fetchDataByTokenPost("ShippingRateList","&page="+e).then(r=>{r.code==1?(this.page=e,this.data.push(r.details.data)):r.code==3&&(this.data_done=!0,d.empty(this.$refs.nscroll)||this.$refs.nscroll.stop())}).catch(r=>{this.data_done=!0,d.empty(this.$refs.nscroll)||this.$refs.nscroll.stop()}).then(r=>{o(),this.loading=!1,d.empty(this.is_refresh)||this.is_refresh()})},resetPagination(){this.page=0,this.data=[],this.$refs.nscroll.reset(),this.$refs.nscroll.resume(),this.$refs.nscroll.trigger()}}},O={class:"flex flex-center text-center"},F={class:"radius8 bg-green-10 text-white q-pa-xs text-center q-pl-sm q-pr-sm"},j={class:"font14 text-weight-bold"},M={class:"column items-center col-12 q-gutter-y-md"},Z={class:"col"},G={class:"col"},H={key:0,class:"full-width text-center"},J={class:"text-grey q-ma-none"};function K(e,o,r,n,h,f){const b=P("TableSkeleton");return a(),m(N,{onRefresh:f.refresh},{default:t(()=>[s(z,{class:v([{"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode,"flex items-center":!h.loading&&!f.hasData},"q-pr-md q-pl-md"])},{default:t(()=>[s(B,{ref:"nscroll",onLoad:f.List,offset:250},{default:t(()=>[s(L,{separator:"",class:v(["bg-whitex",{"bg-grey600 text-white":e.$q.dark.mode,"bg-white":!e.$q.dark.mode}])},{default:t(()=>[(a(!0),p(y,null,Q(h.data,g=>(a(),p(y,{key:g},[(a(!0),p(y,null,Q(g,(i,w)=>(a(),m(C,{key:i,clickable:""},{default:t(()=>[s(k,{avatar:"",top:""},{default:t(()=>[l("div",O,[l("div",null,[l("div",F,[l("div",j," #"+c(i.id),1)])])])]),_:2},1024),s(k,{top:""},{default:t(()=>[s($,{class:"text-darkx"},{default:t(()=>[q(c(i.shipping_type)+" - "+c(i.distance_price),1)]),_:2},1024),s($,{caption:""},{default:t(()=>[q(c(i.distance),1)]),_:2},1024),s($,{caption:""},{default:t(()=>[q(c(i.estimation),1)]),_:2},1024)]),_:2},1024),s(k,{side:"",class:"row items-stretch",top:""},{default:t(()=>[l("div",M,[l("div",Z,[s(u,{round:"",color:e.$q.dark.mode?"grey500":"primary","text-color":e.$q.dark.mode?"grey300":"white",icon:"las la-edit",size:"sm",unelevated:"",to:{path:"/rates/update-rate",query:{id:i.id}}},null,8,["color","text-color","to"])]),l("div",G,[n.AccessStore.hasAccess("services.chargestable_delete")?(a(),m(u,{key:0,round:"",color:e.$q.dark.mode?"grey500":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark",icon:"o_delete",size:"sm",unelevated:"",onClick:R(U=>f.deleteItems(i.id,g,w),["stop"])},null,8,["color","text-color","onClick"])):_("",!0)])])]),_:2},1024)]),_:2},1024))),128))],64))),128))]),_:1},8,["class"])]),loading:t(()=>[h.page<=0?(a(),m(b,{key:0,rows:10})):h.data.length>1?(a(),m(b,{key:1,rows:1})):_("",!0)]),_:1},8,["onLoad"]),!f.hasData&&!h.loading?(a(),p("div",H,[l("p",J,c(e.$t("No available data")),1)])):_("",!0),s(I,{position:"bottom-right",offset:[18,18]},{default:t(()=>[s(u,{icon:"las la-plus",round:"",size:"md",color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark",unelevated:"",to:"/rates/create-rate"},null,8,["color","text-color"])]),_:1}),s(T,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:t(()=>[s(u,{fab:"",icon:"keyboard_arrow_up",color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark",dense:"",padding:"3px"},null,8,["color","text-color"])]),_:1})]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var he=x(E,[["render",K]]);export{he as default};
