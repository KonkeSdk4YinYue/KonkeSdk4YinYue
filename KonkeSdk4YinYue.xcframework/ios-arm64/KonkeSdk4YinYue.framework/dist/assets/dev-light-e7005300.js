import{_ as m,c as h,b as p,a as o,n as g,t as O,o as D,e as I}from"./_plugin-vue_export-helper-d4615445.js";import{_ as k}from"./nav-bar-d32762e5.js";import{g as C}from"./urlparse-f25d0f77.js";import{f as w,e as x}from"./api-6851fa39.js";import{i as b,a as F}from"./ic_light_off-ab953e02.js";import{a as i}from"./function-call-f4348626.js";import"./index-30121d0b.js";import"./use-touch-8d4a1a12.js";import"./index-a33ecb6c.js";import"./index-95f836ad.js";const S={name:"KonkeSdk4YinYueSrcApp",data(){return{devId:0,userDevice:{},icOn:b,icOff:F}},mounted(){window.__eventBus.on("reload",e=>{this.getDevInfo()}),this.getParams(),window.__eventBus.on("deviceEvent",e=>{console.log("deviceEvent",e),e.userDeviceId==this.devId&&(this.userDevice.cache.extension=e.extension)})},methods:{onClickLeft(){window.__jsb.pop()},onClickRight(){window.__jsb.push({route:"devedit",params:{devId:this.devId}})},getParams(){let e=window.location.search;const t=C(e);console.log(t),t!=null&&"devId"in t&&(this.devId=t.devId,this.getDevInfo())},getDevInfo(){w({userDeviceId:this.devId}).then(e=>{console.log(e),this.userDevice=e.data.userDeviceList[0]}).catch(e=>i(e))},turnOnOff(){this.isSelSpeed=!1,this.isSelMode=!1,this.devControl(this.userDevice.cache.extension.turnOnOff?"TurnOff":"TurnOn")},devControl(e){x(this.devId,e).then(t=>{i("控制成功")}).catch(t=>{i(t.info)})}}},L={class:"home"},y=["src"];function B(e,t,N,R,n,s){var c,r,a,l,d,v,f;const u=k;return D(),h("div",L,[p(u,{class:"nav_bar",title:n.userDevice.deviceName,onClickLeft:s.onClickLeft,"right-text":"编辑",onClickRight:s.onClickRight},null,8,["title","onClickLeft","onClickRight"]),o("div",{class:"btn",onClick:t[0]||(t[0]=(..._)=>s.turnOnOff&&s.turnOnOff(..._))},[o("img",{class:"imgbtn",src:(a=(r=(c=n.userDevice)==null?void 0:c.cache)==null?void 0:r.extension)!=null&&a.turnOnOff?n.icOn:n.icOff},null,8,y),o("div",{class:"text",style:g({color:(v=(d=(l=n.userDevice)==null?void 0:l.cache)==null?void 0:d.extension)!=null&&v.turnOnOff?"#FFFFFF":"#6F6F74"})},O((f=n.userDevice)==null?void 0:f.deviceName),5)])])}const A=m(S,[["render",B],["__scopeId","data-v-283ce415"]]);I(A).mount("#root");