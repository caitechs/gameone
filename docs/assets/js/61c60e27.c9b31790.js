"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2041],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(r),u=o,m=p["".concat(c,".").concat(u)]||p[u]||h[u]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[p]="string"==typeof e?e:o,i[1]=d;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6347:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var n=r(83117),o=(r(67294),r(3905));const a={title:"Device Controller",sidebar_position:3},i=void 0,d={unversionedId:"architecture/cloud/device_controller",id:"architecture/cloud/device_controller",title:"Device Controller",description:"Device Controller Overview",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/architecture/cloud/device_controller.md",sourceDirName:"architecture/cloud",slug:"/architecture/cloud/device_controller",permalink:"/gameone/docs/architecture/cloud/device_controller",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Device Controller",sidebar_position:3},sidebar:"documentationSideBar",previous:{title:"Edge Controller",permalink:"/gameone/docs/architecture/cloud/edge_controller"},next:{title:"Edge Components",permalink:"/gameone/docs/category/edge-components"}},c={},l=[{value:"Device Controller Overview",id:"device-controller-overview",level:2},{value:"Operations Performed By Device Controller",id:"operations-performed-by-device-controller",level:2},{value:"Upstream Controller:",id:"upstream-controller",level:2},{value:"Syncing Reported Device Twin Property Update From Edge To Cloud",id:"syncing-reported-device-twin-property-update-from-edge-to-cloud",level:3},{value:"Downstream Controller:",id:"downstream-controller",level:2},{value:"Syncing Desired Device Twin Property Update From Cloud To Edge",id:"syncing-desired-device-twin-property-update-from-cloud-to-edge",level:3}],s={toc:l},p="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"device-controller-overview"},"Device Controller Overview"),(0,o.kt)("p",null,"\xa0The device controller is the cloud component of KubeEdge which is responsible for device management. Device management in KubeEdge is implemented by making use of Kubernetes\n\xa0",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"Custom Resource Definitions (CRDs)")," to describe device metadata/status and a device controller to synchronize these devices updates between edge and cloud.\n\xa0The device controller starts two separate goroutines called ",(0,o.kt)("inlineCode",{parentName:"p"},"upstream controller")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"downstream controller"),". They are not separate controllers but are just named here for clarity."),(0,o.kt)("p",null,"The device controller leverage the device model and device instance to implement device management :\n\xa0- ",(0,o.kt)("strong",{parentName:"p"},"Device Model"),": A ",(0,o.kt)("inlineCode",{parentName:"p"},"device model")," describes the device properties exposed by the device and property visitors to access these properties. A device model is like a reusable template that is used to create and manage different kinds of devices.\n\xa0Details on the device model definition can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeedge/kubeedge/tree/master/docs/proposals/device-crd.md#device-model-type-definition"},"here"),".\n\xa0- ",(0,o.kt)("strong",{parentName:"p"},"Device Instance"),": A ",(0,o.kt)("inlineCode",{parentName:"p"},"device")," instance represents an actual device object. It is like an instantiation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"device model")," and references properties defined in the model. The device spec is static while the device status contains dynamically changing like the desired state of a device property and the actual state reported by the device.\n\xa0Details on device instance definition can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeedge/kubeedge/tree/master/docs/proposals/device-crd.md#device-instance-type-definition"},"here"),"."),(0,o.kt)("p",null,"\xa0",(0,o.kt)("strong",{parentName:"p"},"Note"),": A sample of the device model and device instance for a few protocols can be found at $GOPATH/src/github.com/kubeedge/kubeedge/build/crd-samples/devices"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Device Model",src:r(5818).Z,width:"611",height:"671"})),(0,o.kt)("h2",{id:"operations-performed-by-device-controller"},"Operations Performed By Device Controller"),(0,o.kt)("p",null,"\xa0The following are the functions performed by the device controller:\n\xa0- ",(0,o.kt)("strong",{parentName:"p"},"Downstream Controller"),": Synchronize the device updates from the cloud to the edge node by watching on the K8S API server\n\xa0- ",(0,o.kt)("strong",{parentName:"p"},"Upstream Controller"),": Synchronize the device updates from the edge node to the cloud by using device twin component"),(0,o.kt)("h2",{id:"upstream-controller"},"Upstream Controller:"),(0,o.kt)("p",null,"The upstream controller watches for updates from the edge node and applies the updates against the API server in the cloud. Updates are categorized below along with the possible\nactions that the upstream controller can take:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,o.kt)("th",{parentName:"tr",align:null},"Update Type \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,o.kt)("td",{parentName:"tr",align:null},"Device Twin Reported State Updated \xa0 \xa0")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Device Upstream Controller",src:r(71284).Z,width:"631",height:"341"})),(0,o.kt)("h3",{id:"syncing-reported-device-twin-property-update-from-edge-to-cloud"},"Syncing Reported Device Twin Property Update From Edge To Cloud"),(0,o.kt)("p",null,"The mapper watches devices to update and report them to the event bus via the MQTT broker. The event bus sends the reported state of the device to the device twin which stores it locally and then syncs the updates to the cloud. The device controller watches for device updates from the edge ( via the cloudhub ) and updates the reported state to the cloud."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Device Updates Edge To Cloud",src:r(54314).Z,width:"942",height:"461"})),(0,o.kt)("h2",{id:"downstream-controller"},"Downstream Controller:"),(0,o.kt)("p",null,"The downstream controller watches for device updates against the K8S API server. Updates are categorized below along with the possible actions that the downstream controller can take:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Update Type \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"),(0,o.kt)("th",{parentName:"tr",align:null},"Action \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"New Device Model Created \xa0 \xa0 \xa0"),(0,o.kt)("td",{parentName:"tr",align:null},"\xa0NA \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"New Device Created \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"),(0,o.kt)("td",{parentName:"tr",align:null},"The controller creates a new config map to store the device properties and visitors defined in the device model associated with the device. \xa0This config map is stored in etcd. The existing config map sync mechanism in the edge controller is used to sync the config map to the edge. The mapper application running in a container can get the updated config map and use the property and visitor metadata to access the device. The device controller additionally reports the device twin metadata updates to the edge node.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Device Node Membership Updated"),(0,o.kt)("td",{parentName:"tr",align:null},"The device controller sends a membership update event to the edge node.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Device \xa0Twin Desired State Updated"),(0,o.kt)("td",{parentName:"tr",align:null},"The device controller sends a twin update event to the edge node.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Device Deleted \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"),(0,o.kt)("td",{parentName:"tr",align:null},"The controller sends the device twin delete event to delete all device twins associated with the device. It also deletes config maps associated with the device and this delete event is synced to the edge. The mapper application effectively stops operating on the device.")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Device Downstream Controller",src:r(77884).Z,width:"721",height:"401"})),(0,o.kt)("p",null,"The idea behind using config map to store device properties and visitors is that these metadata are only required by the mapper applications running on the edge node in order to connect to the device and collect data.\nMappers if run as containers can load these properties as config maps. Any additions, deletions, or updates to properties, visitors and etc in the cloud are watched upon by the downstream controller and config maps are updated in etcd.\nIf the mapper wants to discover what properties a device supports, it can get the model information from the device instance.\nAlso, it can get the protocol information to connect to the device from the device instance. Once it has access to the device model,\nit can get the properties supported by the device. In order to access the property, the mapper needs to get the corresponding visitor information.\nThis can be retrieved from the propertyVisitors list. Finally, using visitorConfig, the mapper can read/write the data associated with the property."),(0,o.kt)("h3",{id:"syncing-desired-device-twin-property-update-from-cloud-to-edge"},"Syncing Desired Device Twin Property Update From Cloud To Edge"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Device Updates Cloud To Edge",src:r(10770).Z,width:"1041",height:"561"}),"\nThe device controller watches device updates in the cloud and relays them to the edge node. These updates are stored locally by the device twin. The mapper gets these updates via the MQTT broker and operates on the device based on the updates."))}h.isMDXComponent=!0},5818:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/device-crd-model-2f1e7c5009966f7a9020431614b9aea6.png"},77884:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/device-downstream-controller-c2a09800012be0f2c75ab6e797011a51.png"},10770:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/device-updates-cloud-edge-f4639b313d30fb57d95ae9928fa167e7.png"},54314:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/device-updates-edge-cloud-d76ba9e0bb4b3ab8eb800e0dbf1b2133.png"},71284:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/device-upstream-controller-65908c629e965ca44501be4667dc918b.png"}}]);