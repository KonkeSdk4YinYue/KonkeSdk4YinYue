import{_ as N,c as d,b as p,a as t,F as u,r as g,w as R,g as k,v as x,o as _,t as m,p as y,d as b,l as P,e as O}from"./_plugin-vue_export-helper-441d49bc.js";import"./index-3c7dc3c1.js";/* empty css              *//* empty css              */import"./index-88c0c3e3.js";import{F as D}from"./index-dd7af6b7.js";import{_ as j}from"./nav-bar-d5f559a7.js";import{R as A}from"./room-component-4d4df756.js";import{S as T}from"./scene-action-light-component-ae8c8176.js";import{I as E,F as U,N as V,O as B,r as F}from"./api-308b1525.js";import{p as w,a as h}from"./scene-cfbe032f.js";import{g as J}from"./urlparse-f25d0f77.js";import{_ as v,a as q}from"./ic_scene_add_action-3488ce3c.js";import{a as l}from"./function-call-06d9c54b.js";import{P as z}from"./index-9bebd057.js";import"./use-route-ace38816.js";import"./use-id-bbee3c24.js";import"./use-touch-a55357c8.js";import"./index-93f37fed.js";import"./index-1edddc79.js";import"./index-7c2bb3de.js";/* empty css              */import"./index-52a57577.js";import"./index-e63d6a20.js";import"./index-1c01d136.js";import"./dev-image-f6fc399c.js";import"./ic_scene1-0f866639.js";const G=""+new URL("ic_scene_add_trigger-2d8976e0.svg",import.meta.url).href,H=""+new URL("ic_scene_add_limit-64529cf8.svg",import.meta.url).href;const K={components:{SceneActionLight:T,RoomListPop:A},data(){return{scenename:"",item:null,value:0,room_sel_show:!1,roomList:[],roomName:"",roomId:-1,actionList:[],triggerList:[],limitList:[],sceneId:-1}},mounted(){this.getUrlParams(),window.__eventBus.on("addDevAction",i=>{i=w(i),this.actionList.push(i)}),window.__eventBus.on("addTriggerSchedule",i=>{i=h(i),this.triggerList.push(i)}),window.__eventBus.on("addLimitSchedule",i=>{if(this.limitList.length>0){l("只能选择一个时间限制");return}i=h(i),this.limitList.push(i)}),window.__eventBus.on("addTrigger",i=>{i=h(i),this.triggerList.push(i)})},methods:{delScene(){E(this.sceneId).then(i=>{window.__jsb.forwardEvent({eventName:"reload",eventData:"",fromPage:"scene-auto",toPage:""}),l("删除成功"),window.__jsb.pop()}).catch(i=>{l(i)})},getUrlParams(){let i=window.location.search;const s=J(i);console.log(s),s!=null&&"sceneId"in s&&(this.sceneId=s.sceneId,console.log(this.sceneId),this.sceneId!=null&&this.sceneId!=-1&&this.getSceneDetail())},getSceneDetail(){U(this.sceneId).then(i=>{if(i.data.sceneList.length>0){this.scenename=i.data.sceneList[0].sceneName,this.roomName=i.data.sceneList[0].roomName,this.roomId=i.data.sceneList[0].roomId,this.actionList=i.data.sceneList[0].actionList,this.actionList.forEach(o=>{try{o.extension=JSON.parse(o.extension)}catch{}o=w(o)}),this.triggerList=i.data.sceneList[0].triggerList;let s=null;this.triggerList.forEach(o=>{o=h(o),o.triggerType=="Cycle"&&(this.limitList.push(o),s=o)}),s!=null&&this.triggerList.splice(this.triggerList.indexOf(s),1)}else l(i.info)}).catch(i=>console.log(i))},onClickLeft(){window.__jsb.pop()},onClickRight(){if(this.scenename==""){l("请输入情景名称");return}if(this.roomId==-1){l("请选择房间");return}if(this.triggerList==null||this.triggerList.length==0){l("最少要包含一个触发条件");return}if(this.actionList==null||this.actionList.length==0){l("最少要包含一个动作");return}this.actionList.forEach(o=>{o.extension!=null&&o.extension!="null"&&(o.extension=JSON.stringify(o.extension))});let i=null,s=null;this.triggerList.forEach(o=>{o.triggerType=="Schedule"&&(i=o)}),this.limitList.length>0&&(s=this.limitList[0],this.triggerList.push(s)),this.sceneId==-1?V(this.scenename,"Normal",this.roomId,i,s,this.triggerList,this.actionList).then(o=>{window.__jsb.forwardEvent({eventName:"reload",eventData:"",fromPage:"scene-auto",toPage:""}),l("保存成功"),window.__jsb.pop()}).catch(o=>{let r=null;this.triggerList.forEach(n=>{n=h(n),n.triggerType=="Cycle"&&(r=n)}),r!=null&&this.triggerList.splice(this.triggerList.indexOf(r),1),l(o)}):B(this.sceneId,this.scenename,"Normal",this.roomId,i,s,this.triggerList,this.actionList).then(o=>{window.__jsb.forwardEvent({eventName:"reload",eventData:"",fromPage:"scene-auto",toPage:""}),l("保存成功"),window.__jsb.pop()}).catch(o=>r=>{l(r);let n=null;this.triggerList.forEach(c=>{c=h(c),c.triggerType=="Cycle"&&(n=c)}),n!=null&&this.triggerList.splice(this.triggerList.indexOf(n),1)})},selRoom(){this.room_sel_show=!0,F().then(i=>{i.code==200?this.roomList=i.data.roomList:l(i.info)})},onRoomSelCancel(){this.room_sel_show=!1},onRoomSelConfirm(i){console.log("onRoomSelConfirm",i),this.roomName=i.roomName,this.roomId=i.roomId,this.room_sel_show=!1},addAction(){window.__jsb.push({route:"scene-action-type",params:{type:"auto"}})},addTrigger(){window.__jsb.push({route:"scene-trigger-type"})},addLimit(){window.__jsb.push({route:"scene-limit-type"})},actionRemove(i){this.actionList.splice(this.actionList.indexOf(i),1)},triggerRemove(i){this.triggerList.splice(this.actionList.indexOf(i),1)},limitRemove(i){this.limitList.splice(this.actionList.indexOf(i),1)}}},a=i=>(y("data-v-dd23f691"),i=i(),b(),i),M={class:"home"},Q={class:"dev_content"},W=a(()=>t("div",{class:"name_hint"}," 场景名称 ",-1)),X=a(()=>t("div",{class:"name_hint"}," 房间 ",-1)),Y=a(()=>t("div",{class:"name_hint"}," 触发条件 ",-1)),Z=a(()=>t("div",{class:"name_hint1"}," 满足以下任一条件时触发 ",-1)),$={class:"action"},ii={class:"action_list"},ti=["src"],si={class:"action_info"},ei={class:"action_dev_name"},oi={class:"action_exec_name"},ni=["onClick"],ci=a(()=>t("div",{class:"divider"},null,-1)),ai=a(()=>t("img",{class:"add_action_icon",src:G},null,-1)),li=a(()=>t("div",{class:"add_action_name"},"添加触发条件",-1)),ri=[ai,li],di=a(()=>t("div",{class:"name_hint"}," 限制条件 ",-1)),_i=a(()=>t("div",{class:"name_hint1"}," 满足以下任一条件时不触发 ",-1)),mi={class:"action"},hi={class:"action_list"},pi=["src"],ui={class:"action_info"},gi={class:"action_dev_name"},vi={class:"action_exec_name"},fi=["onClick"],Li=a(()=>t("div",{class:"divider"},null,-1)),wi=a(()=>t("img",{class:"add_action_icon",src:H},null,-1)),Ci=a(()=>t("div",{class:"add_action_name"},"添加限制条件",-1)),Si=[wi,Ci],Ii=a(()=>t("div",{class:"name_hint"}," 执行动作 ",-1)),Ni=a(()=>t("div",{class:"name_hint1"}," 执行对应场景设备 ",-1)),Ri={class:"action"},ki={class:"action_list"},xi=["src"],yi={class:"action_info"},bi={class:"action_dev_name"},Pi={class:"action_exec_name"},Oi=["onClick"],Di=a(()=>t("div",{class:"divider"},null,-1)),ji=a(()=>t("img",{class:"add_action_icon",src:q},null,-1)),Ai=a(()=>t("div",{class:"add_action_name"},"添加执行动作",-1)),Ti=[ji,Ai];function Ei(i,s,o,r,n,c){const C=j,f=D,S=P("RoomListPop"),I=z;return _(),d("div",M,[p(C,{class:"nav_bar",title:"自动场景","right-text":"保存",onClickRight:c.onClickRight,onClickLeft:c.onClickLeft},null,8,["onClickRight","onClickLeft"]),t("div",Q,[W,p(f,{class:"input",modelValue:n.scenename,"onUpdate:modelValue":s[0]||(s[0]=e=>n.scenename=e),clearable:"",placeholder:"请输入场景名称"},null,8,["modelValue"]),X,p(f,{class:"input",modelValue:n.roomName,"onUpdate:modelValue":s[1]||(s[1]=e=>n.roomName=e),onClick:c.selRoom,"right-icon":"arrow ",readonly:"",placeholder:"请选择房间"},null,8,["modelValue","onClick"]),Y,Z,(_(!0),d(u,null,g(n.triggerList,e=>(_(),d("div",$,[t("div",ii,[t("img",{class:"action_icon",src:e.icon},null,8,ti),t("div",si,[t("div",ei,m(e.actionDevShowName),1),t("div",oi,m(e.actionShowName),1)]),t("img",{class:"ic_remove",src:v,onClick:L=>{c.triggerRemove(e)}},null,8,ni)]),ci]))),256)),t("div",{class:"add_action",onClick:s[2]||(s[2]=(...e)=>c.addTrigger&&c.addTrigger(...e))},ri),di,_i,(_(!0),d(u,null,g(n.limitList,e=>(_(),d("div",mi,[t("div",hi,[t("img",{class:"action_icon",src:e.icon},null,8,pi),t("div",ui,[t("div",gi,m(e.actionDevShowName),1),t("div",vi,m(e.actionShowName),1)]),t("img",{class:"ic_remove",src:v,onClick:L=>{c.limitRemove(e)}},null,8,fi)]),Li]))),256)),t("div",{class:"add_action",onClick:s[3]||(s[3]=(...e)=>c.addLimit&&c.addLimit(...e))},Si),Ii,Ni,(_(!0),d(u,null,g(n.actionList,e=>(_(),d("div",Ri,[t("div",ki,[t("img",{class:"action_icon",src:e.icon},null,8,xi),t("div",yi,[t("div",bi,m(e.actionDevShowName),1),t("div",Pi,m(e.actionShowName),1)]),t("img",{class:"ic_remove",src:v,onClick:L=>c.actionRemove(e)},null,8,Oi)]),Di]))),256)),t("div",{class:"add_action",onClick:s[4]||(s[4]=(...e)=>c.addAction&&c.addAction(...e))},Ti)]),p(I,{show:n.room_sel_show,"onUpdate:show":s[5]||(s[5]=e=>n.room_sel_show=e),position:"bottom"},{default:R(()=>[p(S,{list:n.roomList,onOnCancal:c.onRoomSelCancel,onOnConfirm:c.onRoomSelConfirm},null,8,["list","onOnCancal","onOnConfirm"])]),_:1},8,["show"]),k(t("div",{class:"del_text",onClick:s[6]||(s[6]=e=>c.delScene())},"删除场景",512),[[x,n.sceneId!=null&&n.sceneId!=-1]])])}const Ui=N(K,[["render",Ei],["__scopeId","data-v-dd23f691"]]);O(Ui).mount("#root");
