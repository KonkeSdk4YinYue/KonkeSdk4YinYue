import{_ as g,c as r,b as l,F as L,r as S,a as t,w as C,g as I,v as N,o as m,t as h,p as R,d as k,l as x,e as b}from"./_plugin-vue_export-helper-441d49bc.js";import"./index-3c7dc3c1.js";/* empty css              *//* empty css              */import"./index-88c0c3e3.js";import{F as P}from"./index-dd7af6b7.js";import{_ as D}from"./nav-bar-d5f559a7.js";import{R as j}from"./room-component-4d4df756.js";import{S as A}from"./scene-action-light-component-ae8c8176.js";import{F as y,G as d,H as O,I as V,r as E}from"./api-308b1525.js";import{g as U}from"./urlparse-f25d0f77.js";import{p}from"./scene-cfbe032f.js";import{_ as F,a as B}from"./ic_scene_add_action-3488ce3c.js";import{a}from"./function-call-06d9c54b.js";import{P as M}from"./index-9bebd057.js";import"./use-route-ace38816.js";import"./use-id-bbee3c24.js";import"./use-touch-a55357c8.js";import"./index-93f37fed.js";import"./index-1edddc79.js";import"./index-7c2bb3de.js";/* empty css              */import"./index-52a57577.js";import"./index-e63d6a20.js";import"./index-1c01d136.js";import"./dev-image-f6fc399c.js";import"./ic_scene1-0f866639.js";const J={components:{SceneActionLight:A,RoomListPop:j},data(){return{scenename:"",item:null,value:0,room_sel_show:!1,roomList:[],roomName:"",roomId:-1,actionList:[],sceneId:-1}},mounted(){this.getUrlParams(),window.__eventBus.on("addDevAction",o=>{o=p(o),this.actionList.push(o)})},methods:{getUrlParams(){let o=window.location.search;const e=U(o);console.log(e),e!=null&&"sceneId"in e&&(this.sceneId=e.sceneId,console.log(this.sceneId),this.sceneId!=null&&this.sceneId!=-1&&this.getSceneDetail())},getSceneDetail(){y(this.sceneId).then(o=>{o.data.sceneList.length>0?(this.scenename=o.data.sceneList[0].sceneName,this.roomName=o.data.sceneList[0].roomName,this.roomId=o.data.sceneList[0].roomId,this.actionList=o.data.sceneList[0].actionList,this.actionList.forEach(e=>{try{e.extension=JSON.parse(e.extension)}catch{}e=p(e)})):a(o.info)}).catch(o=>console.log(o))},onClickLeft(){window.__jsb.pop()},onClickRight(){if(this.scenename==""){a("请输入情景名称");return}if(this.roomId==-1){a("请选择房间");return}if(this.actionList==null||this.actionList.length==0){a("最少要包含一个动作");return}this.actionList.forEach(o=>{o.extension!=null&&o.extension!=""&&(o.extension=JSON.stringify(o.extension))}),this.sceneId==-1?d(this.scenename,"Normal",this.roomId,[],this.actionList).then(o=>{console.log("addManualScene",d),window.__jsb.forwardEvent({eventName:"reload",eventData:"",fromPage:"scene-manual",toPage:""}),a("保存成功"),window.__jsb.pop()}).catch(o=>console.log(o)):O(this.sceneId,this.scenename,"Normal",this.roomId,[],this.actionList).then(o=>{console.log("addManualScene",d),window.__jsb.forwardEvent({eventName:"reload",eventData:"",fromPage:"scene-manual",toPage:""}),a("保存成功"),window.__jsb.pop()}).catch(o=>console.log(o))},delScene(){V(this.sceneId).then(o=>{window.__jsb.forwardEvent({eventName:"reload",eventData:"",fromPage:"scene-manual",toPage:""}),a("删除成功"),window.__jsb.pop()}).catch(o=>{a(o)})},selRoom(){this.room_sel_show=!0,E().then(o=>{o.code==200?this.roomList=o.data.roomList:a(o.info)})},onRoomSelCancel(){this.room_sel_show=!1},onRoomSelConfirm(o){console.log("onRoomSelConfirm",o),this.roomName=o.roomName,this.roomId=o.roomId,this.room_sel_show=!1},addAction(){window.__jsb.push({route:"scene-action-type",params:{type:"manual"}})},actionRemove(o){console.log("index",this.actionList.indexOf(o)),this.actionList.splice(this.actionList.indexOf(o),1)}}},c=o=>(R("data-v-2aef8d41"),o=o(),k(),o),G={class:"home"},H=c(()=>t("div",{class:"name_hint"}," 场景名称 ",-1)),T=c(()=>t("div",{class:"name_hint"}," 房间 ",-1)),q=c(()=>t("div",{class:"name_hint"}," 执行动作 ",-1)),z={class:"action"},K={class:"action_list"},Q=["src"],W={class:"action_info"},X={class:"action_dev_name"},Y={class:"action_exec_name"},Z=["onClick"],$=c(()=>t("div",{class:"divider"},null,-1)),oo=c(()=>t("img",{class:"add_action_icon",src:B},null,-1)),eo=c(()=>t("div",{class:"add_action_name"},"添加执行动作",-1)),so=[oo,eo];function to(o,e,u,io,n,i){const f=D,_=P,v=x("RoomListPop"),w=M;return m(),r("div",G,[l(f,{class:"nav_bar",title:"手动场景","right-text":"保存",onClickRight:i.onClickRight,onClickLeft:i.onClickLeft},null,8,["onClickRight","onClickLeft"]),H,l(_,{class:"input",modelValue:n.scenename,"onUpdate:modelValue":e[0]||(e[0]=s=>n.scenename=s),clearable:"",placeholder:"请输入场景名称"},null,8,["modelValue"]),T,l(_,{class:"input",modelValue:n.roomName,"onUpdate:modelValue":e[1]||(e[1]=s=>n.roomName=s),onClick:i.selRoom,"right-icon":"arrow ",readonly:"",placeholder:"请选择房间"},null,8,["modelValue","onClick"]),q,(m(!0),r(L,null,S(n.actionList,s=>(m(),r("div",z,[t("div",K,[t("img",{class:"action_icon",src:s.icon},null,8,Q),t("div",W,[t("div",X,h(s.actionDevShowName),1),t("div",Y,h(s.actionShowName),1)]),t("img",{class:"ic_remove",src:F,onClick:ao=>{i.actionRemove(s)}},null,8,Z)]),$]))),256)),t("div",{class:"add_action",onClick:e[2]||(e[2]=(...s)=>i.addAction&&i.addAction(...s))},so),l(w,{show:n.room_sel_show,"onUpdate:show":e[3]||(e[3]=s=>n.room_sel_show=s),position:"bottom"},{default:C(()=>[l(v,{list:n.roomList,onOnCancal:i.onRoomSelCancel,onOnConfirm:i.onRoomSelConfirm},null,8,["list","onOnCancal","onOnConfirm"])]),_:1},8,["show"]),I(t("div",{class:"del_text",onClick:e[4]||(e[4]=(...s)=>i.delScene&&i.delScene(...s))},"删除场景",512),[[N,n.sceneId!=null&&n.sceneId!=-1]])])}const no=g(J,[["render",to],["__scopeId","data-v-2aef8d41"]]);b(no).mount("#root");
