"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[19635],{66666:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(85893),a=t(11151);const i={sidebar_position:20,description:"Deploy the relay proxy and use the OpenFeature SDKs"},o="Using Open Feature SDKs",s={id:"getting_started/using-openfeature",title:"Using Open Feature SDKs",description:"Deploy the relay proxy and use the OpenFeature SDKs",source:"@site/versioned_docs/version-v1.10.3/getting_started/using-openfeature.md",sourceDirName:"getting_started",slug:"/getting_started/using-openfeature",permalink:"/docs/v1.10.3/getting_started/using-openfeature",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.10.3/getting_started/using-openfeature.md",tags:[],version:"v1.10.3",sidebarPosition:20,frontMatter:{sidebar_position:20,description:"Deploy the relay proxy and use the OpenFeature SDKs"},sidebar:"tutorialSidebar",previous:{title:"Using the GO module",permalink:"/docs/v1.10.3/getting_started/using-go-module"},next:{title:"Configure your feature flags",permalink:"/docs/v1.10.3/category/configure-your-feature-flags"}},l={},d=[{value:"Create a feature flag configuration",id:"create-a-feature-flag-configuration",level:2},{value:"Create a relay proxy configuration file",id:"create-a-relay-proxy-configuration-file",level:2},{value:"Install the relay proxy",id:"install-the-relay-proxy",level:2},{value:"Use Open Feature SDK",id:"use-open-feature-sdk",level:2},{value:"Install dependencies",id:"install-dependencies",level:3},{value:"Init your Open Feature client",id:"init-your-open-feature-client",level:3},{value:"Evaluate your flag",id:"evaluate-your-flag",level:3}];function u(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"using-open-feature-sdks",children:"Using Open Feature SDKs"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["OpenFeature provides a shared, standardized feature flagging client - ",(0,r.jsx)(n.em,{children:"an SDK"})," - which can be plugged into various 3rd-party feature flagging providers.\nWhether you're using an open-source system or a commercial product, whether it's self-hosted or cloud-hosted, OpenFeature provides a consistent, unified API for developers to use feature flagging in their applications.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.a,{href:"https://docs.openfeature.dev",children:"Documentation"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["GO Feature Flag believe in ",(0,r.jsx)(n.strong,{children:"OpenSource"})," and ",(0,r.jsx)(n.strong,{children:"standardization"}),", this is the reason why we decided not implementing any custom SDK and rely only on ",(0,r.jsx)(n.strong,{children:"Open Feature"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["To be compatible with Open Feature, ",(0,r.jsx)(n.strong,{children:"GO Feature Flag"})," is providing a lightweight self-hosted API server ",(0,r.jsxs)(n.em,{children:["(called ",(0,r.jsx)(n.a,{href:"../category/use-the-relay-proxy",children:"relay proxy"}),")"]})," that is using the GO Feature Flag module internally.",(0,r.jsx)(n.br,{}),"\n","When the ",(0,r.jsx)(n.strong,{children:"relay proxy"})," is running in your infrastructure, you can use the ",(0,r.jsx)(n.strong,{children:"Open Feature SDKs"})," in combination with ",(0,r.jsx)(n.strong,{children:"GO Feature Flag providers"})," to evaluate your flags."]}),"\n",(0,r.jsxs)(n.p,{children:["This schema is an overview on how ",(0,r.jsx)(n.strong,{children:"Open Feature"})," is working, you can have more information about all the concepts in the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://docs.openfeature.dev",children:"Open Feature documentation"})}),".\n",(0,r.jsx)(n.img,{src:t(30156).Z+"",width:"1740",height:"574"})]}),"\n",(0,r.jsx)(n.h2,{id:"create-a-feature-flag-configuration",children:"Create a feature flag configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Create a new ",(0,r.jsx)(n.code,{children:"YAML"})," file containing your first flag configuration."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="flag-config.yaml"',children:'# 20% of the users will use the variation "my-new-feature"\ntest-flag:\n  variations:\n    my-new-feature: true\n    my-old-feature: false\n  defaultRule:\n    percentage:\n      my-new-feature: 20\n      my-old-feature: 80\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This flag split the usage of this flag, 20% will use the variation ",(0,r.jsx)(n.code,{children:"my-new-feature"})," and 80% the variation ",(0,r.jsx)(n.code,{children:"my-old-feature"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"create-a-relay-proxy-configuration-file",children:"Create a relay proxy configuration file"}),"\n",(0,r.jsxs)(n.p,{children:["Create a new ",(0,r.jsx)(n.code,{children:"YAML"})," file containing the configuration of your relay proxy."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="goff-proxy.yaml"',children:"listen: 1031\npollingInterval: 1000\nstartWithRetrieverError: false\nretriever:\n  kind: file\n  path: /goff/flag-config.yaml\nexporter:\n  kind: log\n"})}),"\n",(0,r.jsx)(n.h2,{id:"install-the-relay-proxy",children:"Install the relay proxy"}),"\n",(0,r.jsxs)(n.p,{children:["And we will run the ",(0,r.jsx)(n.strong,{children:"relay proxy"})," locally to make the API available.",(0,r.jsx)(n.br,{}),"\n","The default port will be ",(0,r.jsx)(n.code,{children:"1031"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# Launch the container\ndocker run \\\n  -p 1031:1031 \\\n  -v $(pwd)/flag-config.yaml:/goff/flag-config.yaml \\\n  -v $(pwd)/goff-proxy.yaml:/goff/goff-proxy.yaml \\\n  thomaspoignant/go-feature-flag-relay-proxy:latest\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.em,{children:["If you don't want to use docker to install the ",(0,r.jsx)(n.strong,{children:"relay proxy"})," you can follow the ",(0,r.jsx)(n.a,{href:"/docs/v1.10.3/relay_proxy/install_relay_proxy",children:"documentation"})]}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"use-open-feature-sdk",children:"Use Open Feature SDK"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"In this example we are using the javascript SDK, but it is still relevant for all the languages"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm i @openfeature/js-sdk @openfeature/go-feature-flag-provider\n"})}),"\n",(0,r.jsx)(n.h3,{id:"init-your-open-feature-client",children:"Init your Open Feature client"}),"\n",(0,r.jsx)(n.p,{children:"In your app initialization your have to create a client using the Open Feature SDK and initialize it."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const {OpenFeature} = require(\"@openfeature/js-sdk\");\nconst {GoFeatureFlagProvider} = require(\"@openfeature/go-feature-flag-provider\");\n\n\n// init Open Feature SDK with GO Feature Flag provider\nconst goFeatureFlagProvider = new GoFeatureFlagProvider({\n  endpoint: 'http://localhost:1031/' // DNS of your instance of relay proxy\n});\nOpenFeature.setProvider(goFeatureFlagProvider);\nconst featureFlagClient = OpenFeature.getClient('my-app')\n"})}),"\n",(0,r.jsx)(n.h3,{id:"evaluate-your-flag",children:"Evaluate your flag"}),"\n",(0,r.jsx)(n.p,{children:"Now you can evaluate your flags anywhere in your code using this client."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// Context of your flag evaluation.\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nconst userContext = {\n  targetingKey: '1d1b9238-2591-4a47-94cf-d2bc080892f1', // user unique identifier (mandatory)\n  firstname: 'john',\n  lastname: 'doe',\n  email: 'john.doe@gofeatureflag.org',\n  admin: true, // this field is used in the targeting rule of the flag \"flag-only-for-admin\"\n  // ...\n};\n\nconst adminFlag = await featureFlagClient.getBooleanValue('flag-only-for-admin', false, userContext);\nif (adminFlag) {\n   // flag \"flag-only-for-admin\" is true for the user\n  console.log(\"new feature\");\n} else {\n  // flag \"flag-only-for-admin\" is false for the user\n}\n"})})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},30156:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/concepts-d23b05d83bb936d1d2cf17b34ec1d505.jpg"},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var r=t(67294);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);