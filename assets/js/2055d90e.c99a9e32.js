"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[93788],{91612:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=o(85893),r=o(11151);const s={sidebar_position:30},i="Custom exporter",c={id:"go_module/data_collection/custom",title:"Custom exporter",description:"To create a custom exporter you must have a struct that implements the exporter.Exporter interface.",source:"@site/versioned_docs/version-v1.2.0/go_module/data_collection/custom.md",sourceDirName:"go_module/data_collection",slug:"/go_module/data_collection/custom",permalink:"/docs/v1.2.0/go_module/data_collection/custom",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.2.0/go_module/data_collection/custom.md",tags:[],version:"v1.2.0",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Log Exporter",permalink:"/docs/v1.2.0/go_module/data_collection/log"},next:{title:"Notify flag changes",permalink:"/docs/v1.2.0/go_module/notifier/"}},a={},l=[];function d(e){const t={a:"a",br:"br",code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"custom-exporter",children:"Custom exporter"}),"\n",(0,n.jsxs)(t.p,{children:["To create a custom exporter you must have a ",(0,n.jsx)(t.code,{children:"struct"})," that implements the ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/internal/exporter#Exporter",children:(0,n.jsx)(t.code,{children:"exporter.Exporter"})})," interface."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"type Exporter interface {\n  // Export will send the data to the exporter.\n  Export(context.Context, *log.Logger, []exporter.FeatureEvent) error\n\n\t// IsBulk return false if we should directly send the data as soon as it is produce\n\t// and true if we collect the data to send them in bulk.\n\tIsBulk() bool\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Export"})," is called asynchronously with a list of ",(0,n.jsx)(t.code,{children:"exporter.FeatureEvent"})," that have been collected.",(0,n.jsx)(t.br,{}),"\n","It is your responsibility to store them where you want."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"IsBulk"})," function should return ",(0,n.jsx)(t.code,{children:"false"})," if the exporter can handle the results in stream mode.",(0,n.jsx)(t.br,{}),"\n","If you decide to manage it in streaming mode, everytime we call a variation the ",(0,n.jsx)(t.code,{children:"Export"})," function will be called\nwith only on event in the list."]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>c,a:()=>i});var n=o(67294);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);