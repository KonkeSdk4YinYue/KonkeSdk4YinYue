import{_ as p,c as h,b as s,a as n,w,h as f,v as u,o as I,p as g,g as C,i as b,d as j}from"./_plugin-vue_export-helper-051f66a3.js";import{I as L}from"./index-9d551784.js";/* empty css              *//* empty css              */import"./index-0f3161d3.js";import{F as N}from"./index-c3a7f1d1.js";import{_ as R}from"./nav-bar-a1dce73c.js";import{R as k}from"./room-component-ebb7a639.js";import{S as E}from"./scene-action-light-component-f627c98b.js";import{d as D,e as S,f as P,r as V}from"./api-c3130a22.js";import{g as x}from"./urlparse-f25d0f77.js";import{a as r}from"./function-call-753dd7bf.js";import{P as U}from"./index-1c58f097.js";import"./use-route-666d481f.js";import"./use-id-ae36fcd7.js";import"./use-expose-1ff20361.js";import"./index-38a4c887.js";import"./index-bf853e3e.js";import"./index-d8032618.js";/* empty css              */import"./index-2954d1b3.js";import"./use-touch-8855ff1b.js";import"./index-6ceb7711.js";import"./index-1c77c952.js";const A={components:{SceneActionLight:E,RoomListPop:k},data(){return{devName:"",room_sel_show:!1,roomList:[],roomName:"",roomId:-1,devId:-1}},mounted(){this.getUrlParams()},methods:{getUrlParams(){let o=window.location.search;const e=x(o);console.log(e),e!=null&&"devId"in e&&(this.devId=e.devId,console.log(this.devId),this.devId!=null&&this.devId!=-1&&this.getDevInfo())},getDevInfo(){D({userDeviceId:this.devId}).then(o=>{var e;console.log(o),this.roomName=(e=o.data.userDeviceList[0])==null?void 0:e.roomName,this.roomId=o.data.userDeviceList[0].roomId,this.devName=o.data.userDeviceList[0].deviceName}).catch(o=>r(o))},onClickLeft(){window.__jsb.pop()},onClickRight(){if(this.devName==""){r("请输入设备名称");return}if(this.roomId==-1){r("请选择房间");return}S(this.devId,this.devName,this.roomId).then(o=>{window.__jsb.forwardEvent("reload","","devedit","dev-ac"),window.__jsb.forwardEvent("reload","","devedit","dev-floorheat"),window.__jsb.forwardEvent("reload","","devedit","dev-cur"),window.__jsb.forwardEvent("reload","","devedit","dev-freshair"),window.__jsb.forwardEvent("reload","","devedit","dev-light"),window.__jsb.forwardEvent("reload","","devedit","smarthome"),window.__jsb.pop()})},delDev(){P(this.devId).then(o=>{window.__jsb.forwardEvent("reload","","devedit","dev-ac"),window.__jsb.forwardEvent("reload","","devedit","dev-floorheat"),window.__jsb.forwardEvent("reload","","devedit","dev-cur"),window.__jsb.forwardEvent("reload","","devedit","dev-freshair"),window.__jsb.forwardEvent("reload","","devedit","dev-light"),window.__jsb.forwardEvent("reload","","devedit","smarthome"),window.__jsb.pop()}).catch(o=>{r(o)})},selRoom(){this.room_sel_show=!0,V().then(o=>{o.code==200?this.roomList=o.data.roomList:r(o.info)})},onRoomSelCancel(){this.room_sel_show=!1},onRoomSelConfirm(o){console.log("onRoomSelConfirm",o),this.roomName=o.roomName,this.roomId=o.roomId,this.room_sel_show=!1}}},a=o=>(g("data-v-3512136e"),o=o(),C(),o),O={class:"home"},y=a(()=>n("div",{class:"name_hint"}," 设备名称 ",-1)),B=a(()=>n("div",{class:"name_hint"}," 房间 ",-1)),F={class:"infrerad"},T=a(()=>n("span",{class:"infrerad_hint"},"红外配置",-1));function q(o,e,G,H,t,d){const m=R,l=N,_=L,v=b("RoomListPop"),c=U;return I(),h("div",O,[s(m,{class:"nav_bar",title:"编辑设备","right-text":"保存",onClickRight:d.onClickRight,onClickLeft:d.onClickLeft},null,8,["onClickRight","onClickLeft"]),y,s(l,{class:"input",modelValue:t.devName,"onUpdate:modelValue":e[0]||(e[0]=i=>t.devName=i),clearable:"",placeholder:"请输入设备名称"},null,8,["modelValue"]),B,s(l,{class:"input",modelValue:t.roomName,"onUpdate:modelValue":e[1]||(e[1]=i=>t.roomName=i),onClick:d.selRoom,"right-icon":"arrow ",readonly:"",placeholder:"请选择房间"},null,8,["modelValue","onClick"]),n("div",F,[T,s(_,{class:"right",name:"arrow"})]),s(c,{show:t.room_sel_show,"onUpdate:show":e[2]||(e[2]=i=>t.room_sel_show=i),position:"bottom"},{default:w(()=>[s(v,{list:t.roomList,onOnCancal:d.onRoomSelCancel,onOnConfirm:d.onRoomSelConfirm},null,8,["list","onOnCancal","onOnConfirm"])]),_:1},8,["show"]),f(n("div",{class:"del_text",onClick:e[3]||(e[3]=(...i)=>d.delDev&&d.delDev(...i))},"删除设备",512),[[u,t.devId!=null&&t.devId!=-1]])])}const z=p(A,[["render",q],["__scopeId","data-v-3512136e"]]);j(z).mount("#root");
