import{Q as c}from"./QSkeleton.81a2bab8.js";import{_ as g,u as y,n as u,p as e,a2 as n,f as a,t as s,b9 as S,F as o,ar as r,$ as i,b8 as w,q as p,a3 as h,ba as f}from"./index.c29f7992.js";import{Q as b}from"./QSpace.0d53e539.js";import{S as k,a as D}from"./swiper.min.38e7e8ee.js";const x={name:"DashboardEarnings",props:["is_done"],components:{Swiper:k,SwiperSlide:D},data(){return{}},setup(){return{DataStore:y()}},created(){Object.keys(this.DataStore.earning_summary).length<=0&&this.DataStore.getEarningSummary()},methods:{}},q={class:"no-margin"},v={class:"no-margin text-grey"},B={class:"text-h5 text-primary text-weight-bold"},Q={class:"font12"},E={class:"text-weight-bold"};function C(l,V,$,d,F,N){const m=u("swiper-slide"),_=u("swiper");return e(),n(o,null,[a(w,{class:"q-pa-none no-shadow"},{default:s(()=>[a(S,{class:"q-pa-sm"},{default:s(()=>[d.DataStore.loading_earning?(e(),n(o,{key:0},[a(c,{type:"text",style:{width:"50%"}}),a(c,{type:"text",style:{width:"90%"}}),a(c,{type:"text",style:{width:"40%"}})],64)):(e(),n(o,{key:1},[r("h6",q,i(l.$t("Earnings")),1),r("p",v,i(l.$t("Your sales, cash in and referral earnings")),1),r("div",B,i(d.DataStore.earning_summary.data.balance),1)],64))]),_:1})]),_:1}),a(b,{class:"q-pa-sm"}),d.DataStore.loading_earning?(e(),p(_,{key:0,slidesPerView:2.3,spaceBetween:10,class:"q-mb-md"},{default:s(()=>[(e(),n(o,null,h(3,t=>a(m,{key:t},{default:s(()=>[a(c,{height:"50px",square:""})]),_:2},1024)),64))]),_:1})):(e(),p(_,{key:1,slidesPerView:2.3,spaceBetween:10,onSwiper:l.onSwiper,class:"q-mb-md"},{default:s(()=>[(e(!0),n(o,null,h(d.DataStore.earning_summary.sales,t=>(e(),p(m,{key:t},{default:s(()=>[r("div",{class:"text-white q-pa-sm radius8",style:f(`background:${t.color}`)},[r("div",Q,i(t.label),1),r("div",E,i(t.value),1)],4)]),_:2},1024))),128))]),_:1},8,["onSwiper"]))],64)}var O=g(x,[["render",C]]);export{O as default};
