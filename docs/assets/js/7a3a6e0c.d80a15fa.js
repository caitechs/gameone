"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9619],{97582:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var s=a(67294),l=a(71944),c=a(6226),n=a(7961),i=a(28084),r=a(16550),m=a(95999);function u(e){const{title:t="",subTitle:a="",date:l="",desc:c="",imgUrl:n="",link:i=""}=e,u=(0,r.k6)();return s.createElement("div",{className:"case-card",style:{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${n})`}},s.createElement("h2",{className:"title",onClick:()=>u.push(i)},t),s.createElement("hr",null),s.createElement("h3",{className:"sub"},a),s.createElement("p",{className:"desc"},c),s.createElement("div",{className:"date"},l),s.createElement("a",{className:"button",type:"button",onClick:()=>u.push(i)},s.createElement(m.Z,null,"READ CASE STUDY")))}var d=a(52263);const o=["All","UserCase","Solution"],g=["\u5168\u90e8","\u7528\u6237\u6848\u4f8b","\u89e3\u51b3\u65b9\u6848"],E=["/img/casestudies/case1.jpg","/img/casestudies/case2.jpg","/img/casestudies/case3.jpg","/img/casestudies/case4.jpg","/img/casestudies/case5.jpg","/img/casestudies/case6.jpg"];function b(e){let{selected:t,onChange:a}=e;const[l,c]=s.useState(0),{i18n:n}=(0,d.Z)(),i=(0,s.useMemo)((()=>"en"===n.currentLocale?o:g),[]);return s.createElement("div",{className:"tag-toggle-container"},s.createElement("div",{className:"tag-toggle-list"},s.createElement("div",{className:"title"},s.createElement(m.Z,null,"Case Category")),s.createElement("div",{className:"tag-list"},i.map(((e,t)=>s.createElement("div",{className:"tag-toggle "+(l===t?"active":""),key:t,onClick:()=>((e,t)=>{c(t),a(0===t?"":e)})(e,t)},e))))))}function p(){const{i18n:e}=(0,d.Z)(),{casestudiesGlobalData:t}=(0,i.eZ)("casestudies-global-dataPlugin"),[a,r]=s.useState(),o=s.useMemo((()=>a?t.filter((e=>(e.metadata?.frontMatter?.tags??[]).includes(a))):t),[a]);return s.createElement(n.Z,null,s.createElement("div",{className:"case-studies-container"},s.createElement("div",{className:"case-studies-header"},s.createElement("h1",{className:"case-studies"},s.createElement(m.Z,null,"Case Studies")),s.createElement("p",{className:"case-studies-subtitle"},s.createElement(m.Z,null,"Showcase of KubeEdge based solutions and successful stories of using KubeEdge in various business scenarios and the positive effects brought by them")),s.createElement("button",{className:"button",type:"button"},s.createElement("a",{href:`https://kubeedge.io/${e.currentLocale}/docs/community/casestudies/`,target:"_blank"},s.createElement(m.Z,null,"POST YOUR CASE")))),s.createElement("div",{className:"case-list"},s.createElement(b,{selected:a,onChange:e=>r(e)}),s.createElement(l.Z,{gutter:[48,48]},o.map(((e,t)=>s.createElement(c.Z,{xs:24,sm:24,md:24,lg:12},s.createElement(u,{title:e.metadata?.title,subTitle:e.metadata?.frontMatter?.subTitle,date:e.metadata?.formattedDate,desc:e.metadata?.description,imgUrl:e.metadata?.frontMatter?.background||E[t%E.length],link:e.metadata?.permalink,tags:e.metadata?.frontMatter?.tags}))))))))}}}]);