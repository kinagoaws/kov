import{bt as fe,aB as de,_ as he,b6 as ve,A as m,p as ye,a2 as pe,f as b,t as I,a1 as x,F as me,a4 as M,Z as be,a0 as ge,ar as W,$ as we}from"./index.c29f7992.js";import{Q as Ee}from"./QToolbarTitle.38b5862b.js";import{Q as Se}from"./QToolbar.19752286.js";import{Q as Re}from"./QHeader.8a0fa205.js";import{Q as Ie}from"./QImg.a00dd4e9.js";import{Q as Ae}from"./QFooter.478b051a.js";import{Q as Pe}from"./QPage.1b02519d.js";import{A as k}from"./AppBluetooth.81007bf8.js";import"./QResizeObserver.0e413222.js";fe("Geolocation",{web:()=>de(()=>import("./web.af1eeb7b.js"),["assets/web.af1eeb7b.js","assets/index.c29f7992.js","assets/index.8924bfb8.css"]).then(e=>new e.GeolocationWeb)});function _e(){if(typeof process=="undefined"){var e=typeof window!="undefined"?window:{},r=5e3,n=Date.now(),t=!1;e.document.addEventListener("deviceready",function(){console.log("Ionic Native: deviceready event fired after "+(Date.now()-n)+" ms"),t=!0}),setTimeout(function(){!t&&e.cordova&&console.warn("Ionic Native: deviceready did not fire within "+r+"ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.")},r)}}var $=function(e,r){return $=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])},$(e,r)};function G(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");$(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}function Oe(e,r,n,t){function i(o){return o instanceof n?o:new n(function(a){a(o)})}return new(n||(n=Promise))(function(o,a){function u(l){try{c(t.next(l))}catch(y){a(y)}}function s(l){try{c(t.throw(l))}catch(y){a(y)}}function c(l){l.done?o(l.value):i(l.value).then(u,s)}c((t=t.apply(e,r||[])).next())})}function j(e,r){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},t,i,o,a=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return a.next=u(0),a.throw=u(1),a.return=u(2),typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(c){return function(l){return s([c,l])}}function s(c){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(n=0)),n;)try{if(t=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=r.call(e,n)}catch(l){c=[6,l],i=0}finally{t=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function A(e){var r=typeof Symbol=="function"&&Symbol.iterator,n=r&&e[r],t=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function R(e,r){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var t=n.call(e),i,o=[],a;try{for(;(r===void 0||r-- >0)&&!(i=t.next()).done;)o.push(i.value)}catch(u){a={error:u}}finally{try{i&&!i.done&&(n=t.return)&&n.call(t)}finally{if(a)throw a.error}}return o}function P(e,r,n){if(n||arguments.length===2)for(var t=0,i=r.length,o;t<i;t++)(o||!(t in r))&&(o||(o=Array.prototype.slice.call(r,0,t)),o[t]=r[t]);return e.concat(o||Array.prototype.slice.call(r))}function S(e){return this instanceof S?(this.v=e,this):new S(e)}function Te(e,r,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n.apply(e,r||[]),i,o=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),u("next"),u("throw"),u("return",a),i[Symbol.asyncIterator]=function(){return this},i;function a(f){return function(v){return Promise.resolve(v).then(f,y)}}function u(f,v){t[f]&&(i[f]=function(h){return new Promise(function(_,E){o.push([f,h,_,E])>1||s(f,h)})},v&&(i[f]=v(i[f])))}function s(f,v){try{c(t[f](v))}catch(h){p(o[0][3],h)}}function c(f){f.value instanceof S?Promise.resolve(f.value.v).then(l,y):p(o[0][2],f)}function l(f){s("next",f)}function y(f){s("throw",f)}function p(f,v){f(v),o.shift(),o.length&&s(o[0][0],o[0][1])}}function xe(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e[Symbol.asyncIterator],n;return r?r.call(e):(e=typeof A=="function"?A(e):e[Symbol.iterator](),n={},t("next"),t("throw"),t("return"),n[Symbol.asyncIterator]=function(){return this},n);function t(o){n[o]=e[o]&&function(a){return new Promise(function(u,s){a=e[o](a),i(u,s,a.done,a.value)})}}function i(o,a,u,s){Promise.resolve(s).then(function(c){o({value:c,done:u})},a)}}function d(e){return typeof e=="function"}function ke(e){var r=function(t){Error.call(t),t.stack=new Error().stack},n=e(r);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var C=ke(function(e){return function(n){e(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(t,i){return i+1+") "+t.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function H(e,r){if(e){var n=e.indexOf(r);0<=n&&e.splice(n,1)}}var V=function(){function e(r){this.initialTeardown=r,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var r,n,t,i,o;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var u=A(a),s=u.next();!s.done;s=u.next()){var c=s.value;c.remove(this)}}catch(h){r={error:h}}finally{try{s&&!s.done&&(n=u.return)&&n.call(u)}finally{if(r)throw r.error}}else a.remove(this);var l=this.initialTeardown;if(d(l))try{l()}catch(h){o=h instanceof C?h.errors:[h]}var y=this._finalizers;if(y){this._finalizers=null;try{for(var p=A(y),f=p.next();!f.done;f=p.next()){var v=f.value;try{J(v)}catch(h){o=o!=null?o:[],h instanceof C?o=P(P([],R(o)),R(h.errors)):o.push(h)}}}catch(h){t={error:h}}finally{try{f&&!f.done&&(i=p.return)&&i.call(p)}finally{if(t)throw t.error}}}if(o)throw new C(o)}},e.prototype.add=function(r){var n;if(r&&r!==this)if(this.closed)J(r);else{if(r instanceof e){if(r.closed||r._hasParent(this))return;r._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(r)}},e.prototype._hasParent=function(r){var n=this._parentage;return n===r||Array.isArray(n)&&n.includes(r)},e.prototype._addParent=function(r){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(r),n):n?[n,r]:r},e.prototype._removeParent=function(r){var n=this._parentage;n===r?this._parentage=null:Array.isArray(n)&&H(n,r)},e.prototype.remove=function(r){var n=this._finalizers;n&&H(n,r),r instanceof e&&r._removeParent(this)},e.EMPTY=function(){var r=new e;return r.closed=!0,r}(),e}();V.EMPTY;function z(e){return e instanceof V||e&&"closed"in e&&d(e.remove)&&d(e.add)&&d(e.unsubscribe)}function J(e){d(e)?e():e.unsubscribe()}var ee={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},U={setTimeout:function(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var i=U.delegate;return i!=null&&i.setTimeout?i.setTimeout.apply(i,P([e,r],R(n))):setTimeout.apply(void 0,P([e,r],R(n)))},clearTimeout:function(e){var r=U.delegate;return((r==null?void 0:r.clearTimeout)||clearTimeout)(e)},delegate:void 0};function re(e){U.setTimeout(function(){throw e})}function X(){}function Ce(e){e()}var F=function(e){G(r,e);function r(n){var t=e.call(this)||this;return t.isStopped=!1,n?(t.destination=n,z(n)&&n.add(t)):t.destination=Ue,t}return r.create=function(n,t,i){return new D(n,t,i)},r.prototype.next=function(n){this.isStopped||this._next(n)},r.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},r.prototype._next=function(n){this.destination.next(n)},r.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},r.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},r}(V),Le=Function.prototype.bind;function L(e,r){return Le.call(e,r)}var qe=function(){function e(r){this.partialObserver=r}return e.prototype.next=function(r){var n=this.partialObserver;if(n.next)try{n.next(r)}catch(t){T(t)}},e.prototype.error=function(r){var n=this.partialObserver;if(n.error)try{n.error(r)}catch(t){T(t)}else T(r)},e.prototype.complete=function(){var r=this.partialObserver;if(r.complete)try{r.complete()}catch(n){T(n)}},e}(),D=function(e){G(r,e);function r(n,t,i){var o=e.call(this)||this,a;if(d(n)||!n)a={next:n!=null?n:void 0,error:t!=null?t:void 0,complete:i!=null?i:void 0};else{var u;o&&ee.useDeprecatedNextContext?(u=Object.create(n),u.unsubscribe=function(){return o.unsubscribe()},a={next:n.next&&L(n.next,u),error:n.error&&L(n.error,u),complete:n.complete&&L(n.complete,u)}):a=n}return o.destination=new qe(a),o}return r}(F);function T(e){re(e)}function $e(e){throw e}var Ue={closed:!0,next:X,error:$e,complete:X},Y=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function De(e){return e}function Qe(e){return e.length===0?De:e.length===1?e[0]:function(n){return e.reduce(function(t,i){return i(t)},n)}}var w=function(){function e(r){r&&(this._subscribe=r)}return e.prototype.lift=function(r){var n=new e;return n.source=this,n.operator=r,n},e.prototype.subscribe=function(r,n,t){var i=this,o=Ge(r)?r:new D(r,n,t);return Ce(function(){var a=i,u=a.operator,s=a.source;o.add(u?u.call(o,s):s?i._subscribe(o):i._trySubscribe(o))}),o},e.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(n){r.error(n)}},e.prototype.forEach=function(r,n){var t=this;return n=Z(n),new n(function(i,o){var a=new D({next:function(u){try{r(u)}catch(s){o(s),a.unsubscribe()}},error:o,complete:i});t.subscribe(a)})},e.prototype._subscribe=function(r){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(r)},e.prototype[Y]=function(){return this},e.prototype.pipe=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return Qe(r)(this)},e.prototype.toPromise=function(r){var n=this;return r=Z(r),new r(function(t,i){var o;n.subscribe(function(a){return o=a},function(a){return i(a)},function(){return t(o)})})},e.create=function(r){return new e(r)},e}();function Z(e){var r;return(r=e!=null?e:ee.Promise)!==null&&r!==void 0?r:Promise}function Ne(e){return e&&d(e.next)&&d(e.error)&&d(e.complete)}function Ge(e){return e&&e instanceof F||Ne(e)&&z(e)}function Ve(e){return d(e==null?void 0:e.lift)}function ne(e){return function(r){if(Ve(r))return r.lift(function(n){try{return e(n,this)}catch(t){this.error(t)}});throw new TypeError("Unable to lift unknown Observable type")}}function Q(e,r,n,t,i){return new Fe(e,r,n,t,i)}var Fe=function(e){G(r,e);function r(n,t,i,o,a,u){var s=e.call(this,n)||this;return s.onFinalize=a,s.shouldUnsubscribe=u,s._next=t?function(c){try{t(c)}catch(l){n.error(l)}}:e.prototype._next,s._error=o?function(c){try{o(c)}catch(l){n.error(l)}finally{this.unsubscribe()}}:e.prototype._error,s._complete=i?function(){try{i()}catch(c){n.error(c)}finally{this.unsubscribe()}}:e.prototype._complete,s}return r.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var t=this.closed;e.prototype.unsubscribe.call(this),!t&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},r}(F),te=function(e){return e&&typeof e.length=="number"&&typeof e!="function"};function Ye(e){return d(e==null?void 0:e.then)}function Be(e){return d(e[Y])}function Me(e){return Symbol.asyncIterator&&d(e==null?void 0:e[Symbol.asyncIterator])}function We(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function He(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Je=He();function Xe(e){return d(e==null?void 0:e[Je])}function Ze(e){return Te(this,arguments,function(){var n,t,i,o;return j(this,function(a){switch(a.label){case 0:n=e.getReader(),a.label=1;case 1:a.trys.push([1,,9,10]),a.label=2;case 2:return[4,S(n.read())];case 3:return t=a.sent(),i=t.value,o=t.done,o?[4,S(void 0)]:[3,5];case 4:return[2,a.sent()];case 5:return[4,S(i)];case 6:return[4,a.sent()];case 7:return a.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function Ke(e){return d(e==null?void 0:e.getReader)}function B(e){if(e instanceof w)return e;if(e!=null){if(Be(e))return je(e);if(te(e))return ze(e);if(Ye(e))return er(e);if(Me(e))return ie(e);if(Xe(e))return rr(e);if(Ke(e))return nr(e)}throw We(e)}function je(e){return new w(function(r){var n=e[Y]();if(d(n.subscribe))return n.subscribe(r);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function ze(e){return new w(function(r){for(var n=0;n<e.length&&!r.closed;n++)r.next(e[n]);r.complete()})}function er(e){return new w(function(r){e.then(function(n){r.closed||(r.next(n),r.complete())},function(n){return r.error(n)}).then(null,re)})}function rr(e){return new w(function(r){var n,t;try{for(var i=A(e),o=i.next();!o.done;o=i.next()){var a=o.value;if(r.next(a),r.closed)return}}catch(u){n={error:u}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(n)throw n.error}}r.complete()})}function ie(e){return new w(function(r){tr(e,r).catch(function(n){return r.error(n)})})}function nr(e){return ie(Ze(e))}function tr(e,r){var n,t,i,o;return Oe(this,void 0,void 0,function(){var a,u;return j(this,function(s){switch(s.label){case 0:s.trys.push([0,5,6,11]),n=xe(e),s.label=1;case 1:return[4,n.next()];case 2:if(t=s.sent(),!!t.done)return[3,4];if(a=t.value,r.next(a),r.closed)return[2];s.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return u=s.sent(),i={error:u},[3,11];case 6:return s.trys.push([6,,9,10]),t&&!t.done&&(o=n.return)?[4,o.call(n)]:[3,8];case 7:s.sent(),s.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return r.complete(),[2]}})})}function ir(e,r,n,t,i){t===void 0&&(t=0),i===void 0&&(i=!1);var o=r.schedule(function(){n(),i?e.add(this.schedule(null,t)):this.unsubscribe()},t);if(e.add(o),!i)return o}function oe(e,r){return ne(function(n,t){var i=0;n.subscribe(Q(t,function(o){t.next(e.call(r,o,i++))}))})}var or=Array.isArray;function ar(e,r){return or(r)?e.apply(void 0,P([],R(r))):e(r)}function ur(e){return oe(function(r){return ar(e,r)})}function cr(e,r,n,t,i,o,a,u){var s=[],c=0,l=0,y=!1,p=function(){y&&!s.length&&!c&&r.complete()},f=function(h){return c<t?v(h):s.push(h)},v=function(h){o&&r.next(h),c++;var _=!1;B(n(h,l++)).subscribe(Q(r,function(E){i==null||i(E),o?f(E):r.next(E)},function(){_=!0},void 0,function(){if(_)try{c--;for(var E=function(){var O=s.shift();a?ir(r,a,function(){return v(O)}):v(O)};s.length&&c<t;)E();p()}catch(O){r.error(O)}}))};return e.subscribe(Q(r,f,function(){y=!0,p()})),function(){u==null||u()}}function ae(e,r,n){return n===void 0&&(n=1/0),d(r)?ae(function(t,i){return oe(function(o,a){return r(t,o,i,a)})(B(e(t,i)))},n):(typeof r=="number"&&(n=r),ne(function(t,i){return cr(t,i,e,n)}))}var sr=["addListener","removeListener"],lr=["addEventListener","removeEventListener"],fr=["on","off"];function N(e,r,n,t){if(d(n)&&(t=n,n=void 0),t)return N(e,r,n).pipe(ur(t));var i=R(vr(e)?lr.map(function(u){return function(s){return e[u](r,s,n)}}):dr(e)?sr.map(K(e,r)):hr(e)?fr.map(K(e,r)):[],2),o=i[0],a=i[1];if(!o&&te(e))return ae(function(u){return N(u,r,n)})(B(e));if(!o)throw new TypeError("Invalid event target");return new w(function(u){var s=function(){for(var c=[],l=0;l<arguments.length;l++)c[l]=arguments[l];return u.next(1<c.length?c:c[0])};return o(s),function(){return a(s)}})}function K(e,r){return function(n){return function(t){return e[n](r,t)}}}function dr(e){return d(e.addListener)&&d(e.removeListener)}function hr(e){return d(e.on)&&d(e.off)}function vr(e){return d(e.addEventListener)&&d(e.removeEventListener)}var yr={error:"cordova_not_available"},pr={error:"plugin_not_installed"};function ue(e){var r=function(){if(Promise)return new Promise(function(o,a){e(o,a)});console.error("No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.")};if(typeof window!="undefined"&&window.angular){var n=window.document,t=window.angular.element(n.querySelector("[ng-app]")||n.body).injector();if(t){var i=t.get("$q");return i(function(o,a){e(o,a)})}console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.")}return r()}function mr(e,r,n,t){t===void 0&&(t={});var i,o,a=ue(function(u,s){t.destruct?i=g(e,r,n,t,function(){for(var c=[],l=0;l<arguments.length;l++)c[l]=arguments[l];return u(c)},function(){for(var c=[],l=0;l<arguments.length;l++)c[l]=arguments[l];return s(c)}):i=g(e,r,n,t,u,s),o=s});return i&&i.error&&(a.catch(function(){}),typeof o=="function"&&o(i.error)),a}function br(e,r,n,t){return t===void 0&&(t={}),ue(function(i,o){var a=g(e,r,n,t);a?a.error?o(a.error):a.then&&a.then(i).catch(o):o({error:"unexpected_error"})})}function gr(e,r,n,t){return t===void 0&&(t={}),new w(function(i){var o;return t.destruct?o=g(e,r,n,t,function(){for(var a=[],u=0;u<arguments.length;u++)a[u]=arguments[u];return i.next(a)},function(){for(var a=[],u=0;u<arguments.length;u++)a[u]=arguments[u];return i.error(a)}):o=g(e,r,n,t,i.next.bind(i),i.error.bind(i)),o&&o.error&&(i.error(o.error),i.complete()),function(){try{if(t.clearFunction)return t.clearWithArgs?g(e,t.clearFunction,n,t,i.next.bind(i),i.error.bind(i)):g(e,t.clearFunction,[])}catch(a){console.warn("Unable to clear the previous observable watch for",e.constructor.getPluginName(),r),console.warn(a)}}})}function wr(e,r){return r=typeof window!="undefined"&&r?le(window,r):r||(typeof window!="undefined"?window:{}),N(r,e)}function ce(e,r,n){var t,i;typeof e=="string"?t=e:(t=e.constructor.getPluginRef(),n=e.constructor.getPluginName(),i=e.constructor.getPluginInstallName());var o=se(t);return!o||!!r&&typeof o[r]=="undefined"?typeof window=="undefined"||!window.cordova?(Rr(n,r),yr):(Sr(n,i,r),pr):!0}function Er(e,r,n,t){if(r===void 0&&(r={}),r.sync)return e;if(r.callbackOrder==="reverse")e.unshift(t),e.unshift(n);else if(r.callbackStyle==="node")e.push(function(u,s){u?t(u):n(s)});else if(r.callbackStyle==="object"&&r.successName&&r.errorName){var i={};i[r.successName]=n,i[r.errorName]=t,e.push(i)}else if(typeof r.successIndex!="undefined"||typeof r.errorIndex!="undefined"){var o=function(){r.successIndex>e.length?e[r.successIndex]=n:e.splice(r.successIndex,0,n)},a=function(){r.errorIndex>e.length?e[r.errorIndex]=t:e.splice(r.errorIndex,0,t)};r.successIndex>r.errorIndex?(a(),o()):(o(),a())}else e.push(n),e.push(t);return e}function g(e,r,n,t,i,o){t===void 0&&(t={}),n=Er(n,t,i,o);var a=ce(e,r);if(a===!0){var u=se(e.constructor.getPluginRef());return u[r].apply(u,n)}else return a}function se(e){return typeof window!="undefined"?le(window,e):null}function le(e,r){for(var n=r.split("."),t=e,i=0;i<n.length;i++){if(!t)return null;t=t[n[i]]}return t}function Sr(e,r,n){console.warn(n?"Native: tried calling "+e+"."+n+", but the "+e+" plugin is not installed.":"Native: tried accessing the "+e+" plugin but it's not installed."),r&&console.warn("Install the "+e+" plugin: 'ionic cordova plugin add "+r+"'")}function Rr(e,r){typeof process=="undefined"&&console.warn(r?"Native: tried calling "+e+"."+r+", but Cordova is not available. Make sure to include cordova.js or run in a device/simulator":"Native: tried accessing the "+e+" plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator")}var Ir=function(e,r,n){return n===void 0&&(n={}),function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return n.sync?g(e,r,t,n):n.observable?gr(e,r,t,n):n.eventObservable&&n.event?wr(n.event,n.element):n.otherPromise?br(e,r,t,n):mr(e,r,t,n)}};function Ar(e,r){for(var n=r.split("."),t=e,i=0;i<n.length;i++){if(!t)return null;t=t[n[i]]}return t}var Pr=function(){function e(){}return e.installed=function(){var r=ce(this.pluginRef)===!0;return r},e.getPlugin=function(){return typeof window!="undefined"?Ar(window,this.pluginRef):null},e.getPluginName=function(){var r=this.pluginName;return r},e.getPluginRef=function(){var r=this.pluginRef;return r},e.getPluginInstallName=function(){var r=this.plugin;return r},e.getSupportedPlatforms=function(){var r=this.platforms;return r},e.pluginName="",e.pluginRef="",e.plugin="",e.repo="",e.platforms=[],e.install="",e}();function q(e,r,n,t){return Ir(e,r,n).apply(this,t)}_e();var _r=globalThis&&globalThis.__extends||function(){var e=function(r,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])},e(r,n)};return function(r,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(r,n);function t(){this.constructor=r}r.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}}(),Or=function(e){_r(r,e);function r(){var n=e!==null&&e.apply(this,arguments)||this;return n.REQUEST_PRIORITY_NO_POWER=0,n.REQUEST_PRIORITY_LOW_POWER=1,n.REQUEST_PRIORITY_BALANCED_POWER_ACCURACY=2,n.REQUEST_PRIORITY_HIGH_ACCURACY=3,n.SUCCESS_SETTINGS_SATISFIED=0,n.SUCCESS_USER_AGREED=1,n.ERROR_ALREADY_REQUESTING=-1,n.ERROR_INVALID_ACTION=0,n.ERROR_INVALID_ACCURACY=1,n.ERROR_EXCEPTION=1,n.ERROR_CANNOT_CHANGE_ACCURACY=3,n.ERROR_USER_DISAGREED=4,n.ERROR_GOOGLE_API_CONNECTION_FAILED=4,n}return r.prototype.canRequest=function(){return q(this,"canRequest",{},arguments)},r.prototype.isRequesting=function(){return q(this,"isRequesting",{},arguments)},r.prototype.request=function(n){return q(this,"request",{callbackOrder:"reverse"},arguments)},r.pluginName="LocationAccuracy",r.plugin="cordova-plugin-request-location-accuracy",r.pluginRef="cordova.plugins.locationAccuracy",r.repo="https://github.com/dpa99c/cordova-plugin-request-location-accuracy",r.platforms=["Android","iOS"],r}(Pr);new Or;const Tr={name:"LocationEnabled",data(){return{osVersion:0}},created(){this.$q.capacitor&&this.getDevice()},methods:{async getDevice(){const e=await ve.getInfo();console.log(JSON.stringify(e)),this.osVersion=e.osVersion},enabledLocation(){console.log("ANDROID VERSION"+this.osVersion),this.osVersion>=12?k.CheckBTConnectPermission().then(e=>{k.CheckBTScanPermission().then(r=>{this.$router.go(-1)}).catch(r=>{m.empty(r.message)?m.notify("dark",r,"error",this.$q):m.notify("dark",r.message,"error",this.$q)}).then(r=>{})}).catch(e=>{m.empty(e.message)?m.notify("dark",e,"error",this.$q):m.notify("dark",e.message,"error",this.$q)}).then(e=>{}):k.CheckLocation().then(e=>{this.$router.go(-1)}).catch(e=>{m.empty(e.message)?m.notify("dark",e,"error",this.$q):m.notify("dark",e.message,"error",this.$q)}).then(e=>{})}}},xr={class:"full-width text-center"};function kr(e,r,n,t,i,o){return ye(),pe(me,null,[b(Re,{class:x({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:I(()=>[b(Se,null,{default:I(()=>[b(M,{onClick:r[0]||(r[0]=a=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),b(Ee,{class:"text-weight-bold"},{default:I(()=>r[1]||(r[1]=[be("Location")])),_:1})]),_:1}),b(ge)]),_:1},8,["class"]),b(Pe,{class:x([{"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode},"q-pa-md flex flex-center"])},{default:I(()=>[W("div",xr,[b(Ie,{src:"location-enabled.png",style:{height:"150px","max-width":"200px"},fit:"contain",class:"q-mb-sm"}),W("p",null,we(e.$t("We need your location enabled to find and connect to bluetooth printers"))+". ",1)]),b(Ae,{class:x(["q-pa-md",{"bg-mydark ":e.$q.dark.mode,"bg-white ":!e.$q.dark.mode}])},{default:I(()=>[b(M,{type:"submit",label:e.$t("Enabled Location"),color:"primary","text-color":"white",unelevated:"",class:"full-width",size:"lg","no-caps":"",onClick:o.enabledLocation},null,8,["label","onClick"])]),_:1},8,["class"])]),_:1},8,["class"])],64)}var Vr=he(Tr,[["render",kr]]);export{Vr as default};
