function we(e,t){return function(){return e.apply(t,arguments)}}const{toString:He}=Object.prototype,{getPrototypeOf:ne}=Object,q=(e=>t=>{const n=He.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),g=e=>(e=e.toLowerCase(),t=>q(t)===e),z=e=>t=>typeof t===e,{isArray:_}=Array,D=z("undefined");function Me(e){return e!==null&&!D(e)&&e.constructor!==null&&!D(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ee=g("ArrayBuffer");function qe(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ee(e.buffer),t}const ze=z("string"),R=z("function"),be=z("number"),J=e=>e!==null&&typeof e=="object",Je=e=>e===!0||e===!1,k=e=>{if(q(e)!=="object")return!1;const t=ne(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},$e=g("Date"),Ve=g("File"),ve=g("Blob"),We=g("FileList"),Ke=e=>J(e)&&R(e.pipe),Ge=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=q(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},Xe=g("URLSearchParams"),Qe=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function L(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),_(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let u;for(r=0;r<i;r++)u=o[r],t.call(null,e[u],u,e)}}function Se(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Re=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Oe=e=>!D(e)&&e!==Re;function Y(){const{caseless:e}=Oe(this)&&this||{},t={},n=(r,s)=>{const o=e&&Se(t,s)||s;k(t[o])&&k(r)?t[o]=Y(t[o],r):k(r)?t[o]=Y({},r):_(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&L(arguments[r],n);return t}const Ye=(e,t,n,{allOwnKeys:r}={})=>(L(t,(s,o)=>{n&&R(s)?e[o]=we(s,n):e[o]=s},{allOwnKeys:r}),e),Ze=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),et=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},tt=(e,t,n,r)=>{let s,o,i;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=n!==!1&&ne(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},nt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},rt=e=>{if(!e)return null;if(_(e))return e;let t=e.length;if(!be(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},st=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ne(Uint8Array)),ot=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},it=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},at=g("HTMLFormElement"),ct=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ae=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ut=g("RegExp"),Ae=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};L(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},lt=e=>{Ae(e,(t,n)=>{if(R(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(R(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ft=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return _(e)?r(e):r(String(e).split(t)),n},dt=()=>{},pt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),K="abcdefghijklmnopqrstuvwxyz",ce="0123456789",ge={DIGIT:ce,ALPHA:K,ALPHA_DIGIT:K+K.toUpperCase()+ce},ht=(e=16,t=ge.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function mt(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const yt=e=>{const t=new Array(10),n=(r,s)=>{if(J(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=_(r)?[]:{};return L(r,(i,u)=>{const d=n(i,s+1);!D(d)&&(o[u]=d)}),t[s]=void 0,o}}return r};return n(e,0)},wt=g("AsyncFunction"),Et=e=>e&&(J(e)||R(e))&&R(e.then)&&R(e.catch),a={isArray:_,isArrayBuffer:Ee,isBuffer:Me,isFormData:Ge,isArrayBufferView:qe,isString:ze,isNumber:be,isBoolean:Je,isObject:J,isPlainObject:k,isUndefined:D,isDate:$e,isFile:Ve,isBlob:ve,isRegExp:ut,isFunction:R,isStream:Ke,isURLSearchParams:Xe,isTypedArray:st,isFileList:We,forEach:L,merge:Y,extend:Ye,trim:Qe,stripBOM:Ze,inherits:et,toFlatObject:tt,kindOf:q,kindOfTest:g,endsWith:nt,toArray:rt,forEachEntry:ot,matchAll:it,isHTMLForm:at,hasOwnProperty:ae,hasOwnProp:ae,reduceDescriptors:Ae,freezeMethods:lt,toObjectSet:ft,toCamelCase:ct,noop:dt,toFiniteNumber:pt,findKey:Se,global:Re,isContextDefined:Oe,ALPHABET:ge,generateString:ht,isSpecCompliantForm:mt,toJSONObject:yt,isAsyncFn:wt,isThenable:Et};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Te=m.prototype,Ne={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ne[e]={value:e}});Object.defineProperties(m,Ne);Object.defineProperty(Te,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Te);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const bt=null;function Z(e){return a.isPlainObject(e)||a.isArray(e)}function Pe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ue(e,t,n){return e?e.concat(t).map(function(s,o){return s=Pe(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function St(e){return a.isArray(e)&&!e.some(Z)}const Rt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function $(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,T){return!a.isUndefined(T[h])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,h,T){let O=f;if(f&&!T&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&St(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(O=a.toArray(f)))return h=Pe(h),O.forEach(function(U,Ie){!(a.isUndefined(U)||U===null)&&t.append(i===!0?ue([h],Ie,o):i===null?h:h+"[]",c(U))}),!1}return Z(f)?!0:(t.append(ue(T,h,o),c(f)),!1)}const p=[],S=Object.assign(Rt,{defaultVisitor:l,convertValue:c,isVisitable:Z});function w(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(O,x){(!(a.isUndefined(O)||O===null)&&s.call(t,O,a.isString(x)?x.trim():x,h,S))===!0&&w(O,h?h.concat(x):[x])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return w(e),t}function le(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function re(e,t){this._pairs=[],e&&$(e,this,t)}const xe=re.prototype;xe.append=function(t,n){this._pairs.push([t,n])};xe.toString=function(t){const n=t?function(r){return t.call(this,r,le)}:le;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ot(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ce(e,t,n){if(!t)return e;const r=n&&n.encode||Ot,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new re(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class At{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const fe=At,_e={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},gt=typeof URLSearchParams<"u"?URLSearchParams:re,Tt=typeof FormData<"u"?FormData:null,Nt=typeof Blob<"u"?Blob:null,Pt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),xt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),A={isBrowser:!0,classes:{URLSearchParams:gt,FormData:Tt,Blob:Nt},isStandardBrowserEnv:Pt,isStandardBrowserWebWorkerEnv:xt,protocols:["http","https","file","blob","url","data"]};function Ct(e,t){return $(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return A.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function _t(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Ft(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Fe(e){function t(n,r,s,o){let i=n[o++];const u=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!u):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Ft(s[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(_t(r),s,n,0)}),n}return null}const Dt={"Content-Type":void 0};function Lt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const V={transitional:_e,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Fe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ct(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return $(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Lt(t)):t}],transformResponse:[function(t){const n=this.transitional||V.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?m.from(u,m.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){V.headers[t]={}});a.forEach(["post","put","patch"],function(t){V.headers[t]=a.merge(Dt)});const se=V,Bt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ut=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Bt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},de=Symbol("internals");function F(e){return e&&String(e).trim().toLowerCase()}function j(e){return e===!1||e==null?e:a.isArray(e)?e.map(j):String(e)}function kt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const jt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function G(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function It(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Ht(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class v{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(u,d,c){const l=F(d);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(s,l);(!p||s[p]===void 0||c===!0||c===void 0&&s[p]!==!1)&&(s[p||d]=j(u))}const i=(u,d)=>a.forEach(u,(c,l)=>o(c,l,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!jt(t)?i(Ut(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=F(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return kt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=F(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||G(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=F(i),i){const u=a.findKey(r,i);u&&(!n||G(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||G(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=j(s),delete n[o];return}const u=t?It(o):String(o).trim();u!==o&&delete n[o],n[u]=j(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[de]=this[de]={accessors:{}}).accessors,s=this.prototype;function o(i){const u=F(i);r[u]||(Ht(s,i),r[u]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}v.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(v.prototype);a.freezeMethods(v);const N=v;function X(e,t){const n=this||se,r=t||n,s=N.from(r.headers);let o=r.data;return a.forEach(e,function(u){o=u.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function De(e){return!!(e&&e.__CANCEL__)}function B(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(B,m,{__CANCEL__:!0});function Mt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const qt=A.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,u){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function zt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Jt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Le(e,t){return e&&!zt(t)?Jt(e,t):t}const $t=A.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const u=a.isString(i)?s(i):i;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function Vt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function vt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),l=r[o];i||(i=c),n[s]=d,r[s]=c;let p=o,S=0;for(;p!==s;)S+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const w=l&&c-l;return w?Math.round(S*1e3/w):void 0}}function pe(e,t){let n=0;const r=vt(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,u=o-n,d=r(u),c=o<=i;n=o;const l={loaded:o,total:i,progress:i?o/i:void 0,bytes:u,rate:d||void 0,estimated:d&&i&&c?(i-o)/d:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const Wt=typeof XMLHttpRequest<"u",Kt=Wt&&function(e){return new Promise(function(n,r){let s=e.data;const o=N.from(e.headers).normalize(),i=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}a.isFormData(s)&&(A.isStandardBrowserEnv||A.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(w+":"+f))}const l=Le(e.baseURL,e.url);c.open(e.method.toUpperCase(),Ce(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const w=N.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:w,config:e,request:c};Mt(function(O){n(O),d()},function(O){r(O),d()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||_e;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},A.isStandardBrowserEnv){const w=(e.withCredentials||$t(l))&&e.xsrfCookieName&&qt.read(e.xsrfCookieName);w&&o.set(e.xsrfHeaderName,w)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(f,h){c.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",pe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",pe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=w=>{c&&(r(!w||w.type?new B(null,e,c):w),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const S=Vt(l);if(S&&A.protocols.indexOf(S)===-1){r(new m("Unsupported protocol "+S+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},I={http:bt,xhr:Kt};a.forEach(I,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Gt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?I[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(I,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:I};function Q(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new B(null,e)}function he(e){return Q(e),e.headers=N.from(e.headers),e.data=X.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Gt.getAdapter(e.adapter||se.adapter)(e).then(function(r){return Q(e),r.data=X.call(e,e.transformResponse,r),r.headers=N.from(r.headers),r},function(r){return De(r)||(Q(e),r&&r.response&&(r.response.data=X.call(e,e.transformResponse,r.response),r.response.headers=N.from(r.response.headers))),Promise.reject(r)})}const me=e=>e instanceof N?e.toJSON():e;function C(e,t){t=t||{};const n={};function r(c,l,p){return a.isPlainObject(c)&&a.isPlainObject(l)?a.merge.call({caseless:p},c,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(c,l,p){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,l,p)}function o(c,l){if(!a.isUndefined(l))return r(void 0,l)}function i(c,l){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,l)}function u(c,l,p){if(p in t)return r(c,l);if(p in e)return r(void 0,c)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(c,l)=>s(me(c),me(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const p=d[l]||s,S=p(e[l],t[l],l);a.isUndefined(S)&&p!==u||(n[l]=S)}),n}const Be="1.4.0",oe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{oe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ye={};oe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Be+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,u)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!ye[i]&&(ye[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,u):!0}};function Xt(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const u=e[o],d=u===void 0||i(u,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const ee={assertOptions:Xt,validators:oe},P=ee.validators;class M{constructor(t){this.defaults=t,this.interceptors={request:new fe,response:new fe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=C(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ee.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ee.assertOptions(s,{encode:P.function,serialize:P.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=N.concat(i,o);const u=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,u.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let l,p=0,S;if(!d){const f=[he.bind(this),void 0];for(f.unshift.apply(f,u),f.push.apply(f,c),S=f.length,l=Promise.resolve(n);p<S;)l=l.then(f[p++],f[p++]);return l}S=u.length;let w=n;for(p=0;p<S;){const f=u[p++],h=u[p++];try{w=f(w)}catch(T){h.call(this,T);break}}try{l=he.call(this,w)}catch(f){return Promise.reject(f)}for(p=0,S=c.length;p<S;)l=l.then(c[p++],c[p++]);return l}getUri(t){t=C(this.defaults,t);const n=Le(t.baseURL,t.url);return Ce(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){M.prototype[t]=function(n,r){return this.request(C(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,u){return this.request(C(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}M.prototype[t]=n(),M.prototype[t+"Form"]=n(!0)});const H=M;class ie{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(u=>{r.subscribe(u),o=u}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,u){r.reason||(r.reason=new B(o,i,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ie(function(s){t=s}),cancel:t}}}const Qt=ie;function Yt(e){return function(n){return e.apply(null,n)}}function Zt(e){return a.isObject(e)&&e.isAxiosError===!0}const te={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(te).forEach(([e,t])=>{te[t]=e});const en=te;function Ue(e){const t=new H(e),n=we(H.prototype.request,t);return a.extend(n,H.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ue(C(e,s))},n}const b=Ue(se);b.Axios=H;b.CanceledError=B;b.CancelToken=Qt;b.isCancel=De;b.VERSION=Be;b.toFormData=$;b.AxiosError=m;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=Yt;b.isAxiosError=Zt;b.mergeConfig=C;b.AxiosHeaders=N;b.formToJSON=e=>Fe(a.isHTMLForm(e)?new FormData(e):e);b.HttpStatusCode=en;b.default=b;const tn=b,nn="1682401406",ke="CNT",rn="zh",W="86",sn=7,on="1.0",je=window.__os,an="http://app2test.ikonke.com",y=tn.create({baseURL:an,headers:{appKey:nn,language:rn,version:"konke sdk 1.0","Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"X-Requested -With","Access-Control-Allow-Methods":"GET,POST,OPTIONS"},timeout:3e3});y.interceptors.request.use(e=>(window.__token||(window.__token=localStorage.getItem("token")),e.headers.Authorization=window.__token,window.__homeId||(window.__homeId=localStorage.getItem("homeId")),e.headers.homeId=window.__homeId,e),e=>(console.log(e),Promise.reject(e)));y.interceptors.response.use(e=>{const{data:t}=e;return t.code===200?e:([401,4010,4011].includes(t.code)&&(console.log(e),window.__jsb.replace({route:"login"})),Promise.reject(t))},e=>(console.log(e),Promise.reject(e)));async function E(e){try{const{data:t}=await e;return t}catch(t){throw t}}const cn=(e,t)=>E(y.post("/account/send/verifyCode",{username:e,codeType:t,countryCode:W})),un=({username:e,userPassword:t})=>E(y.post("/account/login",{username:e,userPassword:t,regionId:ke,countryCode:W,appType:je,appVersion:"1.0"})),ln=(e,t,n)=>E(y.post("/account/register",{username:e,userPassword:t,verifyCode:n,regionId:ke,countryCode:W,appType:je,appVersion:on,groupId:sn})),fn=(e,t,n)=>E(y.post("/account/forget/password",{username:e,userPassword:t,verifyCode:n,countryCode:W})),dn=()=>E(y.get("/api/home")),pn=({homeName:e})=>E(y.post("/api/home",{homeName:e})),hn=()=>E(y.get("/api/home/room")),mn=e=>E(y.get("/api/page/deviceTypeHelpful",{params:{typeId:e}})),yn=e=>E(y.get("/api/user/device",{params:e})),wn=e=>E(y.get("/api/user/device",{params:{roomId:e}})),En=(e,t,n)=>{E(y.post("/api/device/action/control",{userDeviceId:e,name:t,extension:n}))},bn=(e,t,n)=>{E(y.get("/api/device/gateway"))},Sn=(e,t,n)=>E(y.post("/api/home/room",{roomName:e,homeId:t,areaId:n})),Rn=(e,t,n,r)=>E(y.put(`/api/home/room/${r}`,{roomName:e,homeId:t,areaId:n})),On=e=>E(y.delete(`/api/home/room/${e}`)),An=e=>E(y.post("/api/user/device/saveAll",e)),gn=({sceneId:e})=>E(y.post("/api/scene/action",{sceneId:e})),Tn=e=>E(y.get("/api/scene",{params:{manual:e}})),Nn=e=>E(y.get("/api/scene",{params:{sceneId:e}})),Pn=(e,t,n,r,s)=>E(y.post("/api/scene",{sceneName:e,sceneType:t,roomId:n,triggerList:r,actionList:s})),xn=(e,t,n,r,s,o)=>E(y.put(`/api/scene/${e}`,{sceneName:t,sceneType:n,roomId:r,triggerList:s,actionList:o})),Cn=(e,t,n,r,s,o,i)=>E(y.post("/api/scene",{sceneName:e,sceneType:t,roomId:n,schedule:r,cycle:s,triggerList:o,actionList:i})),_n=(e,t,n,r,s,o,i,u)=>E(y.put(`/api/scene/${e}`,{sceneName:t,sceneType:n,roomId:r,schedule:s,cycle:o,triggerList:i,actionList:u})),Fn=e=>E(y.get(`/api/user/device/remoter/key/${e}`));export{wn as a,cn as b,En as c,Fn as d,Nn as e,fn as f,bn as g,Pn as h,xn as i,pn as j,dn as k,Cn as l,_n as m,gn as n,yn as o,ln as p,Sn as q,hn as r,Tn as s,Rn as t,An as u,On as v,mn as w,an as x,un as y};