"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[92303],{53244:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(85893),i=o(11151);const a={title:"Home",description:"go-feature-flag is a simple and complete feature flag solution, without any complex backend system to install. You need only a file as your backend.",sidebar_position:1},r=void 0,s={id:"index",title:"Home",description:"go-feature-flag is a simple and complete feature flag solution, without any complex backend system to install. You need only a file as your backend.",source:"@site/versioned_docs/version-v1.7.0/index.md",sourceDirName:".",slug:"/",permalink:"/docs/v1.7.0/",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.7.0/index.md",tags:[],version:"v1.7.0",sidebarPosition:1,frontMatter:{title:"Home",description:"go-feature-flag is a simple and complete feature flag solution, without any complex backend system to install. You need only a file as your backend.",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/docs/v1.7.0/category/getting-started"}},l={},c=[{value:"What is GO Feature Flag?",id:"what-is-go-feature-flag",level:2},{value:"What can I do with GO Feature Flag?",id:"what-can-i-do-with-go-feature-flag",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{width:"250",height:"238",src:"/img/logo/logo.png",alt:"go-feature-flag logo"})}),"\n",(0,n.jsx)(t.h2,{id:"what-is-go-feature-flag",children:"What is GO Feature Flag?"}),"\n",(0,n.jsx)(t.p,{children:"GO Feature Flag is a simple, complete and lightweight feature flag solution 100% opensource."}),"\n",(0,n.jsx)(t.p,{children:"The solution has been built to start experiencing the usage of feature flags in your code without having to contract with any vendor."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"GO Feature Flag"})," has started to be a solution only for the GO language, but with the new standardisation of feature flags by ",(0,n.jsx)(t.a,{href:"https://openfeature.dev/",children:"Openfeature"})," project,\nnow the solution is available for multiple languages ",(0,n.jsxs)(t.em,{children:["(",(0,n.jsx)(t.code,{children:"JAVA"}),", ",(0,n.jsx)(t.code,{children:"typescript"}),", ",(0,n.jsx)(t.code,{children:"javascript"}),", ...)"]})," with a simple server to host."]}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.p,{children:["If you are not familiar with feature flags, also called feature toggles, you can read this ",(0,n.jsx)(t.a,{href:"https://www.martinfowler.com/articles/feature-toggles.html",children:"article from Martin Fowler"}),"\nwhere he explains why this is a great pattern."]}),(0,n.jsxs)(t.p,{children:["I've also written an ",(0,n.jsx)(t.a,{href:"https://medium.com/better-programming/feature-flags-and-how-to-iterate-quickly-7e3371b9986",children:"article"})," which explains why feature flags can fasten your iteration cycle."]})]}),"\n",(0,n.jsx)(t.h2,{id:"what-can-i-do-with-go-feature-flag",children:"What can I do with GO Feature Flag?"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Storing your configuration flags file on various locations (",(0,n.jsx)(t.code,{children:"HTTP"}),", ",(0,n.jsx)(t.code,{children:"S3"}),", ",(0,n.jsx)(t.code,{children:"Kubernetes"}),", ",(0,n.jsx)(t.a,{href:"/docs/v1.7.0/configure_flag/store_your_flags",children:(0,n.jsx)(t.em,{children:"see full list"})}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Configuring your flags in various ",(0,n.jsx)(t.a,{href:"/docs/v1.7.0/configure_flag/flag_format",children:"format"})," (",(0,n.jsx)(t.code,{children:"JSON"}),", ",(0,n.jsx)(t.code,{children:"TOML"})," and ",(0,n.jsx)(t.code,{children:"YAML"}),")."]}),"\n",(0,n.jsxs)(t.li,{children:["Adding complex ",(0,n.jsx)(t.a,{href:"/docs/v1.7.0/configure_flag/flag_format#rule-format",children:"rules"})," to target your users."]}),"\n",(0,n.jsxs)(t.li,{children:["Use complex rollout strategy for your flags :","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/docs/v1.7.0/configure_flag/rollout/experimentation",children:"Run A/B testing experimentation"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/docs/v1.7.0/configure_flag/rollout/progressive",children:"Progressively rollout a feature"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/docs/v1.7.0/configure_flag/rollout/scheduled",children:"Schedule your flag updates"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Exporting your flags usage data (",(0,n.jsx)(t.a,{href:"/docs/v1.7.0/go_module/data_collection/s3",children:(0,n.jsx)(t.code,{children:"s3"})}),", ",(0,n.jsx)(t.a,{href:"/docs/v1.7.0/go_module/data_collection/log",children:(0,n.jsx)(t.code,{children:"log"})})," and ",(0,n.jsx)(t.a,{href:"/docs/v1.7.0/go_module/data_collection/file",children:(0,n.jsx)(t.code,{children:"file"})}),")."]}),"\n",(0,n.jsxs)(t.li,{children:["Getting notified when a flag has been changed (",(0,n.jsx)(t.a,{href:"/docs/v1.7.0/go_module/notifier/webhook",children:(0,n.jsx)(t.code,{children:"webhook"})})," and ",(0,n.jsx)(t.a,{href:"/docs/v1.7.0/go_module/notifier/slack",children:(0,n.jsx)(t.code,{children:"slack"})}),")."]}),"\n",(0,n.jsx)(t.li,{children:"Use GO Feature Flag in several languages."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>s,a:()=>r});var n=o(67294);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);