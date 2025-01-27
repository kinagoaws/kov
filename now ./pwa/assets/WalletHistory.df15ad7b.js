import{_ as B,u as S,X as _,ar as x,p as k,q as o,t as c,v as s,j as t,ae as e,a4 as u,a5 as w,Z as d,a1 as i,a0 as f,aj as g,ak as H,V,F as y,a3 as C,au as Q,a6 as I,a7 as D}from"./index.5da0f878.js";import{Q as L,a as N}from"./QPopupProxy.0e9a04b1.js";import{Q as P}from"./QSkeleton.846fbbc5.js";import{Q as T}from"./QCircularProgress.c739f372.js";import{Q as v}from"./QItemLabel.6219c46e.js";import{Q as W}from"./QList.d63bde81.js";import{Q as z}from"./QInfiniteScroll.fdf8cbfc.js";import{Q as E}from"./QPage.ab42a258.js";import{Q as R}from"./QPullToRefresh.b2c7d1c7.js";import{C as b}from"./ClosePopup.1829ecf0.js";import"./use-render-cache.3aae9b27.js";import"./format.de7e9769.js";import"./QMenu.1610252a.js";import"./position-engine.78f240dd.js";import"./selection.a405500a.js";import"./TouchPan.b989d673.js";const j={name:"WalletHistory",data(){return{date_selected:"",date_start:"",date_end:"",loading:!1,loading_summary:!1,balance:[],data:[],page:0,proxyDate:void 0,date_now:""}},setup(){return{Activity:S()}},created(){this.Activity.setTitle(this.$t("History")),this.date_now=_.getDateNow(),this.getWalletBalance()},computed:{hasData(){return Object.keys(this.data).length>0}},components:{CalendarHalf:x(()=>Q(()=>import("./CalendarHalf.6aa154e9.js"),["assets/CalendarHalf.6aa154e9.js","assets/index.5da0f878.js","assets/index.96a3fb36.css","assets/swiper.min.3affc74f.js","assets/swiper.min.b39a1361.css"])),CashinAmountselection:x(()=>Q(()=>import("./CashinAmountselection.0b72c13b.js"),["assets/CashinAmountselection.0b72c13b.js","assets/QToolbarTitle.56a1528c.js","assets/index.5da0f878.js","assets/index.96a3fb36.css","assets/QToolbar.b7ddade1.js","assets/QBtnGroup.29bfca95.js","assets/QSpace.334d24e5.js","assets/QForm.8e908865.js"]))},methods:{getWalletBalance(a){this.loading=!0,_.fetchDataByTokenPost("getWalletBalance").then(r=>{this.balance=r.details.balance}).catch(r=>{}).then(r=>{this.loading=!1,_.empty(a)||a()})},afterSelectdate(a){this.date_selected=a,this.resetPagination()},getHistory(a,r){this.loading_summary=!0,_.fetchDataByTokenPost("walletHistory","page="+a+"&date="+this.date_selected+"&date_start="+this.date_start+"&date_end="+this.date_end).then(m=>{this.page=a,this.data.push(m.details.data)}).catch(m=>{_.empty(this.$refs.nscroll)||this.$refs.nscroll.stop()}).then(m=>{r(),this.loading_summary=!1})},refresh(a){this.getWalletBalance(a),this.resetPagination()},resetPagination(){this.page=0,this.data=[],this.$refs.nscroll.reset(),this.$refs.nscroll.resume(),this.$refs.nscroll.trigger()},resetFilter(){this.date_selected="",this.date_start="",this.resetPagination()},updateProxy(){console.log("updateProxy=>"+this.date_now),this.proxyDate=this.date_now},filterByDate(){console.log(this.proxyDate),this.date_start=this.proxyDate.from,this.date_end=this.proxyDate.to,this.date_selected="",this.resetPagination()},showCashin(){this.$refs.cashin.dialog=!0}}},F={class:"q-pl-sm q-pr-sm q-pt-xs"},O={class:"row"},Y={class:"col-11"},M={class:"col"},K={class:"row items-center justify-end q-gutter-sm"},U={class:"row q-mb-md items-center q-col-gutter-sm"},X={class:"col-7"},Z={key:1,class:"text-white q-pa-sm radius8 bg-blue row items-center cursor-pointer"},G={class:"font12"},J={class:"text-weight-bold text-h6"},$={class:"col-5 text-center"},ee={class:"row items-center"},te={class:"text-h7 col"},ae={class:"col-3 text-right"},se={class:"q-pl-sm q-pr-sm q-pt-xs"},oe={key:0,class:"flex flex-center full-width q-pa-xl",style:{"min-height":"calc(30vh)"}},le={key:0,class:"text-center"},re={key:0,class:"flex flex-center",style:{"min-height":"calc(50vh)"}},ie={class:"text-center"},ne={class:"font16 text-weight-bold"},de={class:"font11"};function ce(a,r,m,he,l,n){const q=k("CalendarHalf"),A=k("CashinAmountselection");return o(),c(R,{onRefresh:n.refresh},{default:s(()=>[t(E,null,{default:s(()=>[e("div",F,[e("div",O,[e("div",Y,[t(q,{ref:"calendar",onAfterSelectdate:n.afterSelectdate,today_date:l.date_selected},null,8,["onAfterSelectdate","today_date"])]),e("div",M,[t(u,{icon:"event",round:"",color:"green-4",size:"sm",flat:""},{default:s(()=>[t(L,{onBeforeShow:n.updateProxy,cover:"","transition-show":"scale","transition-hide":"scale"},{default:s(()=>[t(N,{modelValue:l.proxyDate,"onUpdate:modelValue":r[0]||(r[0]=p=>l.proxyDate=p),mask:"YYYY-MM-DD",range:""},{default:s(()=>[e("div",K,[w(t(u,{label:"Cancel",color:"primary",flat:""},null,512),[[b]]),w(t(u,{label:a.$t("OK"),color:"primary",flat:"",onClick:n.filterByDate},null,8,["label","onClick"]),[[b]])])]),_:1},8,["modelValue"])]),_:1},8,["onBeforeShow"])]),_:1})])]),e("div",U,[e("div",X,[l.loading?(o(),c(P,{key:0,height:"60px",square:""})):(o(),d("div",Z,[e("div",null,[e("div",G,i(a.$t("Available balance")),1),e("div",J,i(l.balance.pretty),1)]),r[1]||(r[1]=e("div",{class:"q-pl-md"},[e("i",{class:"las la-angle-right text-bold",style:{"font-size":"18px"}})],-1))]))]),e("div",$,[l.loading?(o(),c(P,{key:0,height:"60px",square:""})):(o(),c(u,{key:1,color:"primary",outline:"","no-caps":"",onClick:n.showCashin},{default:s(()=>[f(i(a.$t("CASH IN")),1)]),_:1},8,["onClick"]))])]),e("div",ee,[e("div",te,i(a.$t("Wallet transactions")),1),e("div",ae,[l.date_selected||l.date_start?(o(),c(u,{key:0,round:"",color:"blue",icon:"las la-sync-alt",size:"sm",flat:"",onClick:n.resetFilter},null,8,["onClick"])):g("",!0)])])]),e("div",se,[t(H,{class:"no-shadow"},{default:s(()=>[t(z,{ref:"nscroll",onLoad:n.getHistory,offset:250},{loading:s(()=>[l.page<=0?(o(),d("div",oe,[t(V,{color:"primary",size:"2em"})])):(o(),d(y,{key:1},[l.data.length>1?(o(),d("div",le,[t(T,{indeterminate:"",rounded:"",size:"30px",color:"primary",class:"q-ma-md"})])):g("",!0)],64))]),default:s(()=>[!l.loading_summary&&!n.hasData?(o(),d("div",re,[e("div",ie,[e("div",ne,i(a.$t("No available data")),1),e("p",de,i(a.$t("Pull down the page to refresh")),1)])])):g("",!0),t(W,{separator:""},{default:s(()=>[(o(!0),d(y,null,C(l.data,p=>(o(),d(y,{key:p},[(o(!0),d(y,null,C(p,h=>(o(),c(I,{key:h},{default:s(()=>[t(D,null,{default:s(()=>[t(v,null,{default:s(()=>[f(i(h.transaction_amount),1)]),_:2},1024),t(v,{caption:""},{default:s(()=>[f(i(h.transaction_description),1)]),_:2},1024),t(v,{caption:""},{default:s(()=>[f(i(h.transaction_date),1)]),_:2},1024)]),_:2},1024),t(D,{side:""},{default:s(()=>[f(i(h.running_balance),1)]),_:2},1024)]),_:2},1024))),128))],64))),128))]),_:1})]),_:1},8,["onLoad"])]),_:1})])]),_:1}),t(A,{ref:"cashin"},null,512)]),_:1},8,["onRefresh"])}var qe=B(j,[["render",ce]]);export{qe as default};
