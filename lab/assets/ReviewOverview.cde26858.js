import{Q as d}from"./QSkeleton.81a2bab8.js";import{Q as u}from"./QSpace.0d53e539.js";import{Q as w}from"./QLinearProgress.1ae2a418.js";import{_ as f,A as c,p as i,a2 as l,ar as t,f as e,F as v,$ as o,t as h,b9 as p,a3 as _,b8 as m,a4 as y}from"./index.c29f7992.js";const g={name:"ReviewOverview",props:["refresh_done"],data(){return{data:[],loading:!1}},created(){this.OverviewReview()},computed:{hasData(){return Object.keys(this.data).length>0}},watch:{refresh_done(a,s){this.OverviewReview(this.refresh_done)}},methods:{OverviewReview(a){this.loading=!0,c.fetchDataByTokenPost("OverviewReview","limit=5").then(s=>{this.data=s.details}).catch(s=>{this.data=[]}).then(s=>{this.loading=!1,c.empty(a)||a()})}}},x={class:"text-h6"},Q={class:"text-grey"},b={class:"row justify-between font12"};function k(a,s,O,R,n,B){return n.loading?(i(),l(v,{key:0},[t("div",null,[e(d,{type:"text",style:{width:"30%"}}),e(d,{type:"text",style:{width:"50%"}})]),t("div",null,[e(d,{height:"180px",square:""})])],64)):(i(),l(v,{key:1},[t("div",x,o(a.$t("Overview of Review")),1),t("div",Q,o(n.data.this_month_words),1),e(u,{class:"q-pa-sm"}),e(m,{class:"no-shadow"},{default:h(()=>[e(p,null,{default:h(()=>[(i(!0),l(v,null,_(n.data.review_summary,r=>(i(),l("div",{key:r,class:"q-mb-xs"},[t("div",b,[t("div",null,o(r.count)+" Star",1),t("div",null,o(r.in_percent),1)]),e(w,{size:"10px",value:r.review/100,color:"light-blue"},null,8,["value"])]))),128))]),_:1})]),_:1}),e(y,{"no-caps":"",label:a.$t("View All"),unelevated:"",class:"full-width radius8",color:"primary",size:"lg",to:"/customer/review-list"},null,8,["label"])],64))}var C=f(g,[["render",k]]);export{C as default};
