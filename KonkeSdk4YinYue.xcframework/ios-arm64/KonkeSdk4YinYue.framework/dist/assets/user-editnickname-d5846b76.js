import{_ as m,c as d,b as i,a as t,o as p,p as u,g as h,d as k}from"./_plugin-vue_export-helper-051f66a3.js";import"./index-9d551784.js";import"./index-0f3161d3.js";import{F as f}from"./index-c3a7f1d1.js";import{_ as g}from"./nav-bar-a1dce73c.js";import{k as w}from"./api-c3130a22.js";import{g as v}from"./urlparse-f25d0f77.js";import{a as b}from"./function-call-753dd7bf.js";import"./use-route-666d481f.js";import"./use-id-ae36fcd7.js";import"./use-expose-1ff20361.js";import"./index-1c58f097.js";import"./use-touch-8855ff1b.js";import"./index-1c77c952.js";const N={name:"KonkeSdk4YinYueSrcApp",data(){return{nickName:""}},mounted(){this.getParams()},methods:{onClickLeft(){window.__jsb.pop()},onClickRight(){w(this.nickName).then(o=>{window.__jsb.getLoginUserInfo().then(e=>{e.userToken.user.nickname=this.nickName,window.__jsb.setLoginUserInfo(e).then(c=>{window.__jsb.forwardEvent("reload","","user-editnickname","user"),window.__jsb.pop()})})}).catch(o=>{b(o)})},getParams(){let o=window.location.search;const e=v(o);console.log(e),e!=null&&"nickName"in e&&(this.nickName=e.nickName)}}},a=o=>(u("data-v-8c289cfd"),o=o(),h(),o),C={class:"home"},j=a(()=>t("div",{class:"name_hint"},"用户昵称",-1)),I={class:"name_input"},L=a(()=>t("div",{class:"divider"},null,-1));function S(o,e,c,V,n,s){const r=g,l=f;return p(),d("div",C,[i(r,{class:"nav_bar",title:"修改昵称",rightText:"保存",onClickLeft:s.onClickLeft,onClickRight:s.onClickRight},null,8,["onClickLeft","onClickRight"]),t("div",null,[j,t("div",I,[i(l,{modelValue:n.nickName,"onUpdate:modelValue":e[0]||(e[0]=_=>n.nickName=_),rules:[{required:!0,message:"昵称不能为空"}],placeholder:"请输入用户昵称",clearable:"",border:"","label-width":"5.2em"},null,8,["modelValue"])]),L])])}const U=m(N,[["render",S],["__scopeId","data-v-8c289cfd"]]);k(U).mount("#root");