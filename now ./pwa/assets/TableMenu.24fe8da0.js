import{_ as b,aA as m,u as S,A as r,n as c,p as d,q as h,t as s,f as a,au as p,a2 as D,ar as q,$ as T,a4 as f,a1 as v,aB as u}from"./index.c29f7992.js";import{Q as $}from"./QInfiniteScroll.894949b1.js";import{Q as B}from"./QSpace.0d53e539.js";import{Q as y}from"./QPageScroller.43c9aad6.js";import{Q as L}from"./QPageSticky.335c1979.js";import{Q as P}from"./QPage.1b02519d.js";import{Q}from"./QPullToRefresh.9f003a0c.js";import"./use-page-sticky.3a081baa.js";import"./TouchPan.5fac99c8.js";import"./touch.9135741d.js";import"./selection.53b1fe34.js";import"./format.de7e9769.js";const w={name:"OrdersList",components:{TableSummary:m(()=>u(()=>import("./TableSummary.454f9038.js"),["assets/TableSummary.454f9038.js","assets/QSkeleton.81a2bab8.js","assets/index.c29f7992.js","assets/index.8924bfb8.css","assets/swiper.min.38e7e8ee.js","assets/swiper.min.b39a1361.css"])),TableBookingList:m(()=>u(()=>import("./TableBookingList.f71a2686.js"),["assets/TableBookingList.f71a2686.js","assets/QSpace.0d53e539.js","assets/index.c29f7992.js","assets/index.8924bfb8.css","assets/QBadge.50ff0feb.js","assets/QItemLabel.1db45aa2.js","assets/QList.04c37cb8.js","assets/AccessStore.abc714c5.js"])),TableSkeleton:m(()=>u(()=>import("./TableSkeleton.3238dea0.js"),["assets/TableSkeleton.3238dea0.js","assets/QSkeleton.81a2bab8.js","assets/index.c29f7992.js","assets/index.8924bfb8.css","assets/QItemLabel.1db45aa2.js","assets/QList.04c37cb8.js"]))},setup(){return{DataStore:S()}},data(){return{loading:!1,data:[],page:0,is_refresh:void 0,data_done:!1,fabaddon:void 0,status:[],loading_summary:!0,data_summary:[]}},created(){this.reservationSummary()},mounted(){this.DataStore.getTableList()},computed:{hasData(){return Object.keys(this.data).length>0}},methods:{refresh(e){this.resetPagination(),this.reservationSummary(),this.DataStore.getTableList(),this.is_refresh=e},reservationList(e,i){this.loading=!0,r.fetchDataByTokenPost("reservationList","&page="+e).then(t=>{t.code==1?(this.page=e,this.data.push(t.details.data),this.status=t.details.status_list):t.code==3&&(this.data_done=!0,console.log("end 3"),r.empty(this.$refs.nscroll)||this.$refs.nscroll.stop())}).catch(t=>{this.data_done=!0,r.empty(this.$refs.nscroll)||this.$refs.nscroll.stop()}).then(t=>{i(),this.loading=!1,r.empty(this.is_refresh)||this.is_refresh()})},resetPagination(){this.page=0,this.data=[],this.$refs.nscroll.reset(),this.$refs.nscroll.resume(),this.$refs.nscroll.trigger()},reservationSummary(){this.loading_summary=!0,r.fetchDataByTokenPost("reservationSummary").then(e=>{this.data_summary=e.details.data}).catch(e=>{}).then(e=>{this.loading_summary=!1})},confirmDelete(e,i,t){this.$q.dialog({title:this.$t("Delete Confirmation"),message:this.$t("Are you sure you want to permanently delete the selected item?"),transitionShow:"fade",transitionHide:"fade",cancel:!0,ok:{size:"md",label:this.$t("Okay"),unelevated:!0,color:"primary","text-color":"white","no-caps":!0},cancel:{size:"md",label:this.$t("Cancel"),outline:!0,color:this.$q.dark.mode?"grey600":"grey","text-color":this.$q.dark.mode?"grey300":"dark","no-caps":!0}}).onOk(()=>{this.deleteBooking(e,i,t)}).onCancel(()=>{}).onDismiss(()=>{})},deleteBooking(e,i,t){this.$q.loading.show({spinnerSize:30,spinnerColor:"primary"}),r.fetchDataByTokenPost("deleteBooking","id="+e).then(l=>{r.notify("light-green",l.msg,"check_circle",this.$q),i.splice(t,1)}).catch(l=>{}).then(l=>{this.$q.loading.hide()})}}},C={key:0,class:"full-width text-center"},x={class:"text-grey q-ma-none"};function A(e,i,t,l,o,n){const _=c("TableSummary"),k=c("TableBookingList"),g=c("TableSkeleton");return d(),h(Q,{onRefresh:n.refresh},{default:s(()=>[a(P,{class:v([{"flex items-start":!o.loading&&!n.hasData,"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode},"q-pr-md q-pl-md"])},{default:s(()=>[a(_,{ref:"table_summary",loading:o.loading_summary,data:o.data_summary},null,8,["loading","data"]),a($,{ref:"nscroll",onLoad:n.reservationList,offset:250},{default:s(()=>[a(k,{data:o.data,status:o.status,onConfirmDelete:n.confirmDelete},null,8,["data","status","onConfirmDelete"])]),loading:s(()=>[o.page<=0?(d(),h(g,{key:0,rows:10})):o.data.length>1?(d(),h(g,{key:1,rows:1})):p("",!0)]),_:1},8,["onLoad"]),!n.hasData&&!o.loading?(d(),D("div",C,[q("p",x,T(e.$t("No available data")),1)])):p("",!0),a(B,{class:"q-pa-lg"}),a(y,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:s(()=>[a(f,{fab:"",icon:"keyboard_arrow_up",color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark",dense:"",padding:"3px"},null,8,["color","text-color"])]),_:1}),a(L,{position:"bottom-right",offset:[18,18]},{default:s(()=>[a(f,{icon:"las la-plus",round:"",size:"md",color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark",unelevated:"",to:"/tables/create_reservation"},null,8,["color","text-color"])]),_:1}),a(y,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:s(()=>[a(f,{fab:"",icon:"keyboard_arrow_up",color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark",dense:"",padding:"3px"},null,8,["color","text-color"])]),_:1})]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var J=b(w,[["render",A]]);export{J as default};
