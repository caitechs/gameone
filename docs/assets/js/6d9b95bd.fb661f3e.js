"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},97807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(83117),r=(n(67294),n(3905));const i={title:"EdgeHub",sidebar_position:3},a=void 0,s={unversionedId:"architecture/edge/edgehub",id:"architecture/edge/edgehub",title:"EdgeHub",description:"Overview",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/architecture/edge/edgehub.md",sourceDirName:"architecture/edge",slug:"/architecture/edge/edgehub",permalink:"/gameone/docs/architecture/edge/edgehub",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"EdgeHub",sidebar_position:3},sidebar:"documentationSideBar",previous:{title:"EventBus",permalink:"/gameone/docs/architecture/edge/eventbus"},next:{title:"DeviceTwin",permalink:"/gameone/docs/architecture/edge/devicetwin"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Keep Alive",id:"keep-alive",level:2},{value:"Publish Client Info",id:"publish-client-info",level:2},{value:"Route To Cloud",id:"route-to-cloud",level:2},{value:"Route To Edge",id:"route-to-edge",level:2},{value:"Usage",id:"usage",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Edge hub is responsible for interacting with CloudHub component present in the cloud. It can connect to the CloudHub using either a web-socket connection or using ",(0,r.kt)("a",{parentName:"p",href:"https://quicwg.org/ops-drafts/draft-ietf-quic-applicability.html"},"QUIC")," protocol.\nIt supports functions like sync cloud side resources update, report edged side host and device status changes."),(0,r.kt)("p",null,"It acts as the communication link between the edge and the cloud.\nIt forwards the messages received from the cloud to the corresponding module at the edge and vice-versa."),(0,r.kt)("p",null,"The main functions performed by edgehub are :-"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Keep Alive"),(0,r.kt)("li",{parentName:"ul"},"Publish Client Info"),(0,r.kt)("li",{parentName:"ul"},"Route to Cloud"),(0,r.kt)("li",{parentName:"ul"},"Route to Edge")),(0,r.kt)("h2",{id:"keep-alive"},"Keep Alive"),(0,r.kt)("p",null,"A keep-alive message or heartbeat is sent to cloudHub after every heartbeatPeriod."),(0,r.kt)("h2",{id:"publish-client-info"},"Publish Client Info"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The main responsibility of publish client info is to inform the other groups or modules regarding the status of connection to the cloud.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It sends a beehive message to all groups (namely metaGroup, twinGroup and busGroup), informing them whether cloud is connected or disconnected."))),(0,r.kt)("h2",{id:"route-to-cloud"},"Route To Cloud"),(0,r.kt)("p",null,"The main responsibility of route to cloud is to receive from the other modules (through beehive framework), all the\nmessages that are to be sent to the cloud, and send them to cloudHub through the websocket connection."),(0,r.kt)("p",null,"The major steps involved in this process are as follows :-"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Continuously receive messages from beehive Context")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Send that message to cloudHub")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the message received is a sync message then :"),(0,r.kt)("p",{parentName:"li"},"3.1 If response is received on syncChannel then it creates a map","[string]"," chan containing the messageID of the message as key"),(0,r.kt)("p",{parentName:"li"},"3.2 It waits for one heartbeat period to receive a response on the channel created, if it does not receive any response on the channel within the specified time then it times out."),(0,r.kt)("p",{parentName:"li"},"3.3 The response received on the channel is sent back to the module using the SendResponse() function."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Route to Cloud",src:n(26124).Z,width:"772",height:"412"})),(0,r.kt)("h2",{id:"route-to-edge"},"Route To Edge"),(0,r.kt)("p",null,"The main responsibility of route to edge is to receive messages from the cloud (through the websocket connection) and\nsend them to the required groups through the beehive framework."),(0,r.kt)("p",null,"The major steps involved in this process are as follows :-"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Receive message from cloudHub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check whether the route group of the message is found.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check if it is a response to a SendSync() function.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If it is not a response message then the message is sent to the required group")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If it is a response message then the message is sent to the syncKeep channel"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Route to Edge",src:n(86648).Z,width:"772",height:"402"})),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"EdgeHub can be configured to communicate in two ways as mentioned below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Through websocket protocol"),": Click ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubeedge/kubeedge/tree/master/docs/proposals/quic-design.md#edgehub-connect-to-cloudhub-through-websocket-protocol"},"here")," for details."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Through QUIC protocol"),": Click ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubeedge/kubeedge/tree/master/docs/proposals/quic-design.md#edgehub-connect-to-cloudhub-through-quic"},"here")," for details.")))}d.isMDXComponent=!0},26124:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/route-to-cloud-61e8d45c054115449b3ed62fb284e5a9.png"},86648:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/route-to-edge-148509e7205989c6793a0f1880cdd030.png"}}]);