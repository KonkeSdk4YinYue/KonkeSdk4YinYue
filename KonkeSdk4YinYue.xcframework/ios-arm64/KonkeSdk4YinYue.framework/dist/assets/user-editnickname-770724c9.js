import{_ as m,c as d,a as i,f as t,o as p,p as u,e as h,g as f}from"./_plugin-vue_export-helper-4adca727.js";import"./index-f4bb52ea.js";import"./index-f891a278.js";import{F as k}from"./index-62ed2467.js";import{_ as g}from"./nav-bar-94bf83b0.js";import{f as w}from"./api-61c15ffa.js";import{g as v}from"./urlparse-f25d0f77.js";import{a as b}from"./function-call-38737c8a.js";import"./use-route-710f3c49.js";import"./use-id-f8db432d.js";import"./use-expose-f66499b2.js";import"./index-d76ffcb6.js";import"./use-touch-330ddaa2.js";import"./index-08ecd083.js";const N={name:"KonkeSdk4YinYueSrcApp",data(){return{nickName:""}},mounted(){this.getParams()},methods:{onClickLeft(){window.__jsb.pop()},onClickRight(){w(this.nickName).then(o=>{window.__jsb.getLoginUserInfo().then(e=>{e.userToken.user.nickname=this.nickName,window.__jsb.setLoginUserInfo(e).then(c=>{window.__jsb.forwardEvent("reload","","user-editnickname","user"),window.__jsb.pop()})})}).catch(o=>{b(o)})},getParams(){let o=window.location.search;const e=v(o);console.log(e),e!=null&&"nickName"in e&&(this.nickName=e.nickName)}}},a=o=>(u("data-v-8c289cfd"),o=o(),h(),o),C={class:"home"},j=a(()=>t("div",{class:"name_hint"},"用户昵称",-1)),I={class:"name_input"},L=a(()=>t("div",{class:"divider"},null,-1));function S(o,e,c,V,n,s){const r=g,l=k;return p(),d("div",C,[i(r,{class:"nav_bar",title:"修改昵称",rightText:"保存",onClickLeft:s.onClickLeft,onClickRight:s.onClickRight},null,8,["onClickLeft","onClickRight"]),t("div",null,[j,t("div",I,[i(l,{modelValue:n.nickName,"onUpdate:modelValue":e[0]||(e[0]=_=>n.nickName=_),rules:[{required:!0,message:"昵称不能为空"}],placeholder:"请输入用户昵称",clearable:"",border:"","label-width":"5.2em"},null,8,["modelValue"])]),L])])}const U=m(N,[["render",S],["__scopeId","data-v-8c289cfd"]]);f(U).mount("#root");