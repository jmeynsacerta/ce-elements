!function(t){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},e(t,n)};function n(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}function r(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}function i(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{a(r.next(t))}catch(t){o(t)}}function l(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,l)}a((r=r.apply(t,e||[])).next())}))}function o(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}function s(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function l(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}function a(t,e,n){if(n||2===arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}function c(t){return this instanceof c?(this.v=t,this):new c(t)}function u(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=n.apply(t,e||[]),o=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(t){i[t]&&(r[t]=function(e){return new Promise((function(n,r){o.push([t,e,n,r])>1||l(t,e)}))})}function l(t,e){try{!function(t){t.value instanceof c?Promise.resolve(t.value.v).then(a,u):h(o[0][2],t)}(i[t](e))}catch(t){h(o[0][3],t)}}function a(t){l("next",t)}function u(t){l("throw",t)}function h(t,e){t(e),o.shift(),o.length&&l(o[0][0],o[0][1])}}function h(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=s(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,i){(function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)})(r,i,(e=t[n](e)).done,e.value)}))}}}
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const d=window,p=d.ShadowRoot&&(void 0===d.ShadyCSS||d.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,f=Symbol(),v=new WeakMap;class y{constructor(t,e,n){if(this._$cssResult$=!0,n!==f)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(p&&void 0===t){const n=void 0!==e&&1===e.length;n&&(t=v.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&v.set(e,t))}return t}toString(){return this.cssText}}const _=p?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>new y("string"==typeof t?t:t+"",void 0,f))(e)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var m;const b=window,$=b.trustedTypes,g=$?$.emptyScript:"",A=b.reactiveElementPolyfillSupport,w={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},S=(t,e)=>e!==t&&(e==e||t==t),E={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:S};class x extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,n)=>{const r=this._$Ep(n,e);void 0!==r&&(this._$Ev.set(r,n),t.push(r))})),t}static createProperty(t,e=E){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const n="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,n,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(r){const i=this[t];this[e]=r,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||E}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of e)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(_(t))}else void 0!==t&&e.push(_(t));return e}static _$Ep(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,n;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{p?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const n=document.createElement("style"),r=d.litNonce;void 0!==r&&n.setAttribute("nonce",r),n.textContent=e.cssText,t.appendChild(n)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EO(t,e,n=E){var r;const i=this.constructor._$Ep(t,n);if(void 0!==i&&!0===n.reflect){const o=(void 0!==(null===(r=n.converter)||void 0===r?void 0:r.toAttribute)?n.converter:w).toAttribute(e,n.type);this._$El=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(t,e){var n;const r=this.constructor,i=r._$Ev.get(t);if(void 0!==i&&this._$El!==i){const t=r.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(n=t.converter)||void 0===n?void 0:n.fromAttribute)?t.converter:w;this._$El=i,this[i]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,n){let r=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||S)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(n)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var C;x.finalized=!0,x.elementProperties=new Map,x.elementStyles=[],x.shadowRootOptions={mode:"open"},null==A||A({ReactiveElement:x}),(null!==(m=b.reactiveElementVersions)&&void 0!==m?m:b.reactiveElementVersions=[]).push("1.4.1");const P=window,k=P.trustedTypes,T=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,O=`lit$${(Math.random()+"").slice(9)}$`,N="?"+O,H=`<${N}>`,U=document,R=(t="")=>U.createComment(t),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,j=/>/g,D=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),Y=/'/g,B=/"/g,W=/^(?:script|style|textarea|title)$/i,V=(t=>(e,...n)=>({_$litType$:t,strings:e,values:n}))(1),q=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),Z=new WeakMap,G=U.createTreeWalker(U,129,null,!1),J=(t,e)=>{const n=t.length-1,r=[];let i,o=2===e?"<svg>":"",s=L;for(let e=0;e<n;e++){const n=t[e];let l,a,c=-1,u=0;for(;u<n.length&&(s.lastIndex=u,a=s.exec(n),null!==a);)u=s.lastIndex,s===L?"!--"===a[1]?s=I:void 0!==a[1]?s=j:void 0!==a[2]?(W.test(a[2])&&(i=RegExp("</"+a[2],"g")),s=D):void 0!==a[3]&&(s=D):s===D?">"===a[0]?(s=null!=i?i:L,c=-1):void 0===a[1]?c=-2:(c=s.lastIndex-a[2].length,l=a[1],s=void 0===a[3]?D:'"'===a[3]?B:Y):s===B||s===Y?s=D:s===I||s===j?s=L:(s=D,i=void 0);const h=s===D&&t[e+1].startsWith("/>")?" ":"";o+=s===L?n+H:c>=0?(r.push(l),n.slice(0,c)+"$lit$"+n.slice(c)+O+h):n+O+(-2===c?(r.push(void 0),e):h)}const l=o+(t[n]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==T?T.createHTML(l):l,r]};class K{constructor({strings:t,_$litType$:e},n){let r;this.parts=[];let i=0,o=0;const s=t.length-1,l=this.parts,[a,c]=J(t,e);if(this.el=K.createElement(a,n),G.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=G.nextNode())&&l.length<s;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(O)){const n=c[o++];if(t.push(e),void 0!==n){const t=r.getAttribute(n.toLowerCase()+"$lit$").split(O),e=/([.?@])?(.*)/.exec(n);l.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?nt:"?"===e[1]?it:"@"===e[1]?ot:et})}else l.push({type:6,index:i})}for(const e of t)r.removeAttribute(e)}if(W.test(r.tagName)){const t=r.textContent.split(O),e=t.length-1;if(e>0){r.textContent=k?k.emptyScript:"";for(let n=0;n<e;n++)r.append(t[n],R()),G.nextNode(),l.push({type:2,index:++i});r.append(t[e],R())}}}else if(8===r.nodeType)if(r.data===N)l.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(O,t+1));)l.push({type:7,index:i}),t+=O.length-1}i++}}static createElement(t,e){const n=U.createElement("template");return n.innerHTML=t,n}}function Q(t,e,n=t,r){var i,o,s,l;if(e===q)return e;let a=void 0!==r?null===(i=n._$Cl)||void 0===i?void 0:i[r]:n._$Cu;const c=M(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,n,r)),void 0!==r?(null!==(s=(l=n)._$Cl)&&void 0!==s?s:l._$Cl=[])[r]=a:n._$Cu=a),void 0!==a&&(e=Q(t,a._$AS(t,e.values),a,r)),e}class X{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:n},parts:r}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:U).importNode(n,!0);G.currentNode=i;let o=G.nextNode(),s=0,l=0,a=r[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new tt(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new st(o,this,t)),this.v.push(e),a=r[++l]}s!==(null==a?void 0:a.index)&&(o=G.nextNode(),s++)}return i}m(t){let e=0;for(const n of this.v)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class tt{constructor(t,e,n,r){var i;this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=r,this._$C_=null===(i=null==r?void 0:r.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),M(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==q&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>z(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==F&&M(this._$AH)?this._$AA.nextSibling.data=t:this.k(U.createTextNode(t)),this._$AH=t}T(t){var e;const{values:n,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=K.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.m(n);else{const t=new X(i,this),e=t.p(this.options);t.m(n),this.k(e),this._$AH=t}}_$AC(t){let e=Z.get(t.strings);return void 0===e&&Z.set(t.strings,e=new K(t)),e}O(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,r=0;for(const i of t)r===e.length?e.push(n=new tt(this.S(R()),this.S(R()),this,this.options)):n=e[r],n._$AI(i),r++;r<e.length&&(this._$AR(n&&n._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class et{constructor(t,e,n,r,i){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=F}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,r){const i=this.strings;let o=!1;if(void 0===i)t=Q(this,t,e,0),o=!M(t)||t!==this._$AH&&t!==q,o&&(this._$AH=t);else{const r=t;let s,l;for(t=i[0],s=0;s<i.length-1;s++)l=Q(this,r[n+s],e,s),l===q&&(l=this._$AH[s]),o||(o=!M(l)||l!==this._$AH[s]),l===F?t=F:t!==F&&(t+=(null!=l?l:"")+i[s+1]),this._$AH[s]=l}o&&!r&&this.P(t)}P(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class nt extends et{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===F?void 0:t}}const rt=k?k.emptyScript:"";class it extends et{constructor(){super(...arguments),this.type=4}P(t){t&&t!==F?this.element.setAttribute(this.name,rt):this.element.removeAttribute(this.name)}}class ot extends et{constructor(t,e,n,r,i){super(t,e,n,r,i),this.type=5}_$AI(t,e=this){var n;if((t=null!==(n=Q(this,t,e,0))&&void 0!==n?n:F)===q)return;const r=this._$AH,i=t===F&&r!==F||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==F&&(r===F||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const lt=P.litHtmlPolyfillSupport;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var at,ct;null==lt||lt(K,tt),(null!==(C=P.litHtmlVersions)&&void 0!==C?C:P.litHtmlVersions=[]).push("2.3.1");class ut extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const n=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=n.firstChild),n}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,n)=>{var r,i;const o=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:e;let s=o._$litPart$;if(void 0===s){const t=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:null;o._$litPart$=s=new tt(e.insertBefore(R(),t),t,void 0,null!=n?n:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return q}}ut.finalized=!0,ut._$litElement$=!0,null===(at=globalThis.litElementHydrateSupport)||void 0===at||at.call(globalThis,{LitElement:ut});const ht=globalThis.litElementPolyfillSupport;null==ht||ht({LitElement:ut}),(null!==(ct=globalThis.litElementVersions)&&void 0!==ct?ct:globalThis.litElementVersions=[]).push("3.2.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const dt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function pt(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):dt(t,e)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var ft;function vt(t){return"function"==typeof t}null===(ft=window.HTMLSlotElement)||void 0===ft||ft.prototype.assignedElements;var yt,_t,mt=(yt=function(t){return function(e){t(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e}},(_t=yt((function(t){Error.call(t),t.stack=(new Error).stack}))).prototype=Object.create(Error.prototype),_t.prototype.constructor=_t,_t);function bt(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var $t=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}var e;return t.prototype.unsubscribe=function(){var t,e,n,r,i;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var c=s(o),u=c.next();!u.done;u=c.next()){u.value.remove(this)}}catch(e){t={error:e}}finally{try{u&&!u.done&&(e=c.return)&&e.call(c)}finally{if(t)throw t.error}}else o.remove(this);var h=this.initialTeardown;if(vt(h))try{h()}catch(t){i=t instanceof mt?t.errors:[t]}var d=this._finalizers;if(d){this._finalizers=null;try{for(var p=s(d),f=p.next();!f.done;f=p.next()){var v=f.value;try{At(v)}catch(t){i=null!=i?i:[],t instanceof mt?i=a(a([],l(i)),l(t.errors)):i.push(t)}}}catch(t){n={error:t}}finally{try{f&&!f.done&&(r=p.return)&&r.call(p)}finally{if(n)throw n.error}}}if(i)throw new mt(i)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)At(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(e)}},t.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},t.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},t.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&bt(e,t)},t.prototype.remove=function(e){var n=this._finalizers;n&&bt(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=((e=new t).closed=!0,e),t}();function gt(t){return t instanceof $t||t&&"closed"in t&&vt(t.remove)&&vt(t.add)&&vt(t.unsubscribe)}function At(t){vt(t)?t():t.unsubscribe()}$t.EMPTY;var wt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},St=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return setTimeout.apply(void 0,a([t,e],l(n)))};function Et(t){St((function(){throw t}))}function xt(){}var Ct=function(t){function e(e){var n=t.call(this)||this;return n.isStopped=!1,e?(n.destination=e,gt(e)&&e.add(n)):n.destination=Ht,n}return n(e,t),e.create=function(t,e,n){return new Ot(t,e,n)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}($t),Pt=Function.prototype.bind;function kt(t,e){return Pt.call(t,e)}var Tt=function(){function t(t){this.partialObserver=t}return t.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(t){Nt(t)}},t.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(t){Nt(t)}else Nt(t)},t.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(t){Nt(t)}},t}(),Ot=function(t){function e(e,n,r){var i,o,s=t.call(this)||this;vt(e)||!e?i={next:null!=e?e:void 0,error:null!=n?n:void 0,complete:null!=r?r:void 0}:s&&wt.useDeprecatedNextContext?((o=Object.create(e)).unsubscribe=function(){return s.unsubscribe()},i={next:e.next&&kt(e.next,o),error:e.error&&kt(e.error,o),complete:e.complete&&kt(e.complete,o)}):i=e;return s.destination=new Tt(i),s}return n(e,t),e}(Ct);function Nt(t){Et(t)}var Ht={closed:!0,next:xt,error:function(t){throw t},complete:xt},Ut="function"==typeof Symbol&&Symbol.observable||"@@observable";function Rt(t){return t}function Mt(t){return 0===t.length?Rt:1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}}var zt=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(t,e,n){var r,i=this,o=(r=t)&&r instanceof Ct||function(t){return t&&vt(t.next)&&vt(t.error)&&vt(t.complete)}(r)&&gt(r)?t:new Ot(t,e,n);return function(){var t=i,e=t.operator,n=t.source;o.add(e?e.call(o,n):n?i._subscribe(o):i._trySubscribe(o))}(),o},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},t.prototype.forEach=function(t,e){var n=this;return new(e=Lt(e))((function(e,r){var i=new Ot({next:function(e){try{t(e)}catch(t){r(t),i.unsubscribe()}},error:r,complete:e});n.subscribe(i)}))},t.prototype._subscribe=function(t){var e;return null===(e=this.source)||void 0===e?void 0:e.subscribe(t)},t.prototype[Ut]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Mt(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=Lt(t))((function(t,n){var r;e.subscribe((function(t){return r=t}),(function(t){return n(t)}),(function(){return t(r)}))}))},t.create=function(e){return new t(e)},t}();function Lt(t){var e;return null!==(e=null!=t?t:wt.Promise)&&void 0!==e?e:Promise}function It(t){return function(e){if(function(t){return vt(null==t?void 0:t.lift)}(e))return e.lift((function(e){try{return t(e,this)}catch(t){this.error(t)}}));throw new TypeError("Unable to lift unknown Observable type")}}function jt(t,e,n,r,i){return new Dt(t,e,n,r,i)}var Dt=function(t){function e(e,n,r,i,o,s){var l=t.call(this,e)||this;return l.onFinalize=o,l.shouldUnsubscribe=s,l._next=n?function(t){try{n(t)}catch(t){e.error(t)}}:t.prototype._next,l._error=i?function(t){try{i(t)}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=r?function(){try{r()}catch(t){e.error(t)}finally{this.unsubscribe()}}:t.prototype._complete,l}return n(e,t),e.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;t.prototype.unsubscribe.call(this),!n&&(null===(e=this.onFinalize)||void 0===e||e.call(this))}},e}(Ct),Yt=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};var Bt="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function Wt(t){if(t instanceof zt)return t;if(null!=t){if(function(t){return vt(t[Ut])}(t))return l=t,new zt((function(t){var e=l[Ut]();if(vt(e.subscribe))return e.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(Yt(t))return i=t,new zt((function(t){for(var e=0;e<i.length&&!t.closed;e++)t.next(i[e]);t.complete()}));if(vt(null==(r=t)?void 0:r.then))return n=t,new zt((function(t){n.then((function(e){t.closed||(t.next(e),t.complete())}),(function(e){return t.error(e)})).then(null,Et)}));if(function(t){return Symbol.asyncIterator&&vt(null==t?void 0:t[Symbol.asyncIterator])}(t))return Vt(t);if(function(t){return vt(null==t?void 0:t[Bt])}(t))return e=t,new zt((function(t){var n,r;try{for(var i=s(e),o=i.next();!o.done;o=i.next()){var l=o.value;if(t.next(l),t.closed)return}}catch(t){n={error:t}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}t.complete()}));if(function(t){return vt(null==t?void 0:t.getReader)}(t))return Vt(function(t){return u(this,arguments,(function(){var e,n,r;return o(this,(function(i){switch(i.label){case 0:e=t.getReader(),i.label=1;case 1:i.trys.push([1,,9,10]),i.label=2;case 2:return[4,c(e.read())];case 3:return n=i.sent(),r=n.value,n.done?[4,c(void 0)]:[3,5];case 4:return[2,i.sent()];case 5:return[4,c(r)];case 6:return[4,i.sent()];case 7:return i.sent(),[3,2];case 8:return[3,10];case 9:return e.releaseLock(),[7];case 10:return[2]}}))}))}(t))}var e,n,r,i,l;throw function(t){return new TypeError("You provided "+(null!==t&&"object"==typeof t?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}(t)}function Vt(t){return new zt((function(e){(function(t,e){var n,r,s,l;return i(this,void 0,void 0,(function(){var i,a;return o(this,(function(o){switch(o.label){case 0:o.trys.push([0,5,6,11]),n=h(t),o.label=1;case 1:return[4,n.next()];case 2:if((r=o.sent()).done)return[3,4];if(i=r.value,e.next(i),e.closed)return[2];o.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=o.sent(),s={error:a},[3,11];case 6:return o.trys.push([6,,9,10]),r&&!r.done&&(l=n.return)?[4,l.call(n)]:[3,8];case 7:o.sent(),o.label=8;case 8:return[3,10];case 9:if(s)throw s.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}}))}))})(t,e).catch((function(t){return e.error(t)}))}))}function qt(t,e){return It((function(n,r){var i=0;n.subscribe(jt(r,(function(n){r.next(t.call(e,n,i++))})))}))}var Ft=Array.isArray;function Zt(t){return qt((function(e){return function(t,e){return Ft(e)?t.apply(void 0,a([],l(e))):t(e)}(t,e)}))}function Gt(t,e,n){return void 0===n&&(n=1/0),vt(e)?Gt((function(n,r){return qt((function(t,i){return e(n,t,r,i)}))(Wt(t(n,r)))}),n):("number"==typeof e&&(n=e),It((function(e,r){return function(t,e,n,r,i,o,s,l){var a=[],c=0,u=0,h=!1,d=function(){!h||a.length||c||e.complete()},p=function(t){return c<r?f(t):a.push(t)},f=function(t){o&&e.next(t),c++;var l=!1;Wt(n(t,u++)).subscribe(jt(e,(function(t){null==i||i(t),o?p(t):e.next(t)}),(function(){l=!0}),void 0,(function(){if(l)try{c--;for(var t=function(){var t=a.shift();s?function(t,e,n,r,i){void 0===r&&(r=0),void 0===i&&(i=!1);var o=e.schedule((function(){n(),i?t.add(this.schedule(null,r)):this.unsubscribe()}),r);t.add(o)}(e,s,(function(){return f(t)})):f(t)};a.length&&c<r;)t();d()}catch(t){e.error(t)}})))};return t.subscribe(jt(e,p,(function(){h=!0,d()}))),function(){null==l||l()}}(e,r,t,n)})))}var Jt=["addListener","removeListener"],Kt=["addEventListener","removeEventListener"],Qt=["on","off"];function Xt(t,e,n,r){if(vt(n)&&(r=n,n=void 0),r)return Xt(t,e,n).pipe(Zt(r));var i=l(function(t){return vt(t.addEventListener)&&vt(t.removeEventListener)}
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */(t)?Kt.map((function(r){return function(i){return t[r](e,i,n)}})):function(t){return vt(t.addListener)&&vt(t.removeListener)}(t)?Jt.map(te(t,e)):function(t){return vt(t.on)&&vt(t.off)}(t)?Qt.map(te(t,e)):[],2),o=i[0],s=i[1];if(!o&&Yt(t))return Gt((function(t){return Xt(t,e,n)}))(Wt(t));if(!o)throw new TypeError("Invalid event target");return new zt((function(t){var e=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.next(1<e.length?e:e[0])};return o(e),function(){return s(e)}}))}function te(t,e){return function(n){return function(r){return t[n](e,r)}}}const ee=2;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const ne=(t,e)=>{var n,r;const i=t._$AN;if(void 0===i)return!1;for(const t of i)null===(r=(n=t)._$AO)||void 0===r||r.call(n,e,!1),ne(t,e);return!0},re=t=>{let e,n;do{if(void 0===(e=t._$AM))break;n=e._$AN,n.delete(t),t=e}while(0===(null==n?void 0:n.size))},ie=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(void 0===n)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),le(e)}};function oe(t){void 0!==this._$AN?(re(this),this._$AM=t,ie(this)):this._$AM=t}function se(t,e=!1,n=0){const r=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(e)if(Array.isArray(r))for(let t=n;t<r.length;t++)ne(r[t],!1),re(r[t]);else null!=r&&(ne(r,!1),re(r));else ne(this,t)}const le=t=>{var e,n,r,i;t.type==ee&&(null!==(e=(r=t)._$AP)&&void 0!==e||(r._$AP=se),null!==(n=(i=t)._$AQ)&&void 0!==n||(i._$AQ=oe))};class ae{}const ce=new WeakMap,ue=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,n){super._$AT(t,e,n),ie(this),this.isConnected=t._$AU}_$AO(t,e=!0){var n,r;t!==this.isConnected&&(this.isConnected=t,t?null===(n=this.reconnected)||void 0===n||n.call(this):null===(r=this.disconnected)||void 0===r||r.call(this)),e&&(ne(this,t),re(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */{render(t){return F}update(t,[e]){var n;const r=e!==this.Y;return r&&void 0!==this.Y&&this.rt(void 0),(r||this.lt!==this.dt)&&(this.Y=e,this.ct=null===(n=t.options)||void 0===n?void 0:n.host,this.rt(this.dt=t.element)),F}rt(t){var e;if("function"==typeof this.Y){const n=null!==(e=this.ct)&&void 0!==e?e:globalThis;let r=ce.get(n);void 0===r&&(r=new WeakMap,ce.set(n,r)),void 0!==r.get(this.Y)&&this.Y.call(this.ct,void 0),r.set(this.Y,t),void 0!==t&&this.Y.call(this.ct,t)}else this.Y.value=t}get lt(){var t,e,n;return"function"==typeof this.Y?null===(e=ce.get(null!==(t=this.ct)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.Y):null===(n=this.Y)||void 0===n?void 0:n.value}disconnected(){this.lt===this.dt&&this.rt(void 0)}reconnected(){this.rt(this.dt)}});class he extends ut{constructor(){super()}firstUpdated(){var t;null===(t=this.renderRoot.querySelectorAll("slot"))||void 0===t||t.forEach((t=>{t.addEventListener("slotchange",(t=>this.dispatchEvent(new CustomEvent("cewc-slotchange",{bubbles:!0,composed:!0,detail:t.target.assignedElements({flatten:!0})}))))}))}updated(t){var e;super.update(t),null===(e=this.renderRoot.querySelectorAll("*"))||void 0===e||e.forEach((t=>{t.nodeName.toLowerCase().startsWith("cewc-")&&this.dispatchEvent(new CustomEvent("cewc-elementAdded",{bubbles:!0,composed:!0,detail:t}))}))}}var de=((t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,n,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[r+1]),t[0]);return new y(n,t,f)})`.acerta-loader,.acerta-loader:after{border-radius:50%;width:20px;height:20px}.acerta-loader{margin:1em;font-size:10px;position:relative;text-indent:-9999em;border-top:3px solid rgba(154,154,154,.4);border-right:3px solid rgba(154,154,154,.4);border-bottom:3px solid rgba(154,154,154,.4);border-left:3px solid #696969;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation:load8 1.1s infinite linear;animation:load8 1.1s infinite linear}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}`;class pe extends he{constructor(){super(),this.componentHref="",this.componentTag="",this.containerHeight="",this.initializeNew=!1,this.cookieName="CE_GATEWAY_SESSION_EXPIRES_AT",this.newComponentLoaded=!1,this.iframeRef=new ae,this.securityEnabledHref="/ff4j/api/ff4j/check/security",this.securityHref="/initialize/index.html"}update(t){if(super.update(t),this.initializeNew&&!document.getElementById(this.componentTag)){if(!this.cookieName)return console.log("Security disabled by application"),void this.createScriptTag();if(!this.securityEnabled())return console.log("Security disabled by ff4j"),void this.createScriptTag();console.log("Waiting for session cookie..."),this.checkForCookie(this.cookieName)}}securityEnabled(){var t=new XMLHttpRequest;return t.open("GET",this.securityEnabledHref),t.send(),JSON.parse(t.responseText)}checkForCookie(t){this.cookieValid(t)?(console.log("Valid cookie found"),this.createScriptTag()):setTimeout((()=>{this.checkForCookie(t)}),100)}cookieValid(t){var e,n,r;const i=null===(r=null===(n=null===(e=this.iframeRef.value)||void 0===e?void 0:e.contentDocument)||void 0===n?void 0:n.cookie)||void 0===r?void 0:r.match(new RegExp("(^| )"+t+"=([^;]+)"));if(!i)return!1;const o=new Date(i[2]);return new Date<=o}render(){return this.initializeNew?V`<iframe ${ue(this.iframeRef)} src="${this.securityHref}" style="display:none"></iframe><div style="height:${this.newComponentLoaded?0:this.containerHeight}"><div class="${this.newComponentLoaded?"":"acerta-loader"}"></div></div><slot @slotchange="${this.loadSlottedComponent}" name="new"></slot>`:V`<slot name="old"></slot>`}createScriptTag(){let t=document.createElement("script");t.id=this.componentTag,t.setAttribute("src",`${this.componentHref}`),document.head.appendChild(t)}loadSlottedComponent(){const t=this.renderRoot.querySelector('slot[name="new"]');(null==t?void 0:t.assignedElements()[0])&&Xt(t.assignedElements()[0],"load").subscribe((()=>{this.newComponentLoaded=!0}))}}pe.styles=[de],r([pt({attribute:"component-href"})],pe.prototype,"componentHref",void 0),r([pt({attribute:"component-tag"})],pe.prototype,"componentTag",void 0),r([pt({attribute:"container-height"})],pe.prototype,"containerHeight",void 0),r([pt({type:Boolean,attribute:"initialize-new"})],pe.prototype,"initializeNew",void 0),r([pt({attribute:"cookie-name"})],pe.prototype,"cookieName",void 0),r([function(t){return pt({...t,state:!0})}()],pe.prototype,"newComponentLoaded",void 0),customElements.get("cewc-replace-container")?console.warn("cewc-replace-container already defined"):customElements.define("cewc-replace-container",pe),t.CeWcReplaceContainer=pe,Object.defineProperty(t,"__esModule",{value:!0})}({});
