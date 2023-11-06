"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[58132],{78167:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var i=o(85893),n=o(11151);const r={sidebar_position:30},s="Custom Notifier",a={id:"go_module/notifier/custom",title:"Custom Notifier",description:"To create a custom notifier you must have a struct that implements the",source:"@site/versioned_docs/version-v1.14.1/go_module/notifier/custom.md",sourceDirName:"go_module/notifier",slug:"/go_module/notifier/custom",permalink:"/docs/v1.14.1/go_module/notifier/custom",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.14.1/go_module/notifier/custom.md",tags:[],version:"v1.14.1",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Webhook Notifier",permalink:"/docs/v1.14.1/go_module/notifier/webhook"},next:{title:"Migrate from v0.x.x to v1.x.x",permalink:"/docs/v1.14.1/migrate_v0_v1"}},c={},u=[];function f(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"custom-notifier",children:"Custom Notifier"}),"\n",(0,i.jsxs)(t.p,{children:["To create a custom notifier you must have a ",(0,i.jsx)(t.code,{children:"struct"})," that implements the\n",(0,i.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/notifier/notifier",children:(0,i.jsx)(t.code,{children:"notifier.Notifier"})})," interface."]}),"\n",(0,i.jsxs)(t.p,{children:["In parameter you will receive a ",(0,i.jsx)(t.code,{children:"notifier.DiffCache"})," struct that will tell you what has changed in your flag configuration."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'import (\n\tffclient "github.com/thomaspoignant/go-feature-flag"\n\t"github.com/thomaspoignant/go-feature-flag/notifier/notifier"\n\t"sync"\n)\n\ntype Notifier struct{}\nfunc (c *Notifier) Notify(diff notifier.DiffCache) error {\n\t// ...\n\t// do whatever you want here\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>s});var i=o(67294);const n={},r=i.createContext(n);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);