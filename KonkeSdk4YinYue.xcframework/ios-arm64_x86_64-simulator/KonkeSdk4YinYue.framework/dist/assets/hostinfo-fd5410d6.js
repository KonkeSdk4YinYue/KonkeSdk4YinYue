import{_ as d,c as r,b as i,a as s,w as _,o as p,f as l,p as m,g as v,d as h}from"./_plugin-vue_export-helper-051f66a3.js";import"./index-9d551784.js";/* empty css              */import{B as u}from"./index-d0549590.js";import{_ as f}from"./nav-bar-a1dce73c.js";import{d as g}from"./api-c3130a22.js";import{g as I}from"./urlparse-f25d0f77.js";import{a as w}from"./function-call-753dd7bf.js";import"./use-route-666d481f.js";import"./index-1c77c952.js";import"./use-expose-1ff20361.js";import"./index-1c58f097.js";import"./use-touch-8855ff1b.js";const k=""+new URL("ic_host-92a0f76c.svg",import.meta.url).href;const C={name:"KonkeSdk4YinYueSrcApp",data(){return{devId:-1,userDevice:{},devName:""}},mounted(){this.getParams()},methods:{onClickLeft(){window.__jsb.pop()},onClickRight(){delHost(this.devId).then(e=>{window.__jsb.forwardEvent("reload","","hostinfo",""),window.__jsb.pop()})},getParams(){let e=window.location.search;const t=I(e);console.log(t),t!=null&&"devId"in t&&(this.devId=t.devId,console.log(this.devId),this.devId!=null&&this.devId!=-1&&this.getDevInfo())},getDevInfo(){g({userDeviceId:this.devId}).then(e=>{console.log(e),this.devName=e.data.userDeviceList[0].deviceName}).catch(e=>w(e))},next(){window.__jsb.push({route:"devaddlist",params:{gatewayUserDeviceId:this.devId}})}}},b=e=>(m("data-v-2c38ea48"),e=e(),v(),e),x={class:"home"},D=b(()=>s("div",{class:"dev_img"},[s("img",{src:k})],-1)),L={class:"next_btn"};function N(e,t,y,B,a,o){const n=f,c=u;return p(),r("div",x,[i(n,{class:"nav_bar",title:a.devName,onClickLeft:o.onClickLeft,"right-text":"解绑",onClick:o.onClickRight},null,8,["title","onClickLeft","onClick"]),D,s("div",L,[i(c,{round:"",onClick:o.next,color:"#FD7D28",type:"primary",size:"large"},{default:_(()=>[l("进入组网状态 ")]),_:1},8,["onClick"])])])}const j=d(C,[["render",N],["__scopeId","data-v-2c38ea48"]]);h(j).mount("#root");