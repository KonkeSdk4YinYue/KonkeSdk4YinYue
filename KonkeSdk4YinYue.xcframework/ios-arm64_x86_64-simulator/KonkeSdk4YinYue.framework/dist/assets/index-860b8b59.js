import{c as V,i as ye,e as p,l as F,n as z,o as R,q as N,h as ce,s as ie,p as se,H as ee,d as ue,v as U,m as C,t as pe,x as Se,y as Pe,z as M,A as Ee,w as re,C as me}from"./index-31b7c571.js";import{u as Ie,a as de}from"./use-touch-c5100371.js";import{L as we}from"./index-22da9197.js";import{j as D,k as y,l as T,x as He,b as v,m as B,s as te,q as fe}from"./_plugin-vue_export-helper-c6b04c4a.js";import{T as Me,a as Be}from"./index-8310b73f.js";const[Ne,O,ne]=V("picker"),ve=e=>e.find(o=>!o.disabled)||e[0];function Ve(e,o){const n=e[0];if(n){if(Array.isArray(n))return"multiple";if(o.children in n)return"cascade"}return"default"}function Q(e,o){o=F(o,0,e.length);for(let n=o;n<e.length;n++)if(!e[n].disabled)return n;for(let n=o-1;n>=0;n--)if(!e[n].disabled)return n;return 0}const oe=(e,o,n)=>o!==void 0&&!!e.find(i=>i[n.value]===o);function W(e,o,n){const i=e.findIndex(r=>r[n.value]===o),l=Q(e,i);return e[l]}function De(e,o,n){const i=[];let l={[o.children]:e},r=0;for(;l&&l[o.children];){const m=l[o.children],f=n.value[r];if(l=ye(f)?W(m,f,o):void 0,!l&&m.length){const c=ve(m)[o.value];l=W(m,c,o)}r++,i.push(m)}return i}function _e(e){const{transform:o}=window.getComputedStyle(e),n=o.slice(7,o.length-1).split(", ")[5];return Number(n)}function $e(e){return p({text:"text",value:"value",children:"children"},e)}const ae=200,le=300,Ae=15,[he,G]=V("picker-column"),ge=Symbol(he);var Re=D({name:he,props:{value:z,fields:R(Object),options:N(),readonly:Boolean,allowHtml:Boolean,optionHeight:R(Number),swipeDuration:R(z),visibleOptionNum:R(z)},emits:["change","clickOption","scrollInto"],setup(e,{emit:o,slots:n}){let i,l,r,m,f;const c=y(),h=y(),d=y(0),g=y(0),b=Ie(),S=()=>e.options.length,_=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,P=u=>{const t=Q(e.options,u),a=-t*e.optionHeight,s=()=>{const k=e.options[t][e.fields.value];k!==e.value&&o("change",k)};i&&a!==d.value?f=s:s(),d.value=a},x=()=>e.readonly||!e.options.length,Y=u=>{i||x()||(f=null,g.value=ae,P(u),o("clickOption",e.options[u]))},E=u=>F(Math.round(-u/e.optionHeight),0,S()-1),$=T(()=>E(d.value)),j=(u,t)=>{const a=Math.abs(u/t);u=d.value+a/.003*(u<0?-1:1);const s=E(u);g.value=+e.swipeDuration,P(s)},A=()=>{i=!1,g.value=0,f&&(f(),f=null)},L=u=>{if(!x()){if(b.start(u),i){const t=_e(h.value);d.value=Math.min(0,t-_())}g.value=0,l=d.value,r=Date.now(),m=l,f=null}},q=u=>{if(x())return;b.move(u),b.isVertical()&&(i=!0,se(u,!0));const t=F(l+b.deltaY.value,-(S()*e.optionHeight),e.optionHeight),a=E(t);a!==$.value&&o("scrollInto",e.options[a]),d.value=t;const s=Date.now();s-r>le&&(r=s,m=t)},w=()=>{if(x())return;const u=d.value-m,t=Date.now()-r;if(t<le&&Math.abs(u)>Ae){j(u,t);return}const s=E(d.value);g.value=ae,P(s),setTimeout(()=>{i=!1},0)},I=()=>{const u={height:`${e.optionHeight}px`};return e.options.map((t,a)=>{const s=t[e.fields.text],{disabled:k}=t,H=t[e.fields.value],Oe={role:"button",style:u,tabindex:k?-1:0,class:[G("item",{disabled:k,selected:H===e.value}),t.className],onClick:()=>Y(a)},ke={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:s};return v("li",Oe,[n.option?n.option(t,a):v("div",ke,null)])})};return ce(ge),de({stopMomentum:A}),He(()=>{const u=e.options.findIndex(s=>s[e.fields.value]===e.value),a=-Q(e.options,u)*e.optionHeight;d.value=a}),ie("touchmove",q,{target:c}),()=>v("div",{ref:c,class:G(),onTouchstartPassive:L,onTouchend:w,onTouchcancel:w},[v("ul",{ref:h,style:{transform:`translate3d(0, ${d.value+_()}px, 0)`,transitionDuration:`${g.value}ms`,transitionProperty:g.value?"all":"none"},class:G("wrapper"),onTransitionend:A},[I()])])}});const[Fe]=V("picker-toolbar"),K={title:String,cancelButtonText:String,confirmButtonText:String},be=["cancel","confirm","title","toolbar"],Ue=Object.keys(K);var xe=D({name:Fe,props:K,emits:["confirm","cancel"],setup(e,{emit:o,slots:n}){const i=()=>{if(n.title)return n.title();if(e.title)return v("div",{class:[O("title"),"van-ellipsis"]},[e.title])},l=()=>o("cancel"),r=()=>o("confirm"),m=()=>{const c=e.cancelButtonText||ne("cancel");return v("button",{type:"button",class:[O("cancel"),ee],onClick:l},[n.cancel?n.cancel():c])},f=()=>{const c=e.confirmButtonText||ne("confirm");return v("button",{type:"button",class:[O("confirm"),ee],onClick:r},[n.confirm?n.confirm():c])};return()=>v("div",{class:O("toolbar")},[n.toolbar?n.toolbar():[m(),i(),f()]])}});const[Te,Z]=V("picker-group"),Ce=Symbol(Te),Ke=p({tabs:N(),nextStepText:String},K);D({name:Te,props:Ke,emits:["confirm","cancel"],setup(e,{emit:o,slots:n}){const i=y(0),{children:l,linkChildren:r}=ue(Ce);r();const m=()=>i.value<e.tabs.length-1&&e.nextStepText,f=()=>{m()?i.value++:o("confirm",l.map(h=>h.confirm()))},c=()=>o("cancel");return()=>{var h;const d=(h=n.default)==null?void 0:h.call(n),g=m()?e.nextStepText:e.confirmButtonText;return v("div",{class:Z()},[v(xe,{title:e.title,cancelButtonText:e.cancelButtonText,confirmButtonText:g,onConfirm:f,onCancel:c},U(n,be)),v(Me,{active:i.value,"onUpdate:active":b=>i.value=b,class:Z("tabs"),shrink:!0,animated:!0,lazyRender:!1},{default:()=>[e.tabs.map((b,S)=>v(Be,{title:b,titleClass:Z("tab-title")},{default:()=>[d==null?void 0:d[S]]}))]})])}}});const X=p({loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:C(44),showToolbar:pe,swipeDuration:C(1e3),visibleOptionNum:C(6)},K),Ye=p({},X,{columns:N(),modelValue:N(),toolbarPosition:Se("top"),columnsFieldNames:Object});var je=D({name:Ne,props:Ye,emits:["confirm","cancel","change","scrollInto","clickOption","update:modelValue"],setup(e,{emit:o,slots:n}){const i=y(),l=y(e.modelValue.slice(0)),{parent:r}=ce(Ce),{children:m,linkChildren:f}=ue(ge);f();const c=T(()=>$e(e.columnsFieldNames)),h=T(()=>Pe(e.optionHeight)),d=T(()=>Ve(e.columns,c.value)),g=T(()=>{const{columns:t}=e;switch(d.value){case"multiple":return t;case"cascade":return De(t,c.value,l);default:return[t]}}),b=T(()=>g.value.some(t=>t.length)),S=T(()=>g.value.map((t,a)=>W(t,l.value[a],c.value))),_=T(()=>g.value.map((t,a)=>t.findIndex(s=>s[c.value.value]===l.value[a]))),P=(t,a)=>{if(l.value[t]!==a){const s=l.value.slice(0);s[t]=a,l.value=s}},x=()=>({selectedValues:l.value.slice(0),selectedOptions:S.value,selectedIndexes:_.value}),Y=(t,a)=>{P(a,t),d.value==="cascade"&&l.value.forEach((s,k)=>{const H=g.value[k];oe(H,s,c.value)||P(k,H.length?H[0][c.value.value]:void 0)}),te(()=>{o("change",p({columnIndex:a},x()))})},E=(t,a)=>{const s={columnIndex:a,currentOption:t};o("clickOption",p(x(),s)),o("scrollInto",s)},$=()=>{m.forEach(a=>a.stopMomentum());const t=x();return te(()=>{o("confirm",t)}),t},j=()=>o("cancel",x()),A=()=>g.value.map((t,a)=>v(Re,{value:l.value[a],fields:c.value,options:t,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:h.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:s=>Y(s,a),onClickOption:s=>E(s,a),onScrollInto:s=>{o("scrollInto",{currentOption:s,columnIndex:a})}},{option:n.option})),L=t=>{if(b.value){const a={height:`${h.value}px`},s={backgroundSize:`100% ${(t-h.value)/2}px`};return[v("div",{class:O("mask"),style:s},null),v("div",{class:[Ee,O("frame")],style:a},null)]}},q=()=>{const t=h.value*+e.visibleOptionNum,a={height:`${t}px`};return v("div",{ref:i,class:O("columns"),style:a},[A(),L(t)])},w=()=>{if(e.showToolbar&&!r)return v(xe,fe(U(e,Ue),{onConfirm:$,onCancel:j}),U(n,be))};B(g,t=>{t.forEach((a,s)=>{a.length&&!oe(a,l.value[s],c.value)&&P(s,ve(a)[c.value.value])})},{immediate:!0});let I;return B(()=>e.modelValue,t=>{!M(t,l.value)&&!M(t,I)&&(l.value=t.slice(0),I=t.slice(0))},{deep:!0}),B(l,t=>{M(t,e.modelValue)||(I=t.slice(0),o("update:modelValue",I))},{immediate:!0}),ie("touchmove",se,{target:i}),de({confirm:$,getSelectedOptions:()=>S.value}),()=>{var t,a;return v("div",{class:O()},[e.toolbarPosition==="top"?w():null,e.loading?v(we,{class:O("loading")},null):null,(t=n["columns-top"])==null?void 0:t.call(n),q(),(a=n["columns-bottom"])==null?void 0:a.call(n),e.toolbarPosition==="bottom"?w():null])}}});const Le=re(je),qe=p({},X,{modelValue:N(),filter:Function,formatter:{type:Function,default:(e,o)=>o}}),ze=Object.keys(X);function Ge(e,o){if(e<0)return[];const n=Array(e);let i=-1;for(;++i<e;)n[i]=o(i);return n}const J=(e,o,n,i,l)=>{const r=Ge(o-e+1,m=>{const f=me(e+m);return i(n,{text:f,value:f})});return l?l(n,r):r},Ze=(e,o)=>e.map((n,i)=>{const l=o[i];if(l.length){const r=+l[0].value,m=+l[l.length-1].value;return me(F(+n,r,m))}return n}),[Je]=V("time-picker"),Qe=p({},qe,{minHour:C(0),maxHour:C(23),minMinute:C(0),maxMinute:C(59),minSecond:C(0),maxSecond:C(59),columnsType:{type:Array,default:()=>["hour","minute"]}});var We=D({name:Je,props:Qe,emits:["confirm","cancel","change","update:modelValue"],setup(e,{emit:o,slots:n}){const i=y(e.modelValue),l=T(()=>e.columnsType.map(c=>{const{filter:h,formatter:d}=e;switch(c){case"hour":return J(+e.minHour,+e.maxHour,c,d,h);case"minute":return J(+e.minMinute,+e.maxMinute,c,d,h);case"second":return J(+e.minSecond,+e.maxSecond,c,d,h);default:return[]}}));B(i,c=>{M(c,e.modelValue)||o("update:modelValue",c)}),B(()=>e.modelValue,c=>{c=Ze(c,l.value),M(c,i.value)||(i.value=c)},{immediate:!0});const r=(...c)=>o("change",...c),m=(...c)=>o("cancel",...c),f=(...c)=>o("confirm",...c);return()=>v(Le,fe({modelValue:i.value,"onUpdate:modelValue":c=>i.value=c,columns:l.value,onChange:r,onCancel:m,onConfirm:f},U(e,ze)),n)}});const at=re(We);export{at as T};