import{_ as q,ar as C,u as B,X as _,p as v,q as o,t as g,v as s,j as e,ae as a,a4 as w,a5 as S,Z as d,F as u,a3 as D,a1 as r,ak as A,V as T,aj as x,au as V,a6 as N,a7 as Q,a8 as H,a0 as f}from"./index.5da0f878.js";import{Q as I,a as L}from"./QPopupProxy.0e9a04b1.js";import{Q as j}from"./QSkeleton.846fbbc5.js";import{Q as z}from"./QCircularProgress.c739f372.js";import{Q as p}from"./QItemLabel.6219c46e.js";import{Q as O}from"./QList.d63bde81.js";import{Q as R}from"./QInfiniteScroll.fdf8cbfc.js";import{Q as Y}from"./QPage.ab42a258.js";import{Q as E}from"./QPullToRefresh.b2c7d1c7.js";import{C as k}from"./ClosePopup.1829ecf0.js";import{S as F,a as M}from"./swiper.min.3affc74f.js";import"./use-render-cache.3aae9b27.js";import"./format.de7e9769.js";import"./QMenu.1610252a.js";import"./position-engine.78f240dd.js";import"./selection.a405500a.js";import"./TouchPan.b989d673.js";const $={name:"PageName",data(){return{calendar:"1",loading:!0,loading_summary:!0,data:[],page:0,data_done:!1,order_meta:[],merchant:[],payment_list:[],summary_data:[],date_start:"",date_end:"",proxyDate:void 0}},components:{Swiper:F,SwiperSlide:M,CalendarHalf:C(()=>V(()=>import("./CalendarHalf.6aa154e9.js"),["assets/CalendarHalf.6aa154e9.js","assets/index.5da0f878.js","assets/index.96a3fb36.css","assets/swiper.min.3affc74f.js","assets/swiper.min.b39a1361.css"]))},setup(){return{Activity:B()}},created(){this.Activity.setTitle(this.$t("History")),this.date_start=_.getDateNow(),this.date_end=_.getDateNow(),this.getDeliverySummary()},computed:{hasData(){return Object.keys(this.data).length>0}},methods:{filterByDate(){this.date_start=this.proxyDate.from,this.date_end=this.proxyDate.to,this.resetPagination()},afterSelectdate(t){console.log(t),this.date_start=t,this.date_end=t,this.resetPagination(),this.getDeliverySummary()},refresh(t){this.getDeliverySummary(t),this.resetPagination()},getDeliverySummary(t){this.loading_summary=!0,_.fetchDataByTokenPost("deliverysummary","date_start="+this.date_start+"&date_end="+this.date_end).then(n=>{this.summary_data=n.details}).catch(n=>{this.summary_data=[]}).then(n=>{this.loading_summary=!1,_.empty(t)||t()})},getHistory(t,n){this.loading=!0,_.fetchDataByTokenPost("orderhistory","page="+t+"&date_start="+this.date_start+"&date_end="+this.date_end).then(h=>{this.page=t,this.data.push(h.details.data),this.order_meta=h.details.order_meta}).catch(h=>{_.empty(this.$refs.nscroll)||this.$refs.nscroll.stop()}).then(h=>{n(),this.loading=!1})},resetPagination(){this.page=0,this.data=[],this.order_meta=[],this.$refs.nscroll.reset(),this.$refs.nscroll.resume(),this.$refs.nscroll.trigger()}}},K={class:"q-pl-sm q-pr-sm q-pt-xs"},U={class:"row"},X={class:"col-11"},Z={class:"col"},G={class:"row items-center justify-end q-gutter-sm"},J={key:0,class:"q-mb-sm"},W={class:"row q-col-gutter-sm"},ee={class:"text-white q-pa-sm radius8 bg-blue"},te={class:"font12"},ae={class:"text-weight-bold"},se={class:"text-white q-pa-sm radius8 bg-green-4"},re={class:"font12"},oe={class:"text-weight-bold"},ie={class:"text-white q-pa-sm radius8 bg-amber-14"},le={class:"font12"},de={class:"text-weight-bold"},ne={class:"text-white q-pa-sm radius8",style:{"background-color":"#9689e7"}},ce={class:"font12"},_e={class:"text-weight-bold"},he={class:"text-h7"},me={class:"q-pl-sm q-pr-sm q-pt-xs"},ue={key:0,class:"flex flex-center full-width q-pa-xl",style:{"min-height":"calc(30vh)"}},fe={key:0,class:"text-center"},pe={key:0,class:"flex flex-center",style:{"min-height":"calc(50vh)"}},ye={class:"text-center"},ge={class:"font16 text-weight-bold"},ve={class:"font11"};function we(t,n,h,De,i,m){const b=v("CalendarHalf"),y=v("swiper-slide"),P=v("swiper");return o(),g(E,{onRefresh:m.refresh},{default:s(()=>[e(Y,null,{default:s(()=>[a("div",K,[a("div",U,[a("div",X,[e(b,{ref:"calendar",onAfterSelectdate:m.afterSelectdate,today_date:i.date_start},null,8,["onAfterSelectdate","today_date"])]),a("div",Z,[e(w,{icon:"event",round:"",color:"green-4",size:"sm",flat:""},{default:s(()=>[e(I,{onBeforeShow:t.updateProxy,cover:"","transition-show":"scale","transition-hide":"scale"},{default:s(()=>[e(L,{modelValue:i.proxyDate,"onUpdate:modelValue":n[0]||(n[0]=c=>i.proxyDate=c),mask:"YYYY-MM-DD",range:""},{default:s(()=>[a("div",G,[S(e(w,{label:"Cancel",color:"primary",flat:""},null,512),[[k]]),S(e(w,{label:t.$t("OK"),color:"primary",flat:"",onClick:m.filterByDate},null,8,["label","onClick"]),[[k]])])]),_:1},8,["modelValue"])]),_:1},8,["onBeforeShow"])]),_:1})])]),i.loading_summary?(o(),d("div",J,[a("div",W,[(o(),d(u,null,D(3,c=>a("div",{key:c,class:"col"},[e(j,{height:"60px",square:""})])),64))])])):(o(),g(P,{key:1,slidesPerView:2.5,spaceBetween:10,onSwiper:t.onSwiper,class:"q-mb-md"},{default:s(()=>[e(y,null,{default:s(()=>[a("div",ee,[a("div",te,r(t.$t("Total delivered")),1),a("div",ae,r(i.summary_data.total_deliveries),1)])]),_:1}),e(y,null,{default:s(()=>[a("div",se,[a("div",re,r(t.$t("Cash collected")),1),a("div",oe,r(i.summary_data.cash_collected),1)])]),_:1}),e(y,null,{default:s(()=>[a("div",ie,[a("div",le,r(t.$t("Delivery pay")),1),a("div",de,r(i.summary_data.total_delivery_pay),1)])]),_:1}),e(y,null,{default:s(()=>[a("div",ne,[a("div",ce,r(t.$t("Total Tips")),1),a("div",_e,r(i.summary_data.total_tips),1)])]),_:1})]),_:1},8,["onSwiper"])),a("div",he,r(t.$t("Transaction history")),1)]),a("div",me,[e(A,{class:"no-shadow"},{default:s(()=>[e(R,{ref:"nscroll",onLoad:m.getHistory,offset:250},{loading:s(()=>[i.page<=0?(o(),d("div",ue,[e(T,{color:"primary",size:"2em"})])):(o(),d(u,{key:1},[i.data.length>1?(o(),d("div",fe,[e(z,{indeterminate:"",rounded:"",size:"30px",color:"primary",class:"q-ma-md"})])):x("",!0)],64))]),default:s(()=>[!i.loading&&!m.hasData?(o(),d("div",pe,[a("div",ye,[a("div",ge,r(t.$t("No available data")),1),a("p",ve,r(t.$t("Pull down the page to refresh")),1)])])):x("",!0),e(O,{separator:""},{default:s(()=>[(o(!0),d(u,null,D(i.data,c=>(o(),d(u,{key:c},[(o(!0),d(u,null,D(c,l=>(o(),g(N,{key:l},{default:s(()=>[e(Q,{avatar:"",style:{"min-width":"35px"}},{default:s(()=>[e(H,{color:l.online_payment?"blue":"green-4","text-color":"white",size:"md",icon:l.online_payment?"las la-credit-card":"las la-hand-holding-usd"},null,8,["color","icon"])]),_:2},1024),e(Q,null,{default:s(()=>[e(p,null,{default:s(()=>[f(r(l.order_id),1)]),_:2},1024),e(p,{caption:""},{default:s(()=>[f(r(l.merchant.restaurant_name),1)]),_:2},1024),e(p,{caption:"",class:"font11"},{default:s(()=>[f(r(l.total),1)]),_:2},1024)]),_:2},1024),e(Q,{side:""},{default:s(()=>[e(p,null,{default:s(()=>[f(r(l.delivery_pay),1)]),_:2},1024),l.courier_tip_raw>0?(o(),g(p,{key:0,caption:"",class:"font11"},{default:s(()=>[f(r(l.delivery_fee)+" + "+r(l.courier_tip)+" "+r(t.$t("tips")),1)]),_:2},1024)):x("",!0)]),_:2},1024)]),_:2},1024))),128))],64))),128))]),_:1})]),_:1},8,["onLoad"])]),_:1})])]),_:1})]),_:1},8,["onRefresh"])}var ze=q($,[["render",we]]);export{ze as default};
