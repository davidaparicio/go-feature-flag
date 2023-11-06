"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[14376],{68245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(85893),r=n(11151),o=n(74866),i=n(85162);const l={sidebar_position:51,description:"How to use the OpenFeature Javascript SDK"},s="Javascript / Typescript SDK usage",u={id:"openfeature_sdk/openfeature_javascript",title:"Javascript / Typescript SDK usage",description:"How to use the OpenFeature Javascript SDK",source:"@site/versioned_docs/version-v1.12.0/openfeature_sdk/openfeature_javascript.mdx",sourceDirName:"openfeature_sdk",slug:"/openfeature_sdk/openfeature_javascript",permalink:"/docs/v1.12.0/openfeature_sdk/openfeature_javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.12.0/openfeature_sdk/openfeature_javascript.mdx",tags:[],version:"v1.12.0",sidebarPosition:51,frontMatter:{sidebar_position:51,description:"How to use the OpenFeature Javascript SDK"},sidebar:"tutorialSidebar",previous:{title:"JAVA SDK usage",permalink:"/docs/v1.12.0/openfeature_sdk/openfeature_java"},next:{title:".Net SDK usage",permalink:"/docs/v1.12.0/openfeature_sdk/openfeature_dotnet"}},c={},d=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Initialize your Open Feature client",id:"initialize-your-open-feature-client",level:2},{value:"Evaluate your flag",id:"evaluate-your-flag",level:2},{value:"Contribute to the provider",id:"contribute-to-the-provider",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"javascript--typescript-sdk-usage",children:"Javascript / Typescript SDK usage"}),"\n",(0,a.jsx)(t.h2,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,a.jsxs)(t.p,{children:["The first things we will do is install the ",(0,a.jsx)(t.strong,{children:"Open Feature SDK"})," and the ",(0,a.jsx)(t.strong,{children:"GO Feature Flag provider"}),"."]}),"\n",(0,a.jsxs)(o.Z,{groupId:"code",children:[(0,a.jsx)(i.Z,{value:"yarn",label:"yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"yarn add @openfeature/js-sdk @openfeature/go-feature-flag-provider\n"})})}),(0,a.jsx)(i.Z,{value:"npm",label:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"npm i @openfeature/js-sdk @openfeature/go-feature-flag-provider\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"initialize-your-open-feature-client",children:"Initialize your Open Feature client"}),"\n",(0,a.jsx)(t.p,{children:"To evaluate the flags you need to have an Open Feature configured in you app.\nThis code block shows you how you can create a client that you can use in your application."}),"\n",(0,a.jsxs)(o.Z,{groupId:"code",children:[(0,a.jsx)(i.Z,{value:"javascript",label:"JavaScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const {OpenFeature} = require(\"@openfeature/js-sdk\");\nconst {GoFeatureFlagProvider} = require(\"@openfeature/go-feature-flag-provider\");\n\n\n// init Open Feature SDK with GO Feature Flag provider\nconst goFeatureFlagProvider = new GoFeatureFlagProvider({\n  endpoint: 'http://localhost:1031/' // DNS of your instance of relay proxy\n});\nOpenFeature.setProvider(goFeatureFlagProvider);\nconst featureFlagClient = OpenFeature.getClient('my-app')\n"})})}),(0,a.jsx)(i.Z,{value:"ts",label:"TypeScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"import {EvaluationContext, OpenFeature} from \"@openfeature/js-sdk\";\nimport {GoFeatureFlagProvider} from  \"@openfeature/go-feature-flag-provider\";\n\n\n// init Open Feature SDK with GO Feature Flag provider\nconst goFeatureFlagProvider: GoFeatureFlagProvider = new GoFeatureFlagProvider({\nendpoint: 'http://localhost:1031/'\n});\nOpenFeature.setProvider(goFeatureFlagProvider);\nconst featureFlagClient = OpenFeature.getClient('my-app');\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"evaluate-your-flag",children:"Evaluate your flag"}),"\n",(0,a.jsxs)(t.p,{children:["This code block explain how you can create an ",(0,a.jsx)(t.code,{children:"EvaluationContext"})," and use it to evaluate your flag."]}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsxs)(t.p,{children:["In this example we are evaluating a ",(0,a.jsx)(t.code,{children:"boolean"})," flag, but other types are available."]}),(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["Refer to the ",(0,a.jsx)(t.a,{href:"https://docs.openfeature.dev/docs/reference/concepts/evaluation-api#basic-evaluation",children:"Open Feature documentation"})," to know more about it."]})})]}),"\n",(0,a.jsxs)(o.Z,{groupId:"code",children:[(0,a.jsx)(i.Z,{value:"javascript",label:"JavaScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"// Context of your flag evaluation.\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nconst userContext = {\n  targetingKey: '1d1b9238-2591-4a47-94cf-d2bc080892f1', // user unique identifier (mandatory)\n  firstname: 'john',\n  lastname: 'doe',\n  email: 'john.doe@gofeatureflag.org',\n  admin: true, // this field is used in the targeting rule of the flag \"flag-only-for-admin\"\n  // ...\n};\n\nconst adminFlag = await featureFlagClient.getBooleanValue('flag-only-for-admin', false, userContext);\nif (adminFlag) {\n   // flag \"flag-only-for-admin\" is true for the user\n} else {\n  // flag \"flag-only-for-admin\" is false for the user\n}\n"})})}),(0,a.jsx)(i.Z,{value:"ts",label:"TypeScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"// Context of your flag evaluation.\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nconst userContext: EvaluationContext = {\n  targetingKey: '1d1b9238-2591-4a47-94cf-d2bc080892f1', // user unique identifier\n  firstname: 'john',\n  lastname: 'doe',\n  email: 'john.doe@gofeatureflag.org',\n  admin: true, // this field is used in the targeting rule of the flag \"flag-only-for-admin\"\n  // ...\n};\n\nconst adminFlag = await featureFlagClient.getBooleanValue('flag-only-for-admin', false, userContext);\nif (adminFlag) {\n  // flag \"flag-only-for-admin\" is true for the user\n} else {\n  // flag \"flag-only-for-admin\" is false for the user\n}\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"contribute-to-the-provider",children:"Contribute to the provider"}),"\n",(0,a.jsxs)(t.p,{children:["You can find the source of the provider in the ",(0,a.jsx)(t.a,{href:"https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/go-feature-flag",children:(0,a.jsx)(t.code,{children:"open-feature/js-sdk-contrib"})})," repository."]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var a=n(86010);const r={tabItem:"tabItem_Ymn6"};var o=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>F});var a=n(67294),r=n(86010),o=n(12466),i=n(16550),l=n(20469),s=n(91980),u=n(67392),c=n(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,d]=h({queryString:n,groupId:r}),[g,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),m=(()=>{const e=u??g;return f({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{m&&s(m)}),[m]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),v(e)}),[d,v,o]),tabValues:o}}var v=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function y(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),r=l[n].value;r!==a&&(u(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>s.push(e),onKeyDown:d,onClick:c,...o,className:(0,r.Z)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=g(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(x,{...e,...t})]})}function F(e){const t=(0,v.Z)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var a=n(67294);const r={},o=a.createContext(r);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);