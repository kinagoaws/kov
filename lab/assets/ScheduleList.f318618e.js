import{_ as w,aA as x,u as Q,A as n,n as L,p as a,q as u,t,f as s,a1 as S,a2 as m,a3 as b,F as _,au as g,ar as l,$ as f,a4 as y,aB as A,a6 as C,a7 as k,Z as q,dy as D}from"./index.c29f7992.js";import{Q as v}from"./QItemLabel.1db45aa2.js";import{Q as P}from"./QList.04c37cb8.js";import{Q as B}from"./QInfiniteScroll.894949b1.js";import{Q as I}from"./QPageSticky.335c1979.js";import{Q as T}from"./QPage.1b02519d.js";import{Q as z}from"./QPullToRefresh.9f003a0c.js";import{u as R}from"./AccessStore.abc714c5.js";import"./use-page-sticky.3a081baa.js";import"./TouchPan.5fac99c8.js";import"./touch.9135741d.js";import"./selection.53b1fe34.js";import"./format.de7e9769.js";const N={name:"ZoneList",components:{TableSkeleton:x(()=>A(()=>import("./TableSkeleton.3238dea0.js"),["assets/TableSkeleton.3238dea0.js","assets/QSkeleton.81a2bab8.js","assets/index.c29f7992.js","assets/index.8924bfb8.css","assets/QItemLabel.1db45aa2.js","assets/QList.04c37cb8.js"]))},setup(){const e=Q(),o=R();return{DataStore:e,AccessStore:o}},data(){return{loading:!1,data:[],page:0,status:[],is_refresh:void 0,handle:void 0}},computed:{hasData(){return Object.keys(this.data).length>0}},methods:{deleteItems(e,o,r){n.dialog(this.$t("Delete Confirmation"),this.$t("Are you sure you want to permanently delete the selected item?"),this.$t("Okay"),this.$t("Cancel"),this.$q).then(i=>{this.deleteRecords(e,o,r)}).catch(i=>{this.close()})},deleteRecords(e,o,r){this.$q.loading.show({spinnerSize:30,spinnerColor:"primary"}),n.fetchDataByTokenPost("deleteSchedule","id="+e).then(i=>{o.splice(r,1)}).catch(i=>{n.notify("red-5",i,"error_outline",this.$q)}).then(i=>{this.$q.loading.hide()})},refresh(e){this.resetPagination(),this.is_refresh=e},List(e,o){this.loading=!0,n.fetchDataByTokenPost("ScheduleList","&page="+e).then(r=>{r.code==1?(this.page=e,this.data.push(r.details.data)):r.code==3&&(this.data_done=!0,n.empty(this.$refs.nscroll)||this.$refs.nscroll.stop())}).catch(r=>{this.data_done=!0,n.empty(this.$refs.nscroll)||this.$refs.nscroll.stop()}).then(r=>{o(),this.loading=!1,n.empty(this.is_refresh)||this.is_refresh()})},resetPagination(){this.page=0,this.data=[],this.$refs.nscroll.reset(),this.$refs.nscroll.resume(),this.$refs.nscroll.trigger()}}},V={class:"flex flex-center text-center"},E={class:"radius8 bg-green-10 text-white q-pa-xs text-center q-pl-sm q-pr-sm"},O={class:"font14 text-weight-bold"},F={class:"column items-center col-12 q-gutter-y-md"},Z={class:"col"},j={class:"col"},M={key:0,class:"full-width text-center"},G={class:"text-grey q-ma-none"};function H(e,o,r,i,c,h){const $=L("TableSkeleton");return a(),u(z,{onRefresh:h.refresh},{default:t(()=>[s(T,{class:S([{"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode,"flex items-center":!c.loading&&!h.hasData},"q-pr-md q-pl-md"])},{default:t(()=>[s(B,{ref:"nscroll",onLoad:h.List,offset:250},{default:t(()=>[s(P,{separator:"",class:S(["bg-whitex",{"bg-grey600 text-white":e.$q.dark.mode,"bg-white":!e.$q.dark.mode}])},{default:t(()=>[(a(!0),m(_,null,b(c.data,p=>(a(),m(_,{key:p},[(a(!0),m(_,null,b(p,d=>(a(),u(C,{key:d,clickable:""},{default:t(()=>[s(k,{avatar:"",top:""},{default:t(()=>[l("div",V,[l("div",null,[l("div",E,[l("div",O," #"+f(d.schedule_id),1)])])])]),_:2},1024),s(k,{top:""},{default:t(()=>[s(v,{caption:""},{default:t(()=>[q(f(d.date_created),1)]),_:2},1024),s(v,{class:"text-darkx"},{default:t(()=>[q(f(d.driver_name),1)]),_:2},1024),s(v,{class:"ellipsis-2-lines"},{default:t(()=>[q(f(d.zone_name),1)]),_:2},1024)]),_:2},1024),s(k,{side:"",class:"row items-stretch",top:""},{default:t(()=>[l("div",F,[l("div",Z,[s(y,{round:"",color:e.$q.dark.mode?"grey500":"primary","text-color":e.$q.dark.mode?"grey300":"white",icon:"las la-edit",size:"sm",unelevated:"",to:{path:"/driver/update-schedule",query:{id:d.schedule_uuid}}},null,8,["color","text-color","to"])]),l("div",j,[i.AccessStore.hasAccess("merchantdriver.schedule_delete")?(a(),u(y,{key:0,round:"",color:e.$q.dark.mode?"grey500":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark",icon:"o_delete",size:"sm",unelevated:"",onClick:D(J=>h.deleteItems(d.schedule_uuid,p,e.index),["stop"])},null,8,["color","text-color","onClick"])):g("",!0)])])]),_:2},1024)]),_:2},1024))),128))],64))),128))]),_:1},8,["class"])]),loading:t(()=>[c.page<=0?(a(),u($,{key:0,rows:10})):c.data.length>1?(a(),u($,{key:1,rows:1})):g("",!0)]),_:1},8,["onLoad"]),!h.hasData&&!c.loading?(a(),m("div",M,[l("p",G,f(e.$t("No available data")),1)])):g("",!0),s(I,{position:"bottom-right",offset:[18,18]},{default:t(()=>[s(y,{icon:"las la-plus",round:"",size:"md",color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark",unelevated:"",to:"/driver/create-schedule"},null,8,["color","text-color"])]),_:1})]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var de=w(N,[["render",H]]);export{de as default};
