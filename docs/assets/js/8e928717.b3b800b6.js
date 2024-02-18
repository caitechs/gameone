"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(83117),o=(n(67294),n(3905));const i={title:"\u793e\u533a\u6cbb\u7406",sidebar_position:2},a=void 0,s={unversionedId:"community/governance",id:"community/governance",title:"\u793e\u533a\u6cbb\u7406",description:"The governance model adopted here is heavily influenced by a set of CNCF projects, especially drawing reference from Kubernetes governance.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/community/governance.md",sourceDirName:"community",slug:"/community/governance",permalink:"/gameone/docs/community/governance",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u793e\u533a\u6cbb\u7406",sidebar_position:2},sidebar:"documentationSideBar",previous:{title:"\u53c2\u4e0e\u8d21\u732e",permalink:"/gameone/docs/community/contribute"},next:{title:"Membership",permalink:"/gameone/docs/community/membership"}},c={},l=[{value:"Principles",id:"principles",level:2},{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"Community Membership",id:"community-membership",level:2},{value:"Community Groups",id:"community-groups",level:2},{value:"Special Interest Groups (SIGs)",id:"special-interest-groups-sigs",level:3},{value:"SIG Chairs",id:"sig-chairs",level:4},{value:"SIG Charter",id:"sig-charter",level:4},{value:"CLA",id:"cla",level:2},{value:"Credits",id:"credits",level:2}],u={toc:l},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The governance model adopted here is heavily influenced by a set of CNCF projects, especially drawing reference from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/community/blob/master/governance.md"},"Kubernetes governance"),".\n",(0,o.kt)("em",{parentName:"p"},"For similar structures some of the same wordings from kubernetes governance are borrowed to adhere\nto the originally construed meaning.")),(0,o.kt)("h2",{id:"principles"},"Principles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Open"),": KubeEdge is open source community."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Welcoming and respectful"),": See ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/cncf/foundation/blob/master/code-of-conduct.md"},"Code of Conduct"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Transparent and accessible"),": Work and collaboration should be done in public.\nChanges to the KubeEdge organization, KubeEdge code repositories, and CNCF related activities (e.g.\nlevel, involvement, etc) are done in public."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Merit"),": Ideas and contributions are accepted according to their technical merit\nand alignment with project objectives, scope and design principles.")),(0,o.kt)("h2",{id:"code-of-conduct"},"Code of Conduct"),(0,o.kt)("p",null,"KubeEdge follows the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cncf/foundation/blob/master/code-of-conduct.md"},"CNCF Code of Conduct"),".\nHere is an excerpt:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"}," As contributors and maintainers of this project, and in the interest of fostering an open and welcoming community, we pledge to respect all people who contribute through reporting issues, posting feature requests, updating documentation, submitting pull requests or patches, and other activities.")),(0,o.kt)("h2",{id:"community-membership"},"Community Membership"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeedge/community/blob/master/community-membership.md"},"community membership")),(0,o.kt)("h2",{id:"community-groups"},"Community Groups"),(0,o.kt)("h3",{id:"special-interest-groups-sigs"},"Special Interest Groups (SIGs)"),(0,o.kt)("p",null,"The KubeEdge project is organized primarily into Special Interest Groups, or\nSIGs. Each SIG is comprised of individuals from multiple companies and\norganizations, with a common purpose of advancing the project with respect to a\nspecific topic."),(0,o.kt)("p",null,"The goal is to enable a distributed decision structure and code ownership,\nas well as providing focused forums for getting work done, making decisions,\nand on-boarding new Contributors. Every identifiable part of the project\n(e.g. repository, subdirectory, API, test, issue, PR) is intended to be\nowned by some SIG."),(0,o.kt)("h4",{id:"sig-chairs"},"SIG Chairs"),(0,o.kt)("p",null,"SIGs must have at least one, and may have up to two SIG chairs at any given\ntime. SIG chairs are intended to be organizers and facilitators, responsible for\nthe operation of the SIG and for communication and coordination with the other\nSIGs, and the broader community."),(0,o.kt)("h4",{id:"sig-charter"},"SIG Charter"),(0,o.kt)("p",null,"Each SIG must have a charter that specifies its scope (topics, sub-systems,\ncode repos and directories), responsibilities, and areas of authority, how members\nand roles of authority/leadership are selected/granted, how decisions are made,\nand how conflicts are resolved."),(0,o.kt)("p",null,"SIGs should be relatively free to customize or\nchange how they operate, within some broad guidelines and constraints imposed by\ncross-SIG processes (e.g., the release process) and assets (e.g., the kubeedge repo)."),(0,o.kt)("p",null,"A primary reason that SIGs exist is as forums for collaboration. Much work in a\nSIG should stay local within that SIG. However, SIGs must communicate in the\nopen, ensure other SIGs and community members can find meeting notes,\ndiscussions, designs, and decisions, and periodically communicate a high-level\nsummary of the SIG's work to the community. SIGs are also responsible to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Meet regularly, at least monthly"),(0,o.kt)("li",{parentName:"ul"},"Keep up-to-date meeting notes, linked from the SIG's page in the community repo"),(0,o.kt)("li",{parentName:"ul"},"Announce meeting agenda and minutes after each meeting, on the KubeEdge mailing\nlist and/or slack or other channel."),(0,o.kt)("li",{parentName:"ul"},"Ensure the SIG's decision making is archived somewhere public"),(0,o.kt)("li",{parentName:"ul"},"Report activity in overall community meetings"),(0,o.kt)("li",{parentName:"ul"},"Participate in release planning meetings, retrospective, etc (if relevant)"),(0,o.kt)("li",{parentName:"ul"},"Actively triage issues, PRs, test failures, etc. related to code and tests owned by the SIG"),(0,o.kt)("li",{parentName:"ul"},"Use the above forums as the primary means of working, communicating, and collaborating, as opposed\nto private emails and meetings.")),(0,o.kt)("h2",{id:"cla"},"CLA"),(0,o.kt)("p",null,"All contributors must sign the CNCF CLA, as described ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/community/blob/master/CLA.md"},"here"),"."),(0,o.kt)("h2",{id:"credits"},"Credits"),(0,o.kt)("p",null,"Sections of this documents have been borrowed from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/community/blob/master/governance.md"},"Kubernetes governance"),"."))}p.isMDXComponent=!0}}]);