import{_ as S,c as m,b as a,a as _,w as n,j as l,i as c,o as s,d as p,F as T,r as U,p as C,f as b,e as x}from"./_plugin-vue_export-helper-b237bda9.js";import"./index-48d5ec75.js";/* empty css              */import{B as F}from"./index-551494da.js";import{C as B}from"./index-996b5610.js";import{C as R}from"./index-2718965a.js";import{S as N}from"./index-4803128a.js";import{R as A,a as L}from"./index-9df1c7d7.js";import"./index-2521a990.js";import{F as j}from"./index-0e89bf2d.js";import{_ as z}from"./nav-bar-25466e0a.js";import{r as D,o as G}from"./api-2425ebd0.js";import{a as d}from"./function-call-870d27f5.js";import"./use-route-f0a1f66c.js";import"./index-85a17d82.js";import"./use-id-06d20740.js";import"./use-touch-5cae3072.js";import"./index-c7c816a4.js";const Y={name:"KonkeSdk4YinYueSrcApp",data(){return{homeId:"",phone:"",roleType:"User",rooms:[]}},mounted(){this.homeId=new URLSearchParams(window.location.search).get("homeId")||"",this.getRooms()},methods:{async getRooms(){try{const{data:o}=await D(),{roomList:e}=o;this.rooms=e}catch(o){console.log(o)}},async onSave(){if(!this.phone){d("请输入手机号码");return}try{let o=null;this.roleType=="User"&&(o=this.rooms.filter(e=>e.checked).map(e=>e.roomId)),await G({homeId:this.homeId,username:this.phone,roleType:this.roleType,roomIds:o}),window.__jsb.pop()}catch(o){d(o.info||"邀请失败")}}}},E=o=>(C("data-v-0ff8d5aa"),o=o(),b(),o),K={class:"home-manage"},M=E(()=>_("div",{class:"home-name-title"},"手机号码",-1)),P={style:{"background-color":"white"}},q={key:0,class:"shared-rooms"};function H(o,e,O,Q,t,u){const h=z,f=j,i=L,y=A,v=N,g=R,k=B,w=F;return s(),m("div",K,[a(h,{title:"家庭管理"}),M,a(f,{modelValue:t.phone,"onUpdate:modelValue":e[0]||(e[0]=r=>t.phone=r),placeholder:"请输入"},null,8,["modelValue"]),_("div",P,[a(y,{modelValue:t.roleType,"onUpdate:modelValue":e[1]||(e[1]=r=>t.roleType=r),direction:"horizontal",style:{padding:"16px"}},{default:n(()=>[a(i,{name:"User"},{default:n(()=>[p("普通用户")]),_:1}),a(i,{name:"Manager"},{default:n(()=>[p("管理员")]),_:1})]),_:1},8,["modelValue"])]),t.roleType=="User"?(s(),m("div",q,"共享房间")):l("",!0),t.roleType=="User"?(s(),c(k,{key:1,inset:"",style:{"margin-bottom":"16px"}},{default:n(()=>[(s(!0),m(T,null,U(t.rooms,(r,V)=>(s(),c(g,{key:V,title:r.roomName},{"right-icon":n(()=>[a(v,{modelValue:r.checked,"onUpdate:modelValue":I=>r.checked=I,size:"20"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["title"]))),128))]),_:1})):l("",!0),a(w,{type:"primary",color:"#FD7D28FF",class:"primary-button",onClick:u.onSave},{default:n(()=>[p("立即邀请")]),_:1},8,["onClick"])])}const J=S(Y,[["render",H],["__scopeId","data-v-0ff8d5aa"]]);x(J).mount("#root");