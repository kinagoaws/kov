/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Ma=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],u=n[e++],h=n[e++],f=((s&7)<<18|(o&63)<<12|(u&63)<<6|h&63)-65536;t[i++]=String.fromCharCode(55296+(f>>10)),t[i++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],u=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|u&63)}}return t.join("")},zs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],u=s+1<n.length,h=u?n[s+1]:0,f=s+2<n.length,g=f?n[s+2]:0,I=o>>2,w=(o&3)<<4|h>>4;let S=(h&15)<<2|g>>6,b=g&63;f||(b=64,u||(S=64)),i.push(e[I],e[w],e[S],e[b])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Hs(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ma(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],h=s<n.length?e[n.charAt(s)]:0;++s;const g=s<n.length?e[n.charAt(s)]:64;++s;const w=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||h==null||g==null||w==null)throw new xa;const S=o<<2|h>>4;if(i.push(S),g!==64){const b=h<<4&240|g>>2;if(i.push(b),w!==64){const V=g<<6&192|w;i.push(V)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class xa extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const La=function(n){const t=Hs(n);return zs.encodeByteArray(t,!0)},Rn=function(n){return La(n).replace(/\./g,"")},Fa=function(n){try{return zs.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=()=>Ba().__FIREBASE_DEFAULTS__,ja=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$a=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Fa(n[1]);return t&&JSON.parse(t)},$r=()=>{try{return Ua()||ja()||$a()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},qa=n=>{var t,e;return(e=(t=$r())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Ha=n=>{const t=qa(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},Gs=()=>{var n;return(n=$r())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n),h="";return[Rn(JSON.stringify(e)),Rn(JSON.stringify(u)),h].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qa(){var n;const t=(n=$r())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Wa(){return!Qa()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xa(){try{return typeof indexedDB=="object"}catch{return!1}}function Ya(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="FirebaseError";class ce extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=Ja,Object.setPrototypeOf(this,ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ks.prototype.create)}}class Ks{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],u=o?Za(o,i):"Error",h=`${this.serviceName}: ${u} (${s}).`;return new ce(s,h,i)}}function Za(n,t){return n.replace(tl,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const tl=/\{\$([^}]+)}/g;function Pr(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const o=n[s],u=t[s];if(ls(o)&&ls(u)){if(!Pr(o,u))return!1}else if(o!==u)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function ls(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(n){return n&&n._delegate?n._delegate:n}class Be{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new za;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(rl(t))try{this.getOrInitializeService({instanceIdentifier:zt})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(t=zt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=zt){return this.instances.has(t)}getOptions(t=zt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[o,u]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);i===h&&u.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(!!i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:nl(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=zt){return this.component?this.component.multipleInstances?t:zt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nl(n){return n===zt?void 0:n}function rl(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new el(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const sl={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},ol=F.INFO,al={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},ll=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=al[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Qs{constructor(t){this.name=t,this._logLevel=ol,this._logHandler=ll,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?sl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const ul=(n,t)=>t.some(e=>n instanceof e);let us,hs;function hl(){return us||(us=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cl(){return hs||(hs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ws=new WeakMap,Sr=new WeakMap,Xs=new WeakMap,Er=new WeakMap,qr=new WeakMap;function fl(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(Mt(n.result)),s()},u=()=>{i(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&Ws.set(e,n)}).catch(()=>{}),qr.set(t,n),t}function dl(n){if(Sr.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),s()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});Sr.set(n,t)}let Cr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Sr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Xs.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Mt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function pl(n){Cr=n(Cr)}function ml(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(vr(this),t,...e);return Xs.set(i,t.sort?t.sort():[t]),Mt(i)}:cl().includes(n)?function(...t){return n.apply(vr(this),t),Mt(Ws.get(this))}:function(...t){return Mt(n.apply(vr(this),t))}}function gl(n){return typeof n=="function"?ml(n):(n instanceof IDBTransaction&&dl(n),ul(n,hl())?new Proxy(n,Cr):n)}function Mt(n){if(n instanceof IDBRequest)return fl(n);if(Er.has(n))return Er.get(n);const t=gl(n);return t!==n&&(Er.set(n,t),qr.set(t,n)),t}const vr=n=>qr.get(n);function _l(n,t,{blocked:e,upgrade:i,blocking:s,terminated:o}={}){const u=indexedDB.open(n,t),h=Mt(u);return i&&u.addEventListener("upgradeneeded",f=>{i(Mt(u.result),f.oldVersion,f.newVersion,Mt(u.transaction),f)}),e&&u.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),h.then(f=>{o&&f.addEventListener("close",()=>o()),s&&f.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),h}const yl=["get","getKey","getAll","getAllKeys","count"],El=["put","add","delete","clear"],Tr=new Map;function cs(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Tr.get(t))return Tr.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=El.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||yl.includes(e)))return;const o=async function(u,...h){const f=this.transaction(u,s?"readwrite":"readonly");let g=f.store;return i&&(g=g.index(h.shift())),(await Promise.all([g[e](...h),s&&f.done]))[0]};return Tr.set(t,o),o}pl(n=>({...n,get:(t,e,i)=>cs(t,e)||n.get(t,e,i),has:(t,e)=>!!cs(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Tl(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function Tl(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const br="@firebase/app",fs="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=new Qs("@firebase/app"),Il="@firebase/app-compat",Al="@firebase/analytics-compat",wl="@firebase/analytics",Rl="@firebase/app-check-compat",Pl="@firebase/app-check",Sl="@firebase/auth",Cl="@firebase/auth-compat",bl="@firebase/database",Vl="@firebase/data-connect",Dl="@firebase/database-compat",Nl="@firebase/functions",kl="@firebase/functions-compat",Ol="@firebase/installations",Ml="@firebase/installations-compat",xl="@firebase/messaging",Ll="@firebase/messaging-compat",Fl="@firebase/performance",Bl="@firebase/performance-compat",Ul="@firebase/remote-config",jl="@firebase/remote-config-compat",$l="@firebase/storage",ql="@firebase/storage-compat",Hl="@firebase/firestore",zl="@firebase/vertexai-preview",Gl="@firebase/firestore-compat",Kl="firebase",Ql="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="[DEFAULT]",Wl={[br]:"fire-core",[Il]:"fire-core-compat",[wl]:"fire-analytics",[Al]:"fire-analytics-compat",[Pl]:"fire-app-check",[Rl]:"fire-app-check-compat",[Sl]:"fire-auth",[Cl]:"fire-auth-compat",[bl]:"fire-rtdb",[Vl]:"fire-data-connect",[Dl]:"fire-rtdb-compat",[Nl]:"fire-fn",[kl]:"fire-fn-compat",[Ol]:"fire-iid",[Ml]:"fire-iid-compat",[xl]:"fire-fcm",[Ll]:"fire-fcm-compat",[Fl]:"fire-perf",[Bl]:"fire-perf-compat",[Ul]:"fire-rc",[jl]:"fire-rc-compat",[$l]:"fire-gcs",[ql]:"fire-gcs-compat",[Hl]:"fire-fst",[Gl]:"fire-fst-compat",[zl]:"fire-vertex","fire-js":"fire-js",[Kl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new Map,Xl=new Map,Dr=new Map;function ds(n,t){try{n.container.addComponent(t)}catch(e){Vt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Cn(n){const t=n.name;if(Dr.has(t))return Vt.debug(`There were multiple attempts to register component ${t}.`),!1;Dr.set(t,n);for(const e of Sn.values())ds(e,n);for(const e of Xl.values())ds(e,n);return!0}function Yl(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},xt=new Ks("app","Firebase",Jl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=Ql;function Ys(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Vr,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw xt.create("bad-app-name",{appName:String(s)});if(e||(e=Gs()),!e)throw xt.create("no-options");const o=Sn.get(s);if(o){if(Pr(e,o.options)&&Pr(i,o.config))return o;throw xt.create("duplicate-app",{appName:s})}const u=new il(s);for(const f of Dr.values())u.addComponent(f);const h=new Zl(e,i,u);return Sn.set(s,h),h}function eu(n=Vr){const t=Sn.get(n);if(!t&&n===Vr&&Gs())return Ys();if(!t)throw xt.create("no-app",{appName:n});return t}function ie(n,t,e){var i;let s=(i=Wl[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const h=[`Unable to register library "${s}" with version "${t}":`];o&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Vt.warn(h.join(" "));return}Cn(new Be(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="firebase-heartbeat-database",ru=1,Ue="firebase-heartbeat-store";let Ir=null;function Js(){return Ir||(Ir=_l(nu,ru,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ue)}catch(e){console.warn(e)}}}}).catch(n=>{throw xt.create("idb-open",{originalErrorMessage:n.message})})),Ir}async function iu(n){try{const e=(await Js()).transaction(Ue),i=await e.objectStore(Ue).get(Zs(n));return await e.done,i}catch(t){if(t instanceof ce)Vt.warn(t.message);else{const e=xt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Vt.warn(e.message)}}}async function ps(n,t){try{const i=(await Js()).transaction(Ue,"readwrite");await i.objectStore(Ue).put(t,Zs(n)),await i.done}catch(e){if(e instanceof ce)Vt.warn(e.message);else{const i=xt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Vt.warn(i.message)}}}function Zs(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=1024,ou=30*24*60*60*1e3;class au{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new uu(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ms();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const h=new Date(u.date).valueOf();return Date.now()-h<=ou}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Vt.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ms(),{heartbeatsToSend:i,unsentEntries:s}=lu(this._heartbeatsCache.heartbeats),o=Rn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Vt.warn(e),""}}}function ms(){return new Date().toISOString().substring(0,10)}function lu(n,t=su){const e=[];let i=n.slice();for(const s of n){const o=e.find(u=>u.agent===s.agent);if(o){if(o.dates.push(s.date),gs(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),gs(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class uu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xa()?Ya().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await iu(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return ps(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return ps(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function gs(n){return Rn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(n){Cn(new Be("platform-logger",t=>new vl(t),"PRIVATE")),Cn(new Be("heartbeat",t=>new au(t),"PRIVATE")),ie(br,fs,n),ie(br,fs,"esm2017"),ie("fire-js","")}hu("");var cu="firebase",fu="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ie(cu,fu,"app");var _s=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var to;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,d){function m(){}m.prototype=d.prototype,v.D=d.prototype,v.prototype=new m,v.prototype.constructor=v,v.C=function(_,y,T){for(var p=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)p[Rt-2]=arguments[Rt];return d.prototype[y].apply(_,p)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,d,m){m||(m=0);var _=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)_[y]=d.charCodeAt(m++)|d.charCodeAt(m++)<<8|d.charCodeAt(m++)<<16|d.charCodeAt(m++)<<24;else for(y=0;16>y;++y)_[y]=d[m++]|d[m++]<<8|d[m++]<<16|d[m++]<<24;d=v.g[0],m=v.g[1],y=v.g[2];var T=v.g[3],p=d+(T^m&(y^T))+_[0]+3614090360&4294967295;d=m+(p<<7&4294967295|p>>>25),p=T+(y^d&(m^y))+_[1]+3905402710&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(m^T&(d^m))+_[2]+606105819&4294967295,y=T+(p<<17&4294967295|p>>>15),p=m+(d^y&(T^d))+_[3]+3250441966&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(T^m&(y^T))+_[4]+4118548399&4294967295,d=m+(p<<7&4294967295|p>>>25),p=T+(y^d&(m^y))+_[5]+1200080426&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(m^T&(d^m))+_[6]+2821735955&4294967295,y=T+(p<<17&4294967295|p>>>15),p=m+(d^y&(T^d))+_[7]+4249261313&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(T^m&(y^T))+_[8]+1770035416&4294967295,d=m+(p<<7&4294967295|p>>>25),p=T+(y^d&(m^y))+_[9]+2336552879&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(m^T&(d^m))+_[10]+4294925233&4294967295,y=T+(p<<17&4294967295|p>>>15),p=m+(d^y&(T^d))+_[11]+2304563134&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(T^m&(y^T))+_[12]+1804603682&4294967295,d=m+(p<<7&4294967295|p>>>25),p=T+(y^d&(m^y))+_[13]+4254626195&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(m^T&(d^m))+_[14]+2792965006&4294967295,y=T+(p<<17&4294967295|p>>>15),p=m+(d^y&(T^d))+_[15]+1236535329&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(y^T&(m^y))+_[1]+4129170786&4294967295,d=m+(p<<5&4294967295|p>>>27),p=T+(m^y&(d^m))+_[6]+3225465664&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(T^d))+_[11]+643717713&4294967295,y=T+(p<<14&4294967295|p>>>18),p=m+(T^d&(y^T))+_[0]+3921069994&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(m^y))+_[5]+3593408605&4294967295,d=m+(p<<5&4294967295|p>>>27),p=T+(m^y&(d^m))+_[10]+38016083&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(T^d))+_[15]+3634488961&4294967295,y=T+(p<<14&4294967295|p>>>18),p=m+(T^d&(y^T))+_[4]+3889429448&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(m^y))+_[9]+568446438&4294967295,d=m+(p<<5&4294967295|p>>>27),p=T+(m^y&(d^m))+_[14]+3275163606&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(T^d))+_[3]+4107603335&4294967295,y=T+(p<<14&4294967295|p>>>18),p=m+(T^d&(y^T))+_[8]+1163531501&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(m^y))+_[13]+2850285829&4294967295,d=m+(p<<5&4294967295|p>>>27),p=T+(m^y&(d^m))+_[2]+4243563512&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(T^d))+_[7]+1735328473&4294967295,y=T+(p<<14&4294967295|p>>>18),p=m+(T^d&(y^T))+_[12]+2368359562&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(m^y^T)+_[5]+4294588738&4294967295,d=m+(p<<4&4294967295|p>>>28),p=T+(d^m^y)+_[8]+2272392833&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^m)+_[11]+1839030562&4294967295,y=T+(p<<16&4294967295|p>>>16),p=m+(y^T^d)+_[14]+4259657740&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^T)+_[1]+2763975236&4294967295,d=m+(p<<4&4294967295|p>>>28),p=T+(d^m^y)+_[4]+1272893353&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^m)+_[7]+4139469664&4294967295,y=T+(p<<16&4294967295|p>>>16),p=m+(y^T^d)+_[10]+3200236656&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^T)+_[13]+681279174&4294967295,d=m+(p<<4&4294967295|p>>>28),p=T+(d^m^y)+_[0]+3936430074&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^m)+_[3]+3572445317&4294967295,y=T+(p<<16&4294967295|p>>>16),p=m+(y^T^d)+_[6]+76029189&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^T)+_[9]+3654602809&4294967295,d=m+(p<<4&4294967295|p>>>28),p=T+(d^m^y)+_[12]+3873151461&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^m)+_[15]+530742520&4294967295,y=T+(p<<16&4294967295|p>>>16),p=m+(y^T^d)+_[2]+3299628645&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(y^(m|~T))+_[0]+4096336452&4294967295,d=m+(p<<6&4294967295|p>>>26),p=T+(m^(d|~y))+_[7]+1126891415&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~m))+_[14]+2878612391&4294967295,y=T+(p<<15&4294967295|p>>>17),p=m+(T^(y|~d))+_[5]+4237533241&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~T))+_[12]+1700485571&4294967295,d=m+(p<<6&4294967295|p>>>26),p=T+(m^(d|~y))+_[3]+2399980690&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~m))+_[10]+4293915773&4294967295,y=T+(p<<15&4294967295|p>>>17),p=m+(T^(y|~d))+_[1]+2240044497&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~T))+_[8]+1873313359&4294967295,d=m+(p<<6&4294967295|p>>>26),p=T+(m^(d|~y))+_[15]+4264355552&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~m))+_[6]+2734768916&4294967295,y=T+(p<<15&4294967295|p>>>17),p=m+(T^(y|~d))+_[13]+1309151649&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~T))+_[4]+4149444226&4294967295,d=m+(p<<6&4294967295|p>>>26),p=T+(m^(d|~y))+_[11]+3174756917&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~m))+_[2]+718787259&4294967295,y=T+(p<<15&4294967295|p>>>17),p=m+(T^(y|~d))+_[9]+3951481745&4294967295,v.g[0]=v.g[0]+d&4294967295,v.g[1]=v.g[1]+(y+(p<<21&4294967295|p>>>11))&4294967295,v.g[2]=v.g[2]+y&4294967295,v.g[3]=v.g[3]+T&4294967295}i.prototype.u=function(v,d){d===void 0&&(d=v.length);for(var m=d-this.blockSize,_=this.B,y=this.h,T=0;T<d;){if(y==0)for(;T<=m;)s(this,v,T),T+=this.blockSize;if(typeof v=="string"){for(;T<d;)if(_[y++]=v.charCodeAt(T++),y==this.blockSize){s(this,_),y=0;break}}else for(;T<d;)if(_[y++]=v[T++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=d},i.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var d=1;d<v.length-8;++d)v[d]=0;var m=8*this.o;for(d=v.length-8;d<v.length;++d)v[d]=m&255,m/=256;for(this.u(v),v=Array(16),d=m=0;4>d;++d)for(var _=0;32>_;_+=8)v[m++]=this.g[d]>>>_&255;return v};function o(v,d){var m=h;return Object.prototype.hasOwnProperty.call(m,v)?m[v]:m[v]=d(v)}function u(v,d){this.h=d;for(var m=[],_=!0,y=v.length-1;0<=y;y--){var T=v[y]|0;_&&T==d||(m[y]=T,_=!1)}this.g=m}var h={};function f(v){return-128<=v&&128>v?o(v,function(d){return new u([d|0],0>d?-1:0)}):new u([v|0],0>v?-1:0)}function g(v){if(isNaN(v)||!isFinite(v))return w;if(0>v)return N(g(-v));for(var d=[],m=1,_=0;v>=m;_++)d[_]=v/m|0,m*=4294967296;return new u(d,0)}function I(v,d){if(v.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(v.charAt(0)=="-")return N(I(v.substring(1),d));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=g(Math.pow(d,8)),_=w,y=0;y<v.length;y+=8){var T=Math.min(8,v.length-y),p=parseInt(v.substring(y,y+T),d);8>T?(T=g(Math.pow(d,T)),_=_.j(T).add(g(p))):(_=_.j(m),_=_.add(g(p)))}return _}var w=f(0),S=f(1),b=f(16777216);n=u.prototype,n.m=function(){if(O(this))return-N(this).m();for(var v=0,d=1,m=0;m<this.g.length;m++){var _=this.i(m);v+=(0<=_?_:4294967296+_)*d,d*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(V(this))return"0";if(O(this))return"-"+N(this).toString(v);for(var d=g(Math.pow(v,6)),m=this,_="";;){var y=st(m,d).g;m=G(m,y.j(d));var T=((0<m.g.length?m.g[0]:m.h)>>>0).toString(v);if(m=y,V(m))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function V(v){if(v.h!=0)return!1;for(var d=0;d<v.g.length;d++)if(v.g[d]!=0)return!1;return!0}function O(v){return v.h==-1}n.l=function(v){return v=G(this,v),O(v)?-1:V(v)?0:1};function N(v){for(var d=v.g.length,m=[],_=0;_<d;_++)m[_]=~v.g[_];return new u(m,~v.h).add(S)}n.abs=function(){return O(this)?N(this):this},n.add=function(v){for(var d=Math.max(this.g.length,v.g.length),m=[],_=0,y=0;y<=d;y++){var T=_+(this.i(y)&65535)+(v.i(y)&65535),p=(T>>>16)+(this.i(y)>>>16)+(v.i(y)>>>16);_=p>>>16,T&=65535,p&=65535,m[y]=p<<16|T}return new u(m,m[m.length-1]&-2147483648?-1:0)};function G(v,d){return v.add(N(d))}n.j=function(v){if(V(this)||V(v))return w;if(O(this))return O(v)?N(this).j(N(v)):N(N(this).j(v));if(O(v))return N(this.j(N(v)));if(0>this.l(b)&&0>v.l(b))return g(this.m()*v.m());for(var d=this.g.length+v.g.length,m=[],_=0;_<2*d;_++)m[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<v.g.length;y++){var T=this.i(_)>>>16,p=this.i(_)&65535,Rt=v.i(y)>>>16,pe=v.i(y)&65535;m[2*_+2*y]+=p*pe,H(m,2*_+2*y),m[2*_+2*y+1]+=T*pe,H(m,2*_+2*y+1),m[2*_+2*y+1]+=p*Rt,H(m,2*_+2*y+1),m[2*_+2*y+2]+=T*Rt,H(m,2*_+2*y+2)}for(_=0;_<d;_++)m[_]=m[2*_+1]<<16|m[2*_];for(_=d;_<2*d;_++)m[_]=0;return new u(m,0)};function H(v,d){for(;(v[d]&65535)!=v[d];)v[d+1]+=v[d]>>>16,v[d]&=65535,d++}function Q(v,d){this.g=v,this.h=d}function st(v,d){if(V(d))throw Error("division by zero");if(V(v))return new Q(w,w);if(O(v))return d=st(N(v),d),new Q(N(d.g),N(d.h));if(O(d))return d=st(v,N(d)),new Q(N(d.g),d.h);if(30<v.g.length){if(O(v)||O(d))throw Error("slowDivide_ only works with positive integers.");for(var m=S,_=d;0>=_.l(v);)m=Ut(m),_=Ut(_);var y=gt(m,1),T=gt(_,1);for(_=gt(_,2),m=gt(m,2);!V(_);){var p=T.add(_);0>=p.l(v)&&(y=y.add(m),T=p),_=gt(_,1),m=gt(m,1)}return d=G(v,y.j(d)),new Q(y,d)}for(y=w;0<=v.l(d);){for(m=Math.max(1,Math.floor(v.m()/d.m())),_=Math.ceil(Math.log(m)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=g(m),p=T.j(d);O(p)||0<p.l(v);)m-=_,T=g(m),p=T.j(d);V(T)&&(T=S),y=y.add(T),v=G(v,p)}return new Q(y,v)}n.A=function(v){return st(this,v).h},n.and=function(v){for(var d=Math.max(this.g.length,v.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)&v.i(_);return new u(m,this.h&v.h)},n.or=function(v){for(var d=Math.max(this.g.length,v.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)|v.i(_);return new u(m,this.h|v.h)},n.xor=function(v){for(var d=Math.max(this.g.length,v.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)^v.i(_);return new u(m,this.h^v.h)};function Ut(v){for(var d=v.g.length+1,m=[],_=0;_<d;_++)m[_]=v.i(_)<<1|v.i(_-1)>>>31;return new u(m,v.h)}function gt(v,d){var m=d>>5;d%=32;for(var _=v.g.length-m,y=[],T=0;T<_;T++)y[T]=0<d?v.i(T+m)>>>d|v.i(T+m+1)<<32-d:v.i(T+m);return new u(y,v.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=I,to=u}).apply(typeof _s!="undefined"?_s:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var _n=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eo,Oe,no,In,Nr,ro,io,so;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,a,l){return r==Array.prototype||r==Object.prototype||(r[a]=l.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof _n=="object"&&_n];for(var a=0;a<r.length;++a){var l=r[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var i=e(this);function s(r,a){if(a)t:{var l=i;r=r.split(".");for(var c=0;c<r.length-1;c++){var E=r[c];if(!(E in l))break t;l=l[E]}r=r[r.length-1],c=l[r],a=a(c),a!=c&&a!=null&&t(l,r,{configurable:!0,writable:!0,value:a})}}function o(r,a){r instanceof String&&(r+="");var l=0,c=!1,E={next:function(){if(!c&&l<r.length){var A=l++;return{value:a(A,r[A]),done:!1}}return c=!0,{done:!0,value:void 0}}};return E[Symbol.iterator]=function(){return E},E}s("Array.prototype.values",function(r){return r||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function f(r){var a=typeof r;return a=a!="object"?a:r?Array.isArray(r)?"array":a:"null",a=="array"||a=="object"&&typeof r.length=="number"}function g(r){var a=typeof r;return a=="object"&&r!=null||a=="function"}function I(r,a,l){return r.call.apply(r.bind,arguments)}function w(r,a,l){if(!r)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var E=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(E,c),r.apply(a,E)}}return function(){return r.apply(a,arguments)}}function S(r,a,l){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:w,S.apply(null,arguments)}function b(r,a){var l=Array.prototype.slice.call(arguments,1);return function(){var c=l.slice();return c.push.apply(c,arguments),r.apply(this,c)}}function V(r,a){function l(){}l.prototype=a.prototype,r.aa=a.prototype,r.prototype=new l,r.prototype.constructor=r,r.Qb=function(c,E,A){for(var C=Array(arguments.length-2),U=2;U<arguments.length;U++)C[U-2]=arguments[U];return a.prototype[E].apply(c,C)}}function O(r){const a=r.length;if(0<a){const l=Array(a);for(let c=0;c<a;c++)l[c]=r[c];return l}return[]}function N(r,a){for(let l=1;l<arguments.length;l++){const c=arguments[l];if(f(c)){const E=r.length||0,A=c.length||0;r.length=E+A;for(let C=0;C<A;C++)r[E+C]=c[C]}else r.push(c)}}class G{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function H(r){return/^[\s\xa0]*$/.test(r)}function Q(){var r=h.navigator;return r&&(r=r.userAgent)?r:""}function st(r){return st[" "](r),r}st[" "]=function(){};var Ut=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function gt(r,a,l){for(const c in r)a.call(l,r[c],c,r)}function v(r,a){for(const l in r)a.call(void 0,r[l],l,r)}function d(r){const a={};for(const l in r)a[l]=r[l];return a}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(r,a){let l,c;for(let E=1;E<arguments.length;E++){c=arguments[E];for(l in c)r[l]=c[l];for(let A=0;A<m.length;A++)l=m[A],Object.prototype.hasOwnProperty.call(c,l)&&(r[l]=c[l])}}function y(r){var a=1;r=r.split(":");const l=[];for(;0<a&&r.length;)l.push(r.shift()),a--;return r.length&&l.push(r.join(":")),l}function T(r){h.setTimeout(()=>{throw r},0)}function p(){var r=Qn;let a=null;return r.g&&(a=r.g,r.g=r.g.next,r.g||(r.h=null),a.next=null),a}class Rt{constructor(){this.h=this.g=null}add(a,l){const c=pe.get();c.set(a,l),this.h?this.h.next=c:this.g=c,this.h=c}}var pe=new G(()=>new ea,r=>r.reset());class ea{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let me,ge=!1,Qn=new Rt,ai=()=>{const r=h.Promise.resolve(void 0);me=()=>{r.then(na)}};var na=()=>{for(var r;r=p();){try{r.h.call(r.g)}catch(l){T(l)}var a=pe;a.j(r),100>a.h&&(a.h++,r.next=a.g,a.g=r)}ge=!1};function Dt(){this.s=this.s,this.C=this.C}Dt.prototype.s=!1,Dt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Dt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ot(r,a){this.type=r,this.g=this.target=a,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var ra=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var r=!1,a=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const l=()=>{};h.addEventListener("test",l,a),h.removeEventListener("test",l,a)}catch{}return r}();function _e(r,a){if(ot.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var l=this.type=r.type,c=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=a,a=r.relatedTarget){if(Ut){t:{try{st(a.nodeName);var E=!0;break t}catch{}E=!1}E||(a=null)}}else l=="mouseover"?a=r.fromElement:l=="mouseout"&&(a=r.toElement);this.relatedTarget=a,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:ia[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&_e.aa.h.call(this)}}V(_e,ot);var ia={2:"touch",3:"pen",4:"mouse"};_e.prototype.h=function(){_e.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var ye="closure_listenable_"+(1e6*Math.random()|0),sa=0;function oa(r,a,l,c,E){this.listener=r,this.proxy=null,this.src=a,this.type=l,this.capture=!!c,this.ha=E,this.key=++sa,this.da=this.fa=!1}function Je(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function Ze(r){this.src=r,this.g={},this.h=0}Ze.prototype.add=function(r,a,l,c,E){var A=r.toString();r=this.g[A],r||(r=this.g[A]=[],this.h++);var C=Xn(r,a,c,E);return-1<C?(a=r[C],l||(a.fa=!1)):(a=new oa(a,this.src,A,!!c,E),a.fa=l,r.push(a)),a};function Wn(r,a){var l=a.type;if(l in r.g){var c=r.g[l],E=Array.prototype.indexOf.call(c,a,void 0),A;(A=0<=E)&&Array.prototype.splice.call(c,E,1),A&&(Je(a),r.g[l].length==0&&(delete r.g[l],r.h--))}}function Xn(r,a,l,c){for(var E=0;E<r.length;++E){var A=r[E];if(!A.da&&A.listener==a&&A.capture==!!l&&A.ha==c)return E}return-1}var Yn="closure_lm_"+(1e6*Math.random()|0),Jn={};function li(r,a,l,c,E){if(c&&c.once)return hi(r,a,l,c,E);if(Array.isArray(a)){for(var A=0;A<a.length;A++)li(r,a[A],l,c,E);return null}return l=nr(l),r&&r[ye]?r.K(a,l,g(c)?!!c.capture:!!c,E):ui(r,a,l,!1,c,E)}function ui(r,a,l,c,E,A){if(!a)throw Error("Invalid event type");var C=g(E)?!!E.capture:!!E,U=tr(r);if(U||(r[Yn]=U=new Ze(r)),l=U.add(a,l,c,C,A),l.proxy)return l;if(c=aa(),l.proxy=c,c.src=r,c.listener=l,r.addEventListener)ra||(E=C),E===void 0&&(E=!1),r.addEventListener(a.toString(),c,E);else if(r.attachEvent)r.attachEvent(fi(a.toString()),c);else if(r.addListener&&r.removeListener)r.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return l}function aa(){function r(l){return a.call(r.src,r.listener,l)}const a=la;return r}function hi(r,a,l,c,E){if(Array.isArray(a)){for(var A=0;A<a.length;A++)hi(r,a[A],l,c,E);return null}return l=nr(l),r&&r[ye]?r.L(a,l,g(c)?!!c.capture:!!c,E):ui(r,a,l,!0,c,E)}function ci(r,a,l,c,E){if(Array.isArray(a))for(var A=0;A<a.length;A++)ci(r,a[A],l,c,E);else c=g(c)?!!c.capture:!!c,l=nr(l),r&&r[ye]?(r=r.i,a=String(a).toString(),a in r.g&&(A=r.g[a],l=Xn(A,l,c,E),-1<l&&(Je(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete r.g[a],r.h--)))):r&&(r=tr(r))&&(a=r.g[a.toString()],r=-1,a&&(r=Xn(a,l,c,E)),(l=-1<r?a[r]:null)&&Zn(l))}function Zn(r){if(typeof r!="number"&&r&&!r.da){var a=r.src;if(a&&a[ye])Wn(a.i,r);else{var l=r.type,c=r.proxy;a.removeEventListener?a.removeEventListener(l,c,r.capture):a.detachEvent?a.detachEvent(fi(l),c):a.addListener&&a.removeListener&&a.removeListener(c),(l=tr(a))?(Wn(l,r),l.h==0&&(l.src=null,a[Yn]=null)):Je(r)}}}function fi(r){return r in Jn?Jn[r]:Jn[r]="on"+r}function la(r,a){if(r.da)r=!0;else{a=new _e(a,this);var l=r.listener,c=r.ha||r.src;r.fa&&Zn(r),r=l.call(c,a)}return r}function tr(r){return r=r[Yn],r instanceof Ze?r:null}var er="__closure_events_fn_"+(1e9*Math.random()>>>0);function nr(r){return typeof r=="function"?r:(r[er]||(r[er]=function(a){return r.handleEvent(a)}),r[er])}function at(){Dt.call(this),this.i=new Ze(this),this.M=this,this.F=null}V(at,Dt),at.prototype[ye]=!0,at.prototype.removeEventListener=function(r,a,l,c){ci(this,r,a,l,c)};function pt(r,a){var l,c=r.F;if(c)for(l=[];c;c=c.F)l.push(c);if(r=r.M,c=a.type||a,typeof a=="string")a=new ot(a,r);else if(a instanceof ot)a.target=a.target||r;else{var E=a;a=new ot(c,r),_(a,E)}if(E=!0,l)for(var A=l.length-1;0<=A;A--){var C=a.g=l[A];E=tn(C,c,!0,a)&&E}if(C=a.g=r,E=tn(C,c,!0,a)&&E,E=tn(C,c,!1,a)&&E,l)for(A=0;A<l.length;A++)C=a.g=l[A],E=tn(C,c,!1,a)&&E}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var r=this.i,a;for(a in r.g){for(var l=r.g[a],c=0;c<l.length;c++)Je(l[c]);delete r.g[a],r.h--}}this.F=null},at.prototype.K=function(r,a,l,c){return this.i.add(String(r),a,!1,l,c)},at.prototype.L=function(r,a,l,c){return this.i.add(String(r),a,!0,l,c)};function tn(r,a,l,c){if(a=r.i.g[String(a)],!a)return!0;a=a.concat();for(var E=!0,A=0;A<a.length;++A){var C=a[A];if(C&&!C.da&&C.capture==l){var U=C.listener,et=C.ha||C.src;C.fa&&Wn(r.i,C),E=U.call(et,c)!==!1&&E}}return E&&!c.defaultPrevented}function di(r,a,l){if(typeof r=="function")l&&(r=S(r,l));else if(r&&typeof r.handleEvent=="function")r=S(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:h.setTimeout(r,a||0)}function pi(r){r.g=di(()=>{r.g=null,r.i&&(r.i=!1,pi(r))},r.l);const a=r.h;r.h=null,r.m.apply(null,a)}class ua extends Dt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:pi(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ee(r){Dt.call(this),this.h=r,this.g={}}V(Ee,Dt);var mi=[];function gi(r){gt(r.g,function(a,l){this.g.hasOwnProperty(l)&&Zn(a)},r),r.g={}}Ee.prototype.N=function(){Ee.aa.N.call(this),gi(this)},Ee.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var rr=h.JSON.stringify,ha=h.JSON.parse,ca=class{stringify(r){return h.JSON.stringify(r,void 0)}parse(r){return h.JSON.parse(r,void 0)}};function ir(){}ir.prototype.h=null;function _i(r){return r.h||(r.h=r.i())}function yi(){}var ve={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sr(){ot.call(this,"d")}V(sr,ot);function or(){ot.call(this,"c")}V(or,ot);var jt={},Ei=null;function en(){return Ei=Ei||new at}jt.La="serverreachability";function vi(r){ot.call(this,jt.La,r)}V(vi,ot);function Te(r){const a=en();pt(a,new vi(a))}jt.STAT_EVENT="statevent";function Ti(r,a){ot.call(this,jt.STAT_EVENT,r),this.stat=a}V(Ti,ot);function mt(r){const a=en();pt(a,new Ti(a,r))}jt.Ma="timingevent";function Ii(r,a){ot.call(this,jt.Ma,r),this.size=a}V(Ii,ot);function Ie(r,a){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){r()},a)}function Ae(){this.g=!0}Ae.prototype.xa=function(){this.g=!1};function fa(r,a,l,c,E,A){r.info(function(){if(r.g)if(A)for(var C="",U=A.split("&"),et=0;et<U.length;et++){var B=U[et].split("=");if(1<B.length){var lt=B[0];B=B[1];var ut=lt.split("_");C=2<=ut.length&&ut[1]=="type"?C+(lt+"="+B+"&"):C+(lt+"=redacted&")}}else C=null;else C=A;return"XMLHTTP REQ ("+c+") [attempt "+E+"]: "+a+`
`+l+`
`+C})}function da(r,a,l,c,E,A,C){r.info(function(){return"XMLHTTP RESP ("+c+") [ attempt "+E+"]: "+a+`
`+l+`
`+A+" "+C})}function Zt(r,a,l,c){r.info(function(){return"XMLHTTP TEXT ("+a+"): "+ma(r,l)+(c?" "+c:"")})}function pa(r,a){r.info(function(){return"TIMEOUT: "+a})}Ae.prototype.info=function(){};function ma(r,a){if(!r.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(r=0;r<l.length;r++)if(Array.isArray(l[r])){var c=l[r];if(!(2>c.length)){var E=c[1];if(Array.isArray(E)&&!(1>E.length)){var A=E[0];if(A!="noop"&&A!="stop"&&A!="close")for(var C=1;C<E.length;C++)E[C]=""}}}}return rr(l)}catch{return a}}var nn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ai={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ar;function rn(){}V(rn,ir),rn.prototype.g=function(){return new XMLHttpRequest},rn.prototype.i=function(){return{}},ar=new rn;function Nt(r,a,l,c){this.j=r,this.i=a,this.l=l,this.R=c||1,this.U=new Ee(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wi}function wi(){this.i=null,this.g="",this.h=!1}var Ri={},lr={};function ur(r,a,l){r.L=1,r.v=ln(Pt(a)),r.m=l,r.P=!0,Pi(r,null)}function Pi(r,a){r.F=Date.now(),sn(r),r.A=Pt(r.v);var l=r.A,c=r.R;Array.isArray(c)||(c=[String(c)]),Ui(l.i,"t",c),r.C=0,l=r.j.J,r.h=new wi,r.g=is(r.j,l?a:null,!r.m),0<r.O&&(r.M=new ua(S(r.Y,r,r.g),r.O)),a=r.U,l=r.g,c=r.ca;var E="readystatechange";Array.isArray(E)||(E&&(mi[0]=E.toString()),E=mi);for(var A=0;A<E.length;A++){var C=li(l,E[A],c||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=r.H?d(r.H):{},r.m?(r.u||(r.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,a)):(r.u="GET",r.g.ea(r.A,r.u,null,a)),Te(),fa(r.i,r.u,r.A,r.l,r.R,r.m)}Nt.prototype.ca=function(r){r=r.target;const a=this.M;a&&St(r)==3?a.j():this.Y(r)},Nt.prototype.Y=function(r){try{if(r==this.g)t:{const ut=St(this.g);var a=this.g.Ba();const ne=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||Ki(this.g)))){this.J||ut!=4||a==7||(a==8||0>=ne?Te(3):Te(2)),hr(this);var l=this.g.Z();this.X=l;e:if(Si(this)){var c=Ki(this.g);r="";var E=c.length,A=St(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){$t(this),we(this);var C="";break e}this.h.i=new h.TextDecoder}for(a=0;a<E;a++)this.h.h=!0,r+=this.h.i.decode(c[a],{stream:!(A&&a==E-1)});c.length=0,this.h.g+=r,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,da(this.i,this.u,this.A,this.l,this.R,ut,l),this.o){if(this.T&&!this.K){e:{if(this.g){var U,et=this.g;if((U=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(U)){var B=U;break e}}B=null}if(l=B)Zt(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cr(this,l);else{this.o=!1,this.s=3,mt(12),$t(this),we(this);break t}}if(this.P){l=!0;let Et;for(;!this.J&&this.C<C.length;)if(Et=ga(this,C),Et==lr){ut==4&&(this.s=4,mt(14),l=!1),Zt(this.i,this.l,null,"[Incomplete Response]");break}else if(Et==Ri){this.s=4,mt(15),Zt(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else Zt(this.i,this.l,Et,null),cr(this,Et);if(Si(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||C.length!=0||this.h.h||(this.s=1,mt(16),l=!1),this.o=this.o&&l,!l)Zt(this.i,this.l,C,"[Invalid Chunked Response]"),$t(this),we(this);else if(0<C.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),_r(lt),lt.M=!0,mt(11))}}else Zt(this.i,this.l,C,null),cr(this,C);ut==4&&$t(this),this.o&&!this.J&&(ut==4?ts(this.j,this):(this.o=!1,sn(this)))}else ka(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),$t(this),we(this)}}}catch{}finally{}};function Si(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function ga(r,a){var l=r.C,c=a.indexOf(`
`,l);return c==-1?lr:(l=Number(a.substring(l,c)),isNaN(l)?Ri:(c+=1,c+l>a.length?lr:(a=a.slice(c,c+l),r.C=c+l,a)))}Nt.prototype.cancel=function(){this.J=!0,$t(this)};function sn(r){r.S=Date.now()+r.I,Ci(r,r.I)}function Ci(r,a){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Ie(S(r.ba,r),a)}function hr(r){r.B&&(h.clearTimeout(r.B),r.B=null)}Nt.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(pa(this.i,this.A),this.L!=2&&(Te(),mt(17)),$t(this),this.s=2,we(this)):Ci(this,this.S-r)};function we(r){r.j.G==0||r.J||ts(r.j,r)}function $t(r){hr(r);var a=r.M;a&&typeof a.ma=="function"&&a.ma(),r.M=null,gi(r.U),r.g&&(a=r.g,r.g=null,a.abort(),a.ma())}function cr(r,a){try{var l=r.j;if(l.G!=0&&(l.g==r||fr(l.h,r))){if(!r.K&&fr(l.h,r)&&l.G==3){try{var c=l.Da.g.parse(a)}catch{c=null}if(Array.isArray(c)&&c.length==3){var E=c;if(E[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<r.F)pn(l),fn(l);else break t;gr(l),mt(18)}}else l.za=E[1],0<l.za-l.T&&37500>E[2]&&l.F&&l.v==0&&!l.C&&(l.C=Ie(S(l.Za,l),6e3));if(1>=Di(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Ht(l,11)}else if((r.K||l.g==r)&&pn(l),!H(a))for(E=l.Da.g.parse(a),a=0;a<E.length;a++){let B=E[a];if(l.T=B[0],B=B[1],l.G==2)if(B[0]=="c"){l.K=B[1],l.ia=B[2];const lt=B[3];lt!=null&&(l.la=lt,l.j.info("VER="+l.la));const ut=B[4];ut!=null&&(l.Aa=ut,l.j.info("SVER="+l.Aa));const ne=B[5];ne!=null&&typeof ne=="number"&&0<ne&&(c=1.5*ne,l.L=c,l.j.info("backChannelRequestTimeoutMs_="+c)),c=l;const Et=r.g;if(Et){const gn=Et.g?Et.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gn){var A=c.h;A.g||gn.indexOf("spdy")==-1&&gn.indexOf("quic")==-1&&gn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(dr(A,A.h),A.h=null))}if(c.D){const yr=Et.g?Et.g.getResponseHeader("X-HTTP-Session-Id"):null;yr&&(c.ya=yr,q(c.I,c.D,yr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-r.F,l.j.info("Handshake RTT: "+l.R+"ms")),c=l;var C=r;if(c.qa=rs(c,c.J?c.ia:null,c.W),C.K){Ni(c.h,C);var U=C,et=c.L;et&&(U.I=et),U.B&&(hr(U),sn(U)),c.g=C}else Ji(c);0<l.i.length&&dn(l)}else B[0]!="stop"&&B[0]!="close"||Ht(l,7);else l.G==3&&(B[0]=="stop"||B[0]=="close"?B[0]=="stop"?Ht(l,7):mr(l):B[0]!="noop"&&l.l&&l.l.ta(B),l.v=0)}}Te(4)}catch{}}var _a=class{constructor(r,a){this.g=r,this.map=a}};function bi(r){this.l=r||10,h.PerformanceNavigationTiming?(r=h.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vi(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Di(r){return r.h?1:r.g?r.g.size:0}function fr(r,a){return r.h?r.h==a:r.g?r.g.has(a):!1}function dr(r,a){r.g?r.g.add(a):r.h=a}function Ni(r,a){r.h&&r.h==a?r.h=null:r.g&&r.g.has(a)&&r.g.delete(a)}bi.prototype.cancel=function(){if(this.i=ki(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function ki(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let a=r.i;for(const l of r.g.values())a=a.concat(l.D);return a}return O(r.i)}function ya(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map!="undefined"&&r instanceof Map||typeof Set!="undefined"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(f(r)){for(var a=[],l=r.length,c=0;c<l;c++)a.push(r[c]);return a}a=[],l=0;for(c in r)a[l++]=r[c];return a}function Ea(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map!="undefined"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set!="undefined"&&r instanceof Set)){if(f(r)||typeof r=="string"){var a=[];r=r.length;for(var l=0;l<r;l++)a.push(l);return a}a=[],l=0;for(const c in r)a[l++]=c;return a}}}function Oi(r,a){if(r.forEach&&typeof r.forEach=="function")r.forEach(a,void 0);else if(f(r)||typeof r=="string")Array.prototype.forEach.call(r,a,void 0);else for(var l=Ea(r),c=ya(r),E=c.length,A=0;A<E;A++)a.call(void 0,c[A],l&&l[A],r)}var Mi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function va(r,a){if(r){r=r.split("&");for(var l=0;l<r.length;l++){var c=r[l].indexOf("="),E=null;if(0<=c){var A=r[l].substring(0,c);E=r[l].substring(c+1)}else A=r[l];a(A,E?decodeURIComponent(E.replace(/\+/g," ")):"")}}}function qt(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof qt){this.h=r.h,on(this,r.j),this.o=r.o,this.g=r.g,an(this,r.s),this.l=r.l;var a=r.i,l=new Se;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),xi(this,l),this.m=r.m}else r&&(a=String(r).match(Mi))?(this.h=!1,on(this,a[1]||"",!0),this.o=Re(a[2]||""),this.g=Re(a[3]||"",!0),an(this,a[4]),this.l=Re(a[5]||"",!0),xi(this,a[6]||"",!0),this.m=Re(a[7]||"")):(this.h=!1,this.i=new Se(null,this.h))}qt.prototype.toString=function(){var r=[],a=this.j;a&&r.push(Pe(a,Li,!0),":");var l=this.g;return(l||a=="file")&&(r.push("//"),(a=this.o)&&r.push(Pe(a,Li,!0),"@"),r.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&r.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&r.push("/"),r.push(Pe(l,l.charAt(0)=="/"?Aa:Ia,!0))),(l=this.i.toString())&&r.push("?",l),(l=this.m)&&r.push("#",Pe(l,Ra)),r.join("")};function Pt(r){return new qt(r)}function on(r,a,l){r.j=l?Re(a,!0):a,r.j&&(r.j=r.j.replace(/:$/,""))}function an(r,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);r.s=a}else r.s=null}function xi(r,a,l){a instanceof Se?(r.i=a,Pa(r.i,r.h)):(l||(a=Pe(a,wa)),r.i=new Se(a,r.h))}function q(r,a,l){r.i.set(a,l)}function ln(r){return q(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Re(r,a){return r?a?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Pe(r,a,l){return typeof r=="string"?(r=encodeURI(r).replace(a,Ta),l&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Ta(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Li=/[#\/\?@]/g,Ia=/[#\?:]/g,Aa=/[#\?]/g,wa=/[#\?@]/g,Ra=/#/g;function Se(r,a){this.h=this.g=null,this.i=r||null,this.j=!!a}function kt(r){r.g||(r.g=new Map,r.h=0,r.i&&va(r.i,function(a,l){r.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=Se.prototype,n.add=function(r,a){kt(this),this.i=null,r=te(this,r);var l=this.g.get(r);return l||this.g.set(r,l=[]),l.push(a),this.h+=1,this};function Fi(r,a){kt(r),a=te(r,a),r.g.has(a)&&(r.i=null,r.h-=r.g.get(a).length,r.g.delete(a))}function Bi(r,a){return kt(r),a=te(r,a),r.g.has(a)}n.forEach=function(r,a){kt(this),this.g.forEach(function(l,c){l.forEach(function(E){r.call(a,E,c,this)},this)},this)},n.na=function(){kt(this);const r=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let c=0;c<a.length;c++){const E=r[c];for(let A=0;A<E.length;A++)l.push(a[c])}return l},n.V=function(r){kt(this);let a=[];if(typeof r=="string")Bi(this,r)&&(a=a.concat(this.g.get(te(this,r))));else{r=Array.from(this.g.values());for(let l=0;l<r.length;l++)a=a.concat(r[l])}return a},n.set=function(r,a){return kt(this),this.i=null,r=te(this,r),Bi(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[a]),this.h+=1,this},n.get=function(r,a){return r?(r=this.V(r),0<r.length?String(r[0]):a):a};function Ui(r,a,l){Fi(r,a),0<l.length&&(r.i=null,r.g.set(te(r,a),O(l)),r.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var c=a[l];const A=encodeURIComponent(String(c)),C=this.V(c);for(c=0;c<C.length;c++){var E=A;C[c]!==""&&(E+="="+encodeURIComponent(String(C[c]))),r.push(E)}}return this.i=r.join("&")};function te(r,a){return a=String(a),r.j&&(a=a.toLowerCase()),a}function Pa(r,a){a&&!r.j&&(kt(r),r.i=null,r.g.forEach(function(l,c){var E=c.toLowerCase();c!=E&&(Fi(this,c),Ui(this,E,l))},r)),r.j=a}function Sa(r,a){const l=new Ae;if(h.Image){const c=new Image;c.onload=b(Ot,l,"TestLoadImage: loaded",!0,a,c),c.onerror=b(Ot,l,"TestLoadImage: error",!1,a,c),c.onabort=b(Ot,l,"TestLoadImage: abort",!1,a,c),c.ontimeout=b(Ot,l,"TestLoadImage: timeout",!1,a,c),h.setTimeout(function(){c.ontimeout&&c.ontimeout()},1e4),c.src=r}else a(!1)}function Ca(r,a){const l=new Ae,c=new AbortController,E=setTimeout(()=>{c.abort(),Ot(l,"TestPingServer: timeout",!1,a)},1e4);fetch(r,{signal:c.signal}).then(A=>{clearTimeout(E),A.ok?Ot(l,"TestPingServer: ok",!0,a):Ot(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(E),Ot(l,"TestPingServer: error",!1,a)})}function Ot(r,a,l,c,E){try{E&&(E.onload=null,E.onerror=null,E.onabort=null,E.ontimeout=null),c(l)}catch{}}function ba(){this.g=new ca}function Va(r,a,l){const c=l||"";try{Oi(r,function(E,A){let C=E;g(E)&&(C=rr(E)),a.push(c+A+"="+encodeURIComponent(C))})}catch(E){throw a.push(c+"type="+encodeURIComponent("_badmap")),E}}function un(r){this.l=r.Ub||null,this.j=r.eb||!1}V(un,ir),un.prototype.g=function(){return new hn(this.l,this.j)},un.prototype.i=function(r){return function(){return r}}({});function hn(r,a){at.call(this),this.D=r,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(hn,at),n=hn.prototype,n.open=function(r,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=a,this.readyState=1,be(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(a.body=r),(this.D||h).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ce(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,be(this)),this.g&&(this.readyState=3,be(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream!="undefined"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ji(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function ji(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var a=r.value?r.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!r.done}))&&(this.response=this.responseText+=a)}r.done?Ce(this):be(this),this.readyState==3&&ji(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,Ce(this))},n.Qa=function(r){this.g&&(this.response=r,Ce(this))},n.ga=function(){this.g&&Ce(this)};function Ce(r){r.readyState=4,r.l=null,r.j=null,r.v=null,be(r)}n.setRequestHeader=function(r,a){this.u.append(r,a)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,r.push(l[0]+": "+l[1]),l=a.next();return r.join(`\r
`)};function be(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(hn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function $i(r){let a="";return gt(r,function(l,c){a+=c,a+=":",a+=l,a+=`\r
`}),a}function pr(r,a,l){t:{for(c in l){var c=!1;break t}c=!0}c||(l=$i(l),typeof r=="string"?l!=null&&encodeURIComponent(String(l)):q(r,a,l))}function K(r){at.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(K,at);var Da=/^https?$/i,Na=["POST","PUT"];n=K.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,a,l,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);a=a?a.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ar.g(),this.v=this.o?_i(this.o):_i(ar),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(a,String(r),!0),this.B=!1}catch(A){qi(this,A);return}if(r=l||"",l=new Map(this.headers),c)if(Object.getPrototypeOf(c)===Object.prototype)for(var E in c)l.set(E,c[E]);else if(typeof c.keys=="function"&&typeof c.get=="function")for(const A of c.keys())l.set(A,c.get(A));else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),E=h.FormData&&r instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Na,a,void 0))||c||E||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,C]of l)this.g.setRequestHeader(A,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gi(this),this.u=!0,this.g.send(r),this.u=!1}catch(A){qi(this,A)}};function qi(r,a){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=a,r.m=5,Hi(r),cn(r)}function Hi(r){r.A||(r.A=!0,pt(r,"complete"),pt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,pt(this,"complete"),pt(this,"abort"),cn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cn(this,!0)),K.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?zi(this):this.bb())},n.bb=function(){zi(this)};function zi(r){if(r.h&&typeof u!="undefined"&&(!r.v[1]||St(r)!=4||r.Z()!=2)){if(r.u&&St(r)==4)di(r.Ea,0,r);else if(pt(r,"readystatechange"),St(r)==4){r.h=!1;try{const C=r.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var c;if(c=C===0){var E=String(r.D).match(Mi)[1]||null;!E&&h.self&&h.self.location&&(E=h.self.location.protocol.slice(0,-1)),c=!Da.test(E?E.toLowerCase():"")}l=c}if(l)pt(r,"complete"),pt(r,"success");else{r.m=6;try{var A=2<St(r)?r.g.statusText:""}catch{A=""}r.l=A+" ["+r.Z()+"]",Hi(r)}}finally{cn(r)}}}}function cn(r,a){if(r.g){Gi(r);const l=r.g,c=r.v[0]?()=>{}:null;r.g=null,r.v=null,a||pt(r,"ready");try{l.onreadystatechange=c}catch{}}}function Gi(r){r.I&&(h.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function St(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<St(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var a=this.g.responseText;return r&&a.indexOf(r)==0&&(a=a.substring(r.length)),ha(a)}};function Ki(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function ka(r){const a={};r=(r.g&&2<=St(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let c=0;c<r.length;c++){if(H(r[c]))continue;var l=y(r[c]);const E=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=a[E]||[];a[E]=A,A.push(l)}v(a,function(c){return c.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ve(r,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[r]||a}function Qi(r){this.Aa=0,this.i=[],this.j=new Ae,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ve("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ve("baseRetryDelayMs",5e3,r),this.cb=Ve("retryDelaySeedMs",1e4,r),this.Wa=Ve("forwardChannelMaxRetries",2,r),this.wa=Ve("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new bi(r&&r.concurrentRequestLimit),this.Da=new ba,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Qi.prototype,n.la=8,n.G=1,n.connect=function(r,a,l,c){mt(0),this.W=r,this.H=a||{},l&&c!==void 0&&(this.H.OSID=l,this.H.OAID=c),this.F=this.X,this.I=rs(this,null,this.W),dn(this)};function mr(r){if(Wi(r),r.G==3){var a=r.U++,l=Pt(r.I);if(q(l,"SID",r.K),q(l,"RID",a),q(l,"TYPE","terminate"),De(r,l),a=new Nt(r,r.j,a),a.L=2,a.v=ln(Pt(l)),l=!1,h.navigator&&h.navigator.sendBeacon)try{l=h.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&h.Image&&(new Image().src=a.v,l=!0),l||(a.g=is(a.j,null),a.g.ea(a.v)),a.F=Date.now(),sn(a)}ns(r)}function fn(r){r.g&&(_r(r),r.g.cancel(),r.g=null)}function Wi(r){fn(r),r.u&&(h.clearTimeout(r.u),r.u=null),pn(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&h.clearTimeout(r.s),r.s=null)}function dn(r){if(!Vi(r.h)&&!r.s){r.s=!0;var a=r.Ga;me||ai(),ge||(me(),ge=!0),Qn.add(a,r),r.B=0}}function Oa(r,a){return Di(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=a.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Ie(S(r.Ga,r,a),es(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const E=new Nt(this,this.j,r);let A=this.o;if(this.S&&(A?(A=d(A),_(A,this.S)):A=this.S),this.m!==null||this.O||(E.H=A,A=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var c=this.i[l];if("__data__"in c.map&&(c=c.map.__data__,typeof c=="string")){c=c.length;break e}c=void 0}if(c===void 0)break;if(a+=c,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Yi(this,E,a),l=Pt(this.I),q(l,"RID",r),q(l,"CVER",22),this.D&&q(l,"X-HTTP-Session-Id",this.D),De(this,l),A&&(this.O?a="headers="+encodeURIComponent(String($i(A)))+"&"+a:this.m&&pr(l,this.m,A)),dr(this.h,E),this.Ua&&q(l,"TYPE","init"),this.P?(q(l,"$req",a),q(l,"SID","null"),E.T=!0,ur(E,l,null)):ur(E,l,a),this.G=2}}else this.G==3&&(r?Xi(this,r):this.i.length==0||Vi(this.h)||Xi(this))};function Xi(r,a){var l;a?l=a.l:l=r.U++;const c=Pt(r.I);q(c,"SID",r.K),q(c,"RID",l),q(c,"AID",r.T),De(r,c),r.m&&r.o&&pr(c,r.m,r.o),l=new Nt(r,r.j,l,r.B+1),r.m===null&&(l.H=r.o),a&&(r.i=a.D.concat(r.i)),a=Yi(r,l,1e3),l.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),dr(r.h,l),ur(l,c,a)}function De(r,a){r.H&&gt(r.H,function(l,c){q(a,c,l)}),r.l&&Oi({},function(l,c){q(a,c,l)})}function Yi(r,a,l){l=Math.min(r.i.length,l);var c=r.l?S(r.l.Na,r.l,r):null;t:{var E=r.i;let A=-1;for(;;){const C=["count="+l];A==-1?0<l?(A=E[0].g,C.push("ofs="+A)):A=0:C.push("ofs="+A);let U=!0;for(let et=0;et<l;et++){let B=E[et].g;const lt=E[et].map;if(B-=A,0>B)A=Math.max(0,E[et].g-100),U=!1;else try{Va(lt,C,"req"+B+"_")}catch{c&&c(lt)}}if(U){c=C.join("&");break t}}}return r=r.i.splice(0,l),a.D=r,c}function Ji(r){if(!r.g&&!r.u){r.Y=1;var a=r.Fa;me||ai(),ge||(me(),ge=!0),Qn.add(a,r),r.v=0}}function gr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Ie(S(r.Fa,r),es(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,Zi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Ie(S(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),fn(this),Zi(this))};function _r(r){r.A!=null&&(h.clearTimeout(r.A),r.A=null)}function Zi(r){r.g=new Nt(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var a=Pt(r.qa);q(a,"RID","rpc"),q(a,"SID",r.K),q(a,"AID",r.T),q(a,"CI",r.F?"0":"1"),!r.F&&r.ja&&q(a,"TO",r.ja),q(a,"TYPE","xmlhttp"),De(r,a),r.m&&r.o&&pr(a,r.m,r.o),r.L&&(r.g.I=r.L);var l=r.g;r=r.ia,l.L=1,l.v=ln(Pt(a)),l.m=null,l.P=!0,Pi(l,r)}n.Za=function(){this.C!=null&&(this.C=null,fn(this),gr(this),mt(19))};function pn(r){r.C!=null&&(h.clearTimeout(r.C),r.C=null)}function ts(r,a){var l=null;if(r.g==a){pn(r),_r(r),r.g=null;var c=2}else if(fr(r.h,a))l=a.D,Ni(r.h,a),c=1;else return;if(r.G!=0){if(a.o)if(c==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var E=r.B;c=en(),pt(c,new Ii(c,l)),dn(r)}else Ji(r);else if(E=a.s,E==3||E==0&&0<a.X||!(c==1&&Oa(r,a)||c==2&&gr(r)))switch(l&&0<l.length&&(a=r.h,a.i=a.i.concat(l)),E){case 1:Ht(r,5);break;case 4:Ht(r,10);break;case 3:Ht(r,6);break;default:Ht(r,2)}}}function es(r,a){let l=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(l*=2),l*a}function Ht(r,a){if(r.j.info("Error code "+a),a==2){var l=S(r.fb,r),c=r.Xa;const E=!c;c=new qt(c||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||on(c,"https"),ln(c),E?Sa(c.toString(),l):Ca(c.toString(),l)}else mt(2);r.G=0,r.l&&r.l.sa(a),ns(r),Wi(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function ns(r){if(r.G=0,r.ka=[],r.l){const a=ki(r.h);(a.length!=0||r.i.length!=0)&&(N(r.ka,a),N(r.ka,r.i),r.h.i.length=0,O(r.i),r.i.length=0),r.l.ra()}}function rs(r,a,l){var c=l instanceof qt?Pt(l):new qt(l);if(c.g!="")a&&(c.g=a+"."+c.g),an(c,c.s);else{var E=h.location;c=E.protocol,a=a?a+"."+E.hostname:E.hostname,E=+E.port;var A=new qt(null);c&&on(A,c),a&&(A.g=a),E&&an(A,E),l&&(A.l=l),c=A}return l=r.D,a=r.ya,l&&a&&q(c,l,a),q(c,"VER",r.la),De(r,c),c}function is(r,a,l){if(a&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=r.Ca&&!r.pa?new K(new un({eb:l})):new K(r.pa),a.Ha(r.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ss(){}n=ss.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function mn(){}mn.prototype.g=function(r,a){return new yt(r,a)};function yt(r,a){at.call(this),this.g=new Qi(a),this.l=r,this.h=a&&a.messageUrlParams||null,r=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(r?r["X-WebChannel-Content-Type"]=a.messageContentType:r={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(r?r["X-WebChannel-Client-Profile"]=a.va:r={"X-WebChannel-Client-Profile":a.va}),this.g.S=r,(r=a&&a.Sb)&&!H(r)&&(this.g.m=r),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!H(a)&&(this.g.D=a,r=this.h,r!==null&&a in r&&(r=this.h,a in r&&delete r[a])),this.j=new ee(this)}V(yt,at),yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){mr(this.g)},yt.prototype.o=function(r){var a=this.g;if(typeof r=="string"){var l={};l.__data__=r,r=l}else this.u&&(l={},l.__data__=rr(r),r=l);a.i.push(new _a(a.Ya++,r)),a.G==3&&dn(a)},yt.prototype.N=function(){this.g.l=null,delete this.j,mr(this.g),delete this.g,yt.aa.N.call(this)};function os(r){sr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var a=r.__sm__;if(a){t:{for(const l in a){r=l;break t}r=void 0}(this.i=r)&&(r=this.i,a=a!==null&&r in a?a[r]:void 0),this.data=a}else this.data=r}V(os,sr);function as(){or.call(this),this.status=1}V(as,or);function ee(r){this.g=r}V(ee,ss),ee.prototype.ua=function(){pt(this.g,"a")},ee.prototype.ta=function(r){pt(this.g,new os(r))},ee.prototype.sa=function(r){pt(this.g,new as)},ee.prototype.ra=function(){pt(this.g,"b")},mn.prototype.createWebChannel=mn.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,so=function(){return new mn},io=function(){return en()},ro=jt,Nr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},nn.NO_ERROR=0,nn.TIMEOUT=8,nn.HTTP_ERROR=6,In=nn,Ai.COMPLETE="complete",no=Ai,yi.EventType=ve,ve.OPEN="a",ve.CLOSE="b",ve.ERROR="c",ve.MESSAGE="d",at.prototype.listen=at.prototype.K,Oe=yi,K.prototype.listenOnce=K.prototype.L,K.prototype.getLastError=K.prototype.Ka,K.prototype.getLastErrorCode=K.prototype.Ba,K.prototype.getStatus=K.prototype.Z,K.prototype.getResponseJson=K.prototype.Oa,K.prototype.getResponseText=K.prototype.oa,K.prototype.send=K.prototype.ea,K.prototype.setWithCredentials=K.prototype.Ha,eo=K}).apply(typeof _n!="undefined"?_n:typeof self!="undefined"?self:typeof window!="undefined"?window:{});const ys="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fe="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new Qs("@firebase/firestore");function Ne(){return Wt.logLevel}function D(n,...t){if(Wt.logLevel<=F.DEBUG){const e=t.map(Hr);Wt.debug(`Firestore (${fe}): ${n}`,...e)}}function Xt(n,...t){if(Wt.logLevel<=F.ERROR){const e=t.map(Hr);Wt.error(`Firestore (${fe}): ${n}`,...e)}}function bn(n,...t){if(Wt.logLevel<=F.WARN){const e=t.map(Hr);Wt.warn(`Firestore (${fe}): ${n}`,...e)}}function Hr(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n="Unexpected state"){const t=`FIRESTORE (${fe}) INTERNAL ASSERTION FAILED: `+n;throw Xt(t),new Error(t)}function W(n,t){n||x()}function $(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends ce{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class du{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ct.UNAUTHENTICATED))}shutdown(){}}class pu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class mu{constructor(t){this.t=t,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){W(this.o===void 0);let i=this.i;const s=f=>this.i!==i?(i=this.i,e(f)):Promise.resolve();let o=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Kt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},h=f=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>h(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Kt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(W(typeof i.accessToken=="string"),new oo(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return W(t===null||typeof t=="string"),new ct(t)}}class gu{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class _u{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new gu(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Eu{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){W(this.o===void 0);const i=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>i(o))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(W(typeof e.token=="string"),this.R=e.token,new yu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(n){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=vu(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<e&&(i+=t.charAt(s[o]%t.length))}return i}}function j(n,t){return n<t?-1:n>t?1:0}function oe(n,t,e){return n.length===t.length&&n.every((i,s)=>e(i,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return tt.fromMillis(Date.now())}static fromDate(t){return tt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new tt(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t){this.timestamp=t}static fromTimestamp(t){return new z(t)}static min(){return new z(new tt(0,0))}static max(){return new z(new tt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t,e,i){e===void 0?e=0:e>t.length&&x(),i===void 0?i=t.length-e:i>t.length-e&&x(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return je.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof je?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const o=t.get(s),u=e.get(s);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Y extends je{construct(t,e,i){return new Y(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new k(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const Tu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends je{construct(t,e,i){return new it(t,e,i)}static isValidIdentifier(t){return Tu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(t){const e=[];let i="",s=0;const o=()=>{if(i.length===0)throw new k(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let u=!1;for(;s<t.length;){const h=t[s];if(h==="\\"){if(s+1===t.length)throw new k(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new k(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=f,s+=2}else h==="`"?(u=!u,s++):h!=="."||u?(i+=h,s++):(o(),s++)}if(o(),u)throw new k(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(e)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(Y.fromString(t))}static fromName(t){return new M(Y.fromString(t).popFirst(5))}static empty(){return new M(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new Y(t.slice()))}}function Iu(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(i===1e9?new tt(e+1,0):new tt(e,i));return new Lt(s,M.empty(),t)}function Au(n){return new Lt(n.readTime,n.key,-1)}class Lt{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Lt(z.min(),M.empty(),-1)}static max(){return new Lt(z.max(),M.empty(),-1)}}function wu(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:j(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Ru)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,i)=>{e(t)})}static reject(t){return new R((e,i)=>{i(t)})}static waitFor(t){return new R((e,i)=>{let s=0,o=0,u=!1;t.forEach(h=>{++s,h.next(()=>{++o,u&&o===s&&e()},f=>i(f))}),u=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const i of t)e=e.next(s=>s?R.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,o)=>{i.push(e.call(this,s,o))}),this.waitFor(i)}static mapArray(t,e){return new R((i,s)=>{const o=t.length,u=new Array(o);let h=0;for(let f=0;f<o;f++){const g=f;e(t[g]).next(I=>{u[g]=I,++h,h===o&&i(u)},I=>s(I))}})}static doWhile(t,e){return new R((i,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):i()};o()})}}function Su(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Un(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}uo.oe=-1;function zr(n){return n==null}function Vn(n){return n===0&&1/n==-1/0}function Cu(n){return typeof n=="number"&&Number.isInteger(n)&&!Vn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Qe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ho(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e){this.comparator=t,this.root=e||nt.EMPTY}insert(t,e){return new _t(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(t){return new _t(this.comparator,this.root.remove(t,this.comparator).copy(null,null,nt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new yn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new yn(this.root,t,this.comparator,!1)}getReverseIterator(){return new yn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new yn(this.root,t,this.comparator,!0)}}class yn{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?i(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class nt{constructor(t,e,i,s,o){this.key=t,this.value=e,this.color=i!=null?i:nt.RED,this.left=s!=null?s:nt.EMPTY,this.right=o!=null?o:nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,o){return new nt(t!=null?t:this.key,e!=null?e:this.value,i!=null?i:this.color,s!=null?s:this.left,o!=null?o:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const o=i(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,i),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const t=this.left.check();if(t!==this.right.check())throw x();return t+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(t,e,i,s,o){return this}insert(t,e,i){return new nt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.comparator=t,this.data=new _t(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new vs(this.data.getIterator())}getIteratorFrom(t){return new vs(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof dt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new dt(this.comparator);return e.data=t,e}}class vs{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new It([])}unionWith(t){let e=new dt(it.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new It(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return oe(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException!="undefined"&&o instanceof DOMException?new bu("Invalid base64 string: "+o):o}}(t);return new At(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new At(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}At.EMPTY_BYTE_STRING=new At("");const Vu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yt(n){if(W(!!n),typeof n=="string"){let t=0;const e=Vu.exec(n);if(W(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function $e(n){return typeof n=="string"?At.fromBase64String(n):At.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function co(n){const t=n.mapValue.fields.__previous_value__;return Gr(t)?co(t):t}function Dn(n){const t=Yt(n.mapValue.fields.__local_write_time__.timestampValue);return new tt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(t,e,i,s,o,u,h,f,g){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=g}}class Nn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Nn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Nn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ae(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Gr(n)?4:ku(n)?9007199254740991:Nu(n)?10:11:x()}function wt(n,t){if(n===t)return!0;const e=ae(n);if(e!==ae(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Dn(n).isEqual(Dn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=Yt(s.timestampValue),h=Yt(o.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return $e(s.bytesValue).isEqual($e(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return rt(s.geoPointValue.latitude)===rt(o.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return rt(s.integerValue)===rt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=rt(s.doubleValue),h=rt(o.doubleValue);return u===h?Vn(u)===Vn(h):isNaN(u)&&isNaN(h)}return!1}(n,t);case 9:return oe(n.arrayValue.values||[],t.arrayValue.values||[],wt);case 10:case 11:return function(s,o){const u=s.mapValue.fields||{},h=o.mapValue.fields||{};if(Es(u)!==Es(h))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(h[f]===void 0||!wt(u[f],h[f])))return!1;return!0}(n,t);default:return x()}}function qe(n,t){return(n.values||[]).find(e=>wt(e,t))!==void 0}function le(n,t){if(n===t)return 0;const e=ae(n),i=ae(t);if(e!==i)return j(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,t.booleanValue);case 2:return function(o,u){const h=rt(o.integerValue||o.doubleValue),f=rt(u.integerValue||u.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1}(n,t);case 3:return Ts(n.timestampValue,t.timestampValue);case 4:return Ts(Dn(n),Dn(t));case 5:return j(n.stringValue,t.stringValue);case 6:return function(o,u){const h=$e(o),f=$e(u);return h.compareTo(f)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const h=o.split("/"),f=u.split("/");for(let g=0;g<h.length&&g<f.length;g++){const I=j(h[g],f[g]);if(I!==0)return I}return j(h.length,f.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const h=j(rt(o.latitude),rt(u.latitude));return h!==0?h:j(rt(o.longitude),rt(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Is(n.arrayValue,t.arrayValue);case 10:return function(o,u){var h,f,g,I;const w=o.fields||{},S=u.fields||{},b=(h=w.value)===null||h===void 0?void 0:h.arrayValue,V=(f=S.value)===null||f===void 0?void 0:f.arrayValue,O=j(((g=b==null?void 0:b.values)===null||g===void 0?void 0:g.length)||0,((I=V==null?void 0:V.values)===null||I===void 0?void 0:I.length)||0);return O!==0?O:Is(b,V)}(n.mapValue,t.mapValue);case 11:return function(o,u){if(o===En.mapValue&&u===En.mapValue)return 0;if(o===En.mapValue)return 1;if(u===En.mapValue)return-1;const h=o.fields||{},f=Object.keys(h),g=u.fields||{},I=Object.keys(g);f.sort(),I.sort();for(let w=0;w<f.length&&w<I.length;++w){const S=j(f[w],I[w]);if(S!==0)return S;const b=le(h[f[w]],g[I[w]]);if(b!==0)return b}return j(f.length,I.length)}(n.mapValue,t.mapValue);default:throw x()}}function Ts(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return j(n,t);const e=Yt(n),i=Yt(t),s=j(e.seconds,i.seconds);return s!==0?s:j(e.nanos,i.nanos)}function Is(n,t){const e=n.values||[],i=t.values||[];for(let s=0;s<e.length&&s<i.length;++s){const o=le(e[s],i[s]);if(o)return o}return j(e.length,i.length)}function ue(n){return kr(n)}function kr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=Yt(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return $e(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",s=!0;for(const o of e.values||[])s?s=!1:i+=",",i+=kr(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of i)o?o=!1:s+=",",s+=`${u}:${kr(e.fields[u])}`;return s+"}"}(n.mapValue):x()}function Or(n){return!!n&&"integerValue"in n}function Kr(n){return!!n&&"arrayValue"in n}function An(n){return!!n&&"mapValue"in n}function Nu(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Me(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Qe(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=Me(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Me(n.arrayValue.values[e]);return t}return Object.assign({},n)}function ku(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.value=t}static empty(){return new Tt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!An(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Me(e)}setAll(t){let e=it.emptyPath(),i={},s=[];t.forEach((u,h)=>{if(!e.isImmediateParentOf(h)){const f=this.getFieldsMap(e);this.applyChanges(f,i,s),i={},s=[],e=h.popLast()}u?i[h.lastSegment()]=Me(u):s.push(h.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,i,s)}delete(t){const e=this.field(t.popLast());An(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return wt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];An(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){Qe(e,(s,o)=>t[s]=o);for(const s of i)delete t[s]}clone(){return new Tt(Me(this.value))}}function fo(n){const t=[];return Qe(n.fields,(e,i)=>{const s=new it([e]);if(An(i)){const o=fo(i.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)}),new It(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e,i,s,o,u,h){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=o,this.data=u,this.documentState=h}static newInvalidDocument(t){return new vt(t,0,z.min(),z.min(),z.min(),Tt.empty(),0)}static newFoundDocument(t,e,i,s){return new vt(t,1,e,z.min(),i,s,0)}static newNoDocument(t,e){return new vt(t,2,e,z.min(),z.min(),Tt.empty(),0)}static newUnknownDocument(t,e){return new vt(t,3,e,z.min(),z.min(),Tt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t,e){this.position=t,this.inclusive=e}}function As(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const o=t[s],u=n.position[s];if(o.field.isKeyField()?i=M.comparator(M.fromName(u.referenceValue),e.key):i=le(u,e.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function ws(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!wt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ou(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{}class Z extends po{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new xu(t,e,i):e==="array-contains"?new Bu(t,i):e==="in"?new Uu(t,i):e==="not-in"?new ju(t,i):e==="array-contains-any"?new $u(t,i):new Z(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new Lu(t,i):new Fu(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(le(e,this.value)):e!==null&&ae(this.value)===ae(e)&&this.matchesComparison(le(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ft extends po{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ft(t,e)}matches(t){return mo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function mo(n){return n.op==="and"}function go(n){return Mu(n)&&mo(n)}function Mu(n){for(const t of n.filters)if(t instanceof Ft)return!1;return!0}function Mr(n){if(n instanceof Z)return n.field.canonicalString()+n.op.toString()+ue(n.value);if(go(n))return n.filters.map(t=>Mr(t)).join(",");{const t=n.filters.map(e=>Mr(e)).join(",");return`${n.op}(${t})`}}function _o(n,t){return n instanceof Z?function(i,s){return s instanceof Z&&i.op===s.op&&i.field.isEqual(s.field)&&wt(i.value,s.value)}(n,t):n instanceof Ft?function(i,s){return s instanceof Ft&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((o,u,h)=>o&&_o(u,s.filters[h]),!0):!1}(n,t):void x()}function yo(n){return n instanceof Z?function(e){return`${e.field.canonicalString()} ${e.op} ${ue(e.value)}`}(n):n instanceof Ft?function(e){return e.op.toString()+" {"+e.getFilters().map(yo).join(" ,")+"}"}(n):"Filter"}class xu extends Z{constructor(t,e,i){super(t,e,i),this.key=M.fromName(i.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class Lu extends Z{constructor(t,e){super(t,"in",e),this.keys=Eo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Fu extends Z{constructor(t,e){super(t,"not-in",e),this.keys=Eo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Eo(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>M.fromName(i.referenceValue))}class Bu extends Z{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Kr(e)&&qe(e.arrayValue,this.value)}}class Uu extends Z{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&qe(this.value.arrayValue,e)}}class ju extends Z{constructor(t,e){super(t,"not-in",e)}matches(t){if(qe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!qe(this.value.arrayValue,e)}}class $u extends Z{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Kr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>qe(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(t,e=null,i=[],s=[],o=null,u=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=u,this.endAt=h,this.ue=null}}function Rs(n,t=null,e=[],i=[],s=null,o=null,u=null){return new qu(n,t,e,i,s,o,u)}function Qr(n){const t=$(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>Mr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),zr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>ue(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>ue(i)).join(",")),t.ue=e}return t.ue}function Wr(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Ou(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!_o(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ws(n.startAt,t.startAt)&&ws(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,e=null,i=[],s=[],o=null,u="F",h=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=u,this.startAt=h,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Hu(n,t,e,i,s,o,u,h){return new jn(n,t,e,i,s,o,u,h)}function zu(n){return new jn(n)}function Ps(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Gu(n){return n.collectionGroup!==null}function xe(n){const t=$(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new dt(it.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(g=>{g.isInequality()&&(h=h.add(g.field))})}),h})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new On(o,i))}),e.has(it.keyField().canonicalString())||t.ce.push(new On(it.keyField(),i))}return t.ce}function Qt(n){const t=$(n);return t.le||(t.le=Ku(t,xe(n))),t.le}function Ku(n,t){if(n.limitType==="F")return Rs(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new On(s.field,o)});const e=n.endAt?new kn(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new kn(n.startAt.position,n.startAt.inclusive):null;return Rs(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function xr(n,t,e){return new jn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function vo(n,t){return Wr(Qt(n),Qt(t))&&n.limitType===t.limitType}function To(n){return`${Qr(Qt(n))}|lt:${n.limitType}`}function ke(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>yo(s)).join(", ")}]`),zr(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>ue(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>ue(s)).join(",")),`Target(${i})`}(Qt(n))}; limitType=${n.limitType})`}function Xr(n,t){return t.isFoundDocument()&&function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):M.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,t)&&function(i,s){for(const o of xe(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(i,s){return!(i.startAt&&!function(u,h,f){const g=As(u,h,f);return u.inclusive?g<=0:g<0}(i.startAt,xe(i),s)||i.endAt&&!function(u,h,f){const g=As(u,h,f);return u.inclusive?g>=0:g>0}(i.endAt,xe(i),s))}(n,t)}function Qu(n){return(t,e)=>{let i=!1;for(const s of xe(n)){const o=Wu(s,t,e);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function Wu(n,t,e){const i=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,u,h){const f=u.data.field(o),g=h.data.field(o);return f!==null&&g!==null?le(f,g):x()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return x()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Qe(this.inner,(e,i)=>{for(const[s,o]of i)t(s,o)})}isEmpty(){return ho(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=new _t(M.comparator);function Mn(){return Xu}const Io=new _t(M.comparator);function vn(...n){let t=Io;for(const e of n)t=t.insert(e.key,e);return t}function Ao(n){let t=Io;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Gt(){return Le()}function wo(){return Le()}function Le(){return new de(n=>n.toString(),(n,t)=>n.isEqual(t))}const Yu=new _t(M.comparator),Ju=new dt(M.comparator);function ft(...n){let t=Ju;for(const e of n)t=t.add(e);return t}const Zu=new dt(j);function th(){return Zu}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vn(t)?"-0":t}}function Ro(n){return{integerValue:""+n}}function eh(n,t){return Cu(t)?Ro(t):Yr(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this._=void 0}}function nh(n,t,e){return n instanceof xn?function(s,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Gr(o)&&(o=co(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):n instanceof He?So(n,t):n instanceof ze?Co(n,t):function(s,o){const u=Po(s,o),h=Ss(u)+Ss(s.Pe);return Or(u)&&Or(s.Pe)?Ro(h):Yr(s.serializer,h)}(n,t)}function rh(n,t,e){return n instanceof He?So(n,t):n instanceof ze?Co(n,t):e}function Po(n,t){return n instanceof Ln?function(i){return Or(i)||function(o){return!!o&&"doubleValue"in o}(i)}(t)?t:{integerValue:0}:null}class xn extends $n{}class He extends $n{constructor(t){super(),this.elements=t}}function So(n,t){const e=bo(t);for(const i of n.elements)e.some(s=>wt(s,i))||e.push(i);return{arrayValue:{values:e}}}class ze extends $n{constructor(t){super(),this.elements=t}}function Co(n,t){let e=bo(t);for(const i of n.elements)e=e.filter(s=>!wt(s,i));return{arrayValue:{values:e}}}class Ln extends $n{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ss(n){return rt(n.integerValue||n.doubleValue)}function bo(n){return Kr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ih(n,t){return n.field.isEqual(t.field)&&function(i,s){return i instanceof He&&s instanceof He||i instanceof ze&&s instanceof ze?oe(i.elements,s.elements,wt):i instanceof Ln&&s instanceof Ln?wt(i.Pe,s.Pe):i instanceof xn&&s instanceof xn}(n.transform,t.transform)}class sh{constructor(t,e){this.version=t,this.transformResults=e}}class Ct{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ct}static exists(t){return new Ct(void 0,t)}static updateTime(t){return new Ct(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function wn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class qn{}function Vo(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new No(n.key,Ct.none()):new We(n.key,n.data,Ct.none());{const e=n.data,i=Tt.empty();let s=new dt(it.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?i.delete(o):i.set(o,u),s=s.add(o)}return new Jt(n.key,i,new It(s.toArray()),Ct.none())}}function oh(n,t,e){n instanceof We?function(s,o,u){const h=s.value.clone(),f=bs(s.fieldTransforms,o,u.transformResults);h.setAll(f),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(n,t,e):n instanceof Jt?function(s,o,u){if(!wn(s.precondition,o))return void o.convertToUnknownDocument(u.version);const h=bs(s.fieldTransforms,o,u.transformResults),f=o.data;f.setAll(Do(s)),f.setAll(h),o.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(n,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function Fe(n,t,e,i){return n instanceof We?function(o,u,h,f){if(!wn(o.precondition,u))return h;const g=o.value.clone(),I=Vs(o.fieldTransforms,f,u);return g.setAll(I),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null}(n,t,e,i):n instanceof Jt?function(o,u,h,f){if(!wn(o.precondition,u))return h;const g=Vs(o.fieldTransforms,f,u),I=u.data;return I.setAll(Do(o)),I.setAll(g),u.convertToFoundDocument(u.version,I).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,i):function(o,u,h){return wn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h}(n,t,e)}function ah(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),o=Po(i.transform,s||null);o!=null&&(e===null&&(e=Tt.empty()),e.set(i.field,o))}return e||null}function Cs(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&oe(i,s,(o,u)=>ih(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class We extends qn{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Jt extends qn{constructor(t,e,i,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Do(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function bs(n,t,e){const i=new Map;W(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],u=o.transform,h=t.data.field(o.field);i.set(o.field,rh(u,h,e[s]))}return i}function Vs(n,t,e){const i=new Map;for(const s of n){const o=s.transform,u=e.data.field(s.field);i.set(s.field,nh(o,u,t))}return i}class No extends qn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lh extends qn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&oh(o,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=Fe(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=Fe(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=wo();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let h=this.applyToLocalView(u,o.mutatedFields);h=e.has(s.key)?null:h;const f=Vo(u,h);f!==null&&i.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(z.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ft())}isEqual(t){return this.batchId===t.batchId&&oe(this.mutations,t.mutations,(e,i)=>Cs(e,i))&&oe(this.baseMutations,t.baseMutations,(e,i)=>Cs(e,i))}}class Jr{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){W(t.mutations.length===i.length);let s=function(){return Yu}();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,i[u].version);return new Jr(t,e,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X,L;function ch(n){switch(n){default:return x();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function fh(n){if(n===void 0)return Xt("GRPC error has no .code"),P.UNKNOWN;switch(n){case X.OK:return P.OK;case X.CANCELLED:return P.CANCELLED;case X.UNKNOWN:return P.UNKNOWN;case X.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case X.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case X.INTERNAL:return P.INTERNAL;case X.UNAVAILABLE:return P.UNAVAILABLE;case X.UNAUTHENTICATED:return P.UNAUTHENTICATED;case X.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case X.NOT_FOUND:return P.NOT_FOUND;case X.ALREADY_EXISTS:return P.ALREADY_EXISTS;case X.PERMISSION_DENIED:return P.PERMISSION_DENIED;case X.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case X.ABORTED:return P.ABORTED;case X.OUT_OF_RANGE:return P.OUT_OF_RANGE;case X.UNIMPLEMENTED:return P.UNIMPLEMENTED;case X.DATA_LOSS:return P.DATA_LOSS;default:return x()}}(L=X||(X={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new to([4294967295,4294967295],0);class dh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Lr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ph(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function mh(n,t){return Lr(n,t.toTimestamp())}function se(n){return W(!!n),z.fromTimestamp(function(e){const i=Yt(e);return new tt(i.seconds,i.nanos)}(n))}function ko(n,t){return Fr(n,t).canonicalString()}function Fr(n,t){const e=function(s){return new Y(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function gh(n){const t=Y.fromString(n);return W(wh(t)),t}function Br(n,t){return ko(n.databaseId,t.path)}function _h(n){const t=gh(n);return t.length===4?Y.emptyPath():Eh(t)}function yh(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Eh(n){return W(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ds(n,t,e){return{name:Br(n,t),fields:e.value.mapValue.fields}}function vh(n,t){let e;if(t instanceof We)e={update:Ds(n,t.key,t.value)};else if(t instanceof No)e={delete:Br(n,t.key)};else if(t instanceof Jt)e={update:Ds(n,t.key,t.data),updateMask:Ah(t.fieldMask)};else{if(!(t instanceof lh))return x();e={verify:Br(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(o,u){const h=u.transform;if(h instanceof xn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof He)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof ze)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Ln)return{fieldPath:u.field.canonicalString(),increment:h.Pe};throw x()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:mh(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x()}(n,t.precondition)),e}function Th(n,t){return n&&n.length>0?(W(t!==void 0),n.map(e=>function(s,o){let u=s.updateTime?se(s.updateTime):se(o);return u.isEqual(z.min())&&(u=se(o)),new sh(u,s.transformResults||[])}(e,t))):[]}function Ih(n){let t=_h(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){W(i===1);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(w){const S=Oo(w);return S instanceof Ft&&go(S)?S.getFilters():[S]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(S=>function(V){return new On(re(V.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(S))}(e.orderBy));let h=null;e.limit&&(h=function(w){let S;return S=typeof w=="object"?w.value:w,zr(S)?null:S}(e.limit));let f=null;e.startAt&&(f=function(w){const S=!!w.before,b=w.values||[];return new kn(b,S)}(e.startAt));let g=null;return e.endAt&&(g=function(w){const S=!w.before,b=w.values||[];return new kn(b,S)}(e.endAt)),Hu(t,s,u,o,h,"F",f,g)}function Oo(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=re(e.unaryFilter.field);return Z.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=re(e.unaryFilter.field);return Z.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=re(e.unaryFilter.field);return Z.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=re(e.unaryFilter.field);return Z.create(u,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(e){return Z.create(re(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ft.create(e.compositeFilter.filters.map(i=>Oo(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x()}}(e.compositeFilter.op))}(n):x()}function re(n){return it.fromServerFormat(n.fieldPath)}function Ah(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function wh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(t){this.ct=t}}function Ph(n){const t=Ih({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?xr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(){this.un=new Ch}addToCollectionParentIndex(t,e){return this.un.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Lt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Lt.min())}updateCollectionGroup(t,e,i){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Ch{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new dt(Y.comparator),o=!s.has(i);return this.index[e]=s.add(i),o}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new dt(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new he(0)}static kn(){return new he(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(){this.changes=new de(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?R.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&Fe(i.mutation,s,It.empty(),tt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,ft()).next(()=>i))}getLocalViewOfDocuments(t,e,i=ft()){const s=Gt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(o=>{let u=vn();return o.forEach((h,f)=>{u=u.insert(h,f.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const i=Gt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,ft()))}populateOverlays(t,e,i){const s=[];return i.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,h)=>{e.set(u,h)})})}computeViews(t,e,i,s){let o=Mn();const u=Le(),h=function(){return Le()}();return e.forEach((f,g)=>{const I=i.get(g.key);s.has(g.key)&&(I===void 0||I.mutation instanceof Jt)?o=o.insert(g.key,g):I!==void 0?(u.set(g.key,I.mutation.getFieldMask()),Fe(I.mutation,g,I.mutation.getFieldMask(),tt.now())):u.set(g.key,It.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((g,I)=>u.set(g,I)),e.forEach((g,I)=>{var w;return h.set(g,new Vh(I,(w=u.get(g))!==null&&w!==void 0?w:null))}),h))}recalculateAndSaveOverlays(t,e){const i=Le();let s=new _t((u,h)=>u-h),o=ft();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const h of u)h.keys().forEach(f=>{const g=e.get(f);if(g===null)return;let I=i.get(f)||It.empty();I=h.applyToLocalView(g,I),i.set(f,I);const w=(s.get(h.batchId)||ft()).add(f);s=s.insert(h.batchId,w)})}).next(()=>{const u=[],h=s.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),g=f.key,I=f.value,w=wo();I.forEach(S=>{if(!o.has(S)){const b=Vo(e.get(S),i.get(S));b!==null&&w.set(S,b),o=o.add(S)}}),u.push(this.documentOverlayCache.saveOverlays(t,g,w))}return R.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Gu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-o.size):R.resolve(Gt());let h=-1,f=o;return u.next(g=>R.forEach(g,(I,w)=>(h<w.largestBatchId&&(h=w.largestBatchId),o.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next(S=>{f=f.insert(I,S)}))).next(()=>this.populateOverlays(t,g,o)).next(()=>this.computeViews(t,f,g,ft())).next(I=>({batchId:h,changes:Ao(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(i=>{let s=vn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const o=e.collectionGroup;let u=vn();return this.indexManager.getCollectionParents(t,o).next(h=>R.forEach(h,f=>{const g=function(w,S){return new jn(S,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,g,i,s).next(I=>{I.forEach((w,S)=>{u=u.insert(w,S)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,o,s))).next(u=>{o.forEach((f,g)=>{const I=g.getKey();u.get(I)===null&&(u=u.insert(I,vt.newInvalidDocument(I)))});let h=vn();return u.forEach((f,g)=>{const I=o.get(f);I!==void 0&&Fe(I.mutation,g,It.empty(),tt.now()),Xr(e,g)&&(h=h.insert(f,g))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return R.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:se(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:Ph(s.bundledQuery),readTime:se(s.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(){this.overlays=new _t(M.comparator),this.Ir=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Gt();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,o)=>{this.ht(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.Ir.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(i)),R.resolve()}getOverlaysForCollection(t,e,i){const s=Gt(),o=e.length+1,u=new M(e.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const f=h.getNext().value,g=f.getKey();if(!e.isPrefixOf(g.path))break;g.path.length===o&&f.largestBatchId>i&&s.set(f.getKey(),f)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let o=new _t((g,I)=>g-I);const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===e&&g.largestBatchId>i){let I=o.get(g.largestBatchId);I===null&&(I=Gt(),o=o.insert(g.largestBatchId,I)),I.set(g.getKey(),g)}}const h=Gt(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((g,I)=>h.set(g,I)),!(h.size()>=s)););return R.resolve(h)}ht(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const u=this.Ir.get(s.largestBatchId).delete(i.key);this.Ir.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new hh(e,i));let o=this.Ir.get(e);o===void 0&&(o=ft(),this.Ir.set(e,o)),this.Ir.set(e,o.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(){this.sessionToken=At.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.Tr=new dt(J.Er),this.dr=new dt(J.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const i=new J(t,e);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Vr(new J(t,e))}mr(t,e){t.forEach(i=>this.removeReference(i,e))}gr(t){const e=new M(new Y([])),i=new J(e,t),s=new J(e,t+1),o=[];return this.dr.forEachInRange([i,s],u=>{this.Vr(u),o.push(u.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new M(new Y([])),i=new J(e,t),s=new J(e,t+1);let o=ft();return this.dr.forEachInRange([i,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new J(t,0),i=this.Tr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class J{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return M.comparator(t.key,e.key)||j(t.wr,e.wr)}static Ar(t,e){return j(t.wr,e.wr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new dt(J.Er)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new uh(o,e,i,s);this.mutationQueue.push(u);for(const h of s)this.br=this.br.add(new J(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return R.resolve(u)}lookupMutationBatch(t,e){return R.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.vr(i),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new J(e,0),s=new J(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([i,s],u=>{const h=this.Dr(u.wr);o.push(h)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new dt(j);return e.forEach(s=>{const o=new J(s,0),u=new J(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,u],h=>{i=i.add(h.wr)})}),R.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let o=i;M.isDocumentKey(o)||(o=o.child(""));const u=new J(new M(o),0);let h=new dt(j);return this.br.forEachWhile(f=>{const g=f.key.path;return!!i.isPrefixOf(g)&&(g.length===s&&(h=h.add(f.wr)),!0)},u),R.resolve(this.Cr(h))}Cr(t){const e=[];return t.forEach(i=>{const s=this.Dr(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){W(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return R.forEach(e.mutations,s=>{const o=new J(s.key,e.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=i})}On(t){}containsKey(t,e){const i=new J(e,0),s=this.br.firstAfterOrEqual(i);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t){this.Mr=t,this.docs=function(){return new _t(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),o=s?s.size:0,u=this.Mr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return R.resolve(i?i.document.mutableCopy():vt.newInvalidDocument(e))}getEntries(t,e){let i=Mn();return e.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():vt.newInvalidDocument(s))}),R.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let o=Mn();const u=e.path,h=new M(u.child("")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:g,value:{document:I}}=f.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||wu(Au(I),i)<=0||(s.has(I.key)||Xr(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,i,s){x()}Or(t,e){return R.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new Lh(this)}getSize(t){return R.resolve(this.size)}}class Lh extends bh{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(i)}),R.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t){this.persistence=t,this.Nr=new de(e=>Qr(e),Wr),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Zr,this.targetCount=0,this.kr=he.Bn()}forEachTarget(t,e){return this.Nr.forEach((i,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Lr&&(this.Lr=e),R.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new he(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Kn(e),R.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,i){let s=0;const o=[];return this.Nr.forEach((u,h)=>{h.sequenceNumber<=e&&i.get(h.targetId)===null&&(this.Nr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const i=this.Nr.get(e)||null;return R.resolve(i)}addMatchingKeys(t,e,i){return this.Br.Rr(e,i),R.resolve()}removeMatchingKeys(t,e,i){this.Br.mr(e,i);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Br.yr(e);return R.resolve(i)}containsKey(t,e){return R.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(t,e){this.qr={},this.overlays={},this.Qr=new uo(0),this.Kr=!1,this.Kr=!0,this.$r=new Oh,this.referenceDelegate=t(this),this.Ur=new Fh(this),this.indexManager=new Sh,this.remoteDocumentCache=function(s){return new xh(s)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new Rh(e),this.Gr=new Nh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new kh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.qr[t.toKey()];return i||(i=new Mh(e,this.referenceDelegate),this.qr[t.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,i){D("MemoryPersistence","Starting transaction:",t);const s=new Uh(this.Qr.next());return this.referenceDelegate.zr(),i(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return R.or(Object.values(this.qr).map(i=>()=>i.containsKey(t,e)))}}class Uh extends Pu{constructor(t){super(),this.currentSequenceNumber=t}}class ti{constructor(t){this.persistence=t,this.Jr=new Zr,this.Yr=null}static Zr(t){return new ti(t)}get Xr(){if(this.Yr)return this.Yr;throw x()}addReference(t,e,i){return this.Jr.addReference(i,e),this.Xr.delete(i.toString()),R.resolve()}removeReference(t,e,i){return this.Jr.removeReference(i,e),this.Xr.add(i.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),R.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>i.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Xr,i=>{const s=M.fromPath(i);return this.ei(t,s).next(o=>{o||e.removeEntry(s,z.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(i=>{i?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return R.or([()=>R.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.$i=i,this.Ui=s}static Wi(t,e){let i=ft(),s=ft();for(const o of e.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ei(t,e.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Wa()?8:Su(Ka())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,i,s){const o={result:null};return this.Yi(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Zi(t,e,s,i).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new jh;return this.Xi(t,e,u).next(h=>{if(o.result=h,this.zi)return this.es(t,e,u,h.size)})}).next(()=>o.result)}es(t,e,i,s){return i.documentReadCount<this.ji?(Ne()<=F.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",ke(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),R.resolve()):(Ne()<=F.DEBUG&&D("QueryEngine","Query:",ke(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Hi*s?(Ne()<=F.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",ke(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Qt(e))):R.resolve())}Yi(t,e){if(Ps(e))return R.resolve(null);let i=Qt(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=xr(e,null,"F"),i=Qt(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(o=>{const u=ft(...o);return this.Ji.getDocuments(t,u).next(h=>this.indexManager.getMinOffset(t,i).next(f=>{const g=this.ts(e,h);return this.ns(e,g,u,f.readTime)?this.Yi(t,xr(e,null,"F")):this.rs(t,g,e,f)}))})))}Zi(t,e,i,s){return Ps(e)||s.isEqual(z.min())?R.resolve(null):this.Ji.getDocuments(t,i).next(o=>{const u=this.ts(e,o);return this.ns(e,u,i,s)?R.resolve(null):(Ne()<=F.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ke(e)),this.rs(t,u,e,Iu(s,-1)).next(h=>h))})}ts(t,e){let i=new dt(Qu(t));return e.forEach((s,o)=>{Xr(t,o)&&(i=i.add(o))}),i}ns(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,i){return Ne()<=F.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",ke(e)),this.Ji.getDocumentsMatchingQuery(t,e,Lt.min(),i)}rs(t,e,i,s){return this.Ji.getDocumentsMatchingQuery(t,i,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(t,e,i,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new _t(j),this._s=new de(o=>Qr(o),Wr),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(i)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Dh(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Hh(n,t,e,i){return new qh(n,t,e,i)}async function Mo(n,t){const e=$(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(i))).next(o=>{const u=[],h=[];let f=ft();for(const g of s){u.push(g.batchId);for(const I of g.mutations)f=f.add(I.key)}for(const g of o){h.push(g.batchId);for(const I of g.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(i,f).next(g=>({hs:g,removedBatchIds:u,addedBatchIds:h}))})})}function zh(n,t){const e=$(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(h,f,g,I){const w=g.batch,S=w.keys();let b=R.resolve();return S.forEach(V=>{b=b.next(()=>I.getEntry(f,V)).next(O=>{const N=g.docVersions.get(V);W(N!==null),O.version.compareTo(N)<0&&(w.applyToRemoteDocument(O,g),O.isValidDocument()&&(O.setReadTime(g.commitVersion),I.addEntry(O)))})}),b.next(()=>h.mutationQueue.removeMutationBatch(f,w))}(e,i,t,o).next(()=>o.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(h){let f=ft();for(let g=0;g<h.mutationResults.length;++g)h.mutationResults[g].transformResults.length>0&&(f=f.add(h.batch.mutations[g].key));return f}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function Gh(n){const t=$(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Kh(n,t){const e=$(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class Ns{constructor(){this.activeTargetIds=th()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Qh{constructor(){this.so=new Ns,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,i){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Ns,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tn=null;function Ar(){return Tn===null?Tn=function(){return 268435456+Math.round(2147483648*Math.random())}():Tn++,"0x"+Tn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class Jh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,i,s,o,u){const h=Ar(),f=this.xo(e,i.toUriEncodedString());D("RestConnection",`Sending RPC '${e}' ${h}:`,f,s);const g={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(g,o,u),this.No(e,f,g,s).then(I=>(D("RestConnection",`Received RPC '${e}' ${h}: `,I),I),I=>{throw bn("RestConnection",`RPC '${e}' ${h} failed with error: `,I,"url: ",f,"request:",s),I})}Lo(e,i,s,o,u,h){return this.Mo(e,i,s,o,u)}Oo(e,i,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fe}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}xo(e,i){const s=Xh[e];return`${this.Do}/v1/${i}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,i,s){const o=Ar();return new Promise((u,h)=>{const f=new eo;f.setWithCredentials(!0),f.listenOnce(no.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case In.NO_ERROR:const I=f.getResponseJson();D(ht,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(I)),u(I);break;case In.TIMEOUT:D(ht,`RPC '${t}' ${o} timed out`),h(new k(P.DEADLINE_EXCEEDED,"Request time out"));break;case In.HTTP_ERROR:const w=f.getStatus();if(D(ht,`RPC '${t}' ${o} failed with status:`,w,"response text:",f.getResponseText()),w>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const b=S==null?void 0:S.error;if(b&&b.status&&b.message){const V=function(N){const G=N.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(G)>=0?G:P.UNKNOWN}(b.status);h(new k(V,b.message))}else h(new k(P.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new k(P.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{D(ht,`RPC '${t}' ${o} completed.`)}});const g=JSON.stringify(s);D(ht,`RPC '${t}' ${o} sending request:`,s),f.send(e,"POST",g,i,15)})}Bo(t,e,i){const s=Ar(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=so(),h=io(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Oo(f.initMessageHeaders,e,i),f.encodeInitMessageHeaders=!0;const I=o.join("");D(ht,`Creating RPC '${t}' stream ${s}: ${I}`,f);const w=u.createWebChannel(I,f);let S=!1,b=!1;const V=new Yh({Io:N=>{b?D(ht,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(S||(D(ht,`Opening RPC '${t}' stream ${s} transport.`),w.open(),S=!0),D(ht,`RPC '${t}' stream ${s} sending:`,N),w.send(N))},To:()=>w.close()}),O=(N,G,H)=>{N.listen(G,Q=>{try{H(Q)}catch(st){setTimeout(()=>{throw st},0)}})};return O(w,Oe.EventType.OPEN,()=>{b||(D(ht,`RPC '${t}' stream ${s} transport opened.`),V.yo())}),O(w,Oe.EventType.CLOSE,()=>{b||(b=!0,D(ht,`RPC '${t}' stream ${s} transport closed`),V.So())}),O(w,Oe.EventType.ERROR,N=>{b||(b=!0,bn(ht,`RPC '${t}' stream ${s} transport errored:`,N),V.So(new k(P.UNAVAILABLE,"The operation could not be completed")))}),O(w,Oe.EventType.MESSAGE,N=>{var G;if(!b){const H=N.data[0];W(!!H);const Q=H,st=Q.error||((G=Q[0])===null||G===void 0?void 0:G.error);if(st){D(ht,`RPC '${t}' stream ${s} received error:`,st);const Ut=st.status;let gt=function(m){const _=X[m];if(_!==void 0)return fh(_)}(Ut),v=st.message;gt===void 0&&(gt=P.INTERNAL,v="Unknown error status: "+Ut+" with message "+st.message),b=!0,V.So(new k(gt,v)),w.close()}else D(ht,`RPC '${t}' stream ${s} received:`,H),V.bo(H)}}),O(h,ro.STAT_EVENT,N=>{N.stat===Nr.PROXY?D(ht,`RPC '${t}' stream ${s} detected buffering proxy`):N.stat===Nr.NOPROXY&&D(ht,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.wo()},0),V}}function wr(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(n){return new dh(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t,e,i=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=i,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-i);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t,e,i,s,o,u,h,f){this.ui=t,this.Ho=i,this.Jo=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new xo(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Xt(e.toString()),Xt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Yo===e&&this.P_(i,s)},i=>{t(()=>{const s=new k(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(s)})})}P_(t,e){const i=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{i(()=>this.I_(s))}),this.stream.onMessage(s=>{i(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tc extends Zh{constructor(t,e,i,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,u),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return W(!!t.streamToken),this.lastStreamToken=t.streamToken,W(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){W(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Th(t.writeResults,t.commitTime),i=se(t.commitTime);return this.listener.g_(i,e)}p_(){const t={};t.database=yh(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>vh(this.serializer,i))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec extends class{}{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Mo(t,Fr(e,i),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(P.UNKNOWN,o.toString())})}Lo(t,e,i,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Lo(t,Fr(e,i),s,u,h,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new k(P.UNKNOWN,u.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class nc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Xt(e),this.D_=!1):D("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,e,i,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(u=>{i.enqueueAndForget(async()=>{Ye(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(f){const g=$(f);g.L_.add(4),await Xe(g),g.q_.set("Unknown"),g.L_.delete(4),await zn(g)}(this))})}),this.q_=new nc(i,s)}}async function zn(n){if(Ye(n))for(const t of n.B_)await t(!0)}async function Xe(n){for(const t of n.B_)await t(!1)}function Ye(n){return $(n).L_.size===0}async function Lo(n,t,e){if(!Un(t))throw t;n.L_.add(1),await Xe(n),n.q_.set("Offline"),e||(e=()=>Gh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await zn(n)})}function Fo(n,t){return t().catch(e=>Lo(n,e,t))}async function Gn(n){const t=$(n),e=Bt(t);let i=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;ic(t);)try{const s=await Kh(t.localStore,i);if(s===null){t.O_.length===0&&e.o_();break}i=s.batchId,sc(t,s)}catch(s){await Lo(t,s)}Bo(t)&&Uo(t)}function ic(n){return Ye(n)&&n.O_.length<10}function sc(n,t){n.O_.push(t);const e=Bt(n);e.r_()&&e.V_&&e.m_(t.mutations)}function Bo(n){return Ye(n)&&!Bt(n).n_()&&n.O_.length>0}function Uo(n){Bt(n).start()}async function oc(n){Bt(n).p_()}async function ac(n){const t=Bt(n);for(const e of n.O_)t.m_(e.mutations)}async function lc(n,t,e){const i=n.O_.shift(),s=Jr.from(i,t,e);await Fo(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Gn(n)}async function uc(n,t){t&&Bt(n).V_&&await async function(i,s){if(function(u){return ch(u)&&u!==P.ABORTED}(s.code)){const o=i.O_.shift();Bt(i).s_(),await Fo(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Gn(i)}}(n,t),Bo(n)&&Uo(n)}async function Os(n,t){const e=$(n);e.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const i=Ye(e);e.L_.add(3),await Xe(e),i&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await zn(e)}async function hc(n,t){const e=$(n);t?(e.L_.delete(2),await zn(e)):t||(e.L_.add(2),await Xe(e),e.q_.set("Unknown"))}function Bt(n){return n.U_||(n.U_=function(e,i,s){const o=$(e);return o.w_(),new tc(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:oc.bind(null,n),mo:uc.bind(null,n),f_:ac.bind(null,n),g_:lc.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Gn(n)):(await n.U_.stop(),n.O_.length>0&&(D("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,e,i,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,o){const u=Date.now()+i,h=new ni(t,e,u,s,o);return h.start(i),h}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jo(n,t){if(Xt("AsyncQueue",`${t}: ${n}`),Un(n))return new k(P.UNAVAILABLE,`${t}: ${n}`);throw n}class cc{constructor(){this.queries=Ms(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,i){const s=$(e),o=s.queries;s.queries=Ms(),o.forEach((u,h)=>{for(const f of h.j_)f.onError(i)})})(this,new k(P.ABORTED,"Firestore shutting down"))}}function Ms(){return new de(n=>To(n),vo)}function fc(n){n.Y_.forEach(t=>{t.next()})}var xs,Ls;(Ls=xs||(xs={})).ea="default",Ls.Cache="cache";class dc{constructor(t,e,i,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ca={},this.Fa=new de(h=>To(h),vo),this.Ma=new Map,this.xa=new Set,this.Oa=new _t(M.comparator),this.Na=new Map,this.La=new Zr,this.Ba={},this.ka=new Map,this.qa=he.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function pc(n,t,e){const i=yc(n);try{const s=await function(u,h){const f=$(u),g=tt.now(),I=h.reduce((b,V)=>b.add(V.key),ft());let w,S;return f.persistence.runTransaction("Locally write mutations","readwrite",b=>{let V=Mn(),O=ft();return f.cs.getEntries(b,I).next(N=>{V=N,V.forEach((G,H)=>{H.isValidDocument()||(O=O.add(G))})}).next(()=>f.localDocuments.getOverlayedDocuments(b,V)).next(N=>{w=N;const G=[];for(const H of h){const Q=ah(H,w.get(H.key).overlayedDocument);Q!=null&&G.push(new Jt(H.key,Q,fo(Q.value.mapValue),Ct.exists(!0)))}return f.mutationQueue.addMutationBatch(b,g,G,h)}).next(N=>{S=N;const G=N.applyToLocalDocumentSet(w,O);return f.documentOverlayCache.saveOverlays(b,N.batchId,G)})}).then(()=>({batchId:S.batchId,changes:Ao(w)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(u,h,f){let g=u.Ba[u.currentUser.toKey()];g||(g=new _t(j)),g=g.insert(h,f),u.Ba[u.currentUser.toKey()]=g}(i,s.batchId,e),await Kn(i,s.changes),await Gn(i.remoteStore)}catch(s){const o=jo(s,"Failed to persist write");e.reject(o)}}function Fs(n,t,e){const i=$(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.Fa.forEach((o,u)=>{const h=u.view.Z_(t);h.snapshot&&s.push(h.snapshot)}),function(u,h){const f=$(u);f.onlineState=h;let g=!1;f.queries.forEach((I,w)=>{for(const S of w.j_)S.Z_(h)&&(g=!0)}),g&&fc(f)}(i.eventManager,t),s.length&&i.Ca.d_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function mc(n,t){const e=$(n),i=t.batch.batchId;try{const s=await zh(e.localStore,t);qo(e,i,null),$o(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await Kn(e,s)}catch(s){await lo(s)}}async function gc(n,t,e){const i=$(n);try{const s=await function(u,h){const f=$(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let I;return f.mutationQueue.lookupMutationBatch(g,h).next(w=>(W(w!==null),I=w.keys(),f.mutationQueue.removeMutationBatch(g,w))).next(()=>f.mutationQueue.performConsistencyCheck(g)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(g,I,h)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,I)).next(()=>f.localDocuments.getDocuments(g,I))})}(i.localStore,t);qo(i,t,e),$o(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await Kn(i,s)}catch(s){await lo(s)}}function $o(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function qo(n,t,e){const i=$(n);let s=i.Ba[i.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),i.Ba[i.currentUser.toKey()]=s}}async function Kn(n,t,e){const i=$(n),s=[],o=[],u=[];i.Fa.isEmpty()||(i.Fa.forEach((h,f)=>{u.push(i.Ka(f,t,e).then(g=>{var I;if((g||e)&&i.isPrimaryClient){const w=g?!g.fromCache:(I=e==null?void 0:e.targetChanges.get(f.targetId))===null||I===void 0?void 0:I.current;i.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(g){s.push(g);const w=ei.Wi(f.targetId,g);o.push(w)}}))}),await Promise.all(u),i.Ca.d_(s),await async function(f,g){const I=$(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(g,S=>R.forEach(S.$i,b=>I.persistence.referenceDelegate.addReference(w,S.targetId,b)).next(()=>R.forEach(S.Ui,b=>I.persistence.referenceDelegate.removeReference(w,S.targetId,b)))))}catch(w){if(!Un(w))throw w;D("LocalStore","Failed to update sequence numbers: "+w)}for(const w of g){const S=w.targetId;if(!w.fromCache){const b=I.os.get(S),V=b.snapshotVersion,O=b.withLastLimboFreeSnapshotVersion(V);I.os=I.os.insert(S,O)}}}(i.localStore,o))}async function _c(n,t){const e=$(n);if(!e.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const i=await Mo(e.localStore,t);e.currentUser=t,function(o,u){o.ka.forEach(h=>{h.forEach(f=>{f.reject(new k(P.CANCELLED,u))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Kn(e,i.hs)}}function yc(n){const t=$(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=mc.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=gc.bind(null,t),t}class Fn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Hn(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Hh(this.persistence,new $h,t.initialUser,this.serializer)}Ga(t){return new Bh(ti.Zr,this.serializer)}Wa(t){return new Qh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fn.provider={build:()=>new Fn};class Ur{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Fs(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=_c.bind(null,this.syncEngine),await hc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new cc}()}createDatastore(t){const e=Hn(t.databaseInfo.databaseId),i=function(o){return new Jh(o)}(t.databaseInfo);return function(o,u,h,f){return new ec(o,u,h,f)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,o,u,h){return new rc(i,s,o,u,h)}(this.localStore,this.datastore,t.asyncQueue,e=>Fs(this.syncEngine,e,0),function(){return ks.D()?new ks:new Wh}())}createSyncEngine(t,e){return function(s,o,u,h,f,g,I){const w=new dc(s,o,u,h,f,g);return I&&(w.Qa=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=$(s);D("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Xe(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ur.provider={build:()=>new Ur};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t,e,i,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=ao.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,async u=>{D("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(i,u=>(D("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=jo(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Rr(n,t){n.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Mo(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Bs(n,t){n.asyncQueue.verifyOperationInProgress();const e=await vc(n);D("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>Os(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Os(t.remoteStore,s)),n._onlineComponents=t}async function vc(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;bn("Error using user provided cache. Falling back to memory cache: "+e),await Rr(n,new Fn)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await Rr(n,new Fn);return n._offlineComponents}async function Tc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await Bs(n,n._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await Bs(n,new Ur))),n._onlineComponents}function Ic(n){return Tc(n).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(n,t,e){if(!e)throw new k(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function wc(n,t,e,i){if(t===!0&&i===!0)throw new k(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function js(n){if(!M.isDocumentKey(n))throw new k(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ri(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x()}function jr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ri(n);throw new k(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new k(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new k(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}wc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ho((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ii{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $s({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $s(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new du;switch(i.type){case"firstParty":return new _u(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new k(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=Us.get(e);i&&(D("ComponentProvider","Removing Datastore"),Us.delete(e),i.terminate())}(this),Promise.resolve()}}function Rc(n,t,e,i={}){var s;const o=(n=jr(n,ii))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&bn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),i.mockUserToken){let h,f;if(typeof i.mockUserToken=="string")h=i.mockUserToken,f=ct.MOCK_USER;else{h=Ga(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const g=i.mockUserToken.sub||i.mockUserToken.user_id;if(!g)throw new k(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ct(g)}n._authCredentials=new pu(new oo(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new si(this.firestore,t,this._query)}}class bt{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ge(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bt(this.firestore,t,this._key)}}class Ge extends si{constructor(t,e,i){super(t,e,zu(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bt(this.firestore,null,new M(t))}withConverter(t){return new Ge(this.firestore,t,this._path)}}function Kc(n,t,...e){if(n=Pn(n),arguments.length===1&&(t=ao.newId()),Ac("doc","path",t),n instanceof ii){const i=Y.fromString(t,...e);return js(i),new bt(n,null,new M(i))}{if(!(n instanceof bt||n instanceof Ge))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Y.fromString(t,...e));return js(i),new bt(n.firestore,n instanceof Ge?n.converter:null,new M(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new xo(this,"async_queue_retry"),this.Vu=()=>{const i=wr();i&&D("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=t;const e=wr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=wr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Kt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Un(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(i=>{this.Eu=i,this.du=!1;const s=function(u){let h=u.message||"";return u.stack&&(h=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),h}(i);throw Xt("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.du=!1,i))));return this.mu=e,e}enqueueAfterDelay(t,e,i){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=ni.createAndSchedule(this,t,e,i,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&x()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class zo extends ii{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=new qs,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new qs(t),this._firestoreClient=void 0,await t}}}function Pc(n,t){const e=typeof n=="object"?n:eu(),i=typeof n=="string"?n:t||"(default)",s=Yl(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=Ha("firestore");o&&Rc(s,...o)}return s}function Sc(n){if(n._terminated)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Cc(n),n._firestoreClient}function Cc(n){var t,e,i;const s=n._freezeSettings(),o=function(h,f,g,I){return new Du(h,f,g,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,Ho(I.experimentalLongPollingOptions),I.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||((e=s.localCache)===null||e===void 0?void 0:e._offlineComponentProvider)&&((i=s.localCache)===null||i===void 0?void 0:i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Ec(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(h){const f=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(f),_online:f}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ke(At.fromBase64String(t))}catch(e){throw new k(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ke(At.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=/^__.*__$/;class Vc{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new Jt(t,this.data,this.fieldMask,e,this.fieldTransforms):new We(t,this.data,e,this.fieldTransforms)}}function Xo(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class oi{constructor(t,e,i,s,o,u){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new oi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:i,xu:!1});return s.Ou(t),s}Nu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:i,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Bn(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Xo(this.Cu)&&bc.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Dc{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||Hn(t)}Qu(t,e,i,s=!1){return new oi({Cu:t,methodName:e,qu:i,path:it.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nc(n){const t=n._freezeSettings(),e=Hn(n._databaseId);return new Dc(n._databaseId,!!t.ignoreUndefinedProperties,e)}function kc(n,t,e,i,s,o={}){const u=n.Qu(o.merge||o.mergeFields?2:0,t,e,s);ta("Data must be an object, but it was:",u,i);const h=Jo(i,u);let f,g;if(o.merge)f=new It(u.fieldMask),g=u.fieldTransforms;else if(o.mergeFields){const I=[];for(const w of o.mergeFields){const S=Oc(t,w,e);if(!u.contains(S))throw new k(P.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);Lc(I,S)||I.push(S)}f=new It(I),g=u.fieldTransforms.filter(w=>f.covers(w.field))}else f=null,g=u.fieldTransforms;return new Vc(new Tt(h),f,g)}function Yo(n,t){if(Zo(n=Pn(n)))return ta("Unsupported field value:",t,n),Jo(n,t);if(n instanceof Ko)return function(i,s){if(!Xo(s.Cu))throw s.Bu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(i,s){const o=[];let u=0;for(const h of i){let f=Yo(h,s.Lu(u));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),u++}return{arrayValue:{values:o}}}(n,t)}return function(i,s){if((i=Pn(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return eh(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=tt.fromDate(i);return{timestampValue:Lr(s.serializer,o)}}if(i instanceof tt){const o=new tt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Lr(s.serializer,o)}}if(i instanceof Qo)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ke)return{bytesValue:ph(s.serializer,i._byteString)};if(i instanceof bt){const o=s.databaseId,u=i.firestore._databaseId;if(!u.isEqual(o))throw s.Bu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ko(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof Wo)return function(u,h){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(f=>{if(typeof f!="number")throw h.Bu("VectorValues must only contain numeric values.");return Yr(h.serializer,f)})}}}}}}(i,s);throw s.Bu(`Unsupported field value: ${ri(i)}`)}(n,t)}function Jo(n,t){const e={};return ho(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Qe(n,(i,s)=>{const o=Yo(s,t.Mu(i));o!=null&&(e[i]=o)}),{mapValue:{fields:e}}}function Zo(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof tt||n instanceof Qo||n instanceof Ke||n instanceof bt||n instanceof Ko||n instanceof Wo)}function ta(n,t,e){if(!Zo(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=ri(e);throw i==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+i)}}function Oc(n,t,e){if((t=Pn(t))instanceof Go)return t._internalPath;if(typeof t=="string")return xc(n,t);throw Bn("Field path arguments must be of type string or ",n,!1,void 0,e)}const Mc=new RegExp("[~\\*/\\[\\]]");function xc(n,t,e){if(t.search(Mc)>=0)throw Bn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Go(...t.split("."))._internalPath}catch{throw Bn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Bn(n,t,e,i,s){const o=i&&!i.isEmpty(),u=s!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(o||u)&&(f+=" (found",o&&(f+=` in field ${i}`),u&&(f+=` in document ${s}`),f+=")"),new k(P.INVALID_ARGUMENT,h+n+f)}function Lc(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(n,t,e){let i;return i=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,i}function Qc(n,t,e){n=jr(n,bt);const i=jr(n.firestore,zo),s=Fc(n.converter,t,e);return Bc(i,[kc(Nc(i),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Ct.none())])}function Bc(n,t){return function(i,s){const o=new Kt;return i.asyncQueue.enqueueAndForget(async()=>pc(await Ic(i),s,o)),o.promise}(Sc(n),t)}(function(t,e=!0){(function(s){fe=s})(tu),Cn(new Be("firestore",(i,{instanceIdentifier:s,options:o})=>{const u=i.getProvider("app").getImmediate(),h=new zo(new mu(i.getProvider("auth-internal")),new Eu(i.getProvider("app-check-internal")),function(g,I){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new k(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nn(g.options.projectId,I)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),ie(ys,"4.7.3",t),ie(ys,"4.7.3","esm2017")})();const Uc={apiKey:"AIzaSyBlGoIwYcMLwo2MAHEg3ObSooKlKNZNleo",authDomain:"kinago-now.firebaseapp.com",databaseURL:"",projectId:"kinago-now",storageBucket:"kinago-now.firebasestorage.app",messagingSenderId:"874695023604",appId:"1:874695023604:web:2f6b31d5d188a2913cb7a1",measurementId:""},jc={driver:"drivers",driver_logs:"driver_logs"},$c=Ys(Uc),qc=Pc($c);var Wc=Object.freeze(Object.defineProperty({__proto__:null,firebaseDb:qc,firebaseCollectionEnum:jc},Symbol.toStringTag,{value:"Module"}));export{qc as a,Wc as b,Kc as d,jc as f,Qc as s};
