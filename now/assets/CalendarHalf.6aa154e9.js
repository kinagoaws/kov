import{_ as m,u as w,p as r,q as a,t as o,v as n,Z as f,F as v,a3 as S,ae as s,$ as i,a1 as c}from"./index.5da0f878.js";import{S as k,a as h}from"./swiper.min.3affc74f.js";const y={name:"CalendarHalf",props:["today_date"],components:{Swiper:k,SwiperSlide:h},setup(){return{Activity:w()}},methods:{setDate(e){this.$emit("afterSelectdate",e)}}},C=["onClick"],x={class:"font12"};function $(e,B,l,d,b,p){const _=r("swiper-slide"),u=r("swiper");return a(),o(u,{slidesPerView:7,spaceBetween:10,onSwiper:e.onSwiper,class:"q-mb-md"},{default:n(()=>[(a(!0),f(v,null,S(d.Activity.calendar_data,t=>(a(),o(_,{key:t},{default:n(()=>[s("div",{class:i(["text-center cursor-pointer",{"text-white":e.$q.dark.mode,"text-dark":!e.$q.dark.mode}]),onClick:q=>p.setDate(t.value)},[s("div",x,c(t.label),1),s("div",{class:i(["text-weight-bold",{"text-blue":t.value==l.today_date}])},c(t.caption),3)],10,C)]),_:2},1024))),128))]),_:1},8,["onSwiper"])}var D=m(y,[["render",$]]);export{D as default};
