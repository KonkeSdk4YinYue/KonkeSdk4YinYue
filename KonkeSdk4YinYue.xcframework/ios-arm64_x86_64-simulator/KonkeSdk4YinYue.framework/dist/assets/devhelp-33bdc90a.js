import{_ as d,c as h,a as l,f as a,w as m,o as u,d as g,p as f,e as x,g as v}from"./_plugin-vue_export-helper-847bea74.js";import"./index-2a9d5afa.js";/* empty css              */import{B as k}from"./index-322a7d21.js";import{I}from"./index-e6c0668b.js";import{_ as w}from"./nav-bar-d6d54b8f.js";import{C as y,D as T,j as b}from"./api-35f7d62a.js";import{a as p}from"./function-call-4b348ee5.js";import"./use-route-ace4965a.js";import"./index-5f54bfde.js";import"./use-expose-9f775875.js";import"./index-fdc8010c.js";import"./use-touch-b5fdabb1.js";const C={name:"KonkeSdk4YinYueSrcApp",data(){return{typeId:280,helpImg:"http://app2test.ikonke.com/upload/cdn/images/20210120/16111488826741.png",helpText:"1.先长戳SET网络键5秒，再短戳SET键"}},mounted(){this.getParams(),this.loadHelp()},methods:{onClickLeft(){window.__jsb.pop()},getParams(){let e={},o=window.location.search;if(o.indexOf("?")<0)return e;o=o.split("?")[1];let n=o.split("&");for(let t=0;t<n.length;t++){let s=n[t].split("=");e[s[0]]=s[1]}console.log(e),this.typeId=e.typeId},loadHelp(){y(this.typeId).then(e=>{this.helpImg=T+e.data.helpful.imgs,this.helpText=e.data.helpful.content,console.log("img",this.helpImg,"text",this.helpText)}).catch(e=>console.log(e))},next(){b().then(e=>{if(e.data.userDeviceList==null||e.data.userDeviceList.length==0){p("请用扫一扫添加网关");return}window.__jsb.push({route:"network-zigbee"})}).cache(e=>p(e))}}},L=e=>(f("data-v-7642c5a2"),e=e(),x(),e),S={class:"home"},B={class:"dev_img"},D=L(()=>a("div",{class:"help_text_hint"},null,-1)),H=["innerHTML"],j={class:"next_btn"};function A(e,o,r,n,t,i){const s=w,c=I,_=k;return u(),h("div",S,[l(s,{class:"nav_bar",title:"添加帮助",onClickLeft:i.onClickLeft},null,8,["onClickLeft"]),a("div",B,[l(c,{width:"210px",height:"210px",src:t.helpImg},null,8,["src"])]),D,a("div",{class:"help_text",innerHTML:t.helpText},null,8,H),a("div",j,[l(_,{round:"",onClick:i.next,color:"#FD7D28",type:"primary",size:"large"},{default:m(()=>[g("下一步 ")]),_:1},8,["onClick"])])])}const E=d(C,[["render",A],["__scopeId","data-v-7642c5a2"]]);v(E).mount("#root");
