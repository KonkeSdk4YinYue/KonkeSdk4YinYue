import{_,c as m,a as t,b as a,w as u,f as i,o as g,p as w,g as h,d as f}from"./_plugin-vue_export-helper-051f66a3.js";import{I as b}from"./index-9d551784.js";/* empty css              */import{B as k}from"./index-d0549590.js";import"./index-0f3161d3.js";import{F as v}from"./index-c3a7f1d1.js";import{I as y}from"./api-c3130a22.js";import{a as p}from"./function-call-753dd7bf.js";import"./use-route-666d481f.js";import"./index-1c77c952.js";import"./use-id-ae36fcd7.js";import"./use-expose-1ff20361.js";import"./index-1c58f097.js";import"./use-touch-8855ff1b.js";const V={name:"KonkeSdk4YinYueSrcApp",data(){return{phone:"",pwd:""}},mounted(){window.__jsb.getPageParams(o=>{console.log(o)}),this.testGetToken()},methods:{async testGetToken(){try{const o=await window.__jsb.getToken();console.log(o,"await token")}catch(o){console.log(o)}},async login(){if(this.phone==""){p("请输入手机号");return}if(this.pwd==""){p("请输入密码");return}y({username:this.phone,userPassword:this.pwd}).then(o=>{window.__jsb.setLoginUserInfo(o.data).then(e=>{window.__jsb.replace({route:"smarthome"})})}).catch(o=>console.log(o))},toRegister(){window.__jsb.push({route:"register"})},toForget(){window.__jsb.push({route:"forgetpassword"})},pop(){window.__jsb.pop()}}},F=o=>(w("data-v-8a29233b"),o=o(),h(),o),I={class:"home"},j={class:"ic_back"},x=F(()=>t("div",{class:"login_title"},"欢迎登录",-1)),C={class:"input_phone"},B={class:"input_pwd"},S={class:"login_btn"},T={class:"bottom"};function A(o,e,P,R,r,n){const c=b,l=v,d=k;return g(),m("div",I,[t("div",j,[a(c,{name:"arrow-left",color:"#444444",onClick:n.pop},null,8,["onClick"])]),x,t("div",C,[a(l,{clearable:"",style:{"background-color":"#Fafafa"},modelValue:r.phone,"onUpdate:modelValue":e[0]||(e[0]=s=>r.phone=s),type:"tel",maxlength:"50",placeholder:"请输入手机号码","clear-icon":"clear"},null,8,["modelValue"])]),t("div",B,[a(l,{clearable:"",maxlength:"50",style:{"background-color":"#Fafafa"},modelValue:r.pwd,"onUpdate:modelValue":e[1]||(e[1]=s=>r.pwd=s),type:"password",placeholder:"请输入密码"},null,8,["modelValue"])]),t("div",S,[a(d,{round:"",onClick:n.login,color:"#FD7D28",type:"primary",size:"large"},{default:u(()=>[i("登录 ")]),_:1},8,["onClick"])]),t("div",{class:"forget",onClick:e[2]||(e[2]=(...s)=>n.toForget&&n.toForget(...s))},"忘记密码"),t("div",T,[i(" 还没有账号? "),t("a",{class:"register_hint",onClick:e[3]||(e[3]=(...s)=>n.toRegister&&n.toRegister(...s))},"注册")])])}const N=_(V,[["render",A],["__scopeId","data-v-8a29233b"]]);f(N).mount("#root");