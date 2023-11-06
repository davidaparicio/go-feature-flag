"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[13501],{43956:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>f,contentTitle:()=>u,default:()=>C,frontMatter:()=>A,metadata:()=>p,toc:()=>m});var t=a(85893),s=a(11151),r=a(53182),n=a(24642),l=a(48353),i=a(36812),d=a(7029),c=a(71350),g=a(57085);const A={sidebar_position:40,description:"How to export evaluation data?"},u="How to export evaluation data",p={id:"configure_flag/export_flags_usage",title:"How to export evaluation data",description:"How to export evaluation data?",source:"@site/versioned_docs/version-v1.10.3/configure_flag/export_flags_usage.mdx",sourceDirName:"configure_flag",slug:"/configure_flag/export_flags_usage",permalink:"/docs/v1.10.3/configure_flag/export_flags_usage",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.10.3/configure_flag/export_flags_usage.mdx",tags:[],version:"v1.10.3",sidebarPosition:40,frontMatter:{sidebar_position:40,description:"How to export evaluation data?"},sidebar:"tutorialSidebar",previous:{title:"Scheduled rollout",permalink:"/docs/v1.10.3/configure_flag/rollout/scheduled"},next:{title:"Use as a GO module",permalink:"/docs/v1.10.3/category/use-as-a-go-module"}},f={},m=[{value:"Available exporters",id:"available-exporters",level:2}];function x(e){const o={code:"code",h1:"h1",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"how-to-export-evaluation-data",children:"How to export evaluation data"}),"\n",(0,t.jsx)(o.p,{children:"GO Feature Flag allows for the collection of flag usage data.\nDuring flag evaluation, the key, flag variation and other non-sensitive information used are collected and cached for a\nconfigurable period of time."}),"\n",(0,t.jsxs)(o.p,{children:["The usage data is then written to a file in a chosen format (",(0,t.jsx)(o.code,{children:"parquet"}),", ",(0,t.jsx)(o.code,{children:"JSON"})," or ",(0,t.jsx)(o.code,{children:"CSV"}),") at a specified interval and\nexported to your desired location. This provides a single source for easy processing of the data. The feature can be\nconfigured with options for file format, flush interval, and file location."]}),"\n",(0,t.jsx)(o.p,{children:"To use, simply configure, use the feature flag as normal, and analyze the collected usage data."}),"\n",(0,t.jsx)(o.h2,{id:"available-exporters",children:"Available exporters"}),"\n",(0,t.jsx)(r.o,{test:[{name:"Local File",logo:l.Z,relayproxy:"/docs/relay_proxy/configure_relay_proxy#file-1",gomodule:"/docs/go_module/data_collection/file"},{name:"Log",logo:d.Z,relayproxy:"/docs/relay_proxy/configure_relay_proxy#log",gomodule:"/docs/go_module/data_collection/log"},{name:"AWS S3",logo:c.Z,relayproxy:"/docs/relay_proxy/configure_relay_proxy#s3-1",gomodule:"/docs/go_module/data_collection/s3"},{name:"Webhook",logo:g.Z,relayproxy:"/docs/relay_proxy/configure_relay_proxy#webhook",gomodule:"/docs/go_module/data_collection/webhook"},{name:"Google Cloud Storage",logo:i.Z,relayproxy:"/docs/relay_proxy/configure_relay_proxy#google-storage-1",gomodule:"/docs/go_module/data_collection/google_cloud_storage"},{name:"Custom exporter",logo:n.Z,gomodule:"/docs/go_module/data_collection/custom"}]})]})}function C(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},53182:(e,o,a)=>{a.d(o,{o:()=>i});var t=a(67294),s=a(86010);const r={title:"title_J78f",description:"description_N_gU",cardLogo:"cardLogo_xSOJ",container:"container_ZAFJ",card:"card_JSXq",button:"button_YtM6",cardDetails:"cardDetails_QpCf",linkBox:"linkBox_jzj5"};var n=a(39960),l=a(85893);function i(e){const o=e.test.map(((e,o)=>(0,t.createElement)(d,{...e,key:o})));return(0,l.jsx)("div",{className:"grid grid-pad",children:o})}function d(e){return(0,l.jsx)("div",{className:(0,s.Z)("col-1-3 mobile-col-1-2",r.container),children:(0,l.jsxs)("div",{className:r.card,children:[(0,l.jsx)("img",{src:e.logo,className:r.cardLogo}),(0,l.jsxs)("div",{className:r.cardDetails,children:[(0,l.jsx)("div",{className:r.title,children:e.name}),(0,l.jsxs)("div",{className:r.linkBox,children:[e.relayproxy&&(0,l.jsx)(n.Z,{to:e.relayproxy,children:(0,l.jsxs)("button",{className:(0,s.Z)(r.button),children:[(0,l.jsx)("i",{className:"fa-solid fa-server"})," Configure the Relay Proxy"]})}),e.gomodule&&(0,l.jsx)(n.Z,{to:e.gomodule,children:(0,l.jsxs)("button",{className:(0,s.Z)(r.button),children:[(0,l.jsx)("i",{className:"devicon-go-original-wordmark"})," Configure the GO Module"]})})]})]})]})})}},24642:(e,o,a)=>{a.d(o,{Z:()=>t});const t="data:image/png;base64,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"},48353:(e,o,a)=>{a.d(o,{Z:()=>t});const t=a.p+"assets/images/file-5abdfb9f711f32554b630be7a299c2a6.png"},36812:(e,o,a)=>{a.d(o,{Z:()=>t});const t=a.p+"assets/images/google-ae727253732762af397d7eea1278f372.png"},7029:(e,o,a)=>{a.d(o,{Z:()=>t});const t=a.p+"assets/images/log-36f8c60eb626d8d51f0254752f22e300.png"},71350:(e,o,a)=>{a.d(o,{Z:()=>t});const t=a.p+"assets/images/s3-c5757b62c88da5897cb06dd9d469ec8d.png"},57085:(e,o,a)=>{a.d(o,{Z:()=>t});const t=a.p+"assets/images/webhook-d76efdb9a6df32fc3dc653a1d61e7a89.png"},11151:(e,o,a)=>{a.d(o,{Z:()=>l,a:()=>n});var t=a(67294);const s={},r=t.createContext(s);function n(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);