import{Q as Z}from"./QToolbarTitle.38b5862b.js";import{Q as G}from"./QSpace.0d53e539.js";import{v as z,c as d,h as u,z as J,r as K,dM as W,w as b,dN as E,aI as X,o as M,E as O,g as L,Q as Y,S as ee,dO as te,af as ae,a4 as w,O as ne,_ as le,p as q,q as I,t as g,f as _,b8 as oe,Z as re,$ as ie,b9 as se,ar as ue,a2 as ce,F as de,a3 as ve,au as me,aS as fe}from"./index.c29f7992.js";import{Q as ge}from"./QToolbar.19752286.js";import{u as _e,a as he,b as xe,c as ye}from"./use-panel.777e53e3.js";import"./touch.9135741d.js";import"./selection.53b1fe34.js";import"./use-render-cache.3aae9b27.js";var be=z({name:"QCarouselSlide",props:{..._e,imgSrc:String},setup(e,{slots:a}){const l=d(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>u("div",{class:"q-carousel__slide",style:l.value},J(a.default))}});let y=0;const Ce={fullscreen:Boolean,noRouteFullscreenExit:Boolean},qe=["update:fullscreen","fullscreen"];function we(){const e=L(),{props:a,emit:l,proxy:s}=e;let t,c,o;const r=K(!1);W(e)===!0&&b(()=>s.$route.fullPath,()=>{a.noRouteFullscreenExit!==!0&&v()}),b(()=>a.fullscreen,m=>{r.value!==m&&h()}),b(r,m=>{l("update:fullscreen",m),l("fullscreen",m)});function h(){r.value===!0?v():f()}function f(){r.value!==!0&&(r.value=!0,o=s.$el.parentNode,o.replaceChild(c,s.$el),document.body.appendChild(s.$el),y++,y===1&&document.body.classList.add("q-body--fullscreen-mixin"),t={handler:v},E.add(t))}function v(){r.value===!0&&(t!==void 0&&(E.remove(t),t=void 0),o.replaceChild(s.$el,c),r.value=!1,y=Math.max(0,y-1),y===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),s.$el.scrollIntoView!==void 0&&setTimeout(()=>{s.$el.scrollIntoView()})))}return X(()=>{c=document.createElement("span")}),M(()=>{a.fullscreen===!0&&f()}),O(v),Object.assign(s,{toggleFullscreen:h,setFullscreen:f,exitFullscreen:v}),{inFullscreen:r,toggleFullscreen:h}}const Se=["top","right","bottom","left"],ke=["regular","flat","outline","push","unelevated"];var Pe=z({name:"QCarousel",props:{...Y,...he,...Ce,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>ke.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Se.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...qe,...xe],setup(e,{slots:a}){const{proxy:{$q:l}}=L(),s=ee(e,l);let t=null,c;const{updatePanelsList:o,getPanelContent:r,panelDirectives:h,goToPanel:f,previousPanel:v,nextPanel:m,getEnabledPanels:A,panelIndex:C}=ye(),{inFullscreen:$}=we(),R=d(()=>$.value!==!0&&e.height!==void 0?{height:e.height}:{}),S=d(()=>e.vertical===!0?"vertical":"horizontal"),T=d(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),U=d(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+($.value===!0?" fullscreen":"")+(s.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${S.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${T.value}`:"")),Q=d(()=>{const n=[e.prevIcon||l.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||l.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&l.lang.rtl===!0?n.reverse():n}),B=d(()=>e.navigationIcon||l.iconSet.carousel.navigationIcon),j=d(()=>e.navigationActiveIcon||B.value),k=d(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));b(()=>e.modelValue,()=>{e.autoplay&&P()}),b(()=>e.autoplay,n=>{n?P():t!==null&&(clearTimeout(t),t=null)});function P(){const n=te(e.autoplay)===!0?Math.abs(e.autoplay):5e3;t!==null&&clearTimeout(t),t=setTimeout(()=>{t=null,n>=0?m():v()},n)}M(()=>{e.autoplay&&P()}),O(()=>{t!==null&&clearTimeout(t)});function V(n,x){return u("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${n} q-carousel__navigation--${T.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[u("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},A().map(x))])}function H(){const n=[];if(e.navigation===!0){const x=a["navigation-icon"]!==void 0?a["navigation-icon"]:i=>u(w,{key:"nav"+i.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${i.active===!0?"":"in"}active`,...i.btnProps,onClick:i.onClick}),p=c-1;n.push(V("buttons",(i,F)=>{const N=i.props.name,D=C.value===F;return x({index:F,maxIndex:p,name:N,active:D,btnProps:{icon:D===!0?j.value:B.value,size:"sm",...k.value},onClick:()=>{f(N)}})}))}else if(e.thumbnails===!0){const x=e.controlColor!==void 0?` text-${e.controlColor}`:"";n.push(V("thumbnails",p=>{const i=p.props;return u("img",{key:"tmb#"+i.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${i.name===e.modelValue?"":"in"}active`+x,src:i.imgSrc||i["img-src"],onClick:()=>{f(i.name)}})}))}return e.arrows===!0&&C.value>=0&&((e.infinite===!0||C.value>0)&&n.push(u("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${S.value} absolute flex flex-center`},[u(w,{icon:Q.value[0],...k.value,onClick:v})])),(e.infinite===!0||C.value<c-1)&&n.push(u("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${S.value} absolute flex flex-center`},[u(w,{icon:Q.value[1],...k.value,onClick:m})]))),ne(a.control,n)}return()=>(c=o(a),u("div",{class:U.value,style:R.value},[ae("div",{class:"q-carousel__slides-container"},r(),"sl-cont",e.swipeable,()=>h.value)].concat(H())))}});const pe={name:"ImagePreview",props:["gallery","title"],data(){return{modal:!1,slide:0}},setup(){return{}},computed:{hasData(){return Object.keys(this.gallery).length>0}}},Ie={class:"fit"};function $e(e,a,l,s,t,c){return q(),I(fe,{modelValue:t.modal,"onUpdate:modelValue":a[2]||(a[2]=o=>t.modal=o),persistent:"",maximized:!0,class:"z-max","transition-show":"fade","transition-hide":"fade"},{default:g(()=>[_(oe,{class:"bg-dark"},{default:g(()=>[_(ge,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:g(()=>[_(Z,{class:"text-white text-weight-bold"},{default:g(()=>[re(ie(l.title),1)]),_:1}),_(G),_(w,{onClick:a[0]||(a[0]=o=>t.modal=!1),color:"dark",unelevated:"","text-color":"white",icon:"las la-times",dense:"","no-caps":"",size:"sm",rounded:""})]),_:1}),c.hasData?(q(),I(se,{key:0,class:"flex flex-center text-white",style:{"min-height":"90%"}},{default:g(()=>[ue("div",Ie,[_(Pe,{animated:"",modelValue:t.slide,"onUpdate:modelValue":a[1]||(a[1]=o=>t.slide=o),arrows:"",navigation:"",infinite:"",swipeable:""},{default:g(()=>[(q(!0),ce(de,null,ve(l.gallery,(o,r)=>(q(),I(be,{key:o,name:r,"img-src":o},null,8,["name","img-src"]))),128))]),_:1},8,["modelValue"])])]),_:1})):me("",!0)]),_:1})]),_:1},8,["modelValue"])}var ze=le(pe,[["render",$e]]);export{ze as default};
