import{_ as f,u,X as i,q as o,Z as n,j as t,v as e,$ as g,F as y,a4 as m,a0 as v,a1 as c,t as _,bq as p,ae as d,ak as P,aj as h}from"./index.5da0f878.js";import{Q as k}from"./QToolbarTitle.56a1528c.js";import{Q}from"./QToolbar.b7ddade1.js";import{Q as b}from"./QHeader.6b7f1431.js";import{Q as T}from"./QPage.ab42a258.js";import"./QResizeObserver.21f20b80.js";const x={name:"PrivacyPolicy",setup(){return{Activity:u()}},data(){return{data:[],loading:!1}},computed:{hasData(){return Object.keys(this.data).length>0}},created(){this.Activity.setTitle(this.$t("Privacy Policy")),this.getPage()},methods:{getPage(){this.loading=!0,i.showLoadingBox("",this.$q),i.fetchDataByToken("getPage",{page:"page_driver_privacy"}).then(a=>{this.data=a.details,this.Activity.setTitle(this.data.title)}).catch(a=>{this.data=[]}).then(a=>{this.loading=!1,i.hideLoadingBox(this.$q)})}}},B=["innerHTML"],A={key:1},C={class:"font16 text-weight-bold"};function D(a,l,$,w,s,r){return o(),n(y,null,[t(b,{class:"bg-white",reveal:"","reveal-offset":"50"},{default:e(()=>[t(Q,null,{default:e(()=>[t(m,{onClick:l[0]||(l[0]=N=>a.$router.back()),flat:"",round:"",dense:"",icon:"arrow_back",color:"dark"}),t(k,{class:"text-grey-10"},{default:e(()=>[v(c(a.$t("Privacy Policy")),1)]),_:1})]),_:1})]),_:1}),t(T,{padding:"",class:g(["bg-grey-1",{"flex flex-center":!r.hasData}])},{default:e(()=>[!s.loading&&r.hasData?(o(),_(P,{key:0},{default:e(()=>[t(p,null,{default:e(()=>[d("div",{innerHTML:s.data.long_content},null,8,B)]),_:1})]),_:1})):h("",!0),!s.loading&&!r.hasData?(o(),n("div",A,[d("div",C,c(a.$t("No available data")),1)])):h("",!0)]),_:1},8,["class"])],64)}var F=f(x,[["render",D]]);export{F as default};
