"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8307],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80055:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(83117),a=(r(67294),r(3905));const o={title:"Edge Controller",sidebar_position:2},l=void 0,i={unversionedId:"architecture/cloud/edge_controller",id:"architecture/cloud/edge_controller",title:"Edge Controller",description:"Edge Controller Overview",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/architecture/cloud/edge_controller.md",sourceDirName:"architecture/cloud",slug:"/architecture/cloud/edge_controller",permalink:"/gameone/docs/architecture/cloud/edge_controller",draft:!1,editUrl:"https://github.com/kubeedge/website/blob/master/docs/architecture/cloud/edge_controller.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Edge Controller",sidebar_position:2},sidebar:"documentationSideBar",previous:{title:"CloudHub",permalink:"/gameone/docs/architecture/cloud/cloudhub"},next:{title:"Device Controller",permalink:"/gameone/docs/architecture/cloud/device_controller"}},s={},d=[{value:"Edge Controller Overview",id:"edge-controller-overview",level:2},{value:"Operations Performed By Edge Controller",id:"operations-performed-by-edge-controller",level:2},{value:"Downstream Controller:",id:"downstream-controller",level:2},{value:"Sync add/update/delete event to edge",id:"sync-addupdatedelete-event-to-edge",level:3},{value:"Upstream Controller:",id:"upstream-controller",level:2},{value:"Sync watch and update status of resource and events",id:"sync-watch-and-update-status-of-resource-and-events",level:3},{value:"Controller Manager:",id:"controller-manager",level:2},{value:"Creates manager interface and implements ConfigmapManager, LocationCache and podManager",id:"creates-manager-interface-and-implements-configmapmanager-locationcache-and-podmanager",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"edge-controller-overview"},"Edge Controller Overview"),(0,a.kt)("p",null,"\xa0EdgeController is the bridge between Kubernetes Api-Server and edgecore"),(0,a.kt)("h2",{id:"operations-performed-by-edge-controller"},"Operations Performed By Edge Controller"),(0,a.kt)("p",null,"The following are the functions performed by Edge controller:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Downstream Controller: Sync add/update/delete event to edgecore from K8s Api-server"),(0,a.kt)("li",{parentName:"ul"},"Upstream Controller: Sync watch and update the status of resource and events(node, pod and configmap) to K8s Api-server and also subscribe message from edgecore"),(0,a.kt)("li",{parentName:"ul"},"Controller Manager: Creates manager interface which implements events for managing ConfigmapManager, LocationCache and podManager")),(0,a.kt)("h2",{id:"downstream-controller"},"Downstream Controller:"),(0,a.kt)("h3",{id:"sync-addupdatedelete-event-to-edge"},"Sync add/update/delete event to edge"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Downstream controller: Watches K8S Api-server and sends updates to edgecore via cloudHub"),(0,a.kt)("li",{parentName:"ul"},"Sync (pod, configmap, secret) add/update/delete event to edge via cloudHub"),(0,a.kt)("li",{parentName:"ul"},"Creates Respective manager (pod, configmap, secret) for handling events by calling manager interface"),(0,a.kt)("li",{parentName:"ul"},"Locates configmap and secret should be send to which node")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Downstream Controller",src:r(8698).Z,width:"832",height:"588"})),(0,a.kt)("h2",{id:"upstream-controller"},"Upstream Controller:"),(0,a.kt)("h3",{id:"sync-watch-and-update-status-of-resource-and-events"},"Sync watch and update status of resource and events"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"UpstreamController receives messages from edgecore and syncs the updates to K8S-Api-server"),(0,a.kt)("li",{parentName:"ul"},"Creates stop channel to dispatch and stop event to handle pods, configMaps, node and secrets"),(0,a.kt)("li",{parentName:"ul"},"Creates message channel to update Nodestatus, Podstatus, Secret and configmap related events"),(0,a.kt)("li",{parentName:"ul"},"Gets pod condition information like Ready, Initialized, Podscheduled and Unschedulable details"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Below is the information for PodCondition"),"\n\xa0 \xa0- ",(0,a.kt)("strong",{parentName:"li"},"Ready"),": PodReady means the pod is able to service requests and should be added to the load balancing pools for all matching services\n\xa0 \xa0- ",(0,a.kt)("strong",{parentName:"li"},"PodScheduled"),": It represents the status of the scheduling process for this pod\n\xa0 \xa0- ",(0,a.kt)("strong",{parentName:"li"},"Unschedulable"),": It means the scheduler cannot schedule the pod right now, maybe due to insufficient resources in the cluster\n\xa0 \xa0- ",(0,a.kt)("strong",{parentName:"li"},"Initialized"),": It means that all Init containers in the pod have started successfully\n\xa0 \xa0- ",(0,a.kt)("strong",{parentName:"li"},"ContainersReady"),": It indicates whether all containers in the pod are ready"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Below is the information for PodStatus"),"\n\xa0 \xa0- ",(0,a.kt)("strong",{parentName:"li"},"PodPhase"),": Current condition of the pod\n\xa0 \xa0- ",(0,a.kt)("strong",{parentName:"li"},"Conditions"),": Details indicating why the pod is in this condition\n\xa0 \xa0- ",(0,a.kt)("strong",{parentName:"li"},"HostIP"),": IP address of the host to which pod is assigned\n\xa0 \xa0- ",(0,a.kt)("strong",{parentName:"li"},"PodIp"),": IP address allocated to the Pod\n\xa0 \xa0- ",(0,a.kt)("strong",{parentName:"li"},"QosClass"),": Assigned to the pod based on resource requirement")),(0,a.kt)("p",null,"\xa0 \xa0",(0,a.kt)("img",{alt:"Upstream Controller",src:r(17450).Z,width:"821",height:"582"})),(0,a.kt)("h2",{id:"controller-manager"},"Controller Manager:"),(0,a.kt)("h3",{id:"creates-manager-interface-and-implements-configmapmanager-locationcache-and-podmanager"},"Creates manager interface and implements ConfigmapManager, LocationCache and podManager"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Manager defines the interface of a manager, ConfigManager, Podmanager, secretmanager implements it"),(0,a.kt)("li",{parentName:"ul"},"Manages OnAdd, OnUpdate and OnDelete events which will be updated to the respective edge node from the K8s Api-server"),(0,a.kt)("li",{parentName:"ul"},"Creates an eventManager(configMaps, pod, secrets) which will start a CommonResourceEventHandler, NewListWatch and a newShared Informer for each event to sync(add/update/delete)event(pod, configmap, secret) to edgecore via cloudHub"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Below is the List of handlers created by the controller Manager"),"\n\xa0 \xa0- ",(0,a.kt)("strong",{parentName:"li"},"CommonResourceEventHandler"),": NewcommonResourceEventHandler creates CommonResourceEventHandler which is used for Configmap and pod Manager\n\xa0 \xa0- ",(0,a.kt)("strong",{parentName:"li"},"NewListWatch"),": Creates a new ListWatch from the specified client resource namespace and field selector\n\xa0 \xa0- ",(0,a.kt)("strong",{parentName:"li"},"NewSharedInformer"),": Creates a new Instance for the Listwatcher")))}u.isMDXComponent=!0},8698:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/DownstreamController-2e3060a0850ae04dcb87e65823be5e17.png"},17450:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/UpstreamController-97679f62f7b89f30a6ba6e4725403f63.png"}}]);