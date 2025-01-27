var M=Object.defineProperty;var L=(e,t,n)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>(L(e,typeof t!="symbol"?t+"":t,n),n);import{d as q,r as R,c as $,w as W,bl as I,al as J,n as _,Z as C,_ as T,Q as A,a0 as H}from"./index.e99838a1.js";/**
 * Vue Number Format 3.34.1
 * (c) 2021-2024 Dipak Sarkar <hello@dipaksarkar.in> (https://dipaksarkar.in/)
 * @license MIT
 */var w={prefix:"",suffix:"",separator:",",decimal:".",inputmode:"numeric",precision:2,minimumFractionDigits:null,prefill:!0,reverseFill:!1,min:null,max:null,nullValue:""};function Q(e){return t=0,n=e,r=20,Math.max(t,Math.min(n,r));var t,n,r}class N{constructor(t){p(this,"options");p(this,"input");p(this,"number");p(this,"isClean");p(this,"isCustomDecimal");p(this,"noPreSuffix");p(this,"hasPreOrSuffix");p(this,"prefix");p(this,"preSufRegExp");p(this,"prefixRegExp");p(this,"suffixRegExp");p(this,"numberRegExp");p(this,"cleanRegExp");p(this,"negativeRegExp");this.options=Object.assign(F(w),t);const{prefix:n,suffix:r,decimal:a,reverseFill:l}=this.options;this.input="",this.number="",this.isClean=!l;const s=n,i=r,o=s.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),u=i.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&");o&&(this.prefixRegExp=new RegExp(`^${o}`)),u&&(this.suffixRegExp=new RegExp(`${u}$`)),this.prefix=n,this.numberRegExp=new RegExp(`[^0-9\\${a}]+`,"gi"),this.cleanRegExp=new RegExp("[^0-9]+","gi"),this.negativeRegExp=new RegExp("[^0-9\\-]+","gi"),this.isCustomDecimal=a!==".",this.noPreSuffix=!s&&!i,this.hasPreOrSuffix=!this.noPreSuffix}isNull(){return!this.numberOnly(this.isClean?this.cleanRegExp:this.negativeRegExp)}clean(t=!1){return this.isClean=t,this}sign(){if(this.input===null||this.input===void 0)return"";const t=this.input.toString().indexOf(v)>=0;return this.isClean?t&&this.realNumber()>0?v:"":t?v:""}toFixed(){const t=Math.pow(10,this.options.precision);return(parseFloat(this.numberOnly(/\D+/g))/t||0).toFixed(Q(this.options.precision))}toNumber(t){return Number(t)}numberOnly(t){var r;let n=(r=this.input)==null?void 0:r.toString();return this.prefixRegExp&&(n=n.replace(this.prefixRegExp,"")),this.suffixRegExp&&(n=n.replace(this.suffixRegExp,"")),n.replace(t||this.numberRegExp,"")}inputWithPreOrSuffix(){return this.input&&this.prefixRegExp?this.prefixRegExp.test(this.input.toString()):!this.input||!this.suffixRegExp||this.suffixRegExp.test(this.input.toString())}isNegative(){return this.sign()===v}isNumber(t){return!isNaN(this.toNumber(t||this.input))}numbers(){var a,l,s;const{reverseFill:t,decimal:n,separator:r}=this.options;if(t)this.number=this.toFixed().replace(".",n);else{const i=(s=this.input)==null?void 0:s.toString().replace((a=this.prefixRegExp)!=null?a:"","").replace((l=this.suffixRegExp)!=null?l:"","").replace(new RegExp(v,"g"),""),o=this.input.toString().indexOf(n)>=0&&this.isCustomDecimal,u=i.replace(new RegExp(`\\${r}`,"g"),"").replace(n,".");typeof this.input=="number"||this.isNumber()&&!o&&!this.inputWithPreOrSuffix()&&this.hasPreOrSuffix?this.number=this.parts(i,".").join(n):this.isNumber(u)&&!o&&this.inputWithPreOrSuffix()&&this.hasPreOrSuffix?this.number=this.parts(u,".").join(n):this.number=this.parts(this.numberOnly()).join(n)}return this.number}unformatNumber(){return this.numbers().toString().replace(this.options.decimal,".")}realNumber(){return parseFloat(this.unformatNumber())}parts(t,n){const{precision:r,minimumFractionDigits:a,decimal:l}=this.options;let s=t.toString().split(n||l);if(s.length>1&&(s[0]=this.toNumber(s[0])||0,s[1]=s.slice(1,s.length).join(""),s=s.slice(0,2)),this.isClean){const i=this.toNumber(s.join(".")).toFixed(r),o=this.toNumber(i),u=o.toFixed(a);s=a>=0&&o.toString().length<u.length?u.toString().split("."):o.toString().split(".")}return s.slice(0,2)}addSeparator(){const{decimal:t,separator:n}=this.options,r=this.numbers().split(t);return r[0]=r[0].toString().replace(/(\d)(?=(?:\d{3})+\b)/gm,`$1${n}`),r.join(t)}format(t){this.input=t;const{reverseFill:n,nullValue:r,prefix:a,suffix:l}=this.options;return this.isNull()&&!n?r:this.sign()+a+this.addSeparator()+l}unformat(t){this.input=t;const{reverseFill:n,nullValue:r}=this.options,a=this.realNumber(),l=this.unformatNumber();return this.isNull()||n&&a===0?r:this.sign()+l}}const v="-";function F(e){return JSON.parse(JSON.stringify(e))}function y(e){return new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:{facade:!0}})}function S(e){const t=e instanceof HTMLInputElement?e:e.querySelector("input");if(!t)throw new Error("number directive requires an input element");return t}function D(e,t){const n=()=>{e.setSelectionRange(t,t)};n(),setTimeout(n,1)}function E(e,t,{emit:n=!0,force:r=!1,clean:a=!1}={}){var f;const{options:l,oldValue:s}=e,{reverseFill:i,max:o,min:u}=l,c=((f=t==null?void 0:t.props)==null?void 0:f.value)||e.value;if(r||s!==c){const h=new N(l).clean(a&&!i);let g=h.format(c),d=h.clean(!i).unformat(c);a&&(Number(o)===o&&Number(d)>o?(g=h.format(o),d=o.toString()):Number(u)===u&&Number(d)<u&&(g=h.format(u),d=u.toString())),e.oldValue=g,e.unmasked=d,e.value!==g&&(e.value=g)}return n&&e.dispatchEvent(y("input"))}var Z={beforeMount:(e,{value:t,modifiers:n},r)=>{var u;e=S(e);const a=Object.assign(F(w),t,n),{reverseFill:l,precision:s,decimal:i,inputmode:o}=a;e.options=a,e.setAttribute("inputmode",o),l&&e.value?(e.value=parseFloat(new N({...a,reverseFill:!1}).unformat(e.value)).toFixed(s),(u=r==null?void 0:r.props)!=null&&u.value&&(r.props.value=e.value)):e.value&&!isNaN(Number(e.value))&&(e.value=e.value.replace(".",i)),E(e,r,{force:a.prefill,clean:!0,emit:!1})},mounted:e=>{const t=(e=S(e)).parentElement||e,n=l=>{l.target===e&&function(s){const{target:i,detail:o}=s;if(o!=null&&o.facade)return!1;s.stopPropagation();let u=i.value.length;const{oldValue:c,options:f}=i;i.selectionEnd&&(u=i.value.length-i.selectionEnd),E(i,null,{clean:!f.precision,emit:!1}),f.suffix&&(u=Math.max(u,f.suffix.length)),u=i.value.length-u,f.prefix&&(u=Math.max(u,f.prefix.length)),D(i,u),c!==i.value&&i.dispatchEvent(y("input"))}(l)},r=l=>{l.target===e&&function(s){const{target:i}=s,{oldValue:o}=i;E(i,null,{force:!0,clean:!0,emit:!1}),o!==i.value&&i.dispatchEvent(y("input"))}(l)},a=l=>{l.target===e&&function(s,i){const{options:o}=i,{prefix:u,suffix:c,decimal:f,min:h,separator:g}=o,{key:d}=s,P=new RegExp(`${u}|${c}`,"g"),O=i.value.replace(P,""),j=h===void 0||Number(h)<0||Number(h)!==h;if(d===f)O.includes(f)?s.preventDefault():O||(i.value="0",i.dispatchEvent(new Event("input")));else if(d!==v||j){if(d==="Backspace"){const b=i.selectionEnd||0,V=i.value.slice(b-1,b),B=i.value.slice(b-2,b);let x=i.value.length-b;[u,v,g].includes(V)&&(s.preventDefault(),i.value=V===g?i.value.replace(B,""):i.value.replace(new RegExp(`[${u}${v}]`,"g"),""),x=Math.max(x,c.length),x=i.value.length-x,x=Math.max(x,u.length),D(i,x),i.dispatchEvent(new Event("input")))}}else s.preventDefault()}(l,e)};t.addEventListener("input",n,!0),t.addEventListener("blur",r,!0),t.addEventListener("keydown",a,!0),e.cleanup=()=>{t.removeEventListener("input",n,!0),t.removeEventListener("blur",r,!0),t.removeEventListener("keydown",a,!0)}},updated:(e,{value:t,oldValue:n,modifiers:r},a)=>{if(e=S(e),t!==n){const l=e.options;e.options=Object.assign(l,t,r),E(e,a,{force:!0,clean:!1,emit:!1})}else E(e,a,{emit:!1})},unmounted:e=>{var t;(t=S(e))==null||t.cleanup()}};const m=F(w);var k=q({name:"VueNumber",directives:{number:Z},props:{modelValue:{type:[String,Number],required:!0},nullValue:{type:[Number,String],default:m.nullValue},masked:Boolean,readonly:Boolean,disabled:Boolean,reverseFill:{type:Boolean,default:m.reverseFill},prefill:{type:Boolean,default:m.prefill},precision:{type:Number,default:()=>m.precision},minimumFractionDigits:{type:Number,default:()=>m.minimumFractionDigits},decimal:{type:String,default:()=>m.decimal},min:{type:Number,default:()=>m.min},max:{type:Number,default:()=>m.max},separator:{type:String,default:()=>m.separator},prefix:{type:String,default:()=>m.prefix},suffix:{type:String,default:()=>m.suffix},inputmode:{type:String,default:()=>m.inputmode}},emits:["update:model-value","input:model-value"],setup(e,{emit:t}){const n=R(e.modelValue),r=R(!1),a=R(""),l=$(()=>({...e})),s=new N(l.value),i=$(()=>e.masked?s.format(n.value):a.value),o=()=>{t("update:model-value",i.value)};return W(()=>e.modelValue,u=>{i.value!=u&&(n.value=s.format(u))}),{config:l,maskedValue:n,unmaskedValue:a,input:u=>{const{target:c}=u;n.value=c.value,a.value=c.unmasked,r.value=!0,t("input:model-value",i.value)},blur:()=>{r.value&&i.value!==e.modelValue&&o()},change:o}}});const z=["value","readonly","disabled"];k.render=function(e,t,n,r,a,l){const s=I("number");return J((_(),C("input",{type:"text",autocomplete:"off",value:e.maskedValue,readonly:e.readonly,disabled:e.disabled,class:"v-number vue-number-format",onChange:t[0]||(t[0]=(...i)=>e.change&&e.change(...i)),onInput:t[1]||(t[1]=(...i)=>e.input&&e.input(...i)),onBlur:t[2]||(t[2]=(...i)=>e.blur&&e.blur(...i))},null,40,z)),[[s,e.config]])},k.__file="src/component.vue";const G={name:"NumberFormat",props:["amount"],data(){return{total:0,number:void 0}},setup(){return{RestaurantStore:A()}},created(){this.number=new N(this.RestaurantStore.settings_data.money_config),this.total=this.number.format(this.amount)},watch:{amount(e,t){this.total=this.number.format(e)}}};function K(e,t,n,r,a,l){return _(),C("span",null,H(a.total),1)}var Y=T(G,[["render",K]]);export{Y as default};
