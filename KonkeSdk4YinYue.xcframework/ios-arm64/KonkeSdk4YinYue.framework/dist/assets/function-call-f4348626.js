import{h as B,E as v,A as I,z as T,b as l,m as O,e as z,u as M,q as N,H as L}from"./_plugin-vue_export-helper-d4615445.js";import{c as j,p as A,a as g,n as h,s as E,d as w,I as U,v as q,e as k,x as H,y as V}from"./index-30121d0b.js";import{u as D}from"./use-touch-8d4a1a12.js";import{P as _}from"./index-a33ecb6c.js";import{L as F}from"./index-95f836ad.js";let d=0;function G(e){e?(d||document.body.classList.add("van-toast--unclickable"),d++):d&&(d--,d||document.body.classList.remove("van-toast--unclickable"))}const[J,c]=j("toast"),K=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],Q={icon:String,show:Boolean,type:g("text"),overlay:Boolean,message:h,iconSize:h,duration:E(2e3),position:g("middle"),teleport:[String,Object],wordBreak:String,className:w,iconPrefix:String,transition:g("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:w,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var R=B({name:J,props:Q,emits:["update:show"],setup(e,{emit:n,slots:t}){let i,o=!1;const r=()=>{const s=e.show&&e.forbidClick;o!==s&&(o=s,G(o))},u=s=>n("update:show",s),y=()=>{e.closeOnClick&&u(!1)},f=()=>clearTimeout(i),m=()=>{const{icon:s,type:a,iconSize:C,iconPrefix:P,loadingType:x}=e;if(s||a==="success"||a==="fail")return l(U,{name:s||a,size:C,class:c("icon"),classPrefix:P},null);if(a==="loading")return l(F,{class:c("loading"),size:C,type:x},null)},S=()=>{const{type:s,message:a}=e;if(t.message)return l("div",{class:c("text")},[t.message()]);if(q(a)&&a!=="")return s==="html"?l("div",{key:0,class:c("text"),innerHTML:String(a)},null):l("div",{class:c("text")},[a])};return v(()=>[e.show,e.forbidClick],r),v(()=>[e.show,e.type,e.message,e.duration],()=>{f(),e.show&&e.duration>0&&(i=setTimeout(()=>{u(!1)},e.duration))}),I(r),T(r),()=>l(_,O({class:[c([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:y,onClosed:f,"onUpdate:show":u},A(e,K)),{default:()=>[m(),S()]})}});function W(){const e=M({show:!1}),n=o=>{e.show=o},t=o=>{k(e,o,{transitionAppear:!0}),n(!0)},i=()=>n(!1);return D({open:t,close:i,toggle:n}),{open:t,close:i,state:e,toggle:n}}function X(e){const n=z(e),t=document.createElement("div");return document.body.appendChild(t),{instance:n.mount(t),unmount(){n.unmount(),document.body.removeChild(t)}}}const Y={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let p=[],Z=!1,b=k({},Y);const $=new Map;function ee(e){return V(e)?e:{message:e}}function te(){const{instance:e,unmount:n}=X({setup(){const t=N(""),{open:i,state:o,close:r,toggle:u}=W(),y=()=>{},f=()=>l(R,O(o,{onClosed:y,"onUpdate:show":u}),null);return v(t,m=>{o.message=m}),L().render=f,{open:i,close:r,message:t}}});return e}function ne(){if(!p.length||Z){const e=te();p.push(e)}return p[p.length-1]}function re(e={}){if(!H)return{};const n=ne(),t=ee(e);return n.open(k({},b,$.get(t.type||b.type),t)),n}export{re as a,R as s};