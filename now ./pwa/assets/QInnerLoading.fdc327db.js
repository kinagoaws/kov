import{x as b,P as v,Q as S,R as f,S as m,c as t,h as n,U as y,g as C,V as h}from"./index.5da0f878.js";var x=b({name:"QInnerLoading",props:{...v,...S,showing:Boolean,color:String,size:{type:[String,Number],default:"42px"},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(e,{slots:a}){const s=C(),r=f(e,s.proxy.$q),{transitionProps:i,transitionStyle:o}=m(e),u=t(()=>"q-inner-loading q--avoid-card-border absolute-full column flex-center"+(r.value===!0?" q-inner-loading--dark":"")),c=t(()=>"q-inner-loading__label"+(e.labelClass!==void 0?` ${e.labelClass}`:""));function d(){const l=[n(h,{size:e.size,color:e.color})];return e.label!==void 0&&l.push(n("div",{class:c.value,style:e.labelStyle},[e.label])),l}function g(){return e.showing===!0?n("div",{class:u.value,style:o.value},a.default!==void 0?a.default():d()):null}return()=>n(y,i.value,g)}});export{x as Q};
