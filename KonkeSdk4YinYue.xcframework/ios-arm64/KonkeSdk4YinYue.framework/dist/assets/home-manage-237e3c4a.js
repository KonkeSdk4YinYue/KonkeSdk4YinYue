import{_ as g,c as a,b as i,F as w,r as f,w as _,o as t,d as h,u as k,i as v,h as H}from"./_plugin-vue_export-helper-c6b04c4a.js";import{I as y}from"./index-31b7c571.js";/* empty css              */import{B as b}from"./index-d3b5ffb9.js";import{C}from"./index-7bc1b107.js";import{_ as A}from"./nav-bar-721d5a93.js";import{m as x}from"./api-c9e9a0cd.js";import"./use-route-3612c525.js";import"./index-22da9197.js";const B={name:"KonkeSdk4YinYueSrcApp",data(){return{homes:[],currentHome:{}}},mounted(){this.getHomes(),window.__eventBus.on("viewDidAppear",()=>{this.getHomes()})},methods:{changeHome(e){this.currentHome=e,window.__homeId=e.homeId,window.__jsb.setUserDefaults({key:"homeId",value:e.homeId}),localStorage.setItem("homeId",e.homeId)},async getHomes(){try{const{data:e}=await x();if(this.homes=(e==null?void 0:e.homeList)||[],this.homes.length>0){const m=this.homes.map(o=>o.homeId+""),n=localStorage.getItem("homeId")||"";m.includes(n)?window.__homeId=n:(window.__homeId=this.homes[0].homeId,localStorage.setItem("homeId",this.homes[0].homeId)),this.currentHome=this.homes.find(o=>o.homeId==window.__homeId)}else this.currentHome={}}catch(e){console.log(e)}},onAddNew(){window.__jsb.push({route:"home-create"})}}},D={class:"home-manage"};function F(e,m,n,o,r,c){const d=A,l=y,p=C,u=b;return t(),a("div",D,[i(d,{title:"家庭管理","right-text":"新建",onClickRight:c.onAddNew},null,8,["onClickRight"]),(t(!0),a(w,null,f(r.homes,(s,I)=>(t(),h(p,{key:I,title:s.homeName,size:"large",onClick:S=>c.changeHome(s)},{"right-icon":_(()=>[r.currentHome.homeId==s.homeId?(t(),h(l,{key:0,name:"success",color:"#FD7D28"})):k("",!0)]),_:2},1032,["title","onClick"]))),128)),i(u,{type:"primary",color:"#FD7D28FF",class:"manage-button"},{default:_(()=>[v("家庭管理")]),_:1})])}const N=g(B,[["render",F],["__scopeId","data-v-abe05217"]]);H(N).mount("#root");