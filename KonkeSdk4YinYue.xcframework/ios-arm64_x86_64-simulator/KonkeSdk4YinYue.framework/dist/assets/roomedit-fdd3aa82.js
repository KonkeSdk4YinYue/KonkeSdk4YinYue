import{_ as w,c as a,b as c,a as i,w as _,g as D,v as L,o as n,F as N,r as C,t as p,f as x,p as E,d as R,e as y}from"./_plugin-vue_export-helper-d4615445.js";import"./index-30121d0b.js";import{E as V}from"./index-8297fbc7.js";import{a as j,C as F}from"./index-5a15a777.js";import"./index-291712d7.js";import"./index-8e962ff0.js";import{F as P}from"./index-50950f47.js";import{_ as A}from"./nav-bar-d32762e5.js";import{V as S,W as B,X as T,f as U,Y as q}from"./api-1cc81df9.js";import{g as z}from"./dev-image-f6fc399c.js";import{d as G}from"./dev-filter-432b904c.js";import{a as v}from"./function-call-f4348626.js";import"./use-id-9223d827.js";import"./use-touch-8d4a1a12.js";import"./use-route-39b32e27.js";import"./index-a33ecb6c.js";import"./index-95f836ad.js";const O={data(){return{roomId:-1,homeId:-1,areaId:-1,roomName:"",deviceList:[],checked:[],initList:[],getDevImage:z}},mounted(){this.getParams(),this.findAllDev()},methods:{getParams(){let e={},o=window.location.search;if(o.indexOf("?")<0)return e;o=o.split("?")[1];let m=o.split("&");for(let t=0;t<m.length;t++){let l=m[t].split("=");e[l[0]]=l[1]}console.log(e),this.areaId=e.areaId,this.homeId=e.homeId,e.roomId!=null&&(this.roomId=e.roomId),e.roomName!=null&&(this.roomName=decodeURI(e.roomName))},onClickLeft(){window.__jsb.pop()},onClickRight(){if(this.roomName==""){v("请输入房间名");return}this.roomId==-1?S(this.roomName,this.homeId,this.areaId).then(e=>{this.roomId=e.data.room.roomId,this.batchEditDev()}).catch(e=>console.log(e)):B(this.roomName,this.homeId,this.areaId,this.roomId).then(e=>{this.batchEditDev()}).catch(e=>console.log(e))},batchEditDev(){if(this.checked.length==0){window.__jsb.pop();return}const e=[];this.checked.forEach(o=>{const d={};d.userDeviceId=o,d.roomId=this.roomId,e.push(d)}),T(e).then(o=>{window.__jsb.forwardEvent({eventName:"reload",eventData:"",fromPage:"roomedit",toPage:""}),window.__jsb.pop()}).catch(o=>console.log(o))},findAllDev(){U().then(e=>{this.deviceList=G(e.data.userDeviceList),this.deviceList.forEach(o=>{o.roomId==this.roomId&&(this.checked.push(o.userDeviceId),this.initList.push(o.userDeviceId))})}).catch(e=>console.log(e))},deleteRoom(){if(this.checked.length!=0){v("房间中存在设备,不可删除");return}q(this.roomId).then(e=>{window.__jsb.forwardEvent({eventName:"reload",eventData:"",fromPage:"roomedit",toPage:""}),window.__jsb.pop()}).catch(e=>console.log(e))}}},u=e=>(E("data-v-9d51a6b2"),e=e(),R(),e),W={class:"home"},X=u(()=>i("div",{class:"name_hint"},"房间名称",-1)),Y={class:"name_input"},H=u(()=>i("div",{class:"selected_dev_hint"},"请选择设备",-1)),J={class:"dev_content"},K={key:0,class:"dev_list"},M={class:"floatleft"},Q=["src"],Z={class:"dev_name"},$={class:"floatright"},ee={key:1};function oe(e,o,d,m,t,r){const l=A,f=P,g=F,I=j,k=V;return n(),a("div",W,[c(l,{title:"房间管理","right-text":"保存",onClickLeft:r.onClickLeft,onClickRight:r.onClickRight},null,8,["onClickLeft","onClickRight"]),i("div",null,[X,i("div",Y,[c(f,{modelValue:t.roomName,"onUpdate:modelValue":o[0]||(o[0]=s=>t.roomName=s),rules:[{required:!0,message:"房间名称不能为空"}],placeholder:"请输入房间名称"},null,8,["modelValue"])])]),H,i("div",J,[t.deviceList!=null&&t.deviceList.length>0?(n(),a("div",K,[c(I,{modelValue:t.checked,"onUpdate:modelValue":o[1]||(o[1]=s=>t.checked=s)},{default:_(()=>[(n(!0),a(N,null,C(t.deviceList,(s,b)=>{var h;return n(),a("div",{class:"divv",key:b},[i("div",M,[i("img",{class:"deviceImg",src:t.getDevImage((h=s.device)==null?void 0:h.cateType)},null,8,Q),i("span",Z,p(s.deviceName),1)]),i("div",$,[c(g,{"label-position":"left","checked-color":"#FD7D28",disabled:t.initList.includes(s.userDeviceId),name:s.userDeviceId},{default:_(()=>[x(p(s.roomName),1)]),_:2},1032,["disabled","name"])])])}),128))]),_:1},8,["modelValue"])])):(n(),a("div",ee,[c(k,{"image-size":"80",description:"账号下没有设备"})]))]),D(i("div",{class:"del_text",onClick:o[2]||(o[2]=(...s)=>r.deleteRoom&&r.deleteRoom(...s))},"删除房间",512),[[L,t.homeId!=-1]])])}const te=w(O,[["render",oe],["__scopeId","data-v-9d51a6b2"]]);y(te).mount("#root");