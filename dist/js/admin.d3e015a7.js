(self["webpackChunkprojet_shop"]=self["webpackChunkprojet_shop"]||[]).push([[328],{6077:function(t,e,r){var n=r(614),o=String,s=TypeError;t.exports=function(t){if("object"==typeof t||n(t))return t;throw s("Can't set "+o(t)+" as a prototype")}},5787:function(t,e,r){var n=r(7976),o=TypeError;t.exports=function(t,e){if(n(e,t))return t;throw o("Incorrect invocation")}},648:function(t,e,r){var n=r(1694),o=r(614),s=r(4326),i=r(5112),a=i("toStringTag"),c=Object,u="Arguments"==s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(r){}};t.exports=n?s:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=l(e=c(t),a))?r:u?s(e):"Object"==(n=s(e))&&o(e.callee)?"Arguments":n}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},1060:function(t,e,r){var n=r(1702),o=Error,s=n("".replace),i=function(t){return String(o(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(i);t.exports=function(t,e){if(c&&"string"==typeof t&&!o.prepareStackTrace)while(e--)t=s(t,a,"");return t}},9587:function(t,e,r){var n=r(614),o=r(111),s=r(7674);t.exports=function(t,e,r){var i,a;return s&&n(i=e.constructor)&&i!==r&&o(a=i.prototype)&&a!==r.prototype&&s(t,a),t}},6277:function(t,e,r){var n=r(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:n(t)}},7674:function(t,e,r){var n=r(1702),o=r(9670),s=r(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{t=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(r,[]),e=r instanceof Array}catch(i){}return function(r,n){return o(r),s(n),e?t(r,n):r.__proto__=n,r}}():void 0)},1694:function(t,e,r){var n=r(5112),o=n("toStringTag"),s={};s[o]="z",t.exports="[object z]"===String(s)},1340:function(t,e,r){var n=r(648),o=String;t.exports=function(t){if("Symbol"===n(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},2801:function(t,e,r){"use strict";var n=r(2109),o=r(7854),s=r(5005),i=r(9114),a=r(3070).f,c=r(2597),u=r(5787),l=r(9587),f=r(6277),d=r(3678),p=r(1060),h=r(9781),m=r(1913),E="DOMException",g=s("Error"),y=s(E),b=function(){u(this,w);var t=arguments.length,e=f(t<1?void 0:arguments[0]),r=f(t<2?void 0:arguments[1],"Error"),n=new y(e,r),o=g(e);return o.name=E,a(n,"stack",i(1,p(o.stack,1))),l(n,this,b),n},w=b.prototype=y.prototype,O="stack"in g(E),R="stack"in new y(1,2),S=y&&h&&Object.getOwnPropertyDescriptor(o,E),v=!!S&&!(S.writable&&S.configurable),A=O&&!v&&!R;n({global:!0,constructor:!0,forced:m||A},{DOMException:A?b:y});var _=s(E),T=_.prototype;if(T.constructor!==_)for(var N in m||a(T,"constructor",i(1,_)),d)if(c(d,N)){var j=d[N],C=j.s;c(_,C)||a(_,C,i(6,j.c))}},6237:function(t){t.exports="object"==typeof self?self.FormData:window.FormData},7318:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Qe}});var n=r(3396);function o(t,e,r,o,s,i){const a=(0,n.up)("AdminManagement");return(0,n.wg)(),(0,n.j4)(a)}const s=(0,n._)("h1",null,"Admin Page",-1),i={class:"products"};function a(t,e,r,o,a,c){const u=(0,n.up)("ProductCard");return(0,n.wg)(),(0,n.iD)(n.HY,null,[s,(0,n._)("div",i,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.products,(t=>((0,n.wg)(),(0,n.j4)(u,{key:t.id})))),128))])],64)}var c=r(7139);const u={class:"bigcontainer"},l={class:"event-card"};function f(t,e,r,o,s,i){return(0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("div",l,[(0,n._)("span",null,(0,c.zw)(r.product.name)+" on "+(0,c.zw)(r.product.price),1),(0,n._)("h4",null,(0,c.zw)(r.product.image),1),(0,n._)("button",{onClick:e[0]||(e[0]=t=>i.deleteProduct(r.product.id))},"Delete Product")])])}r(7658);function d(t,e){return function(){return t.apply(e,arguments)}}const{toString:p}=Object.prototype,{getPrototypeOf:h}=Object,m=(t=>e=>{const r=p.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),E=t=>(t=t.toLowerCase(),e=>m(e)===t),g=t=>e=>typeof e===t,{isArray:y}=Array,b=g("undefined");function w(t){return null!==t&&!b(t)&&null!==t.constructor&&!b(t.constructor)&&v(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const O=E("ArrayBuffer");function R(t){let e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&O(t.buffer),e}const S=g("string"),v=g("function"),A=g("number"),_=t=>null!==t&&"object"===typeof t,T=t=>!0===t||!1===t,N=t=>{if("object"!==m(t))return!1;const e=h(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},j=E("Date"),C=E("File"),x=E("Blob"),D=E("FileList"),P=t=>_(t)&&v(t.pipe),U=t=>{const e="[object FormData]";return t&&("function"===typeof FormData&&t instanceof FormData||p.call(t)===e||v(t.toString)&&t.toString()===e)},L=E("URLSearchParams"),B=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function F(t,e,{allOwnKeys:r=!1}={}){if(null===t||"undefined"===typeof t)return;let n,o;if("object"!==typeof t&&(t=[t]),y(t))for(n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else{const o=r?Object.getOwnPropertyNames(t):Object.keys(t),s=o.length;let i;for(n=0;n<s;n++)i=o[n],e.call(null,t[i],i,t)}}function k(t,e){e=e.toLowerCase();const r=Object.keys(t);let n,o=r.length;while(o-- >0)if(n=r[o],e===n.toLowerCase())return n;return null}const I="undefined"===typeof self?"undefined"===typeof global?void 0:global:self,M=t=>!b(t)&&t!==I;function z(){const{caseless:t}=M(this)&&this||{},e={},r=(r,n)=>{const o=t&&k(e,n)||n;N(e[o])&&N(r)?e[o]=z(e[o],r):N(r)?e[o]=z({},r):y(r)?e[o]=r.slice():e[o]=r};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&F(arguments[n],r);return e}const H=(t,e,r,{allOwnKeys:n}={})=>(F(e,((e,n)=>{r&&v(e)?t[n]=d(e,r):t[n]=e}),{allOwnKeys:n}),t),q=t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),J=(t,e,r,n)=>{t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},W=(t,e,r,n)=>{let o,s,i;const a={};if(e=e||{},null==t)return e;do{o=Object.getOwnPropertyNames(t),s=o.length;while(s-- >0)i=o[s],n&&!n(i,t,e)||a[i]||(e[i]=t[i],a[i]=!0);t=!1!==r&&h(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e},V=(t,e,r)=>{t=String(t),(void 0===r||r>t.length)&&(r=t.length),r-=e.length;const n=t.indexOf(e,r);return-1!==n&&n===r},K=t=>{if(!t)return null;if(y(t))return t;let e=t.length;if(!A(e))return null;const r=new Array(e);while(e-- >0)r[e]=t[e];return r},X=(t=>e=>t&&e instanceof t)("undefined"!==typeof Uint8Array&&h(Uint8Array)),Y=(t,e)=>{const r=t&&t[Symbol.iterator],n=r.call(t);let o;while((o=n.next())&&!o.done){const r=o.value;e.call(t,r[0],r[1])}},$=(t,e)=>{let r;const n=[];while(null!==(r=t.exec(e)))n.push(r);return n},Z=E("HTMLFormElement"),Q=t=>t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(t,e,r){return e.toUpperCase()+r})),G=(({hasOwnProperty:t})=>(e,r)=>t.call(e,r))(Object.prototype),tt=E("RegExp"),et=(t,e)=>{const r=Object.getOwnPropertyDescriptors(t),n={};F(r,((r,o)=>{!1!==e(r,o,t)&&(n[o]=r)})),Object.defineProperties(t,n)},rt=t=>{et(t,((e,r)=>{if(v(t)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=t[r];v(n)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))}))},nt=(t,e)=>{const r={},n=t=>{t.forEach((t=>{r[t]=!0}))};return y(t)?n(t):n(String(t).split(e)),r},ot=()=>{},st=(t,e)=>(t=+t,Number.isFinite(t)?t:e),it=t=>{const e=new Array(10),r=(t,n)=>{if(_(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[n]=t;const o=y(t)?[]:{};return F(t,((t,e)=>{const s=r(t,n+1);!b(s)&&(o[e]=s)})),e[n]=void 0,o}}return t};return r(t,0)};var at={isArray:y,isArrayBuffer:O,isBuffer:w,isFormData:U,isArrayBufferView:R,isString:S,isNumber:A,isBoolean:T,isObject:_,isPlainObject:N,isUndefined:b,isDate:j,isFile:C,isBlob:x,isRegExp:tt,isFunction:v,isStream:P,isURLSearchParams:L,isTypedArray:X,isFileList:D,forEach:F,merge:z,extend:H,trim:B,stripBOM:q,inherits:J,toFlatObject:W,kindOf:m,kindOfTest:E,endsWith:V,toArray:K,forEachEntry:Y,matchAll:$,isHTMLForm:Z,hasOwnProperty:G,hasOwnProp:G,reduceDescriptors:et,freezeMethods:rt,toObjectSet:nt,toCamelCase:Q,noop:ot,toFiniteNumber:st,findKey:k,global:I,isContextDefined:M,toJSONObject:it};r(541);function ct(t,e,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}at.inherits(ct,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:at.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ut=ct.prototype,lt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{lt[t]={value:t}})),Object.defineProperties(ct,lt),Object.defineProperty(ut,"isAxiosError",{value:!0}),ct.from=(t,e,r,n,o,s)=>{const i=Object.create(ut);return at.toFlatObject(t,i,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),ct.call(i,t.message,e,r,n,o),i.cause=t,i.name=t.name,s&&Object.assign(i,s),i};var ft=ct,dt=r(6237),pt=dt;function ht(t){return at.isPlainObject(t)||at.isArray(t)}function mt(t){return at.endsWith(t,"[]")?t.slice(0,-2):t}function Et(t,e,r){return t?t.concat(e).map((function(t,e){return t=mt(t),!r&&e?"["+t+"]":t})).join(r?".":""):e}function gt(t){return at.isArray(t)&&!t.some(ht)}const yt=at.toFlatObject(at,{},null,(function(t){return/^is[A-Z]/.test(t)}));function bt(t){return t&&at.isFunction(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator]}function wt(t,e,r){if(!at.isObject(t))throw new TypeError("target must be an object");e=e||new(pt||FormData),r=at.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!at.isUndefined(e[t])}));const n=r.metaTokens,o=r.visitor||l,s=r.dots,i=r.indexes,a=r.Blob||"undefined"!==typeof Blob&&Blob,c=a&&bt(e);if(!at.isFunction(o))throw new TypeError("visitor must be a function");function u(t){if(null===t)return"";if(at.isDate(t))return t.toISOString();if(!c&&at.isBlob(t))throw new ft("Blob is not supported. Use a Buffer instead.");return at.isArrayBuffer(t)||at.isTypedArray(t)?c&&"function"===typeof Blob?new Blob([t]):Buffer.from(t):t}function l(t,r,o){let a=t;if(t&&!o&&"object"===typeof t)if(at.endsWith(r,"{}"))r=n?r:r.slice(0,-2),t=JSON.stringify(t);else if(at.isArray(t)&&gt(t)||at.isFileList(t)||at.endsWith(r,"[]")&&(a=at.toArray(t)))return r=mt(r),a.forEach((function(t,n){!at.isUndefined(t)&&null!==t&&e.append(!0===i?Et([r],n,s):null===i?r:r+"[]",u(t))})),!1;return!!ht(t)||(e.append(Et(o,r,s),u(t)),!1)}const f=[],d=Object.assign(yt,{defaultVisitor:l,convertValue:u,isVisitable:ht});function p(t,r){if(!at.isUndefined(t)){if(-1!==f.indexOf(t))throw Error("Circular reference detected in "+r.join("."));f.push(t),at.forEach(t,(function(t,n){const s=!(at.isUndefined(t)||null===t)&&o.call(e,t,at.isString(n)?n.trim():n,r,d);!0===s&&p(t,r?r.concat(n):[n])})),f.pop()}}if(!at.isObject(t))throw new TypeError("data must be an object");return p(t),e}var Ot=wt;function Rt(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function St(t,e){this._pairs=[],t&&Ot(t,this,e)}const vt=St.prototype;vt.append=function(t,e){this._pairs.push([t,e])},vt.toString=function(t){const e=t?function(e){return t.call(this,e,Rt)}:Rt;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var At=St;function _t(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Tt(t,e,r){if(!e)return t;const n=r&&r.encode||_t,o=r&&r.serialize;let s;if(s=o?o(e,r):at.isURLSearchParams(e)?e.toString():new At(e,r).toString(n),s){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}class Nt{constructor(){this.handlers=[]}use(t,e,r){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){at.forEach(this.handlers,(function(e){null!==e&&t(e)}))}}var jt=Nt,Ct={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},xt="undefined"!==typeof URLSearchParams?URLSearchParams:At,Dt=FormData;const Pt=(()=>{let t;return("undefined"===typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!==typeof window&&"undefined"!==typeof document)})(),Ut=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)();var Lt={isBrowser:!0,classes:{URLSearchParams:xt,FormData:Dt,Blob:Blob},isStandardBrowserEnv:Pt,isStandardBrowserWebWorkerEnv:Ut,protocols:["http","https","file","blob","url","data"]};function Bt(t,e){return Ot(t,new Lt.classes.URLSearchParams,Object.assign({visitor:function(t,e,r,n){return Lt.isNode&&at.isBuffer(t)?(this.append(e,t.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},e))}function Ft(t){return at.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}function kt(t){const e={},r=Object.keys(t);let n;const o=r.length;let s;for(n=0;n<o;n++)s=r[n],e[s]=t[s];return e}function It(t){function e(t,r,n,o){let s=t[o++];const i=Number.isFinite(+s),a=o>=t.length;if(s=!s&&at.isArray(n)?n.length:s,a)return at.hasOwnProp(n,s)?n[s]=[n[s],r]:n[s]=r,!i;n[s]&&at.isObject(n[s])||(n[s]=[]);const c=e(t,r,n[s],o);return c&&at.isArray(n[s])&&(n[s]=kt(n[s])),!i}if(at.isFormData(t)&&at.isFunction(t.entries)){const r={};return at.forEachEntry(t,((t,n)=>{e(Ft(t),n,r,0)})),r}return null}var Mt=It;const zt={"Content-Type":void 0};function Ht(t,e,r){if(at.isString(t))try{return(e||JSON.parse)(t),at.trim(t)}catch(n){if("SyntaxError"!==n.name)throw n}return(r||JSON.stringify)(t)}const qt={transitional:Ct,adapter:["xhr","http"],transformRequest:[function(t,e){const r=e.getContentType()||"",n=r.indexOf("application/json")>-1,o=at.isObject(t);o&&at.isHTMLForm(t)&&(t=new FormData(t));const s=at.isFormData(t);if(s)return n&&n?JSON.stringify(Mt(t)):t;if(at.isArrayBuffer(t)||at.isBuffer(t)||at.isStream(t)||at.isFile(t)||at.isBlob(t))return t;if(at.isArrayBufferView(t))return t.buffer;if(at.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let i;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Bt(t,this.formSerializer).toString();if((i=at.isFileList(t))||r.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return Ot(i?{"files[]":t}:t,e&&new e,this.formSerializer)}}return o||n?(e.setContentType("application/json",!1),Ht(t)):t}],transformResponse:[function(t){const e=this.transitional||qt.transitional,r=e&&e.forcedJSONParsing,n="json"===this.responseType;if(t&&at.isString(t)&&(r&&!this.responseType||n)){const r=e&&e.silentJSONParsing,s=!r&&n;try{return JSON.parse(t)}catch(o){if(s){if("SyntaxError"===o.name)throw ft.from(o,ft.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Lt.classes.FormData,Blob:Lt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};at.forEach(["delete","get","head"],(function(t){qt.headers[t]={}})),at.forEach(["post","put","patch"],(function(t){qt.headers[t]=at.merge(zt)}));var Jt=qt;const Wt=at.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Vt=t=>{const e={};let r,n,o;return t&&t.split("\n").forEach((function(t){o=t.indexOf(":"),r=t.substring(0,o).trim().toLowerCase(),n=t.substring(o+1).trim(),!r||e[r]&&Wt[r]||("set-cookie"===r?e[r]?e[r].push(n):e[r]=[n]:e[r]=e[r]?e[r]+", "+n:n)})),e};const Kt=Symbol("internals");function Xt(t){return t&&String(t).trim().toLowerCase()}function Yt(t){return!1===t||null==t?t:at.isArray(t)?t.map(Yt):String(t)}function $t(t){const e=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;while(n=r.exec(t))e[n[1]]=n[2];return e}function Zt(t){return/^[-_a-zA-Z]+$/.test(t.trim())}function Qt(t,e,r,n){return at.isFunction(n)?n.call(this,e,r):at.isString(e)?at.isString(n)?-1!==e.indexOf(n):at.isRegExp(n)?n.test(e):void 0:void 0}function Gt(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,r)=>e.toUpperCase()+r))}function te(t,e){const r=at.toCamelCase(" "+e);["get","set","has"].forEach((n=>{Object.defineProperty(t,n+r,{value:function(t,r,o){return this[n].call(this,e,t,r,o)},configurable:!0})}))}class ee{constructor(t){t&&this.set(t)}set(t,e,r){const n=this;function o(t,e,r){const o=Xt(e);if(!o)throw new Error("header name must be a non-empty string");const s=at.findKey(n,o);(!s||void 0===n[s]||!0===r||void 0===r&&!1!==n[s])&&(n[s||e]=Yt(t))}const s=(t,e)=>at.forEach(t,((t,r)=>o(t,r,e)));return at.isPlainObject(t)||t instanceof this.constructor?s(t,e):at.isString(t)&&(t=t.trim())&&!Zt(t)?s(Vt(t),e):null!=t&&o(e,t,r),this}get(t,e){if(t=Xt(t),t){const r=at.findKey(this,t);if(r){const t=this[r];if(!e)return t;if(!0===e)return $t(t);if(at.isFunction(e))return e.call(this,t,r);if(at.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=Xt(t),t){const r=at.findKey(this,t);return!(!r||e&&!Qt(this,this[r],r,e))}return!1}delete(t,e){const r=this;let n=!1;function o(t){if(t=Xt(t),t){const o=at.findKey(r,t);!o||e&&!Qt(r,r[o],o,e)||(delete r[o],n=!0)}}return at.isArray(t)?t.forEach(o):o(t),n}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const e=this,r={};return at.forEach(this,((n,o)=>{const s=at.findKey(r,o);if(s)return e[s]=Yt(n),void delete e[o];const i=t?Gt(o):String(o).trim();i!==o&&delete e[o],e[i]=Yt(n),r[i]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return at.forEach(this,((r,n)=>{null!=r&&!1!==r&&(e[n]=t&&at.isArray(r)?r.join(", "):r)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const r=new this(t);return e.forEach((t=>r.set(t))),r}static accessor(t){const e=this[Kt]=this[Kt]={accessors:{}},r=e.accessors,n=this.prototype;function o(t){const e=Xt(t);r[e]||(te(n,t),r[e]=!0)}return at.isArray(t)?t.forEach(o):o(t),this}}ee.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),at.freezeMethods(ee.prototype),at.freezeMethods(ee);var re=ee;function ne(t,e){const r=this||Jt,n=e||r,o=re.from(n.headers);let s=n.data;return at.forEach(t,(function(t){s=t.call(r,s,o.normalize(),e?e.status:void 0)})),o.normalize(),s}function oe(t){return!(!t||!t.__CANCEL__)}function se(t,e,r){ft.call(this,null==t?"canceled":t,ft.ERR_CANCELED,e,r),this.name="CanceledError"}at.inherits(se,ft,{__CANCEL__:!0});var ie=se,ae=null;r(2801);function ce(t,e,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?e(new ft("Request failed with status code "+r.status,[ft.ERR_BAD_REQUEST,ft.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):t(r)}var ue=Lt.isStandardBrowserEnv?function(){return{write:function(t,e,r,n,o,s){const i=[];i.push(t+"="+encodeURIComponent(e)),at.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),at.isString(n)&&i.push("path="+n),at.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function le(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function fe(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function de(t,e){return t&&!le(e)?fe(t,e):e}var pe=Lt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let r;function n(r){let n=r;return t&&(e.setAttribute("href",n),n=e.href),e.setAttribute("href",n),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return r=n(window.location.href),function(t){const e=at.isString(t)?n(t):t;return e.protocol===r.protocol&&e.host===r.host}}():function(){return function(){return!0}}();function he(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function me(t,e){t=t||10;const r=new Array(t),n=new Array(t);let o,s=0,i=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),u=n[i];o||(o=c),r[s]=a,n[s]=c;let l=i,f=0;while(l!==s)f+=r[l++],l%=t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),c-o<e)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}var Ee=me;function ge(t,e){let r=0;const n=Ee(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-r,c=n(a),u=s<=i;r=s;const l={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&u?(i-s)/c:void 0,event:o};l[e?"download":"upload"]=!0,t(l)}}const ye="undefined"!==typeof XMLHttpRequest;var be=ye&&function(t){return new Promise((function(e,r){let n=t.data;const o=re.from(t.headers).normalize(),s=t.responseType;let i;function a(){t.cancelToken&&t.cancelToken.unsubscribe(i),t.signal&&t.signal.removeEventListener("abort",i)}at.isFormData(n)&&(Lt.isStandardBrowserEnv||Lt.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",r=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";o.set("Authorization","Basic "+btoa(e+":"+r))}const u=de(t.baseURL,t.url);function l(){if(!c)return;const n=re.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),o=s&&"text"!==s&&"json"!==s?c.response:c.responseText,i={data:o,status:c.status,statusText:c.statusText,headers:n,config:t,request:c};ce((function(t){e(t),a()}),(function(t){r(t),a()}),i),c=null}if(c.open(t.method.toUpperCase(),Tt(u,t.params,t.paramsSerializer),!0),c.timeout=t.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(r(new ft("Request aborted",ft.ECONNABORTED,t,c)),c=null)},c.onerror=function(){r(new ft("Network Error",ft.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const n=t.transitional||Ct;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(new ft(e,n.clarifyTimeoutError?ft.ETIMEDOUT:ft.ECONNABORTED,t,c)),c=null},Lt.isStandardBrowserEnv){const e=(t.withCredentials||pe(u))&&t.xsrfCookieName&&ue.read(t.xsrfCookieName);e&&o.set(t.xsrfHeaderName,e)}void 0===n&&o.setContentType(null),"setRequestHeader"in c&&at.forEach(o.toJSON(),(function(t,e){c.setRequestHeader(e,t)})),at.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),s&&"json"!==s&&(c.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&c.addEventListener("progress",ge(t.onDownloadProgress,!0)),"function"===typeof t.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",ge(t.onUploadProgress)),(t.cancelToken||t.signal)&&(i=e=>{c&&(r(!e||e.type?new ie(null,t,c):e),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(i),t.signal&&(t.signal.aborted?i():t.signal.addEventListener("abort",i)));const f=he(u);f&&-1===Lt.protocols.indexOf(f)?r(new ft("Unsupported protocol "+f+":",ft.ERR_BAD_REQUEST,t)):c.send(n||null)}))};const we={http:ae,xhr:be};at.forEach(we,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(r){}Object.defineProperty(t,"adapterName",{value:e})}}));var Oe={getAdapter:t=>{t=at.isArray(t)?t:[t];const{length:e}=t;let r,n;for(let o=0;o<e;o++)if(r=t[o],n=at.isString(r)?we[r.toLowerCase()]:r)break;if(!n){if(!1===n)throw new ft(`Adapter ${r} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(at.hasOwnProp(we,r)?`Adapter '${r}' is not available in the build`:`Unknown adapter '${r}'`)}if(!at.isFunction(n))throw new TypeError("adapter is not a function");return n},adapters:we};function Re(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ie(null,t)}function Se(t){Re(t),t.headers=re.from(t.headers),t.data=ne.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);const e=Oe.getAdapter(t.adapter||Jt.adapter);return e(t).then((function(e){return Re(t),e.data=ne.call(t,t.transformResponse,e),e.headers=re.from(e.headers),e}),(function(e){return oe(e)||(Re(t),e&&e.response&&(e.response.data=ne.call(t,t.transformResponse,e.response),e.response.headers=re.from(e.response.headers))),Promise.reject(e)}))}const ve=t=>t instanceof re?t.toJSON():t;function Ae(t,e){e=e||{};const r={};function n(t,e,r){return at.isPlainObject(t)&&at.isPlainObject(e)?at.merge.call({caseless:r},t,e):at.isPlainObject(e)?at.merge({},e):at.isArray(e)?e.slice():e}function o(t,e,r){return at.isUndefined(e)?at.isUndefined(t)?void 0:n(void 0,t,r):n(t,e,r)}function s(t,e){if(!at.isUndefined(e))return n(void 0,e)}function i(t,e){return at.isUndefined(e)?at.isUndefined(t)?void 0:n(void 0,t):n(void 0,e)}function a(r,o,s){return s in e?n(r,o):s in t?n(void 0,r):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(t,e)=>o(ve(t),ve(e),!0)};return at.forEach(Object.keys(t).concat(Object.keys(e)),(function(n){const s=c[n]||o,i=s(t[n],e[n],n);at.isUndefined(i)&&s!==a||(r[n]=i)})),r}const _e="1.2.1",Te={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{Te[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}}));const Ne={};function je(t,e,r){if("object"!==typeof t)throw new ft("options must be an object",ft.ERR_BAD_OPTION_VALUE);const n=Object.keys(t);let o=n.length;while(o-- >0){const s=n[o],i=e[s];if(i){const e=t[s],r=void 0===e||i(e,s,t);if(!0!==r)throw new ft("option "+s+" must be "+r,ft.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new ft("Unknown option "+s,ft.ERR_BAD_OPTION)}}Te.transitional=function(t,e,r){function n(t,e){return"[Axios v"+_e+"] Transitional option '"+t+"'"+e+(r?". "+r:"")}return(r,o,s)=>{if(!1===t)throw new ft(n(o," has been removed"+(e?" in "+e:"")),ft.ERR_DEPRECATED);return e&&!Ne[o]&&(Ne[o]=!0,console.warn(n(o," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(r,o,s)}};var Ce={assertOptions:je,validators:Te};const xe=Ce.validators;class De{constructor(t){this.defaults=t,this.interceptors={request:new jt,response:new jt}}request(t,e){"string"===typeof t?(e=e||{},e.url=t):e=t||{},e=Ae(this.defaults,e);const{transitional:r,paramsSerializer:n,headers:o}=e;let s;void 0!==r&&Ce.assertOptions(r,{silentJSONParsing:xe.transitional(xe.boolean),forcedJSONParsing:xe.transitional(xe.boolean),clarifyTimeoutError:xe.transitional(xe.boolean)},!1),void 0!==n&&Ce.assertOptions(n,{encode:xe.function,serialize:xe.function},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase(),s=o&&at.merge(o.common,o[e.method]),s&&at.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete o[t]})),e.headers=re.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,i.unshift(t.fulfilled,t.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)}));let l,f=0;if(!a){const t=[Se.bind(this),void 0];t.unshift.apply(t,i),t.push.apply(t,c),l=t.length,u=Promise.resolve(e);while(f<l)u=u.then(t[f++],t[f++]);return u}l=i.length;let d=e;f=0;while(f<l){const t=i[f++],e=i[f++];try{d=t(d)}catch(p){e.call(this,p);break}}try{u=Se.call(this,d)}catch(p){return Promise.reject(p)}f=0,l=c.length;while(f<l)u=u.then(c[f++],c[f++]);return u}getUri(t){t=Ae(this.defaults,t);const e=de(t.baseURL,t.url);return Tt(e,t.params,t.paramsSerializer)}}at.forEach(["delete","get","head","options"],(function(t){De.prototype[t]=function(e,r){return this.request(Ae(r||{},{method:t,url:e,data:(r||{}).data}))}})),at.forEach(["post","put","patch"],(function(t){function e(e){return function(r,n,o){return this.request(Ae(o||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}De.prototype[t]=e(),De.prototype[t+"Form"]=e(!0)}));var Pe=De;class Ue{constructor(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const r=this;this.promise.then((t=>{if(!r._listeners)return;let e=r._listeners.length;while(e-- >0)r._listeners[e](t);r._listeners=null})),this.promise.then=t=>{let e;const n=new Promise((t=>{r.subscribe(t),e=t})).then(t);return n.cancel=function(){r.unsubscribe(e)},n},t((function(t,n,o){r.reason||(r.reason=new ie(t,n,o),e(r.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;const e=new Ue((function(e){t=e}));return{token:e,cancel:t}}}var Le=Ue;function Be(t){return function(e){return t.apply(null,e)}}function Fe(t){return at.isObject(t)&&!0===t.isAxiosError}function ke(t){const e=new Pe(t),r=d(Pe.prototype.request,e);return at.extend(r,Pe.prototype,e,{allOwnKeys:!0}),at.extend(r,e,null,{allOwnKeys:!0}),r.create=function(e){return ke(Ae(t,e))},r}const Ie=ke(Jt);Ie.Axios=Pe,Ie.CanceledError=ie,Ie.CancelToken=Le,Ie.isCancel=oe,Ie.VERSION=_e,Ie.toFormData=Ot,Ie.AxiosError=ft,Ie.Cancel=Ie.CanceledError,Ie.all=function(t){return Promise.all(t)},Ie.spread=Be,Ie.isAxiosError=Fe,Ie.mergeConfig=Ae,Ie.AxiosHeaders=re,Ie.formToJSON=t=>Mt(at.isHTMLForm(t)?new FormData(t):t),Ie.default=Ie;var Me=Ie;const ze=Me.create({baseURL:"http://localhost:3000",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});var He={getProducts(){return ze.get("/products")},getProduct(t){return ze.get("/products/"+t)},deleteProduct(t){return ze.delete("/products/"+t)},addProduct(){return ze.post("/products")}},qe={name:"ProductCard",props:{product:{type:Object,required:!0}},methods:{deleteProduct(t){console.log(t),He.deleteProduct(t).then((t=>{console.log(t)})).catch((t=>{console.log(t)}))}}},Je=r(89);const We=(0,Je.Z)(qe,[["render",f]]);var Ve=We,Ke={name:"AdminManagement",components:{ProductCard:Ve},data(){return{products:null}},created(){He.getProducts().then((t=>{this.products=t.data})).catch((t=>{console.log(t)}))}};const Xe=(0,Je.Z)(Ke,[["render",a]]);var Ye=Xe,$e={components:{AdminManagement:Ye}};const Ze=(0,Je.Z)($e,[["render",o]]);var Qe=Ze}}]);
//# sourceMappingURL=admin.d3e015a7.js.map