"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[27252],{10180:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>a,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=i(85893),o=i(11151);const l={sidebar_position:10,description:"Where to store your configuration flag?"},t="Where to store your configuration flag",s={id:"configure_flag/store_your_flags",title:"Where to store your configuration flag",description:"Where to store your configuration flag?",source:"@site/versioned_docs/version-v1.6.0/configure_flag/store_your_flags.md",sourceDirName:"configure_flag",slug:"/configure_flag/store_your_flags",permalink:"/docs/v1.6.0/configure_flag/store_your_flags",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.6.0/configure_flag/store_your_flags.md",tags:[],version:"v1.6.0",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Where to store your configuration flag?"},sidebar:"tutorialSidebar",previous:{title:"Configure your feature flags",permalink:"/docs/v1.6.0/category/configure-your-feature-flags"},next:{title:"How to configure a flag",permalink:"/docs/v1.6.0/configure_flag/flag_format"}},a={},c=[{value:"Use multiple configuration flag files",id:"use-multiple-configuration-flag-files",level:2},{value:"Available retrievers",id:"available-retrievers",level:2},{value:"AWS S3",id:"aws-s3",level:3},{value:"Google Cloud Storage",id:"google-cloud-storage",level:3},{value:"Kubernetes Configmaps",id:"kubernetes-configmaps",level:3},{value:"HTTP / HTTPS",id:"http--https",level:3},{value:"GitHub",id:"github",level:3},{value:"Local file",id:"local-file",level:3},{value:"Custom",id:"custom",level:3}];function u(e){const r={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"where-to-store-your-configuration-flag",children:"Where to store your configuration flag"}),"\n",(0,n.jsxs)(r.p,{children:["To work ",(0,n.jsx)(r.strong,{children:"GO Feature Flag"})," is using a configuration file to store your feature flags configuration."]}),"\n",(0,n.jsxs)(r.p,{children:["Ideally this file should be placed somewhere accessible by all your app that are using the GO Feature Flag module.",(0,n.jsx)(r.br,{}),"\n","In the solution there is a system we call ",(0,n.jsx)(r.code,{children:"retriever"})," that is in charge of reading the file remotely."]}),"\n",(0,n.jsxs)(r.p,{children:["GO Feature Flag supports different ways to retrieve the configuration file ",(0,n.jsx)(r.em,{children:"(see list bellow)"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"use-multiple-configuration-flag-files",children:"Use multiple configuration flag files"}),"\n",(0,n.jsx)(r.p,{children:"Sometimes, you may need to store your feature flags in different locations.\nIn such cases, you can configure multiple retrievers to retrieve the flags from different sources within your GO Feature\nFlag instance."}),"\n",(0,n.jsxs)(r.p,{children:["To set this up, you need to configure the ",(0,n.jsx)(r.a,{href:"../go_module/configuration#configuration-fields",children:(0,n.jsx)(r.code,{children:"Retrievers"})})," field to\nconsume from different retrievers.\nWhat this does is that it calls all the retrievers in parallel and applies them in the order you have provided."]}),"\n",(0,n.jsxs)(r.p,{children:["Keep in mind that if a flag is defined in multiple retrievers, it can be overridden by a later flag. For instance,\nif you have a flag named ",(0,n.jsx)(r.em,{children:(0,n.jsx)(r.code,{children:"my-feature-flag"})})," in the first file and another flag with the same name in the second file, the second configuration will take precedence."]}),"\n",(0,n.jsx)(r.h2,{id:"available-retrievers",children:"Available retrievers"}),"\n",(0,n.jsx)(r.h3,{id:"aws-s3",children:"AWS S3"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"AWS S3"})," is the object store of AWS, you can add your GO Feature Flag configuration file in any bucket and reference it in your configuration."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/v1.6.0/go_module/store_file/s3",children:"Configure the GO module"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"../relay_proxy/configure_relay_proxy#s3",children:"Configure the relay proxy"})}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"google-cloud-storage",children:"Google Cloud Storage"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Google Cloud Storage"})," is a RESTful online file storage web service for storing and accessing data on Google Cloud Platform infrastructure.",(0,n.jsx)(r.br,{}),"\n","You can add your GO Feature Flag configuration file in any bucket and reference it."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/v1.6.0/go_module/store_file/google_cloud_storage",children:"Configure the GO module"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"../relay_proxy/configure_relay_proxy#google-storage",children:"Configure the relay proxy"})}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"kubernetes-configmaps",children:"Kubernetes Configmaps"}),"\n",(0,n.jsxs)(r.p,{children:["A ",(0,n.jsx)(r.strong,{children:"ConfigMap"})," is an API object used to store non-confidential data in key-value pairs inside kubernetes.",(0,n.jsx)(r.br,{}),"\n","GO Feature Flag can read directly in a ",(0,n.jsx)(r.code,{children:"configmap"})," in your namespace."]}),"\n",(0,n.jsx)(r.p,{children:"When your feature flags file is ready you can store it directly in your kubernetes instance by using this command:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"kubectl create configmap goff --from-file=examples/retriever_configmap/flags.yaml\n"})}),"\n",(0,n.jsx)(r.p,{children:"It will allow your file to be available inside Kubernetes."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/v1.6.0/go_module/store_file/kubernetes_configmaps",children:"Configure the GO module"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"../relay_proxy/configure_relay_proxy#kubernetes-configmap",children:"Configure the relay proxy"})}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"http--https",children:"HTTP / HTTPS"}),"\n",(0,n.jsxs)(r.p,{children:["Serving file with an ",(0,n.jsx)(r.strong,{children:"HTTP"})," server is probably something you are already doing, ",(0,n.jsx)(r.strong,{children:"GO Feature Flag"})," can retrieve your configuration file, from\nany HTTP endpoint and read it from there."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/v1.6.0/go_module/store_file/http",children:"Configure the GO module"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"../relay_proxy/configure_relay_proxy#http",children:"Configure the relay proxy"})}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"github",children:"GitHub"}),"\n",(0,n.jsxs)(r.p,{children:["Reading the file from ",(0,n.jsx)(r.strong,{children:"GitHub"})," is pretty straight forward.",(0,n.jsx)(r.br,{}),"\n","You commit your file into your favorite repository ",(0,n.jsx)(r.em,{children:"(it can be public or private)"})," and ",(0,n.jsx)(r.strong,{children:"GO Feature Flag"})," can retrieve your configuration file and use it."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/v1.6.0/go_module/store_file/github",children:"Configure the GO module"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"../relay_proxy/configure_relay_proxy#github",children:"Configure the relay proxy"})}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"local-file",children:"Local file"}),"\n",(0,n.jsx)(r.p,{children:"You can store your feature flags configuration in your hard drive directly."}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsx)(r.p,{children:"Using a file is great for local testing, but in production it is recommended to use a distributed system instead."})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/v1.6.0/go_module/store_file/file",children:"Configure the GO module"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"../relay_proxy/configure_relay_proxy#file",children:"Configure the relay proxy"})}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"custom",children:"Custom"}),"\n",(0,n.jsxs)(r.p,{children:["If you are using the ",(0,n.jsx)(r.strong,{children:"GO module"}),", you can also implement your own retriever.",(0,n.jsx)(r.br,{}),"\n","For this look at this ",(0,n.jsx)(r.a,{href:"/docs/v1.6.0/go_module/store_file/custom",children:"documentation"})," to start building your own ",(0,n.jsx)(r.code,{children:"retriever"}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,r,i)=>{i.d(r,{Z:()=>s,a:()=>t});var n=i(67294);const o={},l=n.createContext(o);function t(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);