import{_ as se,c as oe,a as ie,f as s,h as r,v as _,t as $,n as m,o as ce,p as te,e as ne,g as de}from"./_plugin-vue_export-helper-bb894d4f.js";import{_ as re}from"./nav-bar-b55db59c.js";import{g as _e}from"./urlparse-f25d0f77.js";import{l as le,k as me}from"./api-a5131bf9.js";import{i as ue,a as ve,b as ae,c as he,d as fe,e as pe,f as De}from"./ic_speed_auto_on-bab7d004.js";import{i as Me,a as Oe}from"./ic_model_manual_on-0aa51caf.js";import{_ as Ae,a as ge}from"./ic_temp_add-31de7dd7.js";import{a as u}from"./function-call-8fc98139.js";import"./index-62014939.js";import"./use-expose-a9c7ff3f.js";import"./index-1df8ec67.js";import"./use-touch-58651736.js";import"./index-576184ef.js";const xe=""+new URL("ic_temp_sub_dis-dc20656e.svg",import.meta.url).href,we=""+new URL("ic_temp_add_dis-2b4d7631.svg",import.meta.url).href;const Ce={name:"KonkeSdk4YinYueSrcApp",data(){return{ic_switch_off:ue,ic_switch_on:ve,ic_ac_mode_on:ae,ic_ac_mode_off:he,ic_ac_mode_dis:fe,icAcModeAutoOn:pe,icAcModeAuto:De,icAcModeManualOn:Me,icAcModeManual:Oe,icTempAddDis:we,icTempAdd:Ae,icTempSubDis:xe,icTempSub:ge,devId:0,isSelMode:!1,userDevice:{}}},mounted(){this.getParams(),window.__eventBus.on("deviceEvent",i=>{console.log("deviceEvent",i),i.userDeviceId==this.devId&&(this.userDevice.cache.extension=i.extension)})},methods:{onClickLeft(){window.__jsb.pop()},getParams(){let i=window.location.search;const o=_e(i);console.log(o),o!=null&&"devId"in o&&(this.devId=o.devId,this.getDevInfo())},getDevInfo(){le({userDeviceId:this.devId}).then(i=>{console.log(i),this.userDevice=i.data.userDeviceList[0]}).catch(i=>u(i))},devControl(i,o){me(this.devId,i,o).then(t=>{u("控制成功")}).catch(t=>u(t))},getAcModeColor(){var i,o,t;return(t=(o=(i=this.userDevice)==null?void 0:i.cache)==null?void 0:o.extension)!=null&&t.turnOnOff?this.isSelMode?"#FD7D28":"#666666":"#CCCCCC"},getModeText(){var i,o,t,l,e,c;if(((t=(o=(i=this.userDevice)==null?void 0:i.cache)==null?void 0:o.extension)==null?void 0:t.workMode)==1)return"手动";if(((c=(e=(l=this.userDevice)==null?void 0:l.cache)==null?void 0:e.extension)==null?void 0:c.workMode)==0)return"自动"},turnOnOff(){this.isSelMode=!1,this.devControl(this.userDevice.cache.extension.turnOnOff?"TurnOff":"TurnOn")},openMode(){this.isSelMode=!this.isSelMode}}},d=i=>(te("data-v-44a6ec9c"),i=i(),ne(),i),ke={class:"home"},Se={class:"icon"},be={class:"turnoff"},Ie=d(()=>s("span",{class:"turnoff_text"},"已关闭",-1)),Te=[Ie],Le={class:"turnon"},ye={class:"temp"},je=d(()=>s("div",{class:"temp_unit"}," ℃ ",-1)),Be={class:"mode_speed"},Ue=d(()=>s("div",{class:"mode_icon"},null,-1)),Ee={class:"mode_show"},Fe={class:"temp_control"},Ne=["src"],Pe=["src"],Re={class:"bottom"},Ve={class:"bottom_mode"},Ye=d(()=>s("div",{class:"bottom_mode_hint"},"模式",-1)),ze={class:"mode_list"},Ke=["src"],qe=["src"],Ge=d(()=>s("div",{class:"divider"},null,-1)),He={class:"bottom_main"},Je=["src"],Qe=d(()=>s("div",{class:"bottom_tv"},"开启",-1)),We=["src"],Xe={class:"bottom_tv"};function Ze(i,o,t,l,e,c){var v,a,h,f,p,D,M,O,A,g,x,w,C,k,S,b,I,T,L,y,j,B,U,E,F,N,P,R,V,Y,z,K,q,G,H,J,Q,W,X,Z;const ee=re;return ce(),oe("div",ke,[ie(ee,{class:"nav_bar",title:(v=e.userDevice)==null?void 0:v.deviceName,onClickLeft:c.onClickLeft},null,8,["title","onClickLeft"]),s("div",Se,[r(s("div",be,Te,512),[[_,!((f=(h=(a=e.userDevice)==null?void 0:a.cache)==null?void 0:h.extension)!=null&&f.turnOnOff)]]),r(s("div",Le,[s("div",ye,$((M=(D=(p=e.userDevice)==null?void 0:p.cache)==null?void 0:D.extension)==null?void 0:M.temperature),1),je],512),[[_,(g=(A=(O=e.userDevice)==null?void 0:O.cache)==null?void 0:A.extension)==null?void 0:g.turnOnOff]])]),r(s("div",Be,[Ue,s("div",Ee,$(c.getModeText()),1)],512),[[_,(C=(w=(x=e.userDevice)==null?void 0:x.cache)==null?void 0:w.extension)==null?void 0:C.turnOnOff]]),r(s("div",Fe,[s("img",{class:"temp_sub",src:((b=(S=(k=e.userDevice)==null?void 0:k.cache)==null?void 0:S.extension)==null?void 0:b.workMode)==1?e.icTempSub:e.icTempSubDis,onClick:o[0]||(o[0]=n=>c.devControl("AdjustDownTemperature",null))},null,8,Ne),s("img",{class:"temp_add",src:((L=(T=(I=e.userDevice)==null?void 0:I.cache)==null?void 0:T.extension)==null?void 0:L.workMode)==1?e.icTempAdd:e.icTempAddDis,onClick:o[1]||(o[1]=n=>c.devControl("AdjustUpTemperature",null))},null,8,Pe)],512),[[_,(B=(j=(y=e.userDevice)==null?void 0:y.cache)==null?void 0:j.extension)==null?void 0:B.turnOnOff]]),s("div",Re,[r(s("div",Ve,[Ye,s("div",ze,[s("div",{class:"mode_hot",onClick:o[2]||(o[2]=n=>c.devControl("SetMode",{mode:0}))},[s("img",{class:"mode_hot_icon",src:((F=(E=(U=e.userDevice)==null?void 0:U.cache)==null?void 0:E.extension)==null?void 0:F.workMode)==0?e.icAcModeAutoOn:e.icAcModeAuto},null,8,Ke),s("div",{class:"mode_text",style:m({color:((R=(P=(N=e.userDevice)==null?void 0:N.cache)==null?void 0:P.extension)==null?void 0:R.workMode)==0?"#FD7D28":"#666666"})},"自动 ",4)]),s("div",{class:"mode_cold",onClick:o[3]||(o[3]=n=>c.devControl("SetMode",{mode:1}))},[s("img",{class:"mode_cold_icon",src:((z=(Y=(V=e.userDevice)==null?void 0:V.cache)==null?void 0:Y.extension)==null?void 0:z.workMode)==1?e.icAcModeManualOn:e.icAcModeManual},null,8,qe),s("div",{class:"mode_text",style:m({color:((G=(q=(K=e.userDevice)==null?void 0:K.cache)==null?void 0:q.extension)==null?void 0:G.workMode)==1?"#FD7D28":"#666666"})},"手动 ",4)])]),Ge],512),[[_,e.isSelMode]]),s("div",He,[s("div",{class:"div_line_1",onClick:o[4]||(o[4]=(...n)=>c.turnOnOff&&c.turnOnOff(...n))},[s("img",{class:"bottom_img",src:(Q=(J=(H=e.userDevice)==null?void 0:H.cache)==null?void 0:J.extension)!=null&&Q.turnOnOff?e.ic_switch_on:e.ic_switch_off},null,8,Je),Qe]),s("div",{class:"div_line_2",onClick:o[5]||(o[5]=(...n)=>c.openMode&&c.openMode(...n))},[s("img",{class:"bottom_img",src:(Z=(X=(W=e.userDevice)==null?void 0:W.cache)==null?void 0:X.extension)!=null&&Z.turnOnOff?e.isSelMode?e.ic_ac_mode_on:e.ic_ac_mode_off:e.ic_ac_mode_dis},null,8,We),s("div",Xe,[s("span",{style:m({color:c.getAcModeColor()})},"模式",4)])])])])])}const $e=se(Ce,[["render",Ze],["__scopeId","data-v-44a6ec9c"]]);de($e).mount("#root");
