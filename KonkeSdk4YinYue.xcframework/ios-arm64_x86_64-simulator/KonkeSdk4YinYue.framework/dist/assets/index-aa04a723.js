import{z as u,c as m,m as r,l as p,t as S,A as h,w}from"./index-f4bb52ea.js";import{u as D}from"./use-expose-f66499b2.js";import{j as H,l as v,m as C,a as g}from"./_plugin-vue_export-helper-4adca727.js";function x(e,i){const{days:n}=i;let{hours:s,minutes:c,seconds:l,milliseconds:t}=i;if(e.includes("DD")?e=e.replace("DD",u(n)):s+=n*24,e.includes("HH")?e=e.replace("HH",u(s)):c+=s*60,e.includes("mm")?e=e.replace("mm",u(c)):l+=c*60,e.includes("ss")?e=e.replace("ss",u(l)):t+=l*1e3,e.includes("S")){const a=u(t,3);e.includes("SSS")?e=e.replace("SSS",a):e.includes("SS")?e=e.replace("SS",a.slice(0,2)):e=e.replace("S",a.charAt(0))}return e}const[P,N]=m("count-down"),k={time:r(0),format:p("HH:mm:ss"),autoStart:S,millisecond:Boolean};var A=H({name:P,props:k,emits:["change","finish"],setup(e,{emit:i,slots:n}){const{start:s,pause:c,reset:l,current:t}=h({time:+e.time,millisecond:e.millisecond,onChange:o=>i("change",o),onFinish:()=>i("finish")}),a=v(()=>x(e.format,t.value)),d=()=>{l(+e.time),e.autoStart&&s()};return C(()=>e.time,d,{immediate:!0}),D({start:s,pause:c,reset:d}),()=>g("div",{role:"timer",class:N()},[n.default?n.default(t.value):a.value])}});const y=w(A);export{y as C};