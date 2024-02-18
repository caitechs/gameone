"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5942],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),l=d(n),m=o,b=l["".concat(p,".").concat(m)]||l[m]||u[m]||r;return n?i.createElement(b,s(s({ref:t},c),{},{components:n})):i.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[l]="string"==typeof e?e:o,s[1]=a;for(var d=2;d<r;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(83117),o=(n(67294),n(3905));const r={title:"Message Topics",sidebar_position:5},s=void 0,a={unversionedId:"developer/message_topics",id:"developer/message_topics",title:"Message Topics",description:"KubeEdge uses MQTT for communication between deviceTwin and devices/apps.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developer/message_topics.md",sourceDirName:"developer",slug:"/developer/message_topics",permalink:"/gameone/docs/developer/message_topics",draft:!1,editUrl:"https://github.com/kubeedge/website/blob/master/docs/developer/message_topics.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Message Topics",sidebar_position:5},sidebar:"documentationSideBar",previous:{title:"Modbus",permalink:"/gameone/docs/developer/mappers/modbus"},next:{title:"\u6545\u969c\u6392\u9664",permalink:"/gameone/docs/developer/troubleshooting"}},p={},d=[{value:"Subscribe Topics",id:"subscribe-topics",level:2}],c={toc:d},l="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"KubeEdge uses MQTT for communication between deviceTwin and devices/apps.\nEventBus can be started in multiple MQTT modes and acts as an interface for sending/receiving messages on relevant MQTT topics."),(0,o.kt)("p",null,"The purpose of this document is to describe the topics which KubeEdge uses for communication.\nPlease read ",(0,o.kt)("a",{parentName:"p",href:"../architecture/beehive"},"Beehive documentation")," for understanding about message format used by KubeEdge."),(0,o.kt)("h2",{id:"subscribe-topics"},"Subscribe Topics"),(0,o.kt)("p",null,"On starting EventBus, it subscribes to these 5 topics:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'1. "$hw/events/node/+/membership/get"\n2. "$hw/events/device/+/state/update"\n3. "$hw/events/device/+/twin/+"\n4. "$hw/events/upload/#"\n5. "SYS/dis/upload_records"\n6. "$ke/events/+/device/data/update"\n')),(0,o.kt)("p",null,"If the message is received on first 3 topics, the message is sent to deviceTwin, else the message is sent to cloud via edgeHub."),(0,o.kt)("p",null,"We will focus on the message expected on the first 3 topics."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},'"$hw/events/node/+/membership/get"'),":\nThis topic is used to get membership details of a node i.e the devices that are associated with the node.\nThe response of the message is published on ",(0,o.kt)("inlineCode",{parentName:"p"},'"$hw/events/node/+/membership/get/result"')," topic.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},'"$hw/events/device/+/state/update"'),":\nThis topic is used to update the state of the device. + symbol can be replaced with ID of the device whose state is to be updated.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},'"$hw/events/device/+/twin/+"'),":\nThe two + symbols can be replaced by the deviceID on whose twin the operation is to be performed and any one of(update,cloud_updated,get) respectively.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},'"$ke/events/device/+/data/update"'),"\nThis topic is add in KubeEdge v1.4, and used for delivering time-serial data. This topic is not processed by edgecore, instead, they\nshould be processed by third-party component on edge node such as EMQ Kuiper."))),(0,o.kt)("p",null,"The content of data topic should conform to following format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "event_id": "123e4567-e89b-12d3-a456-426655440000",\n    "timestamp": 1597213444,\n    "data": {\n        "propertyName1": {\n            "value": "123",\n            "metadata": {\n                "timestamp": 1597213444, //+optional\n                "type": "int"\n            }\n        },\n        "propertyName2": {\n            "value": "456",\n            "metadata": {\n                "timestamp": 1597213444,\n                "type": "int"\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Following is the explanation of the three suffix used:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"update"),": this suffix is used to update the twin for the deviceID."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"cloud_updated"),": this suffix is used to sync the twin status between edge and cloud."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"get"),": is used to get twin status of a device. The response is published on ",(0,o.kt)("inlineCode",{parentName:"li"},'"$hw/events/device/+/twin/get/result"')," topic.")))}u.isMDXComponent=!0}}]);