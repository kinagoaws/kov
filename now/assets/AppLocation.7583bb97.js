import{b5 as ue,au as ce}from"./index.5da0f878.js";const R=ue("Geolocation",{web:()=>ce(()=>import("./web.8a243d11.js"),["assets/web.8a243d11.js","assets/index.5da0f878.js","assets/index.96a3fb36.css"]).then(e=>new e.GeolocationWeb)});function ae(){if(typeof process=="undefined"){var e=typeof window!="undefined"?window:{},r=5e3,n=Date.now(),t=!1;e.document.addEventListener("deviceready",function(){console.log("Ionic Native: deviceready event fired after "+(Date.now()-n)+" ms"),t=!0}),setTimeout(function(){!t&&e.cordova&&console.warn("Ionic Native: deviceready did not fire within "+r+"ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.")},r)}}var L=function(e,r){return L=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])},L(e,r)};function Y(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");L(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}function se(e,r,n,t){function i(o){return o instanceof n?o:new n(function(u){u(o)})}return new(n||(n=Promise))(function(o,u){function c(f){try{a(t.next(f))}catch(y){u(y)}}function s(f){try{a(t.throw(f))}catch(y){u(y)}}function a(f){f.done?o(f.value):i(f.value).then(c,s)}a((t=t.apply(e,r||[])).next())})}function B(e,r){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},t,i,o,u=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return u.next=c(0),u.throw=c(1),u.return=c(2),typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function c(a){return function(f){return s([a,f])}}function s(a){if(t)throw new TypeError("Generator is already executing.");for(;u&&(u=0,a[0]&&(n=0)),n;)try{if(t=1,i&&(o=a[0]&2?i.return:a[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[a[0]&2,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return n.label++,{value:a[1],done:!1};case 5:n.label++,i=a[1],a=[0];continue;case 7:a=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1],o=a;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(a);break}o[2]&&n.ops.pop(),n.trys.pop();continue}a=r.call(e,n)}catch(f){a=[6,f],i=0}finally{t=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}function P(e){var r=typeof Symbol=="function"&&Symbol.iterator,n=r&&e[r],t=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function E(e,r){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var t=n.call(e),i,o=[],u;try{for(;(r===void 0||r-- >0)&&!(i=t.next()).done;)o.push(i.value)}catch(c){u={error:c}}finally{try{i&&!i.done&&(n=t.return)&&n.call(t)}finally{if(u)throw u.error}}return o}function A(e,r,n){if(n||arguments.length===2)for(var t=0,i=r.length,o;t<i;t++)(o||!(t in r))&&(o||(o=Array.prototype.slice.call(r,0,t)),o[t]=r[t]);return e.concat(o||Array.prototype.slice.call(r))}function g(e){return this instanceof g?(this.v=e,this):new g(e)}function fe(e,r,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n.apply(e,r||[]),i,o=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),c("next"),c("throw"),c("return",u),i[Symbol.asyncIterator]=function(){return this},i;function u(l){return function(v){return Promise.resolve(v).then(l,y)}}function c(l,v){t[l]&&(i[l]=function(h){return new Promise(function(I,w){o.push([l,h,I,w])>1||s(l,h)})},v&&(i[l]=v(i[l])))}function s(l,v){try{a(t[l](v))}catch(h){p(o[0][3],h)}}function a(l){l.value instanceof g?Promise.resolve(l.value.v).then(f,y):p(o[0][2],l)}function f(l){s("next",l)}function y(l){s("throw",l)}function p(l,v){l(v),o.shift(),o.length&&s(o[0][0],o[0][1])}}function le(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e[Symbol.asyncIterator],n;return r?r.call(e):(e=typeof P=="function"?P(e):e[Symbol.iterator](),n={},t("next"),t("throw"),t("return"),n[Symbol.asyncIterator]=function(){return this},n);function t(o){n[o]=e[o]&&function(u){return new Promise(function(c,s){u=e[o](u),i(c,s,u.done,u.value)})}}function i(o,u,c,s){Promise.resolve(s).then(function(a){o({value:a,done:c})},u)}}function d(e){return typeof e=="function"}function de(e){var r=function(t){Error.call(t),t.stack=new Error().stack},n=e(r);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var T=de(function(e){return function(n){e(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(t,i){return i+1+") "+t.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function M(e,r){if(e){var n=e.indexOf(r);0<=n&&e.splice(n,1)}}var D=function(){function e(r){this.initialTeardown=r,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var r,n,t,i,o;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var c=P(u),s=c.next();!s.done;s=c.next()){var a=s.value;a.remove(this)}}catch(h){r={error:h}}finally{try{s&&!s.done&&(n=c.return)&&n.call(c)}finally{if(r)throw r.error}}else u.remove(this);var f=this.initialTeardown;if(d(f))try{f()}catch(h){o=h instanceof T?h.errors:[h]}var y=this._finalizers;if(y){this._finalizers=null;try{for(var p=P(y),l=p.next();!l.done;l=p.next()){var v=l.value;try{Q(v)}catch(h){o=o!=null?o:[],h instanceof T?o=A(A([],E(o)),E(h.errors)):o.push(h)}}}catch(h){t={error:h}}finally{try{l&&!l.done&&(i=p.return)&&i.call(p)}finally{if(t)throw t.error}}}if(o)throw new T(o)}},e.prototype.add=function(r){var n;if(r&&r!==this)if(this.closed)Q(r);else{if(r instanceof e){if(r.closed||r._hasParent(this))return;r._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(r)}},e.prototype._hasParent=function(r){var n=this._parentage;return n===r||Array.isArray(n)&&n.includes(r)},e.prototype._addParent=function(r){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(r),n):n?[n,r]:r},e.prototype._removeParent=function(r){var n=this._parentage;n===r?this._parentage=null:Array.isArray(n)&&M(n,r)},e.prototype.remove=function(r){var n=this._finalizers;n&&M(n,r),r instanceof e&&r._removeParent(this)},e.EMPTY=function(){var r=new e;return r.closed=!0,r}(),e}();D.EMPTY;function J(e){return e instanceof D||e&&"closed"in e&&d(e.remove)&&d(e.add)&&d(e.unsubscribe)}function Q(e){d(e)?e():e.unsubscribe()}var X={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},U={setTimeout:function(e,r){for(var n=[],t=2;t<arguments.length;t++)n[t-2]=arguments[t];var i=U.delegate;return i!=null&&i.setTimeout?i.setTimeout.apply(i,A([e,r],E(n))):setTimeout.apply(void 0,A([e,r],E(n)))},clearTimeout:function(e){var r=U.delegate;return((r==null?void 0:r.clearTimeout)||clearTimeout)(e)},delegate:void 0};function K(e){U.setTimeout(function(){throw e})}function W(){}function he(e){e()}var F=function(e){Y(r,e);function r(n){var t=e.call(this)||this;return t.isStopped=!1,n?(t.destination=n,J(n)&&n.add(t)):t.destination=me,t}return r.create=function(n,t,i){return new k(n,t,i)},r.prototype.next=function(n){this.isStopped||this._next(n)},r.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},r.prototype._next=function(n){this.destination.next(n)},r.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},r.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},r}(D),ve=Function.prototype.bind;function x(e,r){return ve.call(e,r)}var ye=function(){function e(r){this.partialObserver=r}return e.prototype.next=function(r){var n=this.partialObserver;if(n.next)try{n.next(r)}catch(t){O(t)}},e.prototype.error=function(r){var n=this.partialObserver;if(n.error)try{n.error(r)}catch(t){O(t)}else O(r)},e.prototype.complete=function(){var r=this.partialObserver;if(r.complete)try{r.complete()}catch(n){O(n)}},e}(),k=function(e){Y(r,e);function r(n,t,i){var o=e.call(this)||this,u;if(d(n)||!n)u={next:n!=null?n:void 0,error:t!=null?t:void 0,complete:i!=null?i:void 0};else{var c;o&&X.useDeprecatedNextContext?(c=Object.create(n),c.unsubscribe=function(){return o.unsubscribe()},u={next:n.next&&x(n.next,c),error:n.error&&x(n.error,c),complete:n.complete&&x(n.complete,c)}):u=n}return o.destination=new ye(u),o}return r}(F);function O(e){K(e)}function pe(e){throw e}var me={closed:!0,next:W,error:pe,complete:W},H=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function be(e){return e}function we(e){return e.length===0?be:e.length===1?e[0]:function(n){return e.reduce(function(t,i){return i(t)},n)}}var b=function(){function e(r){r&&(this._subscribe=r)}return e.prototype.lift=function(r){var n=new e;return n.source=this,n.operator=r,n},e.prototype.subscribe=function(r,n,t){var i=this,o=Ee(r)?r:new k(r,n,t);return he(function(){var u=i,c=u.operator,s=u.source;o.add(c?c.call(o,s):s?i._subscribe(o):i._trySubscribe(o))}),o},e.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(n){r.error(n)}},e.prototype.forEach=function(r,n){var t=this;return n=V(n),new n(function(i,o){var u=new k({next:function(c){try{r(c)}catch(s){o(s),u.unsubscribe()}},error:o,complete:i});t.subscribe(u)})},e.prototype._subscribe=function(r){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(r)},e.prototype[H]=function(){return this},e.prototype.pipe=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return we(r)(this)},e.prototype.toPromise=function(r){var n=this;return r=V(r),new r(function(t,i){var o;n.subscribe(function(u){return o=u},function(u){return i(u)},function(){return t(o)})})},e.create=function(r){return new e(r)},e}();function V(e){var r;return(r=e!=null?e:X.Promise)!==null&&r!==void 0?r:Promise}function ge(e){return e&&d(e.next)&&d(e.error)&&d(e.complete)}function Ee(e){return e&&e instanceof F||ge(e)&&J(e)}function Re(e){return d(e==null?void 0:e.lift)}function Z(e){return function(r){if(Re(r))return r.lift(function(n){try{return e(n,this)}catch(t){this.error(t)}});throw new TypeError("Unable to lift unknown Observable type")}}function q(e,r,n,t,i){return new Se(e,r,n,t,i)}var Se=function(e){Y(r,e);function r(n,t,i,o,u,c){var s=e.call(this,n)||this;return s.onFinalize=u,s.shouldUnsubscribe=c,s._next=t?function(a){try{t(a)}catch(f){n.error(f)}}:e.prototype._next,s._error=o?function(a){try{o(a)}catch(f){n.error(f)}finally{this.unsubscribe()}}:e.prototype._error,s._complete=i?function(){try{i()}catch(a){n.error(a)}finally{this.unsubscribe()}}:e.prototype._complete,s}return r.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var t=this.closed;e.prototype.unsubscribe.call(this),!t&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},r}(F),j=function(e){return e&&typeof e.length=="number"&&typeof e!="function"};function Pe(e){return d(e==null?void 0:e.then)}function Ae(e){return d(e[H])}function Ie(e){return Symbol.asyncIterator&&d(e==null?void 0:e[Symbol.asyncIterator])}function _e(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Oe(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Te=Oe();function xe(e){return d(e==null?void 0:e[Te])}function Ce(e){return fe(this,arguments,function(){var n,t,i,o;return B(this,function(u){switch(u.label){case 0:n=e.getReader(),u.label=1;case 1:u.trys.push([1,,9,10]),u.label=2;case 2:return[4,g(n.read())];case 3:return t=u.sent(),i=t.value,o=t.done,o?[4,g(void 0)]:[3,5];case 4:return[2,u.sent()];case 5:return[4,g(i)];case 6:return[4,u.sent()];case 7:return u.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function Le(e){return d(e==null?void 0:e.getReader)}function N(e){if(e instanceof b)return e;if(e!=null){if(Ae(e))return Ue(e);if(j(e))return ke(e);if(Pe(e))return qe(e);if(Ie(e))return z(e);if(xe(e))return Ge(e);if(Le(e))return Ye(e)}throw _e(e)}function Ue(e){return new b(function(r){var n=e[H]();if(d(n.subscribe))return n.subscribe(r);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function ke(e){return new b(function(r){for(var n=0;n<e.length&&!r.closed;n++)r.next(e[n]);r.complete()})}function qe(e){return new b(function(r){e.then(function(n){r.closed||(r.next(n),r.complete())},function(n){return r.error(n)}).then(null,K)})}function Ge(e){return new b(function(r){var n,t;try{for(var i=P(e),o=i.next();!o.done;o=i.next()){var u=o.value;if(r.next(u),r.closed)return}}catch(c){n={error:c}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(n)throw n.error}}r.complete()})}function z(e){return new b(function(r){De(e,r).catch(function(n){return r.error(n)})})}function Ye(e){return z(Ce(e))}function De(e,r){var n,t,i,o;return se(this,void 0,void 0,function(){var u,c;return B(this,function(s){switch(s.label){case 0:s.trys.push([0,5,6,11]),n=le(e),s.label=1;case 1:return[4,n.next()];case 2:if(t=s.sent(),!!t.done)return[3,4];if(u=t.value,r.next(u),r.closed)return[2];s.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return c=s.sent(),i={error:c},[3,11];case 6:return s.trys.push([6,,9,10]),t&&!t.done&&(o=n.return)?[4,o.call(n)]:[3,8];case 7:s.sent(),s.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return r.complete(),[2]}})})}function Fe(e,r,n,t,i){t===void 0&&(t=0),i===void 0&&(i=!1);var o=r.schedule(function(){n(),i?e.add(this.schedule(null,t)):this.unsubscribe()},t);if(e.add(o),!i)return o}function ee(e,r){return Z(function(n,t){var i=0;n.subscribe(q(t,function(o){t.next(e.call(r,o,i++))}))})}var He=Array.isArray;function Ne(e,r){return He(r)?e.apply(void 0,A([],E(r))):e(r)}function Me(e){return ee(function(r){return Ne(e,r)})}function Qe(e,r,n,t,i,o,u,c){var s=[],a=0,f=0,y=!1,p=function(){y&&!s.length&&!a&&r.complete()},l=function(h){return a<t?v(h):s.push(h)},v=function(h){o&&r.next(h),a++;var I=!1;N(n(h,f++)).subscribe(q(r,function(w){i==null||i(w),o?l(w):r.next(w)},function(){I=!0},void 0,function(){if(I)try{a--;for(var w=function(){var _=s.shift();u?Fe(r,u,function(){return v(_)}):v(_)};s.length&&a<t;)w();p()}catch(_){r.error(_)}}))};return e.subscribe(q(r,l,function(){y=!0,p()})),function(){c==null||c()}}function re(e,r,n){return n===void 0&&(n=1/0),d(r)?re(function(t,i){return ee(function(o,u){return r(t,o,i,u)})(N(e(t,i)))},n):(typeof r=="number"&&(n=r),Z(function(t,i){return Qe(t,i,e,n)}))}var We=["addListener","removeListener"],Ve=["addEventListener","removeEventListener"],$e=["on","off"];function G(e,r,n,t){if(d(n)&&(t=n,n=void 0),t)return G(e,r,n).pipe(Me(t));var i=E(Xe(e)?Ve.map(function(c){return function(s){return e[c](r,s,n)}}):Be(e)?We.map($(e,r)):Je(e)?$e.map($(e,r)):[],2),o=i[0],u=i[1];if(!o&&j(e))return re(function(c){return G(c,r,n)})(N(e));if(!o)throw new TypeError("Invalid event target");return new b(function(c){var s=function(){for(var a=[],f=0;f<arguments.length;f++)a[f]=arguments[f];return c.next(1<a.length?a:a[0])};return o(s),function(){return u(s)}})}function $(e,r){return function(n){return function(t){return e[n](r,t)}}}function Be(e){return d(e.addListener)&&d(e.removeListener)}function Je(e){return d(e.on)&&d(e.off)}function Xe(e){return d(e.addEventListener)&&d(e.removeEventListener)}var Ke={error:"cordova_not_available"},Ze={error:"plugin_not_installed"};function ne(e){var r=function(){if(Promise)return new Promise(function(o,u){e(o,u)});console.error("No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.")};if(typeof window!="undefined"&&window.angular){var n=window.document,t=window.angular.element(n.querySelector("[ng-app]")||n.body).injector();if(t){var i=t.get("$q");return i(function(o,u){e(o,u)})}console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.")}return r()}function je(e,r,n,t){t===void 0&&(t={});var i,o,u=ne(function(c,s){t.destruct?i=m(e,r,n,t,function(){for(var a=[],f=0;f<arguments.length;f++)a[f]=arguments[f];return c(a)},function(){for(var a=[],f=0;f<arguments.length;f++)a[f]=arguments[f];return s(a)}):i=m(e,r,n,t,c,s),o=s});return i&&i.error&&(u.catch(function(){}),typeof o=="function"&&o(i.error)),u}function ze(e,r,n,t){return t===void 0&&(t={}),ne(function(i,o){var u=m(e,r,n,t);u?u.error?o(u.error):u.then&&u.then(i).catch(o):o({error:"unexpected_error"})})}function er(e,r,n,t){return t===void 0&&(t={}),new b(function(i){var o;return t.destruct?o=m(e,r,n,t,function(){for(var u=[],c=0;c<arguments.length;c++)u[c]=arguments[c];return i.next(u)},function(){for(var u=[],c=0;c<arguments.length;c++)u[c]=arguments[c];return i.error(u)}):o=m(e,r,n,t,i.next.bind(i),i.error.bind(i)),o&&o.error&&(i.error(o.error),i.complete()),function(){try{if(t.clearFunction)return t.clearWithArgs?m(e,t.clearFunction,n,t,i.next.bind(i),i.error.bind(i)):m(e,t.clearFunction,[])}catch(u){console.warn("Unable to clear the previous observable watch for",e.constructor.getPluginName(),r),console.warn(u)}}})}function rr(e,r){return r=typeof window!="undefined"&&r?oe(window,r):r||(typeof window!="undefined"?window:{}),G(r,e)}function te(e,r,n){var t,i;typeof e=="string"?t=e:(t=e.constructor.getPluginRef(),n=e.constructor.getPluginName(),i=e.constructor.getPluginInstallName());var o=ie(t);return!o||!!r&&typeof o[r]=="undefined"?typeof window=="undefined"||!window.cordova?(ir(n,r),Ke):(tr(n,i,r),Ze):!0}function nr(e,r,n,t){if(r===void 0&&(r={}),r.sync)return e;if(r.callbackOrder==="reverse")e.unshift(t),e.unshift(n);else if(r.callbackStyle==="node")e.push(function(c,s){c?t(c):n(s)});else if(r.callbackStyle==="object"&&r.successName&&r.errorName){var i={};i[r.successName]=n,i[r.errorName]=t,e.push(i)}else if(typeof r.successIndex!="undefined"||typeof r.errorIndex!="undefined"){var o=function(){r.successIndex>e.length?e[r.successIndex]=n:e.splice(r.successIndex,0,n)},u=function(){r.errorIndex>e.length?e[r.errorIndex]=t:e.splice(r.errorIndex,0,t)};r.successIndex>r.errorIndex?(u(),o()):(o(),u())}else e.push(n),e.push(t);return e}function m(e,r,n,t,i,o){t===void 0&&(t={}),n=nr(n,t,i,o);var u=te(e,r);if(u===!0){var c=ie(e.constructor.getPluginRef());return c[r].apply(c,n)}else return u}function ie(e){return typeof window!="undefined"?oe(window,e):null}function oe(e,r){for(var n=r.split("."),t=e,i=0;i<n.length;i++){if(!t)return null;t=t[n[i]]}return t}function tr(e,r,n){console.warn(n?"Native: tried calling "+e+"."+n+", but the "+e+" plugin is not installed.":"Native: tried accessing the "+e+" plugin but it's not installed."),r&&console.warn("Install the "+e+" plugin: 'ionic cordova plugin add "+r+"'")}function ir(e,r){typeof process=="undefined"&&console.warn(r?"Native: tried calling "+e+"."+r+", but Cordova is not available. Make sure to include cordova.js or run in a device/simulator":"Native: tried accessing the "+e+" plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator")}var or=function(e,r,n){return n===void 0&&(n={}),function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return n.sync?m(e,r,t,n):n.observable?er(e,r,t,n):n.eventObservable&&n.event?rr(n.event,n.element):n.otherPromise?ze(e,r,t,n):je(e,r,t,n)}};function ur(e,r){for(var n=r.split("."),t=e,i=0;i<n.length;i++){if(!t)return null;t=t[n[i]]}return t}var cr=function(){function e(){}return e.installed=function(){var r=te(this.pluginRef)===!0;return r},e.getPlugin=function(){return typeof window!="undefined"?ur(window,this.pluginRef):null},e.getPluginName=function(){var r=this.pluginName;return r},e.getPluginRef=function(){var r=this.pluginRef;return r},e.getPluginInstallName=function(){var r=this.plugin;return r},e.getSupportedPlatforms=function(){var r=this.platforms;return r},e.pluginName="",e.pluginRef="",e.plugin="",e.repo="",e.platforms=[],e.install="",e}();function C(e,r,n,t){return or(e,r,n).apply(this,t)}ae();var ar=globalThis&&globalThis.__extends||function(){var e=function(r,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])},e(r,n)};return function(r,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(r,n);function t(){this.constructor=r}r.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}}(),sr=function(e){ar(r,e);function r(){var n=e!==null&&e.apply(this,arguments)||this;return n.REQUEST_PRIORITY_NO_POWER=0,n.REQUEST_PRIORITY_LOW_POWER=1,n.REQUEST_PRIORITY_BALANCED_POWER_ACCURACY=2,n.REQUEST_PRIORITY_HIGH_ACCURACY=3,n.SUCCESS_SETTINGS_SATISFIED=0,n.SUCCESS_USER_AGREED=1,n.ERROR_ALREADY_REQUESTING=-1,n.ERROR_INVALID_ACTION=0,n.ERROR_INVALID_ACCURACY=1,n.ERROR_EXCEPTION=1,n.ERROR_CANNOT_CHANGE_ACCURACY=3,n.ERROR_USER_DISAGREED=4,n.ERROR_GOOGLE_API_CONNECTION_FAILED=4,n}return r.prototype.canRequest=function(){return C(this,"canRequest",{},arguments)},r.prototype.isRequesting=function(){return C(this,"isRequesting",{},arguments)},r.prototype.request=function(n){return C(this,"request",{callbackOrder:"reverse"},arguments)},r.pluginName="LocationAccuracy",r.plugin="cordova-plugin-request-location-accuracy",r.pluginRef="cordova.plugins.locationAccuracy",r.repo="https://github.com/dpa99c/cordova-plugin-request-location-accuracy",r.platforms=["Android","iOS"],r}(cr),S=new sr;const lr={async islocationEnabled(){return await new Promise(function(r,n){R.checkPermissions().then(t=>{console.debug(t),t.location==="denied"?R.requestPermissions().then(i=>{i.location==="granted"?r("granted"):r("denied")}):t.location==="prompt"?R.requestPermissions().then(i=>{i.location==="granted"?r("granted"):r("denied")}):t.location==="granted"?r("granted"):t.location==="prompt-with-rationale"&&R.requestPermissions().then(i=>{i.location==="granted"?r("granted"):r("denied")})}).catch(t=>{n()})})},async checkAccuracy(){return await new Promise(function(r,n){S.canRequest().then(t=>{S.request(S.REQUEST_PRIORITY_HIGH_ACCURACY).then(()=>{r(!0)},i=>{n(i)})}).catch(t=>{S.request(S.REQUEST_PRIORITY_HIGH_ACCURACY).then(()=>{r(!0)},i=>{n(i)})})})},async getPosition(){return await new Promise(function(r,n){R.getCurrentPosition().then(t=>{console.debug(t);let i={lat:t.coords.latitude,lng:t.coords.longitude};r(i)}).catch(t=>{n(t)})})}};export{lr as A,R as G};
