(function(){"use strict";var n={7624:function(n,e,t){var r=t(9242),o=t(3396);const u=(0,o.Uk)("Home"),i=(0,o.Uk)(" | "),a=(0,o.Uk)("About");function c(n,e){const t=(0,o.up)("router-link"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",null,[(0,o.Wm)(t,{to:"/"},{default:(0,o.w5)((()=>[u])),_:1}),i,(0,o.Wm)(t,{to:"/about"},{default:(0,o.w5)((()=>[a])),_:1})]),(0,o.Wm)(r)],64)}var f=t(89);const s={},l=(0,f.Z)(s,[["render",c]]);var d=l,p=t(2483);const v={class:"home"},m=(0,o._)("h1",null,"苏州盟丰",-1),b=[m];function h(n,e,t,r,u,i){return(0,o.wg)(),(0,o.iD)("div",v,b)}var g={name:"HomeView",components:{}};const w=(0,f.Z)(g,[["render",h]]);var y=w;const k=[{path:"/",name:"home",component:y},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,7381))}],O=(0,p.p7)({history:(0,p.r5)(),routes:k});var j=O,_=t(65),T=(0,_.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(d).use(T).use(j).mount("#app")}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var u=e[r]={exports:{}};return n[r](u,u.exports,t),u.exports}t.m=n,function(){var n=[];t.O=function(e,r,o,u){if(!r){var i=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],u=n[s][2];for(var a=!0,c=0;c<r.length;c++)(!1&u||i>=u)&&Object.keys(t.O).every((function(n){return t.O[n](r[c])}))?r.splice(c--,1):(a=!1,u<i&&(i=u));if(a){n.splice(s--,1);var f=o();void 0!==f&&(e=f)}}return e}u=u||0;for(var s=n.length;s>0&&n[s-1][2]>u;s--)n[s]=n[s-1];n[s]=[r,o,u]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/about.d9d1cd71.js"}}(),function(){t.miniCssF=function(n){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="mengfeng-website:";t.l=function(r,o,u,i){if(n[r])n[r].push(o);else{var a,c;if(void 0!==u)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==e+u){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",e+u),a.src=r),n[r]=[o];var d=function(e,t){a.onerror=a.onload=null,clearTimeout(p);var o=n[r];if(delete n[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(n){return n(t)})),e)return e(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var n={143:0};t.f.j=function(e,r){var o=t.o(n,e)?n[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(t,r){o=n[e]=[t,r]}));r.push(o[2]=u);var i=t.p+t.u(e),a=new Error,c=function(r){if(t.o(n,e)&&(o=n[e],0!==o&&(n[e]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,o[1](a)}};t.l(i,c,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,u,i=r[0],a=r[1],c=r[2],f=0;if(i.some((function(e){return 0!==n[e]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var s=c(t)}for(e&&e(r);f<i.length;f++)u=i[f],t.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return t.O(s)},r=self["webpackChunkmengfeng_website"]=self["webpackChunkmengfeng_website"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(7624)}));r=t.O(r)})();