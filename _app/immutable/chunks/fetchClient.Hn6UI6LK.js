import{s as T,f as p,n as m,o as d,a as C}from"./scheduler.DK69kJ6-.js";import{S as P,i as A,e as y,t as g,c as E,a as S,b as j,d as _,k as f,g as v,h as w,j as L}from"./index.D-H-vU15.js";const I="san-3jshd7-token",z="san-m85naG-expiry",u="http://localhost:8000";function O(s){let t,e,a,n,o;return{c(){t=y("div"),e=y("p"),a=g(s[3]),this.h()},l(r){t=E(r,"DIV",{class:!0});var i=S(t);e=E(i,"P",{class:!0});var h=S(e);a=j(h,s[3]),h.forEach(_),i.forEach(_),this.h()},h(){f(e,"class",n=p(`loader__character ${s[0]&&"--small"} ${s[1]&&"--white"}`)+" svelte-18o11e6"),f(t,"class",o=p(`loader ${s[2]&&"--small-margin"}`)+" svelte-18o11e6")},m(r,i){v(r,t,i),w(t,e),w(e,a)},p(r,[i]){i&8&&L(a,r[3]),i&3&&n!==(n=p(`loader__character ${r[0]&&"--small"} ${r[1]&&"--white"}`)+" svelte-18o11e6")&&f(e,"class",n),i&4&&o!==(o=p(`loader ${r[2]&&"--small-margin"}`)+" svelte-18o11e6")&&f(t,"class",o)},i:m,o:m,d(r){r&&_(t)}}}function b(s,t,e){let{isSmall:a=!1}=t,{isWhite:n=!1}=t,{smallMargin:o=!1}=t,r=["⚀","⚁","⚂","⚃","⚄","⚅"],i="⚀",h;return d(()=>{h=setInterval(()=>{e(3,i=r[Math.floor(Math.random()*r.length)])},350)}),C(()=>{clearInterval(h)}),s.$$set=c=>{"isSmall"in c&&e(0,a=c.isSmall),"isWhite"in c&&e(1,n=c.isWhite),"smallMargin"in c&&e(2,o=c.smallMargin)},[a,n,o,i]}class R extends P{constructor(t){super(),A(this,t,b,O,T,{isSmall:0,isWhite:1,smallMargin:2})}}var l=(s=>(s.POST="POST",s.GET="GET",s.PATCH="PATCH",s.DELETE="DELETE",s))(l||{});const D=s=>{let t={};return s.is_published__list&&(t={...t,is_published__list:s.is_published__list.join(",")}),new URLSearchParams(t)},W=async(s,t)=>await fetch(`${u}/api${s}`,{method:l.POST,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(async a=>{if(a.status!==200)throw new Error(a.statusText);const n=a.status,o=await a.json();return{status:n,data:o}}),$=async s=>await fetch(`${u}/api${s}`,{method:l.GET,headers:{"Content-Type":"application/json"}}).then(async e=>{if(e.status!==200)throw new Error(e.statusText);const a=e.status,n=await e.json();return{status:a,data:n}}),k=async(s,t,e)=>{const a=e?D(e):"";return await fetch(`${u}/api${s}?${a}`,{method:l.GET,headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"}}).then(async o=>{if(o.status!==200)throw new Error(o.statusText);const r=o.status,i=await o.json();return{status:r,data:i}})},x=async(s,t,e)=>await fetch(`${u}/api${s}`,{method:l.POST,headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify(e)}).then(async n=>{if(n.status!==200)throw new Error(n.statusText);const o=n.status,r=await n.json();return{status:o,id:r.id}}),M=async(s,t,e)=>await fetch(`${u}/api${s}`,{method:l.PATCH,headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify(e)}).then(async n=>{if(n.status!==200)throw new Error(n.statusText);return{status:n.status}}),N=async(s,t)=>await fetch(`${u}/api${s}`,{method:l.DELETE,headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"}}).then(async a=>{if(a.status!==200)throw new Error(a.statusText);return{status:a.status}});export{R as L,I as P,k as a,W as b,z as c,$ as d,M as e,x as f,N as g};
