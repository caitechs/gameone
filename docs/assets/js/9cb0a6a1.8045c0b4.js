"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3988],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(83117),r=(n(67294),n(3905));const a={title:"Modbus",sidebar_position:2},i=void 0,l={unversionedId:"developer/mappers/modbus",id:"developer/mappers/modbus",title:"Modbus",description:"Introduction",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developer/mappers/modbus.md",sourceDirName:"developer/mappers",slug:"/developer/mappers/modbus",permalink:"/gameone/docs/developer/mappers/modbus",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Modbus",sidebar_position:2},sidebar:"documentationSideBar",previous:{title:"Bluetooth",permalink:"/gameone/docs/developer/mappers/bluetooth"},next:{title:"Message Topics",permalink:"/gameone/docs/developer/message_topics"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Running the mapper",id:"running-the-mapper",level:2},{value:"Building the modbus mapper",id:"building-the-modbus-mapper",level:3},{value:"Deploying modbus mapper application",id:"deploying-modbus-mapper-application",level:3},{value:"Modules",id:"modules",level:2},{value:"Controller",id:"controller",level:3},{value:"Modbus Manager",id:"modbus-manager",level:3},{value:"Devicetwin Manager",id:"devicetwin-manager",level:3},{value:"File Watcher",id:"file-watcher",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Mapper is an application that is used to connect and control devices. This is an implementation of mapper for\nModbus protocol. The aim is to create an application through which users can easily operate devices using ModbusTCP/ModbusRTU protocol for communication to the KubeEdge platform. The user is required to provide the mapper with the information required to control their device through the dpl configuration file. These can be changed at runtime by updating configmap."),(0,r.kt)("h2",{id:"running-the-mapper"},"Running the mapper"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Please ensure that Modbus device is connected to your edge node")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set 'modbus=true' label for the node (This label is a prerequisite for the scheduler to schedule modbus_mapper pod on the node)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl label nodes <name-of-node> modbus=true\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build and deploy the mapper by following the steps given below."))),(0,r.kt)("h3",{id:"building-the-modbus-mapper"},"Building the modbus mapper"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd $GOPATH/src/github.com/kubeedge/kubeedge/mappers/modbus_mapper\nmake # or `make modbus_mapper`\ndocker tag modbus_mapper:v1.0 <your_dockerhub_username>/modbus_mapper:v1.0\ndocker push <your_dockerhub_username>/modbus_mapper:v1.0\n\nNote: Before trying to push the docker image to the remote repository please ensure that you have signed into docker from your node, if not please type the following command to sign in\ndocker login\n# Please enter your username and password when prompted\n")),(0,r.kt)("h3",{id:"deploying-modbus-mapper-application"},"Deploying modbus mapper application"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd $GOPATH/src/github.com/kubeedge/kubeedge/mappers/modbus_mapper\n\n# Please enter the following details in the deployment.yaml :-\n#    1. Replace <edge_node_name> with the name of your edge node at spec.template.spec.voluems.configMap.name\n#    2. Replace <your_dockerhub_username> with your dockerhub username at spec.template.spec.containers.image\n\nkubectl create -f deployment.yaml\n")),(0,r.kt)("h2",{id:"modules"},"Modules"),(0,r.kt)("p",null,"The modbus mapper consists of the following four major modules :-"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Controller"),(0,r.kt)("li",{parentName:"ol"},"Modbus Manager"),(0,r.kt)("li",{parentName:"ol"},"Devicetwin Manager"),(0,r.kt)("li",{parentName:"ol"},"File Watcher")),(0,r.kt)("h3",{id:"controller"},"Controller"),(0,r.kt)("p",null," The main entry is index.js. The controller module is responsible for subscribing edge MQTT devicetwin topic and perform check/modify operation on connected modbus devices. The controller is also responsible for loading the configuration and starting the other modules. The controller first connects the MQTT client to the broker to receive message of expected devicetwin value (using the mqtt configurations in conf.json), it then connects to the devices and check all the properties of devices every 2 seconds (based on dpl configuration provided in the configuration file) and the file watcher runs parallelly to check whether the dpl configuration file is changed."),(0,r.kt)("h3",{id:"modbus-manager"},"Modbus Manager"),(0,r.kt)("p",null," Modbus Manager is a component which can perform an read or write action on modbus device. The following are the main responsibilities of this component:"),(0,r.kt)("p",null," a) When controller receives message of expected devicetwin value, Modbus Manager will connect to the device and change the registers to make actual state equal to expected."),(0,r.kt)("p",null," b) When controller checks all the properties of devices, Modbus Manager will connect to the device and read the actual value in registers according to the dpl configuration."),(0,r.kt)("h3",{id:"devicetwin-manager"},"Devicetwin Manager"),(0,r.kt)("p",null," Devicetwin Manager is a component which can transfer the edge devicetwin message. The following are the main responsibilities of this component:"),(0,r.kt)("p",null," a) To receive the edge devicetwin message from edge mqtt broker and parse message."),(0,r.kt)("p",null," b) To report the actual value of device properties in devicetwin format to the cloud."),(0,r.kt)("h3",{id:"file-watcher"},"File Watcher"),(0,r.kt)("p",null," File Watcher is a component which can load dpl and mqtt configuration from configuration files.The following are the main responsibilities of this component:"),(0,r.kt)("p",null," a) To monitor the dpl configuration file. If this file changed, file watcher will reload the dpl configuration to the mapper."),(0,r.kt)("p",null," b) To load dpl and mqtt configuration when mapper starts first time."))}u.isMDXComponent=!0}}]);