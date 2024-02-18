"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3740],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),m=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,k=p["".concat(s,".").concat(u)]||p[u]||g[u]||a;return n?o.createElement(k,i(i({ref:t},c),{},{components:n})):o.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<a;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var o=n(83117),r=(n(67294),n(3905));const a={title:"\u5355\u5143\u6d4b\u8bd5",sidebar_position:1},i=void 0,l={unversionedId:"developer/test/unit_test",id:"developer/test/unit_test",title:"\u5355\u5143\u6d4b\u8bd5",description:"The purpose of this document is to give introduction about unit tests and to help contributors in writing unit tests.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developer/test/unit_test.md",sourceDirName:"developer/test",slug:"/developer/test/unit_test",permalink:"/docs/developer/test/unit_test",draft:!1,editUrl:"https://github.com/kubeedge/website/blob/master/docs/developer/test/unit_test.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u5355\u5143\u6d4b\u8bd5",sidebar_position:1},sidebar:"documentationSideBar",previous:{title:"Tests",permalink:"/docs/category/tests"},next:{title:"\u8fb9\u7f18\u5185\u5b58\u5360\u7528\u6d4b\u8bd5",permalink:"/docs/developer/test/memfootprint"}},s={},m=[{value:"Unit Test",id:"unit-test",level:2},{value:"Mocks",id:"mocks",level:2},{value:"Ginkgo",id:"ginkgo",level:2},{value:"Writing UT using GoMock",id:"writing-ut-using-gomock",level:2},{value:"Example : metamanager/dao/meta.go",id:"example--metamanagerdaometago",level:3}],c={toc:m},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The purpose of this document is to give introduction about unit tests and to help contributors in writing unit tests."),(0,r.kt)("h2",{id:"unit-test"},"Unit Test"),(0,r.kt)("p",null,"Read this ",(0,r.kt)("a",{parentName:"p",href:"https://softwaretestingfundamentals.com/unit-testing/"},"article")," for a simple introduction about unit tests and benefits of unit testing. Go has its own built-in package called testing and command called ",(0,r.kt)("inlineCode",{parentName:"p"},"go test"),".\nFor more detailed information on golang's builtin testing package read this ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/testing/"},"document"),"."),(0,r.kt)("h2",{id:"mocks"},"Mocks"),(0,r.kt)("p",null," The object which needs to be tested may have dependencies on other objects. To confine the behavior of the object under test, replacement of the other objects by mocks that simulate the behavior of the real objects is necessary.\nRead this ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/@piraveenaparalogarajah/what-is-mocking-in-testing-d4b0f2dbe20a"},"article")," for more information on mocks."),(0,r.kt)("p",null," GoMock is a mocking framework for Go programming language.\nRead ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/golang/mock/gomock"},"godoc")," for more information about gomock."),(0,r.kt)("p",null," Mock for an interface can be automatically generated using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/golang/mock"},"GoMocks")," mockgen package."),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"Note")," There is gomock package in kubeedge vendor directory without mockgen. Please use mockgen package of tagged version ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"v1.1.1"))," of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/golang/mock"},"GoMocks github repository")," to install mockgen and generate mocks. Using higher version may cause errors/panics during execution of your tests."),(0,r.kt)("p",null,"There is gomock package in kubeedge vendor directory without mockgen. Please use mockgen package of tagged version ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"v1.1.1"))," of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/golang/mock"},"GoMocks github repository")," to install mockgen and generate mocks. Using higher version may cause errors/panics during execution of your tests."),(0,r.kt)("p",null," Read this ",(0,r.kt)("a",{parentName:"p",href:"https://blog.codecentric.de/en/2017/08/gomock-tutorial/"},"article")," for a short tutorial of usage of gomock and mockgen."),(0,r.kt)("h2",{id:"ginkgo"},"Ginkgo"),(0,r.kt)("p",null," ",(0,r.kt)("a",{parentName:"p",href:"https://onsi.github.io/ginkgo/"},"Ginkgo")," is one of the most popular framework for writing tests in go."),(0,r.kt)("p",null," Read ",(0,r.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/onsi/ginkgo"},"godoc")," for more information about ginkgo."),(0,r.kt)("p",null,"See a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeedge/kubeedge/tree/master/edge/pkg/metamanager/dao/meta_test.go"},"sample")," in kubeedge where go builtin package testing and gomock is used for writing unit tests."),(0,r.kt)("p",null,"See a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeedge/kubeedge/tree/master/edge/pkg/devicetwin/dtmodule/dtmodule_test.go"},"sample")," in kubeedge where ginkgo is used for testing."),(0,r.kt)("h2",{id:"writing-ut-using-gomock"},"Writing UT using GoMock"),(0,r.kt)("h3",{id:"example--metamanagerdaometago"},"Example : metamanager/dao/meta.go"),(0,r.kt)("p",null,"After reading the code of meta.go, we can find that there are 3 interfaces of beego which are used. They are ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeedge/kubeedge/tree/master/vendor/github.com/astaxie/beego/orm/types.go"},"Ormer"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeedge/kubeedge/tree/master/vendor/github.com/astaxie/beego/orm/types.go"},"QuerySeter")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubeedge/kubeedge/tree/master/vendor/github.com/astaxie/beego/orm/types.go"},"RawSeter"),"."),(0,r.kt)("p",null,"We need to create fake implementations of these interfaces so that we do not rely on the original implementation of this interface and their function calls."),(0,r.kt)("p",null,"Following are the steps for creating fake/mock implementation of Ormer, initializing it and replacing the original with fake."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create directory mocks/beego.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"use mockgen to generate fake implementation of the Ormer interface"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mockgen -destination=mocks/beego/fake_ormer.go -package=beego github.com/astaxie/beego/orm Ormer\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"destination")," : where you want to create the fake implementation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"package")," : package of the created fake implementation file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"github.com/astaxie/beego/orm")," : the package where interface definition is there"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Ormer")," : generate mocks for this interface")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Initialize mocks in your test file. eg meta_test.go")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mockCtrl := gomock.NewController(t)\ndefer mockCtrl.Finish()\normerMock = beego.NewMockOrmer(mockCtrl)\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"ormermock is now a fake implementation of Ormer interface. We can make any function in ormermock return any value you want.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"replace the real Ormer implementation with this fake implementation. DBAccess is variable to type Ormer which we will replace with mock implemention"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dbm.DBAccess = ormerMock\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"If we want Insert function of ormer interface which has return types as (int64,err) to return (1 nil), it can be done in 1 line in your test file using gomock.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ormerMock.EXPECT().Insert(gomock.Any()).Return(int64(1), nil).Times(1)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Expect()")," : is to tell that a function of ormermock will be called."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Insert(gomock.Any())")," : expect Insert to be called with any parameter."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Return(int64(1), nil)")," : return 1 and error nil"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Times(1)"),": expect insert to be called once and return 1 and nil only once."),(0,r.kt)("p",null,"So whenever insert is called, it will return 1 and nil, thus removing the dependency on external implementation."))}g.isMDXComponent=!0}}]);