import{G as B,z as V,m as T,k as C,j as _,b as u,T as D,h as L,v as R,l as q,x as J,E as W,J as X,M as Q,F as ee,q as oe,s as ne}from"./_plugin-vue_export-helper-051f66a3.js";import{n as P,t as y,v as N,X as te,Y as ae,p,c as $,R as G,e as K,G as se,i as M,w as j,l as z,Z as le,_ as ce,H as re,I as ie}from"./index-9d551784.js";import{u as ue}from"./use-expose-1ff20361.js";import{u as de,c as fe}from"./use-touch-8855ff1b.js";const ve={show:Boolean,zIndex:P,overlay:y,duration:P,teleport:[String,Object],lockScroll:y,lazyRender:y,beforeClose:Function,overlayStyle:Object,overlayClass:N,transitionAppear:Boolean,closeOnClickOverlay:y};let h=0;const A="van-overflow-hidden";function ye(e,o){const t=de(),d="01",a="10",c=r=>{t.move(r);const f=t.deltaY.value>0?a:d,S=ae(r.target,e.value),{scrollHeight:m,offsetHeight:O,scrollTop:w}=S;let v="11";w===0?v=O>=m?"00":"01":w+O>=m&&(v="10"),v!=="11"&&t.isVertical()&&!(parseInt(v,2)&parseInt(f,2))&&p(r,!0)},s=()=>{document.addEventListener("touchstart",t.start),document.addEventListener("touchmove",c,{passive:!1}),h||document.body.classList.add(A),h++},l=()=>{h&&(document.removeEventListener("touchstart",t.start),document.removeEventListener("touchmove",c),h--,h||document.body.classList.remove(A))},x=()=>o()&&s(),I=()=>o()&&l();te(x),B(I),V(I),T(o,r=>{r?s():l()})}function F(e){const o=C(!1);return T(e,t=>{t&&(o.value=t)},{immediate:!0}),t=>()=>o.value?t():null}const[me,he]=$("overlay"),Ie={show:Boolean,zIndex:P,duration:P,className:N,lockScroll:y,lazyRender:y,customStyle:Object};var Oe=_({name:me,props:Ie,setup(e,{slots:o}){const t=C(),d=F(()=>e.show||!e.lazyRender),a=s=>{e.lockScroll&&p(s,!0)},c=d(()=>{var s;const l=K(se(e.zIndex),e.customStyle);return M(e.duration)&&(l.animationDuration=`${e.duration}s`),L(u("div",{ref:t,style:l,class:[he(),e.className]},[(s=o.default)==null?void 0:s.call(o)]),[[R,e.show]])});return G("touchmove",a,{target:t}),()=>u(D,{name:"van-fade",appear:!0},{default:c})}});const we=j(Oe),ke=K({},ve,{round:Boolean,position:z("center"),closeIcon:z("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:z("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[Ce,E]=$("popup");var Pe=_({name:Ce,inheritAttrs:!1,props:ke,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:o,attrs:t,slots:d}){let a,c;const s=C(),l=C(),x=F(()=>e.show||!e.lazyRender),I=q(()=>{const n={zIndex:s.value};if(M(e.duration)){const i=e.position==="center"?"animationDuration":"transitionDuration";n[i]=`${e.duration}s`}return n}),r=()=>{a||(a=!0,s.value=e.zIndex!==void 0?+e.zIndex:le(),o("open"))},f=()=>{a&&fe(e.beforeClose,{done(){a=!1,o("close"),o("update:show",!1)}})},S=n=>{o("clickOverlay",n),e.closeOnClickOverlay&&f()},m=()=>{if(e.overlay)return u(we,{show:e.show,class:e.overlayClass,zIndex:s.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0,onClick:S},{default:d["overlay-content"]})},O=n=>{o("clickCloseIcon",n),f()},w=()=>{if(e.closeable)return u(ie,{role:"button",tabindex:0,name:e.closeIcon,class:[E("close-icon",e.closeIconPosition),re],classPrefix:e.iconPrefix,onClick:O},null)},v=()=>o("opened"),H=()=>o("closed"),Y=n=>o("keydown",n),U=x(()=>{var n;const{round:i,position:k,safeAreaInsetTop:b,safeAreaInsetBottom:Z}=e;return L(u("div",oe({ref:l,style:I.value,role:"dialog",tabindex:0,class:[E({round:i,[k]:k}),{"van-safe-area-top":b,"van-safe-area-bottom":Z}],onKeydown:Y},t),[(n=d.default)==null?void 0:n.call(d),w()]),[[R,e.show]])}),g=()=>{const{position:n,transition:i,transitionAppear:k}=e,b=n==="center"?"van-fade":`van-popup-slide-${n}`;return u(D,{name:i||b,appear:k,onAfterEnter:v,onAfterLeave:H},{default:U})};return T(()=>e.show,n=>{n&&!a&&(r(),t.tabindex===0&&ne(()=>{var i;(i=l.value)==null||i.focus()})),!n&&a&&(a=!1,o("close"))}),ue({popupRef:l}),ye(l,()=>e.show&&e.lockScroll),G("popstate",()=>{e.closeOnPopstate&&(f(),c=!1)}),J(()=>{e.show&&r()}),W(()=>{c&&(o("update:show",!0),c=!1)}),B(()=>{e.show&&e.teleport&&(f(),c=!0)}),X(ce,()=>e.show),()=>e.teleport?u(Q,{to:e.teleport},{default:()=>[m(),g()]}):u(ee,null,[m(),g()])}});const Te=j(Pe);export{we as O,Te as P};
