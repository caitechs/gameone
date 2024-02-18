"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[622],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||a;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(83117),o=(n(67294),n(3905));const a={title:"\u8fb9\u7f18\u5185\u5b58\u5360\u7528\u6d4b\u8bd5",sidebar_position:2},i=void 0,l={unversionedId:"developer/test/memfootprint",id:"developer/test/memfootprint",title:"\u8fb9\u7f18\u5185\u5b58\u5360\u7528\u6d4b\u8bd5",description:"Why measure memory footprint?",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developer/test/memfootprint.md",sourceDirName:"developer/test",slug:"/developer/test/memfootprint",permalink:"/gameone/docs/developer/test/memfootprint",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u8fb9\u7f18\u5185\u5b58\u5360\u7528\u6d4b\u8bd5",sidebar_position:2},sidebar:"documentationSideBar",previous:{title:"\u5355\u5143\u6d4b\u8bd5",permalink:"/gameone/docs/developer/test/unit_test"},next:{title:"Bluetooth Mapper E2E Test",permalink:"/gameone/docs/developer/test/bluetooth_mapper_e2e"}},s={},p=[{value:"Why measure memory footprint?",id:"why-measure-memory-footprint",level:2},{value:"KPI&#39;s measured",id:"kpis-measured",level:2},{value:"How to test",id:"how-to-test",level:2},{value:"Test setup",id:"test-setup",level:3},{value:"Creating a setup",id:"creating-a-setup",level:3},{value:"Requirements",id:"requirements",level:4},{value:"Installation",id:"installation",level:4},{value:"Steps",id:"steps",level:3}],m={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"why-measure-memory-footprint"},"Why measure memory footprint?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This platform is designed for a light-weight edge computing deployment, capable of running on devices with few resources (for example, 256MB RAM)"),(0,o.kt)("li",{parentName:"ul"},"It is important to know when deploying many pods that it showcases as little memory footprint as possible")),(0,o.kt)("h2",{id:"kpis-measured"},"KPI's measured"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"%CPU"),(0,o.kt)("li",{parentName:"ul"},"%Memory"),(0,o.kt)("li",{parentName:"ul"},"Resident Set Size (RSS)")),(0,o.kt)("h2",{id:"how-to-test"},"How to test"),(0,o.kt)("p",null,"After deployment and provisioning of KubeEdge cloud and edge components in 2 VM's (supported and tested over Ubuntu 16.04) respectively, start deploying pods from 0 to 100 in steps of 5. Keep capturing above KPI's using standard linux ",(0,o.kt)("inlineCode",{parentName:"p"},"ps")," commands, after each step."),(0,o.kt)("h3",{id:"test-setup"},"Test setup"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"KubeEdge Test Setup",src:n(49828).Z,width:"692",height:"343"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Fig 1: KubeEdge Test Setup")),(0,o.kt)("h3",{id:"creating-a-setup"},"Creating a setup"),(0,o.kt)("h4",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Host machine's or VM's resource requirements can mirror the edge device of your choice"),(0,o.kt)("li",{parentName:"ul"},"Resources used for above setup are 4 CPU, 8GB RAM and 200 GB Disk space. OS is Ubuntu 16.04."),(0,o.kt)("li",{parentName:"ul"},"Docker image used to deploy the pods in edge, needs to be created. The steps are:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Go to github.com/kubeedge/kubeedge/edge/hack/memfootprint-test/"),(0,o.kt)("li",{parentName:"ol"},"Using the Dockerfile available here and create docker image (",(0,o.kt)("inlineCode",{parentName:"li"},"perftestimg:v1"),")."),(0,o.kt)("li",{parentName:"ol"},"Execute the docker command ",(0,o.kt)("inlineCode",{parentName:"li"},'sudo docker build --tag "perftestimg:v1" .'),", to get the image.")))),(0,o.kt)("h4",{id:"installation"},"Installation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For KubeEdge Cloud and Edge:"),(0,o.kt)("p",{parentName:"li"},"  Please follow steps mentioned in KubeEdge README.md")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For docker image:"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deploy docker registry to either edge on any VM or host which is reachable to edge. Follow the steps mentioned here: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/registry/deploying/"},"https://docs.docker.com/registry/deploying/")),(0,o.kt)("li",{parentName:"ul"},"Create ",(0,o.kt)("inlineCode",{parentName:"li"},"perftestimg:v1")," docker image on the above mentioned host"),(0,o.kt)("li",{parentName:"ul"},"Then push this image to docker registry using ",(0,o.kt)("inlineCode",{parentName:"li"},"docker tag")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"docker push")," commands (Refer: Same docker registry url mentioned above)\n","[Use this image's metadata in pod deployment yaml]")),(0,o.kt)("h3",{id:"steps"},"Steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Check edge node is connected to cloud. In cloud console/terminal, execute the below command")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"root@ubuntu:~/edge/pod_yamls# kubectl get nodes\nNAME                                   STATUS     ROLES    AGE     VERSION\n192.168.20.31                          Unknown    <none>   11s\nubuntu                                 NotReady   master   5m22s   v1.14.0\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"On cloud, modify deployment yaml (github.com/kubeedge/kubeedge/edge/hack/memfootprint-test/perftestimg.yaml), set the image name and set spec.replica as 5"),(0,o.kt)("li",{parentName:"ol"},"Execute ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo kubectl create -f ./perftestimg.yaml")," to deploy the first of 5 pods in edge node"),(0,o.kt)("li",{parentName:"ol"},"Execute ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo kubectl get pods | grep Running | wc")," to check if all the pods come to Running state. Once all pods come to running state, go to edge VM"),(0,o.kt)("li",{parentName:"ol"},"On Edge console, execute ",(0,o.kt)("inlineCode",{parentName:"li"},"ps -aux | grep edgecore"),". The output shall be something like:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"USER        PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot     102452  1.0  0.5 871704 42784 pts/0    Sl+  17:56   0:00 ./edgecore\nroot     102779  0.0  0.0  14224   936 pts/2    S+   17:56   0:00 grep --color=auto edge\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Collect %CPU, %MEM and RSS from respective columns and record"),(0,o.kt)("li",{parentName:"ol"},"Repeat step 2 and this time increase the replica by 5"),(0,o.kt)("li",{parentName:"ol"},"This time execute ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo kubectl apply -f <PATH>/perftestimg.yaml")),(0,o.kt)("li",{parentName:"ol"},"Repeat steps from ",(0,o.kt)("strong",{parentName:"li"},"4 to 6"),"."),(0,o.kt)("li",{parentName:"ol"},"Now ",(0,o.kt)("strong",{parentName:"li"},"repeat steps from 7 to 9"),", till the replica count reaches 100")))}u.isMDXComponent=!0},49828:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/perftestsetup_diagram-0d99fb98d0669b70c2eff1491e23c1b3.PNG"}}]);