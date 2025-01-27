import{Q as _}from"./QToolbarTitle.38b5862b.js";import{Q as y}from"./QSpace.0d53e539.js";import{_ as Q,u as x,A as r,p as i,q as n,t as l,f as s,b8 as S,a1 as k,Z as w,$ as d,a4 as f,b9 as P,a2 as u,F as c,dA as V,a3 as B,ar as m,au as b,av as C,aS as v}from"./index.c29f7992.js";import{Q as q}from"./QToolbar.19752286.js";import{Q as p}from"./QSkeleton.81a2bab8.js";import{Q as D}from"./QLinearProgress.1ae2a418.js";import{Q as T}from"./QTab.0d7719d3.js";import{Q as A}from"./QTabs.8a6f34eb.js";import{Q as z}from"./QForm.32515fc9.js";import{u as E}from"./CartStore.99e9bb86.js";import"./QResizeObserver.0e413222.js";import"./rtl.276c3f1b.js";const N={name:"PointsModal",data(){return{loading:!1,loading2:!1,dialog:!1,points:0,points_tab:0,data_points:[],balance:0,points_id:0}},setup(){const t=E(),a=x();return{CartStore:t,DataStore:a}},methods:{beforeShow(){this.points=0,this.CartStore.pos_attributes.use_thresholds&&this.getPointsthresholds()},setPoints(){console.log(this.points_tab),this.points=this.points_tab.points,this.points_id=this.points_tab.id},onSubmit(){this.loading=!0,r.fetchDataByTokenPost("applyPoints","points="+this.points+"&cart_uuid="+this.DataStore.cart_uuid+"&customer_id="+this.CartStore.customer_id+"&points_id="+this.points_id).then(t=>{this.dialog=!1,r.notify("light-green",t.msg,"check_circle",this.$q),this.$emit("afterApplypoints")}).catch(t=>{r.notify("red-5",t,"error_outline",this.$q)}).then(t=>{this.loading=!1})},getPointsthresholds(){this.loading2=!0,r.fetchDataByTokenPost("getPointsthresholds","customer_id="+this.CartStore.customer_id).then(t=>{this.data_points=t.details.data,this.balance=t.details.balance}).catch(t=>{r.notify("red-5",t,"error_outline",this.$q)}).then(t=>{this.loading2=!1})}}},U={class:"text-caption"},F={class:"text-subtitle2 q-mb-sm"},M={key:0,class:"absolute-full flex flex-center"},I={class:"text-white font12 text-weight-bold"};function L(t,a,R,g,o,h){return i(),n(v,{modelValue:o.dialog,"onUpdate:modelValue":a[3]||(a[3]=e=>o.dialog=e),position:"bottom",class:"rounded-borders-top",onBeforeShow:h.beforeShow},{default:l(()=>[s(S,null,{default:l(()=>[s(q,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:l(()=>[s(_,{class:k(["text-darkx text-weight-bold",{"text-white":t.$q.dark.mode,"text-dark":!t.$q.dark.mode}]),style:{overflow:"inherit"}},{default:l(()=>[w(d(t.$t("Apply Points discount")),1)]),_:1},8,["class"]),s(y),s(f,{onClick:a[0]||(a[0]=e=>o.dialog=!1),color:"white",square:"",unelevated:"","text-color":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"})]),_:1}),s(P,null,{default:l(()=>[s(z,{onSubmit:h.onSubmit},{default:l(()=>[g.CartStore.pos_attributes.use_thresholds?(i(),u(c,{key:0},[o.loading2?(i(),u(c,{key:0},[s(V,{class:"q-gutter-md flex flex-center"},{default:l(()=>[s(p,{type:"QBtn",style:{height:"80px"}}),s(p,{type:"QBtn",style:{height:"80px"}}),s(p,{type:"QBtn",style:{height:"80px"}})]),_:1}),s(p,{type:"QBtn",class:"full-width",style:{height:"50px"}})],64)):(i(),n(A,{key:1,modelValue:o.points_tab,"onUpdate:modelValue":[a[1]||(a[1]=e=>o.points_tab=e),h.setPoints],class:"text-dark q-mb-lg","no-caps":"","active-color":"white","active-bg-color":"blue","indicator-color":"blue"},{default:l(()=>[(i(!0),u(c,null,B(o.data_points,e=>(i(),n(T,{key:e,name:e,disable:!(o.balance>e.points)},{default:l(()=>[m("div",U,d(e.label),1),m("div",F,d(e.amount),1),s(D,{size:"18px",value:o.balance/e.points,style:{"min-width":"80px"},class:"radius28",color:o.balance>=e.points?"green":"blue"},{default:l(()=>[o.balance>=e.points?(i(),u("div",M,[m("span",I,d(t.$t("REDEEM")),1)])):b("",!0)]),_:2},1032,["value","color"])]),_:2},1032,["name","disable"]))),128))]),_:1},8,["modelValue","onUpdate:modelValue"]))],64)):(i(),n(C,{key:1,modelValue:o.points,"onUpdate:modelValue":a[2]||(a[2]=e=>o.points=e),outlined:"",color:"grey-5",rules:[e=>e&&e.length>0||this.$t("Please enter numbers")],type:"number",step:"any"},null,8,["modelValue","rules"])),o.loading2?b("",!0):(i(),n(f,{key:2,type:"submit",color:"primary","text-color":"white",label:t.$t("Apply"),unelevated:"",class:"full-width",size:"lg","no-caps":"",disable:!(o.points>0),loading:o.loading},null,8,["label","disable","loading"]))]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue","onBeforeShow"])}var et=Q(N,[["render",L]]);export{et as default};
