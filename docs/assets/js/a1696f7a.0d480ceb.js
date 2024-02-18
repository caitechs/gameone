"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1549],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(83117),r=(n(67294),n(3905));const i={title:"Sedna",sidebar_position:1},o=void 0,l={unversionedId:"concept/ai/sedna",id:"concept/ai/sedna",title:"Sedna",description:"What is Sedna?",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/concept/ai/sedna.md",sourceDirName:"concept/ai",slug:"/concept/ai/sedna",permalink:"/gameone/docs/concept/ai/sedna",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Sedna",sidebar_position:1},sidebar:"documentationSideBar",previous:{title:"Edge AI",permalink:"/gameone/docs/category/edge-ai"},next:{title:"Ianvs",permalink:"/gameone/docs/concept/ai/ianvs"}},s={},d=[{value:"What is Sedna?",id:"what-is-sedna",level:2},{value:"Features",id:"features",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Sedna&#39;s edge-cloud synergy is implemented based on the following capabilities provided by KubeEdge:",id:"sednas-edge-cloud-synergy-is-implemented-based-on-the-following-capabilities-provided-by-kubeedge",level:4},{value:"Component",id:"component",level:3},{value:"GlobalManager",id:"globalmanager",level:4},{value:"LocalController",id:"localcontroller",level:4},{value:"Worker",id:"worker",level:4},{value:"Lib",id:"lib",level:4}],c={toc:d},u="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-sedna"},"What is Sedna?"),(0,r.kt)("p",null,"Sedna is an edge-cloud synergy AI project incubated in KubeEdge SIG AI. Benefiting from the edge-cloud synergy capabilities provided by KubeEdge, Sedna can implement across edge-cloud collaborative training and collaborative inference capabilities, such as joint inference, incremental learning, federated learning, and lifelong learning. Sedna supports popular AI frameworks, such as TensorFlow, Pytorch, PaddlePaddle, MindSpore."),(0,r.kt)("p",null,"Sedna can simply enable edge-cloud synergy capabilities to existing training and inference scripts, bringing the benefits of reducing costs, improving model performance, and protecting data privacy."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"Sedna has the following features\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Provide the edge-cloud synergy AI framework."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Provide dataset and model management across edge-cloud, helping developers quickly implement synergy AI applications."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Provide edge-cloud synergy training and inference frameworks."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Joint inference: under the condition of limited resources on the edge, difficult inference tasks are offloaded to the cloud to improve the overall performance, keeping the throughput."),(0,r.kt)("li",{parentName:"ul"},"Incremental training: For small samples and non-iid data on the edge, models can be adaptively optimized over time on the cloud or edge."),(0,r.kt)("li",{parentName:"ul"},"Federated learning: For those scenarios that the data being too large, or unwilling to migrate raw data to the cloud, or high privacy protection requirements, models are trained at the edge and parameters are aggregated on the cloud to resolve data silos effectively."),(0,r.kt)("li",{parentName:"ul"},"Lifelong learning: Confronted with the challenge of heterogeneous data distributions in complex scenarios and small samples on the edge, the edge-cloud synergy lifelong learning:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"leverages the cloud knowledge base which empowers the scheme with memory ability, which helps to continuously learn and accumulate historical knowledge to overcome the catastrophic forgetting challenge."),(0,r.kt)("li",{parentName:"ul"},"is essentially the combination of another two learning schemes, i.e., multi-task learning and incremental learning, so that it can learn unseen tasks with shared knowledge among various scenarios over time."))),(0,r.kt)("li",{parentName:"ul"},"etc.."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Compatibility"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Compatible with mainstream AI frameworks such as TensorFlow, Pytorch, PaddlePaddle, and MindSpore."),(0,r.kt)("li",{parentName:"ul"},"Provides extended interfaces for developers to quickly integrate third-party algorithms, and some necessary algorithms for edge-cloud synergy have been preset, such as hard sample discovering, aggregation algorithm.")))),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("h4",{id:"sednas-edge-cloud-synergy-is-implemented-based-on-the-following-capabilities-provided-by-kubeedge"},"Sedna's edge-cloud synergy is implemented based on the following capabilities provided by KubeEdge:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unified orchestration of across edge-cloud applications."),(0,r.kt)("li",{parentName:"ul"},"Router: across edge-cloud message channel in management plane."),(0,r.kt)("li",{parentName:"ul"},"EdgeMesh: across edge-cloud microservice discovery and traffic governance in data plane.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sedna_arch",src:n(48269).Z,width:"1250",height:"750"})),(0,r.kt)("h3",{id:"component"},"Component"),(0,r.kt)("p",null,"Sedna consists of the following components\uff1a"),(0,r.kt)("h4",{id:"globalmanager"},"GlobalManager"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unified edge-cloud synergy AI task management"),(0,r.kt)("li",{parentName:"ul"},"Cross edge-cloud synergy management and collaboration"),(0,r.kt)("li",{parentName:"ul"},"Central Configuration Management")),(0,r.kt)("h4",{id:"localcontroller"},"LocalController"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Local process control of edge-cloud synergy AI tasks"),(0,r.kt)("li",{parentName:"ul"},"Local general management: model, dataset, and status synchronization")),(0,r.kt)("h4",{id:"worker"},"Worker"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do inference or training, based on existing ML framework."),(0,r.kt)("li",{parentName:"ul"},"Launch on demand, imagine they are docker containers."),(0,r.kt)("li",{parentName:"ul"},"Different workers for different features."),(0,r.kt)("li",{parentName:"ul"},"Could run on edge or cloud.")),(0,r.kt)("h4",{id:"lib"},"Lib"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Expose the Edge AI features to applications, i.e. training or inference programs.")),(0,r.kt)("p",null,"More examples and description can be found from ",(0,r.kt)("a",{parentName:"p",href:"https://sedna.readthedocs.io/en/latest/"},"Sedna documents")))}p.isMDXComponent=!0},48269:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sedna_arch-fa4f138cb6b5ec603e01c1df01e6ac86.png"}}]);