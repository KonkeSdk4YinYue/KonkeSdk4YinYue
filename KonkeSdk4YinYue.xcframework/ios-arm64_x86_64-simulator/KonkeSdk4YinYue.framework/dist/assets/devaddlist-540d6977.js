import{_ as v,c as r,b as s,a as n,w as d,o as a,F as f,r as u,e as g,t as h,d as w}from"./_plugin-vue_export-helper-051f66a3.js";import"./index-9d551784.js";import{G as y,a as I}from"./index-d12e1366.js";import{_ as U}from"./nav-bar-a1dce73c.js";import{g as b}from"./urlparse-f25d0f77.js";import"./use-route-666d481f.js";const k=""+new URL("ic_dev_add_env-cc4a03d5.svg",import.meta.url).href,L=""+new URL("ic_dev_add_flootheart-bbb0b4a2.svg",import.meta.url).href,i=""+new URL("ic_dev_add_freshair-2dc786f1.svg",import.meta.url).href,D=""+new URL("ic_dev_add_host-ad2e924e.svg",import.meta.url).href,C=""+new URL("ic_dev_add_infrerad-57c910a0.svg",import.meta.url).href,R=""+new URL("ic_dev_add_light-463fdafe.svg",import.meta.url).href,x=""+new URL("ic_dev_add_motor-67b1b987.svg",import.meta.url).href;const A={name:"KonkeSdk4YinYueSrcApp",data(){return{gatewayUserDeviceId:0,data:[{typeId:280,icon:D,name:"智睿主机"},{typeId:382,icon:R,name:"智能灯控"},{typeId:451,icon:L,name:"地暖面板"},{typeId:451,icon:i,name:"新风面板"},{typeId:451,icon:i,name:"空调面板"},{typeId:317,icon:x,name:"电动窗帘"},{typeId:552,icon:k,name:"环境传感器"},{typeId:315,icon:C,name:"红外遥控器"}]}},mounted(){this.getUrlParams()},methods:{getUrlParams(){let t=window.location.search;const e=b(t);console.log(e),e!=null&&"gatewayUserDeviceId"in e&&(this.gatewayUserDeviceId=e.gatewayUserDeviceId,console.log(this.devId))},onClickLeft(){window.__jsb.pop()},toDevHelp(t){window.__jsb.push({route:"devhelp",params:{typeId:t,gatewayUserDeviceId:this.gatewayUserDeviceId}})}}},B={class:"home"},j={class:"name_group"},G=["src"],P={class:"dev_text"};function S(t,e,H,N,_,c){const m=U,p=I,l=y;return a(),r("div",B,[s(m,{title:"选择设备",onClickLeft:c.onClickLeft},null,8,["onClickLeft"]),n("div",j,[s(l,{"column-num":4,border:!1},{default:d(()=>[(a(!0),r(f,null,u(_.data,o=>(a(),g(p,{key:o.typeId,onClick:V=>c.toDevHelp(o.typeId)},{default:d(()=>[n("img",{src:o.icon},null,8,G),n("div",P,h(o.name),1)]),_:2},1032,["onClick"]))),128))]),_:1})])])}const F=v(A,[["render",S],["__scopeId","data-v-a09ddf13"]]);w(F).mount("#root");