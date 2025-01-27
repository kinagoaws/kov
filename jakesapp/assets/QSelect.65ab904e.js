import{t as je,aI as Qe,aJ as vt,aK as mt,aL as St,a4 as Bt,at as Rt,a6 as Et,au as Tt,c as f,aw as Ht,g as Ue,h as y,ah as Be,av as Lt,aM as Dt,al as ne,I as Pt,r as E,w as me,N as J,aN as Nt,aO as $t,aj as Kt,ak as jt,H as gt,aP as Qt,aQ as Ut,aR as rt,aH as ke,aS as Wt,aT as Xt,ax as Pe,aU as Yt,aD as ve,aV as Jt,aW as Gt,aX as Zt,a0 as el,$ as tl,E as ll}from"./index.c5b868f5.js";import{Q as ul}from"./QItemLabel.4665782c.js";import{Q as nl}from"./QMenu.b5349f2e.js";import{r as Ke}from"./rtl.276c3f1b.js";import{n as ct}from"./format.8ac60962.js";var al=je({name:"QField",inheritAttrs:!1,props:{...Qe,tag:{type:String,default:"label"}},emits:vt,setup(){return mt(St({tagProp:!0}))}});const il={xs:8,sm:10,md:14,lg:20,xl:24};var ol=je({name:"QChip",props:{...Bt,...Rt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:r,emit:o}){const{proxy:{$q:d}}=Ue(),M=Et(e,d),i=Tt(e,il),F=f(()=>e.selected===!0||e.icon!==void 0),b=f(()=>e.selected===!0?e.iconSelected||d.iconSet.chip.selected:e.icon),h=f(()=>e.iconRemove||d.iconSet.chip.remove),z=f(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),c=f(()=>{const s=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(s?` text-${s} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(z.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(M.value===!0?" q-chip--dark q-dark":"")}),w=f(()=>{const s=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},D={...s,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||d.lang.label.remove};return{chip:s,remove:D}});function C(s){s.keyCode===13&&k(s)}function k(s){e.disable||(o("update:selected",!e.selected),o("click",s))}function p(s){(s.keyCode===void 0||s.keyCode===13)&&(ne(s),e.disable===!1&&(o("update:modelValue",!1),o("remove")))}function L(){const s=[];z.value===!0&&s.push(y("div",{class:"q-focus-helper"})),F.value===!0&&s.push(y(Be,{class:"q-chip__icon q-chip__icon--left",name:b.value}));const D=e.label!==void 0?[y("div",{class:"ellipsis"},[e.label])]:void 0;return s.push(y("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Lt(r.default,D))),e.iconRight&&s.push(y(Be,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&s.push(y(Be,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:h.value,...w.value.remove,onClick:p,onKeyup:p})),s}return()=>{if(e.modelValue===!1)return;const s={class:c.value,style:i.value};return z.value===!0&&Object.assign(s,w.value.chip,{onClick:k,onKeyup:C}),Ht("div",s,L(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Dt,e.ripple]])}}});const K=1e3,rl=["start","center","end","start-force","center-force","end-force"],ht=Array.prototype.filter,cl=window.getComputedStyle(document.body).overflowAnchor===void 0?Pt:function(e,r){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const o=e.children||[];ht.call(o,M=>M.dataset&&M.dataset.qVsAnchor!==void 0).forEach(M=>{delete M.dataset.qVsAnchor});const d=o[r];d&&d.dataset&&(d.dataset.qVsAnchor="")}))};function Se(e,r){return e+r}function Ne(e,r,o,d,M,i,F,b){const h=e===window?document.scrollingElement||document.documentElement:e,z=M===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-F-b,scrollMaxSize:0,offsetStart:-F,offsetEnd:-b};if(M===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=h.scrollLeft,c.scrollViewSize+=h.clientWidth),c.scrollMaxSize=h.scrollWidth,i===!0&&(c.scrollStart=(Ke===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=h.scrollTop,c.scrollViewSize+=h.clientHeight),c.scrollMaxSize=h.scrollHeight),o!==null)for(let w=o.previousElementSibling;w!==null;w=w.previousElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=w[z]);if(d!==null)for(let w=d.nextElementSibling;w!==null;w=w.nextElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=w[z]);if(r!==e){const w=h.getBoundingClientRect(),C=r.getBoundingClientRect();M===!0?(c.offsetStart+=C.left-w.left,c.offsetEnd-=C.width):(c.offsetStart+=C.top-w.top,c.offsetEnd-=C.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function st(e,r,o,d){r==="end"&&(r=(e===window?document.body:e)[o===!0?"scrollWidth":"scrollHeight"]),e===window?o===!0?(d===!0&&(r=(Ke===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-r),window.scrollTo(r,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r):o===!0?(d===!0&&(r=(Ke===!0?e.scrollWidth-e.offsetWidth:0)-r),e.scrollLeft=r):e.scrollTop=r}function xe(e,r,o,d){if(o>=d)return 0;const M=r.length,i=Math.floor(o/K),F=Math.floor((d-1)/K)+1;let b=e.slice(i,F).reduce(Se,0);return o%K!==0&&(b-=r.slice(i*K,o).reduce(Se,0)),d%K!==0&&d!==M&&(b-=r.slice(d,F*K).reduce(Se,0)),b}const sl={virtualScrollSliceSize:{type:[Number,String],default:10},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},dt={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...sl};function dl({virtualScrollLength:e,getVirtualScrollTarget:r,getVirtualScrollEl:o,virtualScrollItemSizeComputed:d}){const M=Ue(),{props:i,emit:F,proxy:b}=M,{$q:h}=b;let z,c,w,C=[],k;const p=E(0),L=E(0),s=E({}),D=E(null),W=E(null),H=E(null),_=E({from:0,to:0}),qe=f(()=>i.tableColspan!==void 0?i.tableColspan:100);d===void 0&&(d=f(()=>i.virtualScrollItemSize));const O=f(()=>d.value+";"+i.virtualScrollHorizontal),X=f(()=>O.value+";"+i.virtualScrollSliceRatioBefore+";"+i.virtualScrollSliceRatioAfter);me(X,()=>{j()}),me(O,G);function G(){ae(c,!0)}function ge(l){ae(l===void 0?c:l)}function Z(l,a){const m=r();if(m==null||m.nodeType===8)return;const A=Ne(m,o(),D.value,W.value,i.virtualScrollHorizontal,h.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd);w!==A.scrollViewSize&&j(A.scrollViewSize),P(m,A,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,rl.indexOf(a)!==-1?a:c!==-1&&l>c?"end":"start")}function Ae(){const l=r();if(l==null||l.nodeType===8)return;const a=Ne(l,o(),D.value,W.value,i.virtualScrollHorizontal,h.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd),m=e.value-1,A=a.scrollMaxSize-a.offsetStart-a.offsetEnd-L.value;if(z===a.scrollStart)return;if(a.scrollMaxSize<=0){P(l,a,0,0);return}w!==a.scrollViewSize&&j(a.scrollViewSize),he(_.value.from);const B=Math.floor(a.scrollMaxSize-Math.max(a.scrollViewSize,a.offsetEnd)-Math.min(k[m],a.scrollViewSize/2));if(B>0&&Math.ceil(a.scrollStart)>=B){P(l,a,m,a.scrollMaxSize-a.offsetEnd-C.reduce(Se,0));return}let V=0,g=a.scrollStart-a.offsetStart,R=g;if(g<=A&&g+a.scrollViewSize>=p.value)g-=p.value,V=_.value.from,R=g;else for(let S=0;g>=C[S]&&V<m;S++)g-=C[S],V+=K;for(;g>0&&V<m;)g-=k[V],g>-a.scrollViewSize?(V++,R=g):R=k[V]+g;P(l,a,V,R)}function P(l,a,m,A,B){const V=typeof B=="string"&&B.indexOf("-force")!==-1,g=V===!0?B.replace("-force",""):B,R=g!==void 0?g:"start";let S=Math.max(0,m-s.value[R]),N=S+s.value.total;N>e.value&&(N=e.value,S=Math.max(0,N-s.value.total)),z=a.scrollStart;const Y=S!==_.value.from||N!==_.value.to;if(Y===!1&&g===void 0){ye(m);return}const{activeElement:ze}=document,Q=H.value;Y===!0&&Q!==null&&Q!==ze&&Q.contains(ze)===!0&&(Q.addEventListener("focusout",pe),setTimeout(()=>{Q!==null&&Q.removeEventListener("focusout",pe)})),cl(Q,m-S);const Ie=g!==void 0?k.slice(S,m).reduce(Se,0):0;if(Y===!0){const ee=N>=_.value.from&&S<=_.value.to?_.value.to:N;_.value={from:S,to:ee},p.value=xe(C,k,0,S),L.value=xe(C,k,N,e.value),requestAnimationFrame(()=>{_.value.to!==N&&z===a.scrollStart&&(_.value={from:_.value.from,to:N},L.value=xe(C,k,N,e.value))})}requestAnimationFrame(()=>{if(z!==a.scrollStart)return;Y===!0&&he(S);const ee=k.slice(S,m).reduce(Se,0),te=ee+a.offsetStart+p.value,Me=te+k[m];let we=te+A;if(g!==void 0){const Ee=ee-Ie,Ve=a.scrollStart+Ee;we=V!==!0&&Ve<te&&Me<Ve+a.scrollViewSize?Ve:g==="end"?Me-a.scrollViewSize:te-(g==="start"?0:Math.round((a.scrollViewSize-k[m])/2))}z=we,st(l,we,i.virtualScrollHorizontal,h.lang.rtl),ye(m)})}function he(l){const a=H.value;if(a){const m=ht.call(a.children,S=>S.classList&&S.classList.contains("q-virtual-scroll--skip")===!1),A=m.length,B=i.virtualScrollHorizontal===!0?S=>S.getBoundingClientRect().width:S=>S.offsetHeight;let V=l,g,R;for(let S=0;S<A;){for(g=B(m[S]),S++;S<A&&m[S].classList.contains("q-virtual-scroll--with-prev")===!0;)g+=B(m[S]),S++;R=g-k[V],R!==0&&(k[V]+=R,C[Math.floor(V/K)]+=R),V++}}}function pe(){H.value!==null&&H.value!==void 0&&H.value.focus()}function ae(l,a){const m=1*d.value;(a===!0||Array.isArray(k)===!1)&&(k=[]);const A=k.length;k.length=e.value;for(let V=e.value-1;V>=A;V--)k[V]=m;const B=Math.floor((e.value-1)/K);C=[];for(let V=0;V<=B;V++){let g=0;const R=Math.min((V+1)*K,e.value);for(let S=V*K;S<R;S++)g+=k[S];C.push(g)}c=-1,z=void 0,p.value=xe(C,k,0,_.value.from),L.value=xe(C,k,_.value.to,e.value),l>=0?(he(_.value.from),J(()=>{Z(l)})):ie()}function j(l){if(l===void 0&&typeof window!="undefined"){const g=r();g!=null&&g.nodeType!==8&&(l=Ne(g,o(),D.value,W.value,i.virtualScrollHorizontal,h.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd).scrollViewSize)}w=l;const a=parseFloat(i.virtualScrollSliceRatioBefore)||0,m=parseFloat(i.virtualScrollSliceRatioAfter)||0,A=1+a+m,B=l===void 0||l<=0?1:Math.ceil(l/d.value),V=Math.max(1,B,Math.ceil((i.virtualScrollSliceSize>0?i.virtualScrollSliceSize:10)/A));s.value={total:Math.ceil(V*A),start:Math.ceil(V*a),center:Math.ceil(V*(.5+a)),end:Math.ceil(V*(1+a)),view:B}}function Re(l,a){const m=i.virtualScrollHorizontal===!0?"width":"height",A={["--q-virtual-scroll-item-"+m]:d.value+"px"};return[l==="tbody"?y(l,{class:"q-virtual-scroll__padding",key:"before",ref:D},[y("tr",[y("td",{style:{[m]:`${p.value}px`,...A},colspan:qe.value})])]):y(l,{class:"q-virtual-scroll__padding",key:"before",ref:D,style:{[m]:`${p.value}px`,...A}}),y(l,{class:"q-virtual-scroll__content",key:"content",ref:H,tabindex:-1},a.flat()),l==="tbody"?y(l,{class:"q-virtual-scroll__padding",key:"after",ref:W},[y("tr",[y("td",{style:{[m]:`${L.value}px`,...A},colspan:qe.value})])]):y(l,{class:"q-virtual-scroll__padding",key:"after",ref:W,style:{[m]:`${L.value}px`,...A}})]}function ye(l){c!==l&&(i.onVirtualScroll!==void 0&&F("virtualScroll",{index:l,from:_.value.from,to:_.value.to-1,direction:l<c?"decrease":"increase",ref:b}),c=l)}j();const ie=Nt(Ae,h.platform.is.ios===!0?120:35);$t(()=>{j()});let be=!1;return Kt(()=>{be=!0}),jt(()=>{if(be!==!0)return;const l=r();z!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?st(l,z,i.virtualScrollHorizontal,h.lang.rtl):Z(c)}),gt(()=>{ie.cancel()}),Object.assign(b,{scrollTo:Z,reset:G,refresh:ge}),{virtualScrollSliceRange:_,virtualScrollSliceSizeComputed:s,setVirtualScrollSize:j,onVirtualScrollEvt:ie,localResetVirtualScroll:ae,padVirtualScroll:Re,scrollTo:Z,reset:G,refresh:ge}}const ft=e=>["add","add-unique","toggle"].includes(e),fl=".*+?^${}()|[]\\",vl=Object.keys(Qe);function $e(e,r){if(typeof e=="function")return e;const o=e!==void 0?e:r;return d=>d!==null&&typeof d=="object"&&o in d?d[o]:d}var bl=je({name:"QSelect",inheritAttrs:!1,props:{...dt,...Qt,...Qe,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:ft},mapOptions:Boolean,emitValue:Boolean,disableTabSelection:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:{},transitionHide:{},transitionDuration:{},behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:dt.virtualScrollItemSize.type,onNewValue:Function,onFilter:Function},emits:[...vt,"add","remove","inputValue","keyup","keypress","keydown","popupShow","popupHide","filterAbort"],setup(e,{slots:r,emit:o}){const{proxy:d}=Ue(),{$q:M}=d,i=E(!1),F=E(!1),b=E(-1),h=E(""),z=E(!1),c=E(!1);let w=null,C=null,k,p,L,s=null,D,W,H,_;const qe=E(null),O=E(null),X=E(null),G=E(null),ge=E(null),Z=Ut(e),Ae=Yt(ut),P=f(()=>Array.isArray(e.options)?e.options.length:0),he=f(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:pe,virtualScrollSliceSizeComputed:ae,localResetVirtualScroll:j,padVirtualScroll:Re,onVirtualScrollEvt:ye,scrollTo:ie,setVirtualScrollSize:be}=dl({virtualScrollLength:P,getVirtualScrollTarget:Vt,getVirtualScrollEl:tt,virtualScrollItemSizeComputed:he}),l=St(),a=f(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,u=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const n=e.mapOptions===!0&&k!==void 0?k:[],v=u.map(q=>wt(q,n));return e.modelValue===null&&t===!0?v.filter(q=>q!==null):v}return u}),m=f(()=>{const t={};return vl.forEach(u=>{const n=e[u];n!==void 0&&(t[u]=n)}),t}),A=f(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),B=f(()=>rt(a.value)),V=f(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||a.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),g=f(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),R=f(()=>P.value===0),S=f(()=>a.value.map(t=>$.value(t)).join(", ")),N=f(()=>e.displayValue!==void 0?e.displayValue:S.value),Y=f(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ze=f(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||a.value.some(Y.value))),Q=f(()=>l.focused.value===!0?e.tabindex:-1),Ie=f(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":i.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return b.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${b.value}`),t}),ee=f(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),te=f(()=>a.value.map((t,u)=>({index:u,opt:t,html:Y.value(t),selected:!0,removeAtIndex:bt,toggleOption:le,tabindex:Q.value}))),Me=f(()=>{if(P.value===0)return[];const{from:t,to:u}=pe.value;return e.options.slice(t,u).map((n,v)=>{const q=oe.value(n)===!0,x=He(n)===!0,T=t+v,I={clickable:!0,active:x,activeClass:Ve.value,manualFocus:!0,focused:!1,disable:q,tabindex:-1,dense:e.optionsDense,dark:A.value,role:"option","aria-selected":x===!0?"true":"false",id:`${l.targetUid.value}_${T}`,onClick:()=>{le(n)}};return q!==!0&&(b.value===T&&(I.focused=!0),M.platform.is.desktop===!0&&(I.onMousemove=()=>{i.value===!0&&re(T)})),{index:T,opt:n,html:Y.value(n),label:$.value(n),selected:I.active,focused:I.focused,toggleOption:le,setOptionIndex:re,itemProps:I}})}),we=f(()=>e.dropdownIcon!==void 0?e.dropdownIcon:M.iconSet.arrow.dropdown),Ee=f(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ve=f(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),U=f(()=>$e(e.optionValue,"value")),$=f(()=>$e(e.optionLabel,"label")),oe=f(()=>$e(e.optionDisable,"disable")),_e=f(()=>a.value.map(U.value)),yt=f(()=>{const t={onInput:ut,onChange:Ae,onKeydown:et,onKeyup:Ge,onKeypress:Ze,onFocus:Ye,onClick(u){p===!0&&ve(u)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=Ae,t});me(a,t=>{k=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(F.value!==!0&&i.value!==!0||B.value!==!0)&&(L!==!0&&fe(),(F.value===!0||i.value===!0)&&ce(""))},{immediate:!0}),me(()=>e.fillInput,fe),me(i,Le),me(P,Ft);function We(t){return e.emitValue===!0?U.value(t):t}function Te(t){if(t!==-1&&t<a.value.length)if(e.multiple===!0){const u=e.modelValue.slice();o("remove",{index:t,value:u.splice(t,1)[0]}),o("update:modelValue",u)}else o("update:modelValue",null)}function bt(t){Te(t),l.focus()}function Xe(t,u){const n=We(t);if(e.multiple!==!0){e.fillInput===!0&&Ce($.value(t),!0,!0),o("update:modelValue",n);return}if(a.value.length===0){o("add",{index:0,value:n}),o("update:modelValue",e.multiple===!0?[n]:n);return}if(u===!0&&He(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const v=e.modelValue.slice();o("add",{index:v.length,value:n}),v.push(n),o("update:modelValue",v)}function le(t,u){if(l.editable.value!==!0||t===void 0||oe.value(t)===!0)return;const n=U.value(t);if(e.multiple!==!0){u!==!0&&(Ce(e.fillInput===!0?$.value(t):"",!0,!0),ue()),O.value!==null&&O.value.focus(),(a.value.length===0||ke(U.value(a.value[0]),n)!==!0)&&o("update:modelValue",e.emitValue===!0?n:t);return}if((p!==!0||z.value===!0)&&l.focus(),Ye(),a.value.length===0){const x=e.emitValue===!0?n:t;o("add",{index:0,value:x}),o("update:modelValue",e.multiple===!0?[x]:x);return}const v=e.modelValue.slice(),q=_e.value.findIndex(x=>ke(x,n));if(q!==-1)o("remove",{index:q,value:v.splice(q,1)[0]});else{if(e.maxValues!==void 0&&v.length>=e.maxValues)return;const x=e.emitValue===!0?n:t;o("add",{index:v.length,value:x}),v.push(x)}o("update:modelValue",v)}function re(t){if(M.platform.is.desktop!==!0)return;const u=t!==-1&&t<P.value?t:-1;b.value!==u&&(b.value=u)}function Oe(t=1,u){if(i.value===!0){let n=b.value;do n=ct(n+t,-1,P.value-1);while(n!==-1&&n!==b.value&&oe.value(e.options[n])===!0);b.value!==n&&(re(n),ie(n),u!==!0&&e.useInput===!0&&e.fillInput===!0&&Fe(n>=0?$.value(e.options[n]):D,!0))}}function wt(t,u){const n=v=>ke(U.value(v),t);return e.options.find(n)||u.find(n)||t}function He(t){const u=U.value(t);return _e.value.find(n=>ke(n,u))!==void 0}function Ye(t){e.useInput===!0&&O.value!==null&&(t===void 0||O.value===t.target&&t.target.value===S.value)&&O.value.select()}function Je(t){Jt(t,27)===!0&&i.value===!0&&(ve(t),ue(),fe()),o("keyup",t)}function Ge(t){const{value:u}=t.target;if(t.keyCode!==void 0){Je(t);return}if(t.target.value="",w!==null&&(clearTimeout(w),w=null),C!==null&&(clearTimeout(C),C=null),fe(),typeof u=="string"&&u.length!==0){const n=u.toLocaleLowerCase(),v=x=>{const T=e.options.find(I=>String(x.value(I)).toLocaleLowerCase()===n);return T===void 0?!1:(a.value.indexOf(T)===-1?le(T):ue(),!0)},q=x=>{v(U)!==!0&&x!==!0&&v($)!==!0&&ce(u,!0,()=>q(!0))};q()}else l.clearValue(t)}function Ze(t){o("keypress",t)}function et(t){if(o("keydown",t),Gt(t)===!0)return;const u=h.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),n=t.shiftKey!==!0&&e.disableTabSelection!==!0&&e.multiple!==!0&&(b.value!==-1||u===!0);if(t.keyCode===27){Pe(t);return}if(t.keyCode===9&&n===!1){se();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&i.value===!1){ne(t),de();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&h.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Te(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&o("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof h.value!="string"||h.value.length===0)&&(ne(t),b.value=-1,Oe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&ae.value!==void 0&&(ne(t),b.value=Math.max(-1,Math.min(P.value,b.value+(t.keyCode===33?-1:1)*ae.value.view)),Oe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ne(t),Oe(t.keyCode===38?-1:1,e.multiple));const v=P.value;if((H===void 0||_<Date.now())&&(H=""),v>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||H.length!==0)){i.value!==!0&&de(t);const q=t.key.toLocaleLowerCase(),x=H.length===1&&H[0]===q;_=Date.now()+1500,x===!1&&(ne(t),H+=q);const T=new RegExp("^"+H.split("").map(De=>fl.indexOf(De)!==-1?"\\"+De:De).join(".*"),"i");let I=b.value;if(x===!0||I<0||T.test($.value(e.options[I]))!==!0)do I=ct(I+1,-1,v-1);while(I!==b.value&&(oe.value(e.options[I])===!0||T.test($.value(e.options[I]))!==!0));b.value!==I&&J(()=>{re(I),ie(I),I>=0&&e.useInput===!0&&e.fillInput===!0&&Fe($.value(e.options[I]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||H!=="")&&(t.keyCode!==9||n===!1))){if(t.keyCode!==9&&ne(t),b.value!==-1&&b.value<v){le(e.options[b.value]);return}if(u===!0){const q=(x,T)=>{if(T){if(ft(T)!==!0)return}else T=e.newValueMode;if(Ce("",e.multiple!==!0,!0),x==null)return;(T==="toggle"?le:Xe)(x,T==="add-unique"),e.multiple!==!0&&(O.value!==null&&O.value.focus(),ue())};if(e.onNewValue!==void 0?o("newValue",h.value,q):q(h.value),e.multiple!==!0)return}i.value===!0?se():l.innerLoading.value!==!0&&de()}}function tt(){return p===!0?ge.value:X.value!==null&&X.value.contentEl!==null?X.value.contentEl:void 0}function Vt(){return tt()}function Ct(){return e.hideSelected===!0?[]:r["selected-item"]!==void 0?te.value.map(t=>r["selected-item"](t)).slice():r.selected!==void 0?[].concat(r.selected()):e.useChips===!0?te.value.map((t,u)=>y(ol,{key:"option-"+u,removable:l.editable.value===!0&&oe.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:Q.value,onRemove(){t.removeAtIndex(u)}},()=>y("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:$.value(t.opt)}))):[y("span",{[ze.value===!0?"innerHTML":"textContent"]:N.value})]}function lt(){if(R.value===!0)return r["no-option"]!==void 0?r["no-option"]({inputValue:h.value}):void 0;const t=r.option!==void 0?r.option:n=>y(tl,{key:n.index,...n.itemProps},()=>y(el,()=>y(ul,()=>y("span",{[n.html===!0?"innerHTML":"textContent"]:n.label}))));let u=Re("div",Me.value.map(t));return r["before-options"]!==void 0&&(u=r["before-options"]().concat(u)),ll(r["after-options"],u)}function kt(t,u){const n=u===!0?{...Ie.value,...l.splitAttrs.attributes.value}:void 0,v={ref:u===!0?O:void 0,key:"i_t",class:V.value,style:e.inputStyle,value:h.value!==void 0?h.value:"",type:"search",...n,id:u===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...yt.value};return t!==!0&&p===!0&&(Array.isArray(v.class)===!0?v.class=[...v.class,"no-pointer-events"]:v.class+=" no-pointer-events"),y("input",v)}function ut(t){w!==null&&(clearTimeout(w),w=null),C!==null&&(clearTimeout(C),C=null),!(t&&t.target&&t.target.qComposing===!0)&&(Fe(t.target.value||""),L=!0,D=h.value,l.focused.value!==!0&&(p!==!0||z.value===!0)&&l.focus(),e.onFilter!==void 0&&(w=setTimeout(()=>{w=null,ce(h.value)},e.inputDebounce)))}function Fe(t,u){h.value!==t&&(h.value=t,u===!0||e.inputDebounce===0||e.inputDebounce==="0"?o("inputValue",t):C=setTimeout(()=>{C=null,o("inputValue",t)},e.inputDebounce))}function Ce(t,u,n){L=n!==!0,e.useInput===!0&&(Fe(t,!0),(u===!0||n!==!0)&&(D=t),u!==!0&&ce(t))}function ce(t,u,n){if(e.onFilter===void 0||u!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?o("filterAbort"):(l.innerLoading.value=!0,c.value=!0),t!==""&&e.multiple!==!0&&a.value.length!==0&&L!==!0&&t===$.value(a.value[0])&&(t="");const v=setTimeout(()=>{i.value===!0&&(i.value=!1)},10);s!==null&&clearTimeout(s),s=v,o("filter",t,(q,x)=>{(u===!0||l.focused.value===!0)&&s===v&&(clearTimeout(s),typeof q=="function"&&q(),c.value=!1,J(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(u===!0?i.value===!0&&ue():i.value===!0?Le(!0):i.value=!0),typeof x=="function"&&J(()=>{x(d)}),typeof n=="function"&&J(()=>{n(d)})}))},()=>{l.focused.value===!0&&s===v&&(clearTimeout(s),l.innerLoading.value=!1,c.value=!1),i.value===!0&&(i.value=!1)})}function xt(){return y(nl,{ref:X,class:g.value,style:e.popupContentStyle,modelValue:i.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&R.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:A.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:Ee.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ee.value,onScrollPassive:ye,onBeforeShow:at,onBeforeHide:qt,onShow:At},lt)}function qt(t){it(t),se()}function At(){be()}function pt(t){ve(t),O.value!==null&&O.value.focus(),z.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function zt(t){ve(t),J(()=>{z.value=!1})}function It(){const t=[y(al,{class:`col-auto ${l.fieldClass.value}`,...m.value,for:l.targetUid.value,dark:A.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:h.value.length!==0,...l.splitAttrs.listeners.value,onFocus:pt,onBlur:zt},{...r,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return i.value===!0&&t.push(y("div",{ref:ge,class:g.value+" scroll",style:e.popupContentStyle,...ee.value,onClick:Pe,onScrollPassive:ye},lt())),y(Zt,{ref:G,modelValue:F.value,position:e.useInput===!0?"top":void 0,transitionShow:W,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:at,onBeforeHide:Mt,onHide:_t,onShow:Ot},()=>y("div",{class:"q-select__dialog"+(A.value===!0?" q-select__dialog--dark q-dark":"")+(z.value===!0?" q-select__dialog--focused":"")},t))}function Mt(t){it(t),G.value!==null&&G.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function _t(t){ue(),l.focused.value===!1&&o("blur",t),fe()}function Ot(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&O.value!==null&&O.value!==t&&O.value.focus(),be()}function se(){F.value!==!0&&(b.value=-1,i.value===!0&&(i.value=!1),l.focused.value===!1&&(s!==null&&(clearTimeout(s),s=null),l.innerLoading.value===!0&&(o("filterAbort"),l.innerLoading.value=!1,c.value=!1)))}function de(t){l.editable.value===!0&&(p===!0?(l.onControlFocusin(t),F.value=!0,J(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?ce(h.value):(R.value!==!0||r["no-option"]!==void 0)&&(i.value=!0))}function ue(){F.value=!1,se()}function fe(){e.useInput===!0&&Ce(e.multiple!==!0&&e.fillInput===!0&&a.value.length!==0&&$.value(a.value[0])||"",!0,!0)}function Le(t){let u=-1;if(t===!0){if(a.value.length!==0){const n=U.value(a.value[0]);u=e.options.findIndex(v=>ke(U.value(v),n))}j(u)}re(u)}function Ft(t,u){i.value===!0&&l.innerLoading.value===!1&&(j(-1,!0),J(()=>{i.value===!0&&l.innerLoading.value===!1&&(t>u?j():Le(!0))}))}function nt(){F.value===!1&&X.value!==null&&X.value.updatePosition()}function at(t){t!==void 0&&ve(t),o("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function it(t){t!==void 0&&ve(t),o("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function ot(){p=M.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?r["no-option"]!==void 0||e.onFilter!==void 0||R.value===!1:!0),W=M.platform.is.ios===!0&&p===!0&&e.useInput===!0?"fade":e.transitionShow}return Wt(ot),Xt(nt),ot(),gt(()=>{w!==null&&clearTimeout(w),C!==null&&clearTimeout(C)}),Object.assign(d,{showPopup:de,hidePopup:ue,removeAtIndex:Te,add:Xe,toggleOption:le,getOptionIndex:()=>b.value,setOptionIndex:re,moveOptionSelection:Oe,filter:ce,updateMenuPosition:nt,updateInputValue:Ce,isOptionSelected:He,getEmittingOptionValue:We,isOptionDisabled:(...t)=>oe.value.apply(null,t)===!0,getOptionValue:(...t)=>U.value.apply(null,t),getOptionLabel:(...t)=>$.value.apply(null,t)}),Object.assign(l,{innerValue:a,fieldClass:f(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:qe,targetRef:O,hasValue:B,showPopup:de,floatingLabel:f(()=>e.hideSelected!==!0&&B.value===!0||typeof h.value=="number"||h.value.length!==0||rt(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(F.value===!0||R.value!==!0||r["no-option"]!==void 0))return p===!0?It():xt();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{fe(),se()})},onClick(t){if(Pe(t),p!==!0&&i.value===!0){se(),O.value!==null&&O.value.focus();return}de(t)}},getControl:t=>{const u=Ct(),n=t===!0||F.value!==!0||p!==!0;if(e.useInput===!0)u.push(kt(t,n));else if(l.editable.value===!0){const q=n===!0?Ie.value:void 0;u.push(y("input",{ref:n===!0?O:void 0,key:"d_t",class:"q-select__focus-target",id:n===!0?l.targetUid.value:void 0,value:N.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...q,onKeydown:et,onKeyup:Je,onKeypress:Ze})),n===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&u.push(y("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ge}))}if(Z.value!==void 0&&e.disable!==!0&&_e.value.length!==0){const q=_e.value.map(x=>y("option",{value:x,selected:!0}));u.push(y("select",{class:"hidden",name:Z.value,multiple:e.multiple},q))}const v=e.useInput===!0||n!==!0?void 0:l.splitAttrs.attributes.value;return y("div",{class:"q-field__native row items-center",...v,...l.splitAttrs.listeners.value},u)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[y(Be,{class:"q-select__dropdown-icon"+(i.value===!0?" rotate-180":""),name:we.value})]:null}),mt(l)}});export{bl as Q};
