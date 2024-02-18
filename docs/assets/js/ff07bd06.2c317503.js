"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[864],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(r),v=i,m=p["".concat(s,".").concat(v)]||p[v]||d[v]||o;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=v;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},72512:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=r(83117),i=(r(67294),r(3905));const o={title:"ServiceBus",sidebar_position:6},c=void 0,a={unversionedId:"architecture/edge/servicebus",id:"architecture/edge/servicebus",title:"ServiceBus",description:"Overview",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/architecture/edge/servicebus.md",sourceDirName:"architecture/edge",slug:"/architecture/edge/servicebus",permalink:"/docs/architecture/edge/servicebus",draft:!1,editUrl:"https://github.com/kubeedge/website/blob/master/docs/architecture/edge/servicebus.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"ServiceBus",sidebar_position:6},sidebar:"documentationSideBar",previous:{title:"MetaManager",permalink:"/docs/architecture/edge/metamanager"},next:{title:"Core Concept",permalink:"/docs/category/core-concept"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Working",id:"working",level:2}],l={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"ServiceBus is an HTTP client to interact with HTTP servers (REST), offering HTTP client capabilities to components of the cloud to reach HTTP servers running at the edge."),(0,i.kt)("p",null,"The design is exactly similar to that of EventBus. "),(0,i.kt)("p",null,"EventBus is used to communicate with applications running on edge via MQTT. Similarly, ServiceBus is used to communicate with applications running on edge via HTTP. "),(0,i.kt)("h2",{id:"working"},"Working"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cloud sends a beehive message to Edge via CloudHub."),(0,i.kt)("li",{parentName:"ul"},"EdgeHub receives the messages and sends them to ServiceBus."),(0,i.kt)("li",{parentName:"ul"},"ServiceBus just makes the HTTP call and sends the response to the cloud via EdgeHub.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ServiceBus flowchart",src:r(49587).Z,width:"668",height:"261"})))}d.isMDXComponent=!0},49587:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/servicebus-flowchart-d2fdef727f1e26e32dafb8cf7a4ec388.png"}}]);