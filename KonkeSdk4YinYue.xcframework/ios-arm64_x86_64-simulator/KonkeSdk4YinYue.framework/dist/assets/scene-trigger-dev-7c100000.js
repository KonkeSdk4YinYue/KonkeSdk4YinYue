import{_ as v,o as a,c as d,b as s,a as i,t as u,p as O,f as D,w as f,F as w,r as y,i as V,k as L,v as b,l as I,e as N}from"./_plugin-vue_export-helper-b237bda9.js";import"./index-48d5ec75.js";/* empty css              *//* empty css              */import{E as P}from"./index-e5ae3a63.js";import{T as H,a as K}from"./index-e42d5b3f.js";import{_ as g}from"./nav-bar-25466e0a.js";import{C as T,a as F}from"./index-1df323c1.js";import"./index-2521a990.js";import{a as p}from"./function-call-870d27f5.js";import{C as E}from"./index-996b5610.js";import{C as U}from"./index-2718965a.js";import{w as B,r as j,x as G}from"./api-3f328c0d.js";import{g as Y}from"./dev-image-f6fc399c.js";import{P as q}from"./index-c7c816a4.js";import"./use-id-06d20740.js";import"./use-touch-5cae3072.js";import"./use-route-f0a1f66c.js";import"./index-85a17d82.js";const z={name:"SceneTriggerAc",props:{dev:{}},data(){return{checkIndex:-1,list:[{name:"打开",action:"TurnOn",check:!1,extension:null},{name:"关闭",action:"TurnOff",check:!1,extension:null}],checked:[]}},mounted(){},methods:{onClickLeft(){this.$emit("onCancal","")},onClickRight(){for(let e in this.list)if(this.list[e].check){this.checkIndex==e;break}if(console.log("checked",this.checked),this.checkIndex==-1){p("必须选择一个动作");return}let n=null;if(this.checkIndex==2||this.checkIndex==3){if(this.list[this.checkIndex].extension.forEach(t=>{t.check&&(n=t)}),n==null){p("必须选择一个动作参数");return}}else this.checkIndex==4&&(n=this.list[this.checkIndex].extension);this.$emit("onConfirm",this.dev,this.checked[0],n)},toggle(n,e){this.checked.splice(0,this.checked.length),this.checked.push(e),console.log(this.checked)},clickMode(n,e){n.forEach(t=>{t.check=t.workMode==e.workMode})},clickSpeed(n,e){n.forEach(t=>{t.check=t.windSpeed==e.windSpeed})},clickCheck(n){console.log(n),this.checked.splice(0,this.checked.length),this.checked.push(this.list[n].action),this.checkIndex=n;for(let e in this.list)this.list[e].check=n==e}}},J=n=>(O("data-v-a05c1aa4"),n=n(),D(),n),Q={class:"demo-component"},W={class:"action_list"},X={class:"turn_sel"},Z={class:"turn_name"},ee={class:"checkbox"},ne=J(()=>i("div",{class:"divider"},null,-1)),ce={class:"turn_sel"},te={class:"turn_name"},oe={class:"checkbox"};function ie(n,e,t,k,c,o){const _=g,h=T;return a(),d("div",Q,[s(_,{class:"nav_bar",title:"选择动作","left-text":"取消","right-text":"确定",onClickRight:o.onClickRight,fixed:!1,onClickLeft:o.onClickLeft},null,8,["onClickRight","onClickLeft"]),i("div",W,[i("div",X,[i("span",Z,u(c.list[0].name),1),i("div",ee,[s(h,{modelValue:c.list[0].check,"onUpdate:modelValue":e[0]||(e[0]=l=>c.list[0].check=l),onClick:e[1]||(e[1]=l=>o.clickCheck(0))},null,8,["modelValue"])])]),ne,i("div",ce,[i("span",te,u(c.list[1].name),1),i("div",oe,[s(h,{modelValue:c.list[1].check,"onUpdate:modelValue":e[2]||(e[2]=l=>c.list[1].check=l),onClick:e[3]||(e[3]=l=>o.clickCheck(1))},null,8,["modelValue"])])])])])}const se=v(z,[["render",ie],["__scopeId","data-v-a05c1aa4"]]);const le={name:"SceneTriggerFh",props:{dev:{}},data(){return{checkIndex:-1,list:[{name:"打开",action:"TurnOn",check:!1,extension:null},{name:"关闭",action:"TurnOff",check:!1,extension:null}],checked:[]}},mounted(){},methods:{onClickLeft(){this.$emit("onCancal","")},onClickRight(){for(let e in this.list)if(this.list[e].check){this.checkIndex==e;break}if(console.log("checked",this.checked),this.checkIndex==-1){p("必须选择一个动作");return}let n=null;this.checkIndex==2&&(n=this.list[this.checkIndex].extension),this.$emit("onConfirm",this.dev,this.checked[0],n)},toggle(n,e){this.checked.splice(0,this.checked.length),this.checked.push(e),console.log(this.checked)},clickMode(n,e){n.forEach(t=>{t.check=t.workMode==e.workMode})},clickSpeed(n,e){n.forEach(t=>{t.check=t.windSpeed==e.windSpeed})},clickCheck(n){console.log(n),this.checked.splice(0,this.checked.length),this.checked.push(this.list[n].action),this.checkIndex=n;for(let e in this.list)this.list[e].check=n==e}}},re=n=>(O("data-v-7aa4cf52"),n=n(),D(),n),ae={class:"demo-component"},he={class:"action_list"},de={class:"turn_sel"},_e={class:"turn_name"},ke={class:"checkbox"},me=re(()=>i("div",{class:"divider"},null,-1)),fe={class:"turn_sel"},ue={class:"turn_name"},pe={class:"checkbox"};function ve(n,e,t,k,c,o){const _=g,h=T;return a(),d("div",ae,[s(_,{class:"nav_bar",title:"选择动作","left-text":"取消","right-text":"确定",onClickRight:o.onClickRight,fixed:!1,onClickLeft:o.onClickLeft},null,8,["onClickRight","onClickLeft"]),i("div",he,[i("div",de,[i("span",_e,u(c.list[0].name),1),i("div",ke,[s(h,{modelValue:c.list[0].check,"onUpdate:modelValue":e[0]||(e[0]=l=>c.list[0].check=l),onClick:e[1]||(e[1]=l=>o.clickCheck(0))},null,8,["modelValue"])])]),me,i("div",fe,[i("span",ue,u(c.list[1].name),1),i("div",pe,[s(h,{modelValue:c.list[1].check,"onUpdate:modelValue":e[2]||(e[2]=l=>c.list[1].check=l),onClick:e[3]||(e[3]=l=>o.clickCheck(1))},null,8,["modelValue"])])])])])}const ge=v(le,[["render",ve],["__scopeId","data-v-7aa4cf52"]]);const Ce={name:"SceneTriggerFrishair",props:{dev:{}},data(){return{checkIndex:-1,list:[{name:"打开",action:"TurnOn",check:!1,extension:null},{name:"关闭",action:"TurnOff",check:!1,extension:null}],checked:[]}},mounted(){},methods:{onClickLeft(){this.$emit("onCancal","")},onClickRight(){for(let e in this.list)if(this.list[e].check){this.checkIndex==e;break}if(console.log("checked",this.checked),this.checkIndex==-1){p("必须选择一个动作");return}let n=null;if(this.checkIndex==2||this.checkIndex==3){if(this.list[this.checkIndex].extension.forEach(t=>{t.check&&(n=t)}),n==null){p("必须选择一个动作参数");return}}else this.checkIndex==4&&(n=this.list[this.checkIndex].extension);this.$emit("onConfirm",this.dev,this.checked[0],n)},toggle(n,e){this.checked.splice(0,this.checked.length),this.checked.push(e),console.log(this.checked)},clickMode(n,e){n.forEach(t=>{t.check=t.workMode==e.workMode})},clickSpeed(n,e){n.forEach(t=>{t.check=t.windSpeed==e.windSpeed})},clickCheck(n){console.log(n),this.checked.splice(0,this.checked.length),this.checked.push(this.list[n].action),this.checkIndex=n;for(let e in this.list)this.list[e].check=n==e}}},xe=n=>(O("data-v-2da6186e"),n=n(),D(),n),Se={class:"demo-component"},Le={class:"action_list"},be={class:"turn_sel"},Ie={class:"turn_name"},Te={class:"checkbox"},we=xe(()=>i("div",{class:"divider"},null,-1)),ye={class:"turn_sel"},Ae={class:"turn_name"},Oe={class:"checkbox"};function De(n,e,t,k,c,o){const _=g,h=T;return a(),d("div",Se,[s(_,{class:"nav_bar",title:"选择动作","left-text":"取消","right-text":"确定",onClickRight:o.onClickRight,fixed:!1,onClickLeft:o.onClickLeft},null,8,["onClickRight","onClickLeft"]),i("div",Le,[i("div",be,[i("span",Ie,u(c.list[0].name),1),i("div",Te,[s(h,{modelValue:c.list[0].check,"onUpdate:modelValue":e[0]||(e[0]=l=>c.list[0].check=l),onClick:e[1]||(e[1]=l=>o.clickCheck(0))},null,8,["modelValue"])])]),we,i("div",ye,[i("span",Ae,u(c.list[1].name),1),i("div",Oe,[s(h,{modelValue:c.list[1].check,"onUpdate:modelValue":e[2]||(e[2]=l=>c.list[1].check=l),onClick:e[3]||(e[3]=l=>o.clickCheck(1))},null,8,["modelValue"])])])])])}const Ve=v(Ce,[["render",De],["__scopeId","data-v-2da6186e"]]);const Re={name:"SceneTriggerInfrared",props:{dev:{}},data(){return{checked:[],list:[]}},mounted(){this.getKeys()},methods:{onClickLeft(){this.$emit("onCancal","")},onClickRight(){if(console.log("checked",this.checked),this.checked.length==0){p("必须选择一个动作");return}let n={};this.list.forEach(t=>{t.keyId==this.checked[0]&&(n=t)});const e={keyID:n.keyId};this.$emit("onConfirm",this.dev,"SendData",this.deley,e)},toggle(n,e){this.checked.splice(0,this.checked.length),this.checked.push(e),console.log(this.checked)},getKeys(){B(this.dev.userDeviceId).then(n=>{this.list=n.data.remoterKeysList}).catch(n=>console.log(n))}}},Fe={class:"demo-component"},Ee={class:"action_list"};function Ue(n,e,t,k,c,o){const _=g,h=T,l=U,C=E,x=F;return a(),d("div",Fe,[s(_,{class:"nav_bar",title:"选择动作","left-text":"取消","right-text":"确定",onClickRight:o.onClickRight,fixed:!1,onClickLeft:o.onClickLeft},null,8,["onClickRight","onClickLeft"]),i("div",Ee,[s(x,{modelValue:c.checked,"onUpdate:modelValue":e[0]||(e[0]=r=>c.checked=r)},{default:f(()=>[s(C,{inset:""},{default:f(()=>[(a(!0),d(w,null,y(c.list,(r,S)=>(a(),V(l,{clickable:"",key:r,title:r.keyName,onClick:A=>o.toggle(S,r.keyId)},{"right-icon":f(()=>[s(h,{name:r.keyId},null,8,["name"])]),_:2},1032,["title","onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])])])}const $e=v(Re,[["render",Ue],["__scopeId","data-v-d2681f8f"]]);const Me={name:"SceneTriggerLight",props:{dev:{}},data(){return{checked:[],list:[{name:"打开",action:"TurnOn"},{name:"关闭",action:"TurnOff"}]}},mounted(){(this.dev.device.cateType="Curtains")?this.list=[{name:"打开",action:"TurnOn"},{name:"关闭",action:"TurnOff"},{name:"暂停",action:"Pause"}]:this.list=[{name:"打开",action:"TurnOn"},{name:"关闭",action:"TurnOff"}]},methods:{onClickLeft(){this.$emit("onCancal","")},onClickRight(){if(console.log("checked",this.checked),this.checked.length==0){p("必须选择一个动作");return}this.$emit("onConfirm",this.dev,this.checked[0])},toggle(n,e){this.checked.splice(0,this.checked.length),this.checked.push(e),console.log(this.checked)}}},Ne={class:"demo-component"},Pe={class:"action_list"};function He(n,e,t,k,c,o){const _=g,h=T,l=U,C=E,x=F;return a(),d("div",Ne,[s(_,{class:"nav_bar",title:"选择动作","left-text":"取消","right-text":"确定",onClickRight:o.onClickRight,fixed:!1,onClickLeft:o.onClickLeft},null,8,["onClickRight","onClickLeft"]),i("div",Pe,[s(x,{modelValue:c.checked,"onUpdate:modelValue":e[0]||(e[0]=r=>c.checked=r)},{default:f(()=>[s(C,{inset:""},{default:f(()=>[(a(!0),d(w,null,y(c.list,(r,S)=>(a(),V(l,{clickable:"",key:r,title:r.name,onClick:A=>o.toggle(S,r.action)},{"right-icon":f(()=>[s(h,{name:r.action},null,8,["name"])]),_:2},1032,["title","onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])])])}const Ke=v(Me,[["render",He],["__scopeId","data-v-4684d0ef"]]);const Be={name:"KonkeSdk4YinYueSrcApp",components:{SceneTriggerLight:Ke,SceneTriggerAc:se,SceneTriggerFh:ge,SceneTriggerFrishair:Ve,SceneTriggerInfrared:$e},data(){return{type:"addTrigger",dev:{userDeviceId:1},show:!1,active:0,roomList:[],deviceList:[],getDevImage:Y,actionShow:{light:!1,ac:!1,floorHeart:!1,freshair:!1,infrared:!0}}},mounted(){this.loadRoomList()},methods:{onClickLeft(){window.__jsb.pop()},clickDev(n){switch(this.actionShow={light:!1,ac:!1,floorHeart:!1,freshair:!1,infrared:!1},this.dev=n,this.show=!0,n.device.cateType){case"Curtains":case"Light":this.actionShow.light=!0;break;case"FloorHeating":this.actionShow.floorHeart=!0;break;case"Infrared":this.actionShow.infrared=!0;break;case"AirFresher":this.actionShow.freshair=!0;break;case"AirCondition":this.actionShow.ac=!0;break}console.log(this.actionShow)},onActionSelCancel(){console.log("onActionSelCansel")},onActionSelConfirm(n,e){console.log("onActionSelConfirm",this.dev.userDeviceId,e);const t={triggerType:"Device",userDeviceId:n.userDeviceId,propName:e,propValue:"",comparison:null,userDevice:n};this.callbackParams(t)},onAcActionSelCancel(){this.actionShow={light:!1,ac:!1,floorheart:!1,freshair:!1,infrared:!1},this.show=!1},onAcActionSelConfirm(n,e,t){console.log("onAcActionSelConfirm",this.dev.userDeviceId,e);const k={triggerType:"Device",userDeviceId:n.userDeviceId,propName:e,propValue:"",comparison:null,userDevice:n};if(t!=null)for(const c in t)k.propName=c,k.propValue=t.key,k.comparison="Equal";this.callbackParams(k)},callbackParams(n){window.__jsb.forwardEvent({eventName:"addTrigger",eventData:n,fromPage:"scene-action-dev",toPage:"scene-auto"}),window.__jsb.pop({route:"scene-auto"})},loadRoomList(){j().then(n=>{(n.code=200)&&(this.roomList=n.data.roomList,this.roomList!=null&&this.roomList.length>0&&(this.active=this.roomList[0].roomId,this.findRoomDev(this.roomList[0].roomId)))})},findRoomDev(n){G(n).then(e=>{this.deviceList=e.data.userDeviceList}).catch(e=>console.log(e))},onClickTab(){this.findRoomDev(this.roomList[this.active].roomId)}}},je={class:"home"},Ge={class:"dev"},Ye={key:0,class:"no_dev"},qe=["onClick"],ze=["src"],Je={class:"dev_name"},Qe={class:"room_name"};function We(n,e,t,k,c,o){const _=g,h=K,l=H,C=P,x=I("SceneTriggerLight"),r=I("SceneTriggerAc"),S=I("SceneTriggerFrishair"),A=I("SceneTriggerFh"),$=I("SceneTriggerInfrared"),M=q;return a(),d("div",je,[s(_,{class:"nav_bar",title:"选择设备触发动作",onClickLeft:o.onClickLeft},null,8,["onClickLeft"]),s(l,{active:c.active,"onUpdate:active":e[0]||(e[0]=m=>c.active=m),onClickTab:o.onClickTab,color:"#FD7D28","title-active-color":"#FD7D28","title-inactive-color":"#666666",sticky:"",animated:"",shrink:""},{default:f(()=>[(a(!0),d(w,null,y(c.roomList,m=>(a(),V(h,{title:m.roomName},null,8,["title"]))),256))]),_:1},8,["active","onClickTab"]),i("div",Ge,[c.deviceList==null||c.deviceList.length==0?(a(),d("div",Ye,[s(C,{"image-size":"80",description:"房间下没有设备"})])):(a(!0),d(w,{key:1},y(c.deviceList,m=>{var R;return a(),d("div",{class:"dev_list",onClick:Ze=>{o.clickDev(m)}},[i("img",{class:"dev_icon",src:c.getDevImage((R=m.device)==null?void 0:R.cateType)},null,8,ze),i("div",Je,[i("span",Qe,u(m.deviceName),1)])],8,qe)}),256))]),s(M,{show:c.show,"onUpdate:show":e[1]||(e[1]=m=>c.show=m),position:"bottom"},{default:f(()=>[L(s(x,{dev:c.dev,onOnCancal:o.onActionSelCancel,onOnConfirm:o.onActionSelConfirm},null,8,["dev","onOnCancal","onOnConfirm"]),[[b,c.actionShow.light]]),L(s(r,{dev:c.dev,onOnCancal:o.onAcActionSelCancel,onOnConfirm:o.onAcActionSelConfirm},null,8,["dev","onOnCancal","onOnConfirm"]),[[b,c.actionShow.ac]]),L(s(S,{dev:c.dev,onOnCancal:o.onAcActionSelCancel,onOnConfirm:o.onAcActionSelConfirm},null,8,["dev","onOnCancal","onOnConfirm"]),[[b,c.actionShow.freshair]]),L(s(A,{dev:c.dev,onOnCancal:o.onAcActionSelCancel,onOnConfirm:o.onAcActionSelConfirm},null,8,["dev","onOnCancal","onOnConfirm"]),[[b,c.actionShow.floorHeart]]),L(s($,{dev:c.dev,onOnCancal:o.onAcActionSelCancel,onOnConfirm:o.onAcActionSelConfirm},null,8,["dev","onOnCancal","onOnConfirm"]),[[b,c.actionShow.infrared]])]),_:1},8,["show"])])}const Xe=v(Be,[["render",We],["__scopeId","data-v-c9a5e738"]]);N(Xe).mount("#root");