import{v as P,r as p,c as h,w as x,bx as b,h as y,g as Q,aS as C}from"./index.c29f7992.js";import{u as S,a as j,Q as k}from"./QMenu.074d3579.js";var H=P({name:"QPopupProxy",props:{...S,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(a,{slots:g,emit:c,attrs:v}){const{proxy:u}=Q(),{$q:l}=u,n=p(!1),t=p(null),i=h(()=>parseInt(a.breakpoint,10)),{canShow:f}=j({showing:n});function r(){return l.screen.width<i.value||l.screen.height<i.value?"dialog":"menu"}const o=p(r()),m=h(()=>o.value==="menu"?{maxHeight:"99vh"}:{});x(()=>r(),e=>{n.value!==!0&&(o.value=e)});function d(e){n.value=!0,c("show",e)}function w(e){n.value=!1,o.value=r(),c("hide",e)}return Object.assign(u,{show(e){f(e)===!0&&t.value.show(e)},hide(e){t.value.hide(e)},toggle(e){t.value.toggle(e)}}),b(u,"currentComponent",()=>({type:o.value,ref:t.value})),()=>{const e={ref:t,...m.value,...v,onShow:d,onHide:w};let s;return o.value==="dialog"?s=C:(s=k,Object.assign(e,{target:a.target,contextMenu:a.contextMenu,noParentEvent:!0,separateClosePopup:!0})),y(s,e,g.default)}}});export{H as Q};
