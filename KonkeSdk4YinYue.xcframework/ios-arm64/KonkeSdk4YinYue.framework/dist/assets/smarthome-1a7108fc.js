import{q as te,E as le,h as Me,A as He,L as Ve,J as Ne,b,m as Ue,F as q,i as Be,_ as Fe,c as S,a as p,w as R,t as V,n as me,r as Q,j as T,k as K,o as g,Q as he,p as qe,d as We,e as Ye}from"./_plugin-vue_export-helper-d4615445.js";import{_ as Xe}from"./no-data-c118a311.js";import{c as ze,aa as Je,p as Qe,a as ce,m as Ke,n as Ge,t as Z,d as Ze,x as we,e as $e,I as Ee,r as et,w as tt}from"./index-30121d0b.js";import{T as ot,a as rt}from"./index-c628bad3.js";/* empty css              *//* empty css              */import{D as nt}from"./index-8e9572c8.js";import{C as st}from"./index-8e962ff0.js";import{e as it,P as at,K as ct,M as lt,R as ut,r as ge,s as _e,f as be,S as ft}from"./api-1cc81df9.js";import{g as dt}from"./dev-image-f6fc399c.js";import{d as pt}from"./dev-filter-432b904c.js";import{P as vt}from"./index-a33ecb6c.js";import{a as $}from"./function-call-f4348626.js";import"./index-8297fbc7.js";import"./use-id-9223d827.js";import"./use-touch-8d4a1a12.js";import"./use-route-39b32e27.js";import"./index-95f836ad.js";function P(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function de(e){var t=P(e).Element;return e instanceof t||e instanceof Element}function D(e){var t=P(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Re(e){if(typeof ShadowRoot>"u")return!1;var t=P(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var Y=Math.round;function ue(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function mt(){return!/^((?!chrome|android).)*safari/i.test(ue())}function re(e,t,o){t===void 0&&(t=!1),o===void 0&&(o=!1);var n=e.getBoundingClientRect(),r=1,s=1;t&&D(e)&&(r=e.offsetWidth>0&&Y(n.width)/e.offsetWidth||1,s=e.offsetHeight>0&&Y(n.height)/e.offsetHeight||1);var u=de(e)?P(e):window,i=u.visualViewport,a=!mt()&&o,f=(n.left+(a&&i?i.offsetLeft:0))/r,c=(n.top+(a&&i?i.offsetTop:0))/s,m=n.width/r,C=n.height/s;return{width:m,height:C,top:c,right:f+m,bottom:c+C,left:f,x:f,y:c}}function De(e){var t=P(e),o=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:o,scrollTop:n}}function ht(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function wt(e){return e===P(e)||!D(e)?De(e):ht(e)}function L(e){return e?(e.nodeName||"").toLowerCase():null}function ie(e){return((de(e)?e.ownerDocument:e.document)||window.document).documentElement}function gt(e){return re(ie(e)).left+De(e).scrollLeft}function A(e){return P(e).getComputedStyle(e)}function pe(e){var t=A(e),o=t.overflow,n=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function _t(e){var t=e.getBoundingClientRect(),o=Y(t.width)/e.offsetWidth||1,n=Y(t.height)/e.offsetHeight||1;return o!==1||n!==1}function bt(e,t,o){o===void 0&&(o=!1);var n=D(t),r=D(t)&&_t(t),s=ie(t),u=re(e,r,o),i={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(n||!n&&!o)&&((L(t)!=="body"||pe(s))&&(i=wt(t)),D(t)?(a=re(t,!0),a.x+=t.clientLeft,a.y+=t.clientTop):s&&(a.x=gt(s))),{x:u.left+i.scrollLeft-a.x,y:u.top+i.scrollTop-a.y,width:u.width,height:u.height}}function yt(e){var t=re(e),o=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:n}}function ve(e){return L(e)==="html"?e:e.assignedSlot||e.parentNode||(Re(e)?e.host:null)||ie(e)}function Pe(e){return["html","body","#document"].indexOf(L(e))>=0?e.ownerDocument.body:D(e)&&pe(e)?e:Pe(ve(e))}function oe(e,t){var o;t===void 0&&(t=[]);var n=Pe(e),r=n===((o=e.ownerDocument)==null?void 0:o.body),s=P(n),u=r?[s].concat(s.visualViewport||[],pe(n)?n:[]):n,i=t.concat(u);return r?i:i.concat(oe(ve(u)))}function kt(e){return["table","td","th"].indexOf(L(e))>=0}function ye(e){return!D(e)||A(e).position==="fixed"?null:e.offsetParent}function It(e){var t=/firefox/i.test(ue()),o=/Trident/i.test(ue());if(o&&D(e)){var n=A(e);if(n.position==="fixed")return null}var r=ve(e);for(Re(r)&&(r=r.host);D(r)&&["html","body"].indexOf(L(r))<0;){var s=A(r);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return r;r=r.parentNode}return null}function je(e){for(var t=P(e),o=ye(e);o&&kt(o)&&A(o).position==="static";)o=ye(o);return o&&(L(o)==="html"||L(o)==="body"&&A(o).position==="static")?t:o||It(e)||t}var W="top",ne="bottom",G="right",B="left",Le="auto",Ot=[W,ne,G,B],Ae="start",se="end",xt=[].concat(Ot,[Le]).reduce(function(e,t){return e.concat([t,t+"-"+Ae,t+"-"+se])},[]),St="beforeRead",Ct="read",Et="afterRead",Rt="beforeMain",Dt="main",Pt="afterMain",jt="beforeWrite",Lt="write",At="afterWrite",fe=[St,Ct,Et,Rt,Dt,Pt,jt,Lt,At];function Tt(e){var t=new Map,o=new Set,n=[];e.forEach(function(s){t.set(s.name,s)});function r(s){o.add(s.name);var u=[].concat(s.requires||[],s.requiresIfExists||[]);u.forEach(function(i){if(!o.has(i)){var a=t.get(i);a&&r(a)}}),n.push(s)}return e.forEach(function(s){o.has(s.name)||r(s)}),n}function Mt(e){var t=Tt(e);return fe.reduce(function(o,n){return o.concat(t.filter(function(r){return r.phase===n}))},[])}function Ht(e){var t;return function(){return t||(t=new Promise(function(o){Promise.resolve().then(function(){t=void 0,o(e())})})),t}}function M(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];return[].concat(o).reduce(function(r,s){return r.replace(/%s/,s)},e)}var N='Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',Vt='Popper: modifier "%s" requires "%s", but "%s" modifier is not available',ke=["name","enabled","phase","fn","effect","requires","options"];function Nt(e){e.forEach(function(t){[].concat(Object.keys(t),ke).filter(function(o,n,r){return r.indexOf(o)===n}).forEach(function(o){switch(o){case"name":typeof t.name!="string"&&console.error(M(N,String(t.name),'"name"','"string"','"'+String(t.name)+'"'));break;case"enabled":typeof t.enabled!="boolean"&&console.error(M(N,t.name,'"enabled"','"boolean"','"'+String(t.enabled)+'"'));break;case"phase":fe.indexOf(t.phase)<0&&console.error(M(N,t.name,'"phase"',"either "+fe.join(", "),'"'+String(t.phase)+'"'));break;case"fn":typeof t.fn!="function"&&console.error(M(N,t.name,'"fn"','"function"','"'+String(t.fn)+'"'));break;case"effect":t.effect!=null&&typeof t.effect!="function"&&console.error(M(N,t.name,'"effect"','"function"','"'+String(t.fn)+'"'));break;case"requires":t.requires!=null&&!Array.isArray(t.requires)&&console.error(M(N,t.name,'"requires"','"array"','"'+String(t.requires)+'"'));break;case"requiresIfExists":Array.isArray(t.requiresIfExists)||console.error(M(N,t.name,'"requiresIfExists"','"array"','"'+String(t.requiresIfExists)+'"'));break;case"options":case"data":break;default:console.error('PopperJS: an invalid property has been provided to the "'+t.name+'" modifier, valid properties are '+ke.map(function(n){return'"'+n+'"'}).join(", ")+'; but "'+o+'" was provided.')}t.requires&&t.requires.forEach(function(n){e.find(function(r){return r.name===n})==null&&console.error(M(Vt,String(t.name),n,n))})})})}function Ut(e,t){var o=new Set;return e.filter(function(n){var r=t(n);if(!o.has(r))return o.add(r),!0})}function ae(e){return e.split("-")[0]}function Bt(e){var t=e.reduce(function(o,n){var r=o[n.name];return o[n.name]=r?Object.assign({},r,n,{options:Object.assign({},r.options,n.options),data:Object.assign({},r.data,n.data)}):n,o},{});return Object.keys(t).map(function(o){return t[o]})}function Te(e){return e.split("-")[1]}function Ft(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function qt(e){var t=e.reference,o=e.element,n=e.placement,r=n?ae(n):null,s=n?Te(n):null,u=t.x+t.width/2-o.width/2,i=t.y+t.height/2-o.height/2,a;switch(r){case W:a={x:u,y:t.y-o.height};break;case ne:a={x:u,y:t.y+t.height};break;case G:a={x:t.x+t.width,y:i};break;case B:a={x:t.x-o.width,y:i};break;default:a={x:t.x,y:t.y}}var f=r?Ft(r):null;if(f!=null){var c=f==="y"?"height":"width";switch(s){case Ae:a[f]=a[f]-(t[c]/2-o[c]/2);break;case se:a[f]=a[f]+(t[c]/2-o[c]/2);break}}return a}var Ie="Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",Wt="Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",Oe={placement:"bottom",modifiers:[],strategy:"absolute"};function xe(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Yt(e){e===void 0&&(e={});var t=e,o=t.defaultModifiers,n=o===void 0?[]:o,r=t.defaultOptions,s=r===void 0?Oe:r;return function(i,a,f){f===void 0&&(f=s);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Oe,s),modifiersData:{},elements:{reference:i,popper:a},attributes:{},styles:{}},m=[],C=!1,l={state:c,setOptions:function(I){var d=typeof I=="function"?I(c.options):I;h(),c.options=Object.assign({},s,c.options,d),c.scrollParents={reference:de(i)?oe(i):i.contextElement?oe(i.contextElement):[],popper:oe(a)};var w=Mt(Bt([].concat(n,c.options.modifiers)));c.orderedModifiers=w.filter(function(E){return E.enabled});{var O=Ut([].concat(w,c.options.modifiers),function(E){var F=E.name;return F});if(Nt(O),ae(c.options.placement)===Le){var y=c.orderedModifiers.find(function(E){var F=E.name;return F==="flip"});y||console.error(['Popper: "auto" placements require the "flip" modifier be',"present and enabled to work."].join(" "))}var v=A(a),j=v.marginTop,H=v.marginRight,X=v.marginBottom,z=v.marginLeft;[j,H,X,z].some(function(E){return parseFloat(E)})&&console.warn(['Popper: CSS "margin" styles cannot be used to apply padding',"between the popper and its reference element or boundary.","To replicate margin, use the `offset` modifier, as well as","the `padding` option in the `preventOverflow` and `flip`","modifiers."].join(" "))}return k(),l.update()},forceUpdate:function(){if(!C){var I=c.elements,d=I.reference,w=I.popper;if(!xe(d,w)){console.error(Ie);return}c.rects={reference:bt(d,je(w),c.options.strategy==="fixed"),popper:yt(w)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(E){return c.modifiersData[E.name]=Object.assign({},E.data)});for(var O=0,y=0;y<c.orderedModifiers.length;y++){if(O+=1,O>100){console.error(Wt);break}if(c.reset===!0){c.reset=!1,y=-1;continue}var v=c.orderedModifiers[y],j=v.fn,H=v.options,X=H===void 0?{}:H,z=v.name;typeof j=="function"&&(c=j({state:c,options:X,name:z,instance:l})||c)}}},update:Ht(function(){return new Promise(function(_){l.forceUpdate(),_(c)})}),destroy:function(){h(),C=!0}};if(!xe(i,a))return console.error(Ie),l;l.setOptions(f).then(function(_){!C&&f.onFirstUpdate&&f.onFirstUpdate(_)});function k(){c.orderedModifiers.forEach(function(_){var I=_.name,d=_.options,w=d===void 0?{}:d,O=_.effect;if(typeof O=="function"){var y=O({state:c,name:I,instance:l,options:w}),v=function(){};m.push(y||v)}})}function h(){m.forEach(function(_){return _()}),m=[]}return l}}var ee={passive:!0};function Xt(e){var t=e.state,o=e.instance,n=e.options,r=n.scroll,s=r===void 0?!0:r,u=n.resize,i=u===void 0?!0:u,a=P(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&f.forEach(function(c){c.addEventListener("scroll",o.update,ee)}),i&&a.addEventListener("resize",o.update,ee),function(){s&&f.forEach(function(c){c.removeEventListener("scroll",o.update,ee)}),i&&a.removeEventListener("resize",o.update,ee)}}var zt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Xt,data:{}};function Jt(e){var t=e.state,o=e.name;t.modifiersData[o]=qt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Qt={name:"popperOffsets",enabled:!0,phase:"read",fn:Jt,data:{}},Kt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Gt(e){var t=e.x,o=e.y,n=window,r=n.devicePixelRatio||1;return{x:Y(t*r)/r||0,y:Y(o*r)/r||0}}function Se(e){var t,o=e.popper,n=e.popperRect,r=e.placement,s=e.variation,u=e.offsets,i=e.position,a=e.gpuAcceleration,f=e.adaptive,c=e.roundOffsets,m=e.isFixed,C=u.x,l=C===void 0?0:C,k=u.y,h=k===void 0?0:k,_=typeof c=="function"?c({x:l,y:h}):{x:l,y:h};l=_.x,h=_.y;var I=u.hasOwnProperty("x"),d=u.hasOwnProperty("y"),w=B,O=W,y=window;if(f){var v=je(o),j="clientHeight",H="clientWidth";if(v===P(o)&&(v=ie(o),A(v).position!=="static"&&i==="absolute"&&(j="scrollHeight",H="scrollWidth")),v=v,r===W||(r===B||r===G)&&s===se){O=ne;var X=m&&v===y&&y.visualViewport?y.visualViewport.height:v[j];h-=X-n.height,h*=a?1:-1}if(r===B||(r===W||r===ne)&&s===se){w=G;var z=m&&v===y&&y.visualViewport?y.visualViewport.width:v[H];l-=z-n.width,l*=a?1:-1}}var E=Object.assign({position:i},f&&Kt),F=c===!0?Gt({x:l,y:h}):{x:l,y:h};if(l=F.x,h=F.y,a){var J;return Object.assign({},E,(J={},J[O]=d?"0":"",J[w]=I?"0":"",J.transform=(y.devicePixelRatio||1)<=1?"translate("+l+"px, "+h+"px)":"translate3d("+l+"px, "+h+"px, 0)",J))}return Object.assign({},E,(t={},t[O]=d?h+"px":"",t[w]=I?l+"px":"",t.transform="",t))}function Zt(e){var t=e.state,o=e.options,n=o.gpuAcceleration,r=n===void 0?!0:n,s=o.adaptive,u=s===void 0?!0:s,i=o.roundOffsets,a=i===void 0?!0:i;{var f=A(t.elements.popper).transitionProperty||"";u&&["transform","top","right","bottom","left"].some(function(m){return f.indexOf(m)>=0})&&console.warn(["Popper: Detected CSS transitions on at least one of the following",'CSS properties: "transform", "top", "right", "bottom", "left".',`

`,'Disable the "computeStyles" modifier\'s `adaptive` option to allow',"for smooth transitions, or remove these properties from the CSS","transition declaration on the popper element if only transitioning","opacity or background-color for example.",`

`,"We recommend using the popper element as a wrapper around an inner","element that can have any CSS property transitioned for animations."].join(" "))}var c={placement:ae(t.placement),variation:Te(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Se(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:u,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Se(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var $t={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Zt,data:{}};function eo(e){var t=e.state;Object.keys(t.elements).forEach(function(o){var n=t.styles[o]||{},r=t.attributes[o]||{},s=t.elements[o];!D(s)||!L(s)||(Object.assign(s.style,n),Object.keys(r).forEach(function(u){var i=r[u];i===!1?s.removeAttribute(u):s.setAttribute(u,i===!0?"":i)}))})}function to(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach(function(n){var r=t.elements[n],s=t.attributes[n]||{},u=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:o[n]),i=u.reduce(function(a,f){return a[f]="",a},{});!D(r)||!L(r)||(Object.assign(r.style,i),Object.keys(s).forEach(function(a){r.removeAttribute(a)}))})}}var oo={name:"applyStyles",enabled:!0,phase:"write",fn:eo,effect:to,requires:["computeStyles"]},ro=[zt,Qt,$t,oo],no=Yt({defaultModifiers:ro});function so(e,t,o){var n=ae(e),r=[B,W].indexOf(n)>=0?-1:1,s=typeof o=="function"?o(Object.assign({},t,{placement:e})):o,u=s[0],i=s[1];return u=u||0,i=(i||0)*r,[B,G].indexOf(n)>=0?{x:i,y:u}:{x:u,y:i}}function io(e){var t=e.state,o=e.options,n=e.name,r=o.offset,s=r===void 0?[0,0]:r,u=xt.reduce(function(c,m){return c[m]=so(m,t.rects,s),c},{}),i=u[t.placement],a=i.x,f=i.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=a,t.modifiersData.popperOffsets.y+=f),t.modifiersData[n]=u}var ao={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:io};const co=(e,t)=>{const o=te(e());return le(e,n=>{n!==o.value&&(o.value=n)}),le(o,n=>{n!==e()&&t(n)}),o},[lo,U]=ze("popover"),uo=["overlay","duration","teleport","overlayStyle","overlayClass","closeOnClickOverlay"],fo={show:Boolean,theme:ce("light"),overlay:Boolean,actions:Ke(),trigger:ce("click"),duration:Ge,showArrow:Z,placement:ce("bottom"),iconPrefix:String,overlayClass:Ze,overlayStyle:Object,closeOnClickAction:Z,closeOnClickOverlay:Z,closeOnClickOutside:Z,offset:{type:Array,default:()=>[0,8]},teleport:{type:[String,Object],default:"body"}};var po=Me({name:lo,props:fo,emits:["select","touchstart","update:show"],setup(e,{emit:t,slots:o,attrs:n}){let r;const s=te(),u=te(),i=te(),a=co(()=>e.show,d=>t("update:show",d)),f=()=>({placement:e.placement,modifiers:[{name:"computeStyles",options:{adaptive:!1,gpuAcceleration:!1}},$e({},ao,{options:{offset:e.offset}})]}),c=()=>u.value&&i.value?no(u.value,i.value.popupRef.value,f()):null,m=()=>{Be(()=>{a.value&&(r?r.setOptions(f()):(r=c(),we&&(window.addEventListener("animationend",m),window.addEventListener("transitionend",m))))})},C=d=>{a.value=d},l=()=>{e.trigger==="click"&&(a.value=!a.value)},k=(d,w)=>{d.disabled||(t("select",d,w),e.closeOnClickAction&&(a.value=!1))},h=()=>{a.value&&e.closeOnClickOutside&&(!e.overlay||e.closeOnClickOverlay)&&(a.value=!1)},_=(d,w)=>o.action?o.action({action:d,index:w}):[d.icon&&b(Ee,{name:d.icon,classPrefix:e.iconPrefix,class:U("action-icon")},null),b("div",{class:[U("action-text"),et]},[d.text])],I=(d,w)=>{const{icon:O,color:y,disabled:v,className:j}=d;return b("div",{role:"menuitem",class:[U("action",{disabled:v,"with-icon":O}),j],style:{color:y},tabindex:v?void 0:0,"aria-disabled":v||void 0,onClick:()=>k(d,w)},[_(d,w)])};return He(()=>{m(),Ve(()=>{var d;s.value=(d=i.value)==null?void 0:d.popupRef.value})}),Ne(()=>{r&&(we&&(window.removeEventListener("animationend",m),window.removeEventListener("transitionend",m)),r.destroy(),r=null)}),le(()=>[a.value,e.offset,e.placement],m),Je([u,s],h,{eventName:"touchstart"}),()=>{var d;return b(q,null,[b("span",{ref:u,class:U("wrapper"),onClick:l},[(d=o.reference)==null?void 0:d.call(o)]),b(vt,Ue({ref:i,show:a.value,class:U([e.theme]),position:"",transition:"van-popover-zoom",lockScroll:!1,"onUpdate:show":C},n,Qe(e,uo)),{default:()=>[e.showArrow&&b("div",{class:U("arrow")},null),b("div",{role:"menu",class:U("content")},[o.default?o.default():e.actions.map(I)])]})])}}});const vo=tt(po);const Ce=""+new URL("scene_bg-6485ea98.svg",import.meta.url).href,mo=""+new URL("top_bg-b83b92cb.png",import.meta.url).href,ho=""+new URL("exit_icon-871427f4.svg",import.meta.url).href,wo=""+new URL("home_manage-881fbf95.svg",import.meta.url).href,go=""+new URL("arrow_down_icon-a2e4166b.svg",import.meta.url).href,_o=""+new URL("add_icon-21768443.svg",import.meta.url).href,bo=""+new URL("room_manage-b8970ce3.svg",import.meta.url).href,yo=""+new URL("common_dev_manage-7e500c7c.svg",import.meta.url).href,ko=""+new URL("rooms_menu-b81bf4f3.svg",import.meta.url).href,Io=""+new URL("dev_on_icon-868cb19c.svg",import.meta.url).href,Oo=""+new URL("dev_off_icon-c69339d2.svg",import.meta.url).href;const xo={name:"KonkeSdk4YinYueSrcApp",data(){return{sharedHomes:[],homes:[],rooms:[],devices:[],scenes:[],currentHome:{},activeRoomIndex:0,tempMean:30,humiMean:65,getDevImage:dt,roomsPopoverVisible:!1,homePopoverVisible:!1,plusPopoverVisible:!1,SceneBgImage:Ce}},mounted(){this.getHomes(),this.getMeanEnv(),window.__eventBus.on("home-changed",()=>{this.getHomes()}),window.__eventBus.on("deviceEvent",e=>{for(const t of this.devices){if(t.userDeviceId==e.userDeviceId){t.cache.extension=e.extension;break}e.cateType=="Sensor"&&this.getMeanEnv()}}),window.__eventBus.on("reload",()=>{this.getHomes()})},computed:{sceneItemStyle(){return{background:`url(${Ce}) no-repeat center`}}},methods:{async toggleDevOnOff(e){var n,r;const o=((r=(n=e.cache)==null?void 0:n.extension)==null?void 0:r.turnOnOff)==!0?"TurnOff":"TurnOn";try{await it(e.userDeviceId,o)}catch{$("执行失败")}},async executeScene(e){try{await at({sceneId:e.sceneId}),$("执行成功")}catch(t){console.log(t),$("执行失败")}},changeHome(e){this.currentHome=e,this.homePopoverVisible=!1,window.__homeId=e.homeId,window.__jsb.setUserDefaults({key:"homeId",value:e.homeId}),localStorage.setItem("homeId",e.homeId),this.getRooms(),this.getScenes()},toHomeManage(){window.__jsb.push({route:"home-manage"}),this.homePopoverVisible=!1},async getHomes(){try{const{data:e}=await ct(),{homeUserList:t,homeList:o}=e;this.sharedHomes=t.map(i=>i.home),this.homes=o;const n=this.sharedHomes.map(i=>i.homeId+""),r=this.homes.map(i=>i.homeId+""),s=[...n,...r],u=localStorage.getItem("homeId")||"";if(s.includes(u+"")?window.__homeId=u:s.length>0?(window.__homeId=s[0],localStorage.setItem("homeId",s[0])):(delete window.__homeId,localStorage.removeItem("homeId"),this.currentHome={}),s.length==0||!window.__homeId)return;n.includes(window.__homeId)?this.currentHome=this.sharedHomes.find(i=>i.homeId==window.__homeId):r.includes(window.__homeId)?this.currentHome=this.homes.find(i=>i.homeId==window.__homeId):this.currentHome={}}catch(e){console.log(e)}finally{this.getRooms(),this.getScenes()}},toRoomsList(){window.__jsb.push({route:"roomlist"}),this.roomsPopoverVisible=!1},toFrequentDevices(){window.__jsb.push({route:"frequent-devices"}),this.roomsPopoverVisible=!1},showUserProfile(){window.__jsb.push({route:"user"}),this.plusPopoverVisible=!1},showAllScenes(){window.__jsb.push({route:"scenelist"})},addDevice(){window.__jsb.push({route:"devaddlist"}),this.plusPopoverVisible=!1},async scanQR(){this.plusPopoverVisible=!1;const{value:e}=await window.__jsb.scanQR();try{e.index("KONKE-CCU")!=-1?await lt({qrCode:e}):await ut({shareCode:e}),await this.getHomes()}catch(t){$(t.info||"二维码错误")}},exit(){window.__jsb.pop()},async getRooms(){if(!window.__homeId){this.rooms=[],this.devices=[];return}try{const{data:e}=await ge()||[],t={roomName:"全屋设备"};this.rooms=[t,...e.roomList],this.activeRoomIndex=0,this.onSelectRoom({name:0})}catch(e){console.log(e)}},async getScenes(){if(!window.__homeId){this.scenes=[];return}try{const{data:e}=await _e();this.scenes=e.sceneList||[]}catch(e){console.log(e)}},async onSelectRoom({name:e}){try{this.devices=[];const{roomId:t}=this.rooms[e],{data:o}=await be({roomId:t}),{userDeviceList:n}=o;n==null||n.forEach(r=>{var s;r.icon=this.getDevImage((s=r.device)==null?void 0:s.cateType)}),this.devices=pt(n||[])}catch(t){console.log(t)}},clickDev(e){switch(e.device.cateType){case"Host":window.__jsb.push({route:"hostinfo",params:{devId:e.userDeviceId}});break;case"Curtains":case"CurtainsMotor":window.__jsb.push({route:"dev-cur",params:{devId:e.userDeviceId}});break;case"FloorHeating":window.__jsb.push({route:"dev-floorheat",params:{devId:e.userDeviceId}});break;case"Light":window.__jsb.push({route:"dev-light",params:{devId:e.userDeviceId}});break;case"Infrared":e.master?window.__jsb.push({route:"dev-infrared-manager",params:{devId:e.userDeviceId}}):JSON.parse(e.userExtension).rcType=="AC"?window.__jsb.push({route:"dev-infrared-ac",params:{devId:e.userDeviceId}}):JSON.parse(e.userExtension).rcType=="TV"?window.__jsb.push({route:"dev-infrared-tv",params:{devId:e.userDeviceId}}):JSON.parse(e.userExtension).rcType=="FAN"&&window.__jsb.push({route:"dev-infrared-fan",params:{devId:e.userDeviceId}});break;case"AirFresher":window.__jsb.push({route:"dev-freshair",params:{devId:e.userDeviceId}});break;case"Sensor":window.__jsb.push({route:"dev-air-monitor",params:{devId:e.userDeviceId}});break;case"AirCondition":window.__jsb.push({route:"dev-ac",params:{devId:e.userDeviceId}});break}},async getMeanEnv(){var r,s,u,i;var e={cateType:"Sensor",pageSize:100};const{data:t}=await ft(e);console.log(t);var o=0,n=0;((r=t==null?void 0:t.pagePojo)==null?void 0:r.dataTotal)>0&&((s=t==null?void 0:t.pagePojo)==null||s.list.forEach(a=>{var f,c;o+=(f=a.cacheStatus)==null?void 0:f.temperature,n+=(c=a.cacheStatus)==null?void 0:c.humidity})),console.log(o),console.log(n),o!=0&&(this.tempMean=o/((u=t==null?void 0:t.pagePojo)==null?void 0:u.dataTotal)),n!=0&&(this.humiMean=n/((i=t==null?void 0:t.pagePojo)==null?void 0:i.dataTotal))}},toRoomsList(){window.__jsb.push({route:"roomlist"})},toFrequentManage(){window.__jsb.push({route:"frequent-manage"}),this.roomsPopoverVisible=!1},showUserProfile(){window.__jsb.push({route:"user"}),this.homePopoverVisible=!1},showAllScenes(){window.__jsb.push({route:"scenelist"})},addDevice(){window.__jsb.push({route:"devaddlist"}),this.plusPopoverVisible=!1},scanQR(){this.plusPopoverVisible=!1},exit(){window.__jsb.pop()},async getRooms(){try{const{data:e}=await ge()||[],t={roomName:"全屋设备"};this.rooms=[t,...e.roomList],this.activeRoomIndex=0,this.onSelectRoom({name:0})}catch(e){console.log(e)}},async getScenes(){try{const{data:e}=await _e();this.scenes=e.sceneList||[],console.log(e,"scenes")}catch(e){console.log(e)}},async onSelectRoom({name:e}){try{this.devices=[];const{roomId:t}=this.rooms[e],{data:o}=await be({roomId:t}),{userDeviceList:n}=o;n==null||n.forEach(r=>{var s;r.icon=this.getDevImage((s=r.device)==null?void 0:s.cateType)}),this.devices=n||[]}catch(t){console.log(t)}},clickDev(e){switch(e.device.cateType){case"Host":window.__jsb.push({route:"hostinfo",params:{devId:e.userDeviceId}});break;case"Curtains":case"CurtainsMotor":window.__jsb.push({route:"dev-cur",params:{devId:e.userDeviceId}});break;case"FloorHeating":window.__jsb.push({route:"dev-floorheat",params:{devId:e.userDeviceId}});break;case"Light":window.__jsb.push({route:"dev-light",params:{devId:e.userDeviceId}});break;case"Infrared":case"AirFresher":window.__jsb.push({route:"dev-freshair",params:{devId:e.userDeviceId}});break;case"Sensor":break;case"AirCondition":window.__jsb.push({route:"dev-ac",params:{devId:e.userDeviceId}});break}}},x=e=>(qe("data-v-b62f1028"),e=e(),We(),e),So={class:"home"},Co=x(()=>p("div",{class:"home-bg"},null,-1)),Eo=x(()=>p("img",{src:mo,class:"top-bg"},null,-1)),Ro={class:"header"},Do={class:"rooms-popup-menu"},Po={class:"home-cell-title"},jo=x(()=>p("div",{class:"home-share-label"},"共享",-1)),Lo=x(()=>p("img",{src:wo,style:{"margin-right":"10px"}},null,-1)),Ao={class:"title"},To=x(()=>p("img",{src:go},null,-1)),Mo=x(()=>p("div",{style:{flex:"1"}},null,-1)),Ho={class:"rooms-popup-menu",style:{width:"148px"}},Vo=x(()=>p("img",{src:_o,alt:""},null,-1)),No={class:"env-row"},Uo=x(()=>p("div",{class:"env-label"},"温度",-1)),Bo={class:"env-value"},Fo=x(()=>p("div",{class:"env-label"},"湿度",-1)),qo={class:"env-value"},Wo={key:0,class:"scenes-list"},Yo=["onClick"],Xo=x(()=>p("div",{class:"empty-scene-title"},"场景管理",-1)),zo=x(()=>p("div",{class:"empty-scene-subtitle"},"自动场景，手动场景",-1)),Jo=[Xo,zo],Qo={class:"tabs-container"},Ko={class:"rooms-popup-menu"},Go=x(()=>p("img",{src:bo,style:{"margin-right":"10px"}},null,-1)),Zo=x(()=>p("img",{src:yo,style:{"margin-right":"10px"}},null,-1)),$o=x(()=>p("div",{class:"rooms-menu-btn"},[p("img",{src:ko})],-1)),er={key:2,class:"devices-grid"},tr=["onClick"],or=["src"],rr=x(()=>p("div",{class:"spacer"},null,-1)),nr={class:"device-name"},sr={class:"room-name"},ir={class:"dev-top-right-icon"},ar=["onClick"],cr=["onClick"];function lr(e,t,o,n,r,s){const u=Ee,i=st,a=nt,f=vo,c=rt,m=ot,C=Xe;return g(),S("div",So,[Co,Eo,p("div",Ro,[p("img",{src:ho,onClick:t[0]||(t[0]=(...l)=>s.exit&&s.exit(...l))}),b(f,{show:r.homePopoverVisible,"onUpdate:show":t[1]||(t[1]=l=>r.homePopoverVisible=l),overlay:"",placement:"bottom-start","show-arrow":!1},{reference:R(()=>[p("span",Ao,V(r.currentHome.homeName),1),To]),default:R(()=>[p("div",Do,[(g(!0),S(q,null,Q(r.sharedHomes,(l,k)=>(g(),T(i,{key:k,clickable:"",border:!1,onClick:h=>s.changeHome(l)},{title:R(()=>[p("div",Po,[p("div",null,V(l.homeName),1),jo])]),"right-icon":R(()=>[r.currentHome.homeId==l.homeId?(g(),T(u,{key:0,name:"success",color:"#FD7D28FF"})):K("",!0)]),_:2},1032,["onClick"]))),128)),(g(!0),S(q,null,Q(r.homes,(l,k)=>(g(),T(i,{key:k,title:l.homeName,clickable:"",border:!1,onClick:h=>s.changeHome(l)},{"right-icon":R(()=>[r.currentHome.homeId==l.homeId?(g(),T(u,{key:0,name:"success",color:"#FD7D28FF"})):K("",!0)]),_:2},1032,["title","onClick"]))),128)),b(a,{style:{margin:"10px 16px"}}),b(i,{title:"家庭管理",clickable:"",border:!1,onClick:s.toHomeManage},{icon:R(()=>[Lo]),_:1},8,["onClick"])])]),_:1},8,["show"]),Mo,b(f,{show:r.plusPopoverVisible,"onUpdate:show":t[2]||(t[2]=l=>r.plusPopoverVisible=l),overlay:"",placement:"bottom-end","show-arrow":!1,offset:[-10,10]},{reference:R(()=>[Vo]),default:R(()=>[p("div",Ho,[b(i,{title:"扫一扫",clickable:"",border:!1,onClick:s.scanQR},null,8,["onClick"]),b(i,{title:"添加设备",clickable:"",border:!1,onClick:s.addDevice},null,8,["onClick"]),b(a,{style:{margin:"10px 16px"}}),b(i,{title:"我的",clickable:"",border:!1,onClick:s.showUserProfile,icon:"contact"},null,8,["onClick"])])]),_:1},8,["show"])]),p("div",No,[Uo,p("div",Bo,V(r.tempMean)+"℃",1),Fo,p("div",qo,V(r.humiMean)+"%",1)]),r.scenes.length>0?(g(),S("div",Wo,[p("div",{class:"scene-item",style:me(s.sceneItemStyle),onClick:t[3]||(t[3]=(...l)=>s.showAllScenes&&s.showAllScenes(...l))},"全部场景",4),(g(!0),S(q,null,Q(r.scenes,(l,k)=>(g(),S("div",{key:k,class:"scene-item",style:me(s.sceneItemStyle),onClick:h=>s.executeScene(l)},V(l.sceneName),13,Yo))),128))])):(g(),S("div",{key:1,class:"empty-scene",onClick:t[4]||(t[4]=(...l)=>s.showAllScenes&&s.showAllScenes(...l))},Jo)),p("div",Qo,[r.rooms.length>0?(g(),T(m,{key:0,active:r.activeRoomIndex,"onUpdate:active":t[5]||(t[5]=l=>r.activeRoomIndex=l),scrollspy:"",sticky:"",shrink:"",background:"transparent",color:"#FD7D28","title-active-color":"#FD7D28","title-inactive-color":"#666",onClickTab:s.onSelectRoom},{default:R(()=>[(g(!0),S(q,null,Q(r.rooms,(l,k)=>(g(),T(c,{key:k,title:l.roomName},null,8,["title"]))),128))]),_:1},8,["active","onClickTab"])):K("",!0),b(f,{show:r.roomsPopoverVisible,"onUpdate:show":t[6]||(t[6]=l=>r.roomsPopoverVisible=l),overlay:"",placement:"bottom-end","show-arrow":!1,offset:[-20,10]},{reference:R(()=>[$o]),default:R(()=>[p("div",Ko,[b(i,{title:"我的房间",clickable:"",border:!1,onClick:s.toRoomsList},{icon:R(()=>[Go]),_:1},8,["onClick"]),b(i,{title:"常用设备",clickable:"",border:!1,onClick:s.toFrequentDevices},{icon:R(()=>[Zo]),_:1},8,["onClick"])])]),_:1},8,["show"])]),r.devices.length>0?(g(),S("div",er,[(g(!0),S(q,null,Q(r.devices,(l,k)=>{var h,_,I,d,w;return g(),S("div",{key:k,class:"device-item",onClick:O=>s.clickDev(l)},[((h=l.icon)==null?void 0:h.length)>0?(g(),S("img",{key:0,src:l.icon,class:"device-icon"},null,8,or)):(g(),T(u,{key:1,name:"question-o",size:"40",color:"#ccc"})),rr,p("div",nr,V(l.deviceName),1),p("div",sr,V(l.roomName),1),p("div",ir,[((I=(_=l.cache)==null?void 0:_.extension)==null?void 0:I.turnOnOff)==!0?(g(),S("img",{key:0,src:Io,onClick:he(O=>s.toggleDevOnOff(l),["stop"])},null,8,ar)):K("",!0),((w=(d=l.cache)==null?void 0:d.extension)==null?void 0:w.turnOnOff)==!1?(g(),S("img",{key:1,src:Oo,onClick:he(O=>s.toggleDevOnOff(l),["stop"])},null,8,cr)):K("",!0)])],8,tr)}),128))])):(g(),T(C,{key:3}))])}const ur=Fe(xo,[["render",lr],["__scopeId","data-v-b62f1028"]]);Ye(ur).mount("#root");
