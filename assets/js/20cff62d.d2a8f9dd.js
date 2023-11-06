"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[15335],{80125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var a=n(85893),o=n(11151);const i={sidebar_position:100},s="Frequently Asked Questions",r={id:"faq",title:"Frequently Asked Questions",description:"Why using feature flags?",source:"@site/versioned_docs/version-v1.8.0/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/v1.8.0/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.8.0/faq.md",tags:[],version:"v1.8.0",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Lint your config",permalink:"/docs/v1.8.0/linter"}},l={},h=[{value:"Why using feature flags?",id:"why-using-feature-flags",level:3},{value:"What is the lifecycle of a flag?",id:"what-is-the-lifecycle-of-a-flag",level:3},{value:"What happen if my configuration file is not reachable/deleted?",id:"what-happen-if-my-configuration-file-is-not-reachabledeleted",level:3},{value:"What is the best rollout strategy?",id:"what-is-the-best-rollout-strategy",level:3},{value:"How we ensure that users affected by the feature flags are not always the same?",id:"how-we-ensure-that-users-affected-by-the-feature-flags-are-not-always-the-same",level:3}];function u(e){const t={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,a.jsx)(t.h3,{id:"why-using-feature-flags",children:"Why using feature flags?"}),"\n",(0,a.jsx)(t.p,{children:"This one of most common question I get.\nFeature flags are a software development technique that turns certain functionality on and off during runtime, without\ndeploying new code."}),"\n",(0,a.jsxs)(t.p,{children:["It allows you to decouple ",(0,a.jsx)(t.strong,{children:"deploy"})," and ",(0,a.jsx)(t.strong,{children:"release"}),", giving you better control and more experimentation over the full\nlifecycle of features."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"what-is-the-lifecycle-of-a-flag",children:"What is the lifecycle of a flag?"}),"\n",(0,a.jsx)(t.p,{children:"The lifecycle of your flags is key if you don't want to have un-used things everywhere in your code."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Start by creating the flag in your configuration file ",(0,a.jsx)(t.em,{children:"(with 0% to avoid affecting your users)"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Evaluate the flag in your code ",(0,a.jsxs)(t.em,{children:["(see ",(0,a.jsx)(t.a,{href:"/docs/v1.8.0/go_module/target_user#variation",children:"variation"}),")"]}),"."]}),"\n",(0,a.jsx)(t.li,{children:"Deploy your application with the variation check."}),"\n",(0,a.jsx)(t.li,{children:"Start rolling out your flag."}),"\n",(0,a.jsx)(t.li,{children:"When 100% of your users have access to the new feature, remove the call to the variation from your code base."}),"\n",(0,a.jsx)(t.li,{children:"Deploy your application without the variation check."}),"\n",(0,a.jsx)(t.li,{children:"Remove the flag from your configuration file."}),"\n"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"what-happen-if-my-configuration-file-is-not-reachabledeleted",children:"What happen if my configuration file is not reachable/deleted?"}),"\n",(0,a.jsxs)(t.p,{children:["If while you are on production for some reason your flag file becomes unreachable, we will be able to serve the users\nbased on the last version of the file we were able to read. We will continue to try reading the file based on\nthe ",(0,a.jsx)(t.code,{children:"pollingInterval"})," you have configured."]}),"\n",(0,a.jsxs)(t.p,{children:["If you start a new instance, if the file is not reachable to module will fail to initialize except if you have set the\noption ",(0,a.jsx)(t.code,{children:"StartWithRetrieverError"})," in the config. With this option, we will serve the SDK default value ",(0,a.jsx)(t.em,{children:"(the 3rd param\nin your variation)"})," until the flag becomes available again."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"what-is-the-best-rollout-strategy",children:"What is the best rollout strategy?"}),"\n",(0,a.jsx)(t.p,{children:"The lib gives you a lot of strategies to rollout your flags, there is no better one, it always depends on the context\nof your release."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"If your release is not critical and, you just want an easy cut-off strategy, you can pass your flag from 0% to 100% for\nall your users"}),"\n",(0,a.jsx)(t.li,{children:"If you are scared that your infrastructure can be impacted by the new feature, a progressive rollout can help you to\nimpact users over time and to be able to check how your system handle it."}),"\n",(0,a.jsx)(t.li,{children:"If you want to impact only a subset of your users, you can put a rule on your flag."}),"\n",(0,a.jsx)(t.li,{children:"Etc ..."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"You have an endless list of rollout strategies depending on what is your feature."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"how-we-ensure-that-users-affected-by-the-feature-flags-are-not-always-the-same",children:"How we ensure that users affected by the feature flags are not always the same?"}),"\n",(0,a.jsx)(t.p,{children:"To avoid always have the same users affected by a flag, the hash we compute that allows us to determine if the user is part of the percentage is not computed only based on the user key but a combination of the user key and the flag name."}),"\n",(0,a.jsx)(t.p,{children:"It guarantees that the user will be always in the same group but depending on the flag."}),"\n",(0,a.jsx)(t.hr,{})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(67294);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);