import{i as m,u as c,c as o,g as $,y as b,x as k,h as v}from"./index.c5b868f5.js";const O={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function P(){const{props:e,proxy:{$q:p}}=$(),r=m(b,c);if(r===c)return console.error("QPageSticky needs to be child of QLayout"),c;const d=o(()=>{const t=e.position;return{top:t.indexOf("top")!==-1,right:t.indexOf("right")!==-1,bottom:t.indexOf("bottom")!==-1,left:t.indexOf("left")!==-1,vertical:t==="top"||t==="bottom",horizontal:t==="left"||t==="right"}}),i=o(()=>r.header.offset),n=o(()=>r.right.offset),f=o(()=>r.footer.offset),u=o(()=>r.left.offset),x=o(()=>{let t=0,a=0;const s=d.value,g=p.lang.rtl===!0?-1:1;s.top===!0&&i.value!==0?a=`${i.value}px`:s.bottom===!0&&f.value!==0&&(a=`${-f.value}px`),s.left===!0&&u.value!==0?t=`${g*u.value}px`:s.right===!0&&n.value!==0&&(t=`${-g*n.value}px`);const l={transform:`translate(${t}, ${a})`};return e.offset&&(l.margin=`${e.offset[1]}px ${e.offset[0]}px`),s.vertical===!0?(u.value!==0&&(l[p.lang.rtl===!0?"right":"left"]=`${u.value}px`),n.value!==0&&(l[p.lang.rtl===!0?"left":"right"]=`${n.value}px`)):s.horizontal===!0&&(i.value!==0&&(l.top=`${i.value}px`),f.value!==0&&(l.bottom=`${f.value}px`)),l}),h=o(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function y(t){const a=k(t.default);return v("div",{class:h.value,style:x.value},e.expand===!0?a:[v("div",a)])}return{$layout:r,getStickyContent:y}}export{P as a,O as u};
