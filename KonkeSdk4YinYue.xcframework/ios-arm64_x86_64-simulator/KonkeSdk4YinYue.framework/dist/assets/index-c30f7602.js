import{$ as me,Y as he,a0 as be,a1 as ve,a2 as ye,c as Ie,n as B,x as w,m as xe,e as Se,F as Ce,h as Ve,a as j,a3 as Ee,s as ke,a4 as we,i as I,a5 as q,f as Me,p as H,I as A,r as Te,w as Le}from"./index-31b7c571.js";import{c as Ae,C as Pe}from"./index-7bc1b107.js";import{u as Re}from"./use-id-23bdf568.js";import{a as Be}from"./use-touch-c5100371.js";import{j as _e,D as De,k as P,l as x,G as Ne,m as Oe,y as Fe,s as k,b as u,q as We,i as ze}from"./_plugin-vue_export-helper-c6b04c4a.js";function U(t){return Array.isArray(t)?!t.length:t===0?!1:!t}function $e(t,r){if(U(t)){if(r.required)return!1;if(r.validateEmpty===!1)return!0}return!(r.pattern&&!r.pattern.test(String(t)))}function je(t,r){return new Promise(l=>{const d=r.validator(t,r);if(ve(d)){d.then(l);return}l(d)})}function K(t,r){const{message:l}=r;return ye(l)?l(t,r):l||""}function qe({target:t}){t.composing=!0}function Y({target:t}){t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}function He(t,r){const l=me();t.style.height="auto";let d=t.scrollHeight;if(be(r)){const{maxHeight:i,minHeight:c}=r;i!==void 0&&(d=Math.min(d,i)),c!==void 0&&(d=Math.max(d,c))}d&&(t.style.height=`${d}px`,he(l))}function Ke(t){return t==="number"?{type:"text",inputmode:"decimal"}:t==="digit"?{type:"tel",inputmode:"numeric"}:{type:t}}function v(t){return[...t].length}function R(t,r){return[...t].slice(0,r).join("")}const[Ye,m]=Ie("field"),Ue={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:B,formatter:Function,clearIcon:w("clear"),modelValue:xe(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,enterkeyhint:String,clearTrigger:w("focus"),formatTrigger:w("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},Ge=Se({},Ae,Ue,{rows:B,type:w("text"),rules:Array,autosize:[Boolean,Object],labelWidth:B,labelClass:Ce,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var Je=_e({name:Ye,props:Ge,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(t,{emit:r,slots:l}){const d=Re(),i=De({status:"unvalidated",focused:!1,validateMessage:""}),c=P(),_=P(),M=P(),{parent:h}=Ve(we),y=()=>{var e;return String((e=t.modelValue)!=null?e:"")},f=e=>{if(I(t[e]))return t[e];if(h&&I(h.props[e]))return h.props[e]},G=x(()=>{const e=f("readonly");if(t.clearable&&!e){const a=y()!=="",n=t.clearTrigger==="always"||t.clearTrigger==="focus"&&i.focused;return a&&n}return!1}),D=x(()=>M.value&&l.input?M.value():t.modelValue),J=e=>e.reduce((a,n)=>a.then(()=>{if(i.status==="failed")return;let{value:o}=D;if(n.formatter&&(o=n.formatter(o,n)),!$e(o,n)){i.status="failed",i.validateMessage=K(o,n);return}if(n.validator)return U(o)&&n.validateEmpty===!1?void 0:je(o,n).then(s=>{s&&typeof s=="string"?(i.status="failed",i.validateMessage=s):s===!1&&(i.status="failed",i.validateMessage=K(o,n))})}),Promise.resolve()),S=()=>{i.status="unvalidated",i.validateMessage=""},N=()=>r("endValidate",{status:i.status,message:i.validateMessage}),O=(e=t.rules)=>new Promise(a=>{S(),e?(r("startValidate"),J(e).then(()=>{i.status==="failed"?(a({name:t.name,message:i.validateMessage}),N()):(i.status="passed",a(),N())})):a()}),T=e=>{if(h&&t.rules){const{validateTrigger:a}=h.props,n=q(a).includes(e),o=t.rules.filter(s=>s.trigger?q(s.trigger).includes(e):n);o.length&&O(o)}},Q=e=>{var a;const{maxlength:n}=t;if(I(n)&&v(e)>+n){const o=y();if(o&&v(o)===+n)return o;const s=(a=c.value)==null?void 0:a.selectionEnd;if(i.focused&&s){const g=[...e],b=g.length-+n;return g.splice(s-b,b),g.join("")}return R(e,+n)}return e},C=(e,a="onChange")=>{const n=e;e=Q(e);const o=v(n)-v(e);if(t.type==="number"||t.type==="digit"){const g=t.type==="number";e=Me(e,g,g)}let s=0;if(t.formatter&&a===t.formatTrigger){const{formatter:g,maxlength:b}=t;if(e=g(e),I(b)&&v(e)>+b&&(e=R(e,+b)),c.value&&i.focused){const{selectionEnd:E}=c.value,$=R(n,E);s=v(g($))-v($)}}if(c.value&&c.value.value!==e)if(i.focused){let{selectionStart:g,selectionEnd:b}=c.value;if(c.value.value=e,I(g)&&I(b)){const E=v(e);o?(g-=o,b-=o):s&&(g+=s,b+=s),c.value.setSelectionRange(Math.min(g,E),Math.min(b,E))}}else c.value.value=e;e!==t.modelValue&&r("update:modelValue",e)},X=e=>{e.target.composing||C(e.target.value)},L=()=>{var e;return(e=c.value)==null?void 0:e.blur()},Z=()=>{var e;return(e=c.value)==null?void 0:e.focus()},V=()=>{const e=c.value;t.type==="textarea"&&t.autosize&&e&&He(e,t.autosize)},p=e=>{i.focused=!0,r("focus",e),k(V),f("readonly")&&L()},ee=e=>{i.focused=!1,C(y(),"onBlur"),r("blur",e),!f("readonly")&&(T("onBlur"),k(V),Te())},F=e=>r("clickInput",e),te=e=>r("clickLeftIcon",e),ne=e=>r("clickRightIcon",e),ae=e=>{H(e),r("update:modelValue",""),r("clear",e)},W=x(()=>{if(typeof t.error=="boolean")return t.error;if(h&&h.props.showError&&i.status==="failed")return!0}),re=x(()=>{const e=f("labelWidth"),a=f("labelAlign");if(e&&a!=="top")return{width:j(e)}}),ie=e=>{e.keyCode===13&&(!(h&&h.props.submitOnEnter)&&t.type!=="textarea"&&H(e),t.type==="search"&&L()),r("keypress",e)},z=()=>t.id||`${d}-input`,le=()=>i.status,oe=()=>{const e=m("control",[f("inputAlign"),{error:W.value,custom:!!l.input,"min-height":t.type==="textarea"&&!t.autosize}]);if(l.input)return u("div",{class:e,onClick:F},[l.input()]);const a={id:z(),ref:c,name:t.name,rows:t.rows!==void 0?+t.rows:void 0,class:e,disabled:f("disabled"),readonly:f("readonly"),autofocus:t.autofocus,placeholder:t.placeholder,autocomplete:t.autocomplete,enterkeyhint:t.enterkeyhint,"aria-labelledby":t.label?`${d}-label`:void 0,onBlur:ee,onFocus:p,onInput:X,onClick:F,onChange:Y,onKeypress:ie,onCompositionend:Y,onCompositionstart:qe};return t.type==="textarea"?u("textarea",a,null):u("input",We(Ke(t.type),a),null)},se=()=>{const e=l["left-icon"];if(t.leftIcon||e)return u("div",{class:m("left-icon"),onClick:te},[e?e():u(A,{name:t.leftIcon,classPrefix:t.iconPrefix},null)])},ce=()=>{const e=l["right-icon"];if(t.rightIcon||e)return u("div",{class:m("right-icon"),onClick:ne},[e?e():u(A,{name:t.rightIcon,classPrefix:t.iconPrefix},null)])},ue=()=>{if(t.showWordLimit&&t.maxlength){const e=v(y());return u("div",{class:m("word-limit")},[u("span",{class:m("word-num")},[e]),ze("/"),t.maxlength])}},de=()=>{if(h&&h.props.showErrorMessage===!1)return;const e=t.errorMessage||i.validateMessage;if(e){const a=l["error-message"],n=f("errorMessageAlign");return u("div",{class:m("error-message",n)},[a?a({message:e}):e])}},fe=()=>{const e=f("labelWidth"),a=f("labelAlign"),n=f("colon")?":":"";if(l.label)return[l.label(),n];if(t.label)return u("label",{id:`${d}-label`,for:z(),style:a==="top"&&e?{width:j(e)}:void 0},[t.label+n])},ge=()=>[u("div",{class:m("body")},[oe(),G.value&&u(A,{ref:_,name:t.clearIcon,class:m("clear")},null),ce(),l.button&&u("div",{class:m("button")},[l.button()])]),ue(),de()];return Be({blur:L,focus:Z,validate:O,formValue:D,resetValidation:S,getValidationStatus:le}),Ne(Ee,{customValue:M,resetValidation:S,validateWithTrigger:T}),Oe(()=>t.modelValue,()=>{C(y()),S(),T("onChange"),k(V)}),Fe(()=>{C(y(),t.formatTrigger),k(V)}),ke("touchstart",ae,{target:x(()=>{var e;return(e=_.value)==null?void 0:e.$el})}),()=>{const e=f("disabled"),a=f("labelAlign"),n=se(),o=()=>{const s=fe();return a==="top"?[n,s].filter(Boolean):s||[]};return u(Pe,{size:t.size,class:m({error:W.value,disabled:e,[`label-${a}`]:a}),center:t.center,border:t.border,isLink:t.isLink,clickable:t.clickable,titleStyle:re.value,valueClass:m("value"),titleClass:[m("label",[a,{required:t.required}]),t.labelClass],arrowDirection:t.arrowDirection},{icon:n&&a!=="top"?()=>n:null,title:o,value:ge,extra:l.extra})}}});const tt=Le(Je);export{tt as F};