import{_ as q,U as S,X as _,m as r,n as u,p as e,f as a,Q as x,S as p,R as s,af as y,bh as w,bg as T,$ as k,a0 as c,P as o,Y as i,Z as Q,F as m,ac as P}from"./index.c5b868f5.js";import{Q as C}from"./QToolbarTitle.4da9f270.js";import{Q as D}from"./QToolbar.9b15bf0e.js";import{Q as L}from"./QHeader.b374650f.js";import{Q as b}from"./QItemLabel.4665782c.js";import{Q as $}from"./QCircularProgress.1d7da185.js";import{Q as V}from"./QTab.efd359a5.js";import{Q as A}from"./QTabs.54389c7c.js";import{Q as B}from"./QList.9b7158f1.js";import{Q as I}from"./QInnerLoading.ff23f6a9.js";import{Q as N}from"./QInfiniteScroll.e5ee4582.js";import{Q as z}from"./QPageScroller.9f5fda23.js";import{Q as R}from"./QPage.528ab8a8.js";import{Q as j}from"./QPullToRefresh.85618661.js";import"./QResizeObserver.3ed5059f.js";import"./format.8ac60962.js";import"./rtl.276c3f1b.js";import"./use-page-sticky.ec3ca395.js";import"./TouchPan.5486290b.js";import"./touch.9135741d.js";import"./selection.65959ca5.js";const U={name:"PointPage",setup(){return{SettingStore:S()}},data(){return{data:[],loading:!1,tab:"transaction",tabList:[{value:"transaction",label:this.$t("Transactions")},{value:"points_merchant",label:this.$t("Points by merchant")}],page:0,is_refresh:void 0,balance:0,loading_balance:!0}},mounted(){Object.keys(this.SettingStore.settings_data).length>0?this.SettingStore.settings_data.points_enabled?this.getAvailablePoints():this.$router.push("/home"):this.$watch(()=>this.SettingStore.$state.settings_data,(t,f)=>{t.points_enabled?this.getAvailablePoints():this.$router.push("/home")})},computed:{hasData(){return this.data.length>0},getData(){return this.data}},methods:{async refresh(t){await this.getAvailablePoints(),this.resetPagination(),t()},async getAvailablePoints(){this.loading_balance=!0,_.fetchDataByTokenPost("getAvailablePoints").then(t=>{t.code==1?this.balance=t.details.total:this.balance=0}).catch(t=>{}).then(t=>{this.loading_balance=!1})},getTransactions(t,f){this.loading=!0,this.page=t;const v=this.tab=="transaction"?"getPointsTransaction":"getPointsTransactionMerchant";_.fetchDataByTokenPost(v,"page="+t).then(h=>{h.code==1?(this.data.push(h.details.data),h.details.end_results&&this.$refs.nscroll&&this.$refs.nscroll.stop()):this.$refs.nscroll&&this.$refs.nscroll.stop()}).catch(h=>{this.$refs.nscroll&&this.$refs.nscroll.stop()}).then(h=>{this.loading=!1,f(),_.empty(this.is_refresh)||this.is_refresh()})},tabChange(){this.resetPagination()},resetPagination(){this.page=0,this.data=[],this.$refs.nscroll.reset(),this.$refs.nscroll.resume(),this.$refs.nscroll.trigger()}}},F={class:"text-weight-bold text-body1"},Y={key:1,class:"text-weight-bold text-yellow-9 text-h6"},E={class:"q-pl-md q-pr-md q-pt-sm"},H={class:"q-pl-md q-pr-md q-pb-xl"},M={class:"text-bold text-green"},O={key:0,class:"card-form flex flex-center text-body2 text-grey"},X={key:1,class:"row justify-center absolute-bottom"},Z={class:"q-pa-md flex flex-center"},G={class:"flex items-center q-gutter-x-sm"},J={class:"text-body2 text-grey"};function K(t,f,v,h,l,g){return r(),u(j,{onRefresh:g.refresh},{default:e(()=>[a(L,{reveal:"",class:y({"bg-mydark text-white":t.$q.dark.mode,"bg-white text-dark":!t.$q.dark.mode})},{default:e(()=>[a(D,null,{default:e(()=>[a(x,{onClick:f[0]||(f[0]=n=>t.$router.back()),round:"",dense:"",icon:"arrow_back",unelevated:"",color:t.$q.dark.mode?"grey":"mygrey","text-color":t.$q.dark.mode?"grey-9":"dark"},null,8,["color","text-color"]),a(C,{class:"text-weight-bold"},{default:e(()=>[p(s(t.$t("Points")),1)]),_:1})]),_:1})]),_:1},8,["class"]),a(R,null,{default:e(()=>[a(w,{flat:""},{default:e(()=>[a(T,{class:"q-pt-none q-pb-none"},{default:e(()=>[a(k,null,{default:e(()=>[a(c,null,{default:e(()=>[a(b,{class:"text-weight-bold"},{default:e(()=>[o("div",F,s(t.$t("Available Points")),1)]),_:1}),a(b,{caption:""},{default:e(()=>[p(s(t.$t("Your points transaction history")),1)]),_:1})]),_:1}),a(c,{side:"",top:""},{default:e(()=>[a(b,null,{default:e(()=>[l.loading_balance?(r(),u($,{key:0,indeterminate:"",rounded:"",size:"25px",color:"primary"})):(r(),i("div",Y,s(l.balance),1))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o("div",E,[o("div",{class:y(["border-dark-greyx q-pa-xs radius20 q-mb-md",{"border-none bg-grey600":t.$q.dark.mode,"border-dark-grey":!t.$q.dark.mode}])},[a(A,{modelValue:l.tab,"onUpdate:modelValue":[f[1]||(f[1]=n=>l.tab=n),g.tabChange],dense:"",class:"text-grey","indicator-color":"transparent","active-color":"primary",align:"justify","narrow-indicator":"","no-caps":""},{default:e(()=>[(r(!0),i(m,null,Q(l.tabList,n=>(r(),u(V,{key:n,name:n.value,label:n.label,"no-caps":"","content-class":"text-weight-500 "},null,8,["name","label"]))),128))]),_:1},8,["modelValue","onUpdate:modelValue"])],2)]),o("div",H,[a(N,{ref:"nscroll",onLoad:g.getTransactions,offset:250},{default:e(()=>[g.hasData?(r(),u(B,{key:0,separator:""},{default:e(()=>[(r(!0),i(m,null,Q(g.getData,n=>(r(),i(m,{key:n},[(r(!0),i(m,null,Q(n,d=>(r(),i(m,{key:d.transaction_date},[l.tab=="transaction"?(r(),u(k,{key:0},{default:e(()=>[a(c,null,{default:e(()=>[a(b,null,{default:e(()=>[p(s(d.transaction_description),1)]),_:2},1024),a(b,{caption:""},{default:e(()=>[p(s(d.transaction_date),1)]),_:2},1024)]),_:2},1024),a(c,{side:""},{default:e(()=>[o("div",{class:y(["text-bold",{"text-green":d.transaction_type=="credit","text-red":d.transaction_type=="debit"}])},s(d.transaction_amount),3)]),_:2},1024)]),_:2},1024)):(r(),u(k,{key:1},{default:e(()=>[a(c,null,{default:e(()=>[a(c,null,{default:e(()=>[p(s(d.restaurant_name),1)]),_:2},1024)]),_:2},1024),a(c,{side:""},{default:e(()=>[a(c,null,{default:e(()=>[o("div",M,s(d.total_earning),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))],64))),128))],64))),128))]),_:1})):(r(),i(m,{key:1},[l.loading?P("",!0):(r(),i("div",O,[o("div",null,s(t.$t("No available data")),1)]))],64))]),loading:e(()=>[l.page<=1?(r(),u(I,{key:0,showing:!0,color:"primary",size:"md"})):l.page>1?(r(),i("div",X,[o("div",Z,[o("div",G,[o("div",null,[a($,{indeterminate:"",rounded:"",size:"30px",color:"primary"})]),o("div",J,s(t.$t("loading")),1)])])])):P("",!0)]),_:1},8,["onLoad"])]),a(z,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:e(()=>[a(x,{fab:"",icon:"keyboard_arrow_up",color:t.$q.dark.mode?"grey":"grey-2","text-color":t.$q.dark.mode?"grey-9":"grey",padding:"xs"},null,8,["color","text-color"])]),_:1})]),_:1})]),_:1},8,["onRefresh"])}var ke=q(U,[["render",K]]);export{ke as default};
