import{Q as g}from"./QSkeleton.d1e6632a.js";import{Q as p}from"./QImg.47660024.js";import{Q as _}from"./QItem.8eadf7d9.js";import{Q as f}from"./QList.8db9823b.js";import{_ as y,Q as k,n as t,Z as s,F as l,ai as c,X as i,f as d,ad as o,p as m,q as u,al as q,a0 as v,am as h}from"./index.e99838a1.js";const Q={props:["data","cat_id"],name:"CategoryList",setup(){return{RestaurantStore:k()}}},b={key:0,class:"q-gutter-y-sm"},C={class:"text-center text-cream ellipsis"};function S(a,R,r,n,$,B){return t(),s("div",{class:o(["radius10 q-pa-sm",{"bg-coffee":!n.RestaurantStore.menu_loading}])},[n.RestaurantStore.menu_loading?(t(),s("div",b,[(t(),s(l,null,c(10,e=>i("div",{key:e,class:"col"},[d(g,{square:"",class:o(["radius10 q-mb-sm",{"bg-grey600":a.$q.dark.mode,"bg-coffee":!a.$q.dark.mode,"items-image-large":a.$q.screen.gt.sm,"items-image-medium":a.$q.screen.lt.md}]),style:{height:"8em"}},null,8,["class"])])),64))])):(t(),m(f,{key:1,class:"q-gutter-y-sm"},{default:u(()=>[(t(!0),s(l,null,c(r.data,e=>q((t(),m(_,{key:e,clickable:"",class:"q-pa-none",onClick:L=>a.$emit("setCategory",e.cat_id)},{default:u(()=>[i("div",{class:o(["fit radius6 q-pa-xs relative-position q-pa-sm",{"border-active":r.cat_id==e.cat_id,"border-inactive":r.cat_id!=e.cat_id}])},[d(p,{src:e.url_image,fit:"cover",style:{height:"8em"},loading:"lazy","spinner-color":"primary","spinner-size":"sm"},null,8,["src"]),i("div",C,v(e.category_name),1)],2)]),_:2},1032,["onClick"])),[[h]])),128))]),_:1}))],2)}var I=y(Q,[["render",S]]);export{I as default};
