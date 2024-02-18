"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const s={title:"EventBus",sidebar_position:2},i=void 0,o={unversionedId:"architecture/edge/eventbus",id:"architecture/edge/eventbus",title:"EventBus",description:"Overview",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/architecture/edge/eventbus.md",sourceDirName:"architecture/edge",slug:"/architecture/edge/eventbus",permalink:"/docs/architecture/edge/eventbus",draft:!1,editUrl:"https://github.com/kubeedge/website/blob/master/docs/architecture/edge/eventbus.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"EventBus",sidebar_position:2},sidebar:"documentationSideBar",previous:{title:"Edged",permalink:"/docs/architecture/edge/edged"},next:{title:"EdgeHub",permalink:"/docs/architecture/edge/edgehub"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Topic",id:"topic",level:2},{value:"Flow chart",id:"flow-chart",level:2},{value:"<strong>1. eventbus receives messages from external client</strong>",id:"1-eventbus-receives-messages-from-external-client",level:3},{value:"<strong>2. eventbus sends response messages to external client</strong>",id:"2-eventbus-sends-response-messages-to-external-client",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...s}=e;return(0,a.kt)(d,(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Eventbus acts as an interface for sending/receiving messages on mqtt topics."),(0,a.kt)("p",null,"It supports 3 kinds of mode:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"internalMqttMode"),(0,a.kt)("li",{parentName:"ul"},"externalMqttMode"),(0,a.kt)("li",{parentName:"ul"},"bothMqttMode")),(0,a.kt)("h2",{id:"topic"},"Topic"),(0,a.kt)("p",null,"eventbus subscribes to the following topics:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- $hw/events/upload/#\n- SYS/dis/upload_records\n- SYS/dis/upload_records/+\n- $hw/event/node/+/membership/get\n- $hw/event/node/+/membership/get/+\n- $hw/events/device/+/state/update\n- $hw/events/device/+/state/update/+\n- $hw/event/device/+/twin/+\n")),(0,a.kt)("p",null,"Note: topic wildcards"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"wildcard"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"#"),(0,a.kt)("td",{parentName:"tr",align:null},"It must be the last character in the topic, and matches the current tree and all subtrees.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"+"),(0,a.kt)("td",{parentName:"tr",align:null},"It matches exactly one item in the topic tree.")))),(0,a.kt)("h2",{id:"flow-chart"},"Flow chart"),(0,a.kt)("h3",{id:"1-eventbus-receives-messages-from-external-client"},(0,a.kt)("strong",{parentName:"h3"},"1. eventbus receives messages from external client")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"eventbus sends messages from external client",src:n(79341).Z,width:"717",height:"519"})),(0,a.kt)("h3",{id:"2-eventbus-sends-response-messages-to-external-client"},(0,a.kt)("strong",{parentName:"h3"},"2. eventbus sends response messages to external client")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"eventbus sends response messages to external client",src:n(95547).Z,width:"715",height:"500"})),(0,a.kt)("p",null,"The flow is almost the same in internal mode except the eventbus is as message broker itself."))}p.isMDXComponent=!0},79341:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/eventbus-handleMsgFromClient-bf4b0a962692d47d62a6cd77efc701f0.jpg"},95547:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/eventbus-handleResMsgToClient-d0c77f56174cf8f969a0c98b6f55cca0.jpg"}}]);