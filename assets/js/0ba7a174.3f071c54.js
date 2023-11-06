"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[28452],{30858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(85893),a=n(11151),o=n(74866),i=n(85162);const l={},s="Experimentation rollout / A/B Testing",u={id:"configure_flag/rollout/experimentation",title:"Experimentation rollout / A/B Testing",description:"An experimentation rollout is when your flag is configured to be served only for a determined time.",source:"@site/versioned_docs/version-v1.12.0/configure_flag/rollout/experimentation.mdx",sourceDirName:"configure_flag/rollout",slug:"/configure_flag/rollout/experimentation",permalink:"/docs/v1.12.0/configure_flag/rollout/experimentation",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.12.0/configure_flag/rollout/experimentation.mdx",tags:[],version:"v1.12.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Canary Release",permalink:"/docs/v1.12.0/configure_flag/rollout/canary"},next:{title:"Progressive rollout",permalink:"/docs/v1.12.0/configure_flag/rollout/progressive"}},c={},d=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2},{value:"A/B testing",id:"ab-testing",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"experimentation-rollout--ab-testing",children:"Experimentation rollout / A/B Testing"}),"\n",(0,r.jsxs)(t.p,{children:["An ",(0,r.jsx)(t.strong,{children:"experimentation rollout"})," is when your flag is configured to be served only for a determined time."]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["It means that before the rollout start date, the ",(0,r.jsx)(t.code,{children:"default"})," value is served to all users."]}),"\n",(0,r.jsx)(t.li,{children:"Between the dates the flag is evaluated."}),"\n",(0,r.jsxs)(t.li,{children:["After the end date the ",(0,r.jsx)(t.code,{children:"default"})," value is served to all users."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(o.Z,{groupId:"code",children:[(0,r.jsx)(i.Z,{value:"yaml",label:"YAML",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"experimentation-flag:\n  variations:\n    variationA: A\n    variationB: B\n  defaultRule:\n    percentage:\n      variationA: 50\n      variationB: 50\n  # highlight-start\n  experimentation:\n    start: 2021-03-20T00:00:00.1-05:00\n    end: 2021-03-21T00:00:00.1-05:00\n  # highlight-end\n"})})}),(0,r.jsx)(i.Z,{value:"json",label:"JSON",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "experimentation-flag": {\n    "variations": {\n      "variationA": "A",\n      "variationB": "B"\n    },\n    "defaultRule": {\n      "percentage": {\n        "variationA": 50,\n        "variationB": 50\n      }\n    },\n# highlight-start\n    "experimentation": {\n      "start": "2021-03-20T05:00:00.100Z",\n      "end": "2021-03-21T05:00:00.100Z"\n    },\n# highlight-end\n  }\n}\n'})})}),(0,r.jsx)(i.Z,{value:"toml",label:"TOML",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-toml",children:'[experimentation-flag.variations]\nvariationA = "A"\nvariationB = "B"\n\n[experimentation-flag.defaultRule.percentage]\nvariationA = 50\nvariationB = 50\n\n# highlight-start\n[experimentation-flag.experimentation]\nstart = 2021-03-20T05:00:00.100Z\nend = 2021-03-21T05:00:00.100Z\n# highlight-end\n'})})})]}),"\n",(0,r.jsxs)(t.p,{children:["Check this ",(0,r.jsx)(t.a,{href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/examples/rollout_experimentation",children:"example"})," to see how it works."]}),"\n",(0,r.jsx)(t.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"The dates are in the format supported natively by your flag file format."})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"start"})})}),(0,r.jsx)(t.td,{children:"The date the flag will be started to be served."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"end"})})}),(0,r.jsx)(t.td,{children:"The date the flag will be stopped to be served."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"ab-testing",children:"A/B testing"}),"\n",(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsx)(t.p,{children:"A/B test is the shorthand for a simple controlled experiment.\nAs the name implies, two versions (A and B) of a single variable are compared, which are identical except for one variation that might affect a user's behavior.\nA/B tests are widely considered the simplest form of controlled experiment."}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"(source wikipedia)"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["To have a proper A/B testing solution with the module you should use the experimentation rollout combined with the ",(0,r.jsx)(t.a,{href:"../../go_module/data_collection/",children:"export of your data"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"This combination will allow to have your experimentation running for a dedicated time, and you will have the data to knows exactly which user was on which version of the flag."}),"\n",(0,r.jsxs)(t.p,{children:["To setup the duration of your A/B test you can use a tool ",(0,r.jsx)(t.a,{href:"https://vwo.com/tools/ab-test-duration-calculator/",children:"ab-test-duration-calculator"})," from vwo, that will help you to set up the test duration correctly."]})]})}function f(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(86010);const a={tabItem:"tabItem_Ymn6"};var o=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(86010),o=n(12466),i=n(16550),l=n(20469),s=n(91980),u=n(67392),c=n(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=p({queryString:n,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),x=(()=>{const e=u??m;return f({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{x&&s(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function b(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),a=l[n].value;a!==r&&(u(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>s.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.Z)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(b,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function w(e){const t=(0,g.Z)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var r=n(67294);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);