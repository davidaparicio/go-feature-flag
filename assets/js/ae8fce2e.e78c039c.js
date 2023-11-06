"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[24537],{8335:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=r(85893),t=r(11151);const i={sidebar_position:21,description:"How to create a rule to target specific users"},l="How to target specific users",d={id:"configure_flag/rule_format",title:"How to target specific users",description:"How to create a rule to target specific users",source:"@site/versioned_docs/version-v1.5.0/configure_flag/rule_format.md",sourceDirName:"configure_flag",slug:"/configure_flag/rule_format",permalink:"/docs/v1.5.0/configure_flag/rule_format",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.5.0/configure_flag/rule_format.md",tags:[],version:"v1.5.0",sidebarPosition:21,frontMatter:{sidebar_position:21,description:"How to create a rule to target specific users"},sidebar:"tutorialSidebar",previous:{title:"How to configure a flag",permalink:"/docs/v1.5.0/configure_flag/flag_format"},next:{title:"Rollout strategies",permalink:"/docs/v1.5.0/category/rollout-strategies"}},c={},o=[{value:"Rule format",id:"rule-format",level:2},{value:"Format details",id:"format-details",level:3},{value:"Query format",id:"query-format",level:3},{value:"Examples",id:"examples",level:4},{value:"Environments",id:"environments",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"how-to-target-specific-users",children:"How to target specific users"}),"\n",(0,s.jsx)(n.h2,{id:"rule-format",children:"Rule format"}),"\n",(0,s.jsx)(n.p,{children:"A rule is a configuration that allows to serve a variation based on some conditions."}),"\n",(0,s.jsx)(n.h3,{id:"format-details",children:"Format details"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{width:"20%",children:"Field"}),(0,s.jsx)("th",{children:"Description"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"name"}),(0,s.jsx)("br",{}),(0,s.jsx)("i",{children:"(optional)"})]}),(0,s.jsxs)("td",{children:["Name of your rule.",(0,s.jsx)("br",{}),"This is needed when your are updating a rule using a ",(0,s.jsx)("a",{href:"./rollout/scheduled",children:"scheduled rollout"}),"."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"query"})}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:(0,s.jsxs)(n.p,{children:["Query represents an antlr query in the nikunjy/rules format.\n",(0,s.jsx)("br",{}),(0,s.jsx)("b",{children:"This field is mandatory in every rule used in the targeting field"}),"."]})}),(0,s.jsx)("p",{children:(0,s.jsxs)("i",{children:["See ",(0,s.jsx)("a",{href:"#query-format",children:"query format"})," to have the syntax."]})}),(0,s.jsx)("p",{children:(0,s.jsxs)("i",{children:["Note: if you use the field ",(0,s.jsx)("code",{children:"query"})," in a ",(0,s.jsx)("code",{children:"defaultRule"})," it will be ignored."]})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"variation"}),(0,s.jsx)("br",{}),(0,s.jsx)("i",{children:"(optional)"})]}),(0,s.jsx)("td",{children:"Name of the variation to return."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"percentage"}),(0,s.jsx)("br",{}),(0,s.jsx)("i",{children:"(optional)"})]}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:"Represents the percentage we should give to each variation."}),(0,s.jsx)("pre",{children:(0,s.jsxs)(n.p,{children:["percentage:",(0,s.jsx)("br",{}),"  variationA: 10.59",(0,s.jsx)("br",{}),"  variationB: 9.41",(0,s.jsx)("br",{}),"  variationC: 80"]})}),(0,s.jsx)("p",{children:"The format is the name of the variation and the percentage for this one."}),(0,s.jsx)("p",{children:(0,s.jsx)("b",{children:"Note: if your total is not equals to 100% this rule will be considered as invalid."})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"progressiveRollout"}),(0,s.jsx)("br",{}),(0,s.jsx)("i",{children:"(optional)"})]}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:"Allow to ramp up the percentage of your flag over time."}),(0,s.jsx)("p",{children:(0,s.jsx)(n.p,{children:"You can decide at which percentage you starts with and at what percentage you ends with in your release ramp.\nBefore the start date we will serve the initial percentage and, after we will serve the end percentage."})}),(0,s.jsx)("p",{children:(0,s.jsxs)("i",{children:["See ",(0,s.jsx)("a",{href:"./rollout/progressive",children:"progressive rollout"})," to have more info on how to use it."]})})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"disable"}),(0,s.jsx)("br",{}),(0,s.jsx)("i",{children:"(optional)"})]}),(0,s.jsxs)("td",{children:[(0,s.jsxs)("p",{children:["Set to ",(0,s.jsx)("code",{children:"true"})," if you want to disable the rule."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("b",{children:"Default:"})," ",(0,s.jsx)("code",{children:"true"}),"."]})]})]})]})]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"variation"}),", ",(0,s.jsx)(n.code,{children:"percentage"})," and ",(0,s.jsx)(n.code,{children:"progressiveRollout"})," are optional but you ",(0,s.jsx)(n.strong,{children:"must have one of the 3"}),"."]}),(0,s.jsxs)(n.p,{children:["If you have more than one field we will use the first one in that order\n",(0,s.jsx)(n.code,{children:"progressiveRollout"})," > ",(0,s.jsx)(n.code,{children:"percentage"})," > ",(0,s.jsx)(n.code,{children:"variation"}),"."]})]}),"\n",(0,s.jsx)(n.h3,{id:"query-format",children:"Query format"}),"\n",(0,s.jsxs)(n.p,{children:["The rule format is based on the ",(0,s.jsx)(n.a,{href:"https://github.com/nikunjy/rules",children:(0,s.jsx)(n.code,{children:"nikunjy/rules"})})," library."]}),"\n",(0,s.jsxs)(n.p,{children:["All the operations can be written capitalized or lowercase (ex: ",(0,s.jsx)(n.code,{children:"eq"})," or ",(0,s.jsx)(n.code,{children:"EQ"})," can be used).\nLogical Operations supported are ",(0,s.jsx)(n.code,{children:"AND"})," ",(0,s.jsx)(n.code,{children:"OR"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Compare Expression and their definitions (",(0,s.jsx)(n.code,{children:"a|b"})," means you can use either one of the two ",(0,s.jsx)(n.code,{children:"a"})," or ",(0,s.jsx)(n.code,{children:"b"}),"):"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Operator"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,s.jsx)(n.code,{children:"eq"}),", ",(0,s.jsx)(n.code,{children:"=="})]}),(0,s.jsx)(n.td,{children:"equals to"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,s.jsx)(n.code,{children:"ne"}),", ",(0,s.jsx)(n.code,{children:"!="})]}),(0,s.jsx)(n.td,{children:"not equals to"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,s.jsx)(n.code,{children:"lt"}),", ",(0,s.jsx)(n.code,{children:"<"})]}),(0,s.jsx)(n.td,{children:"less than"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,s.jsx)(n.code,{children:"gt"}),", ",(0,s.jsx)(n.code,{children:">"})]}),(0,s.jsx)(n.td,{children:"greater than"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,s.jsx)(n.code,{children:"le"}),", ",(0,s.jsx)(n.code,{children:"<="})]}),(0,s.jsx)(n.td,{children:"less than equal to"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,s.jsx)(n.code,{children:"ge"}),", ",(0,s.jsx)(n.code,{children:">="})]}),(0,s.jsx)(n.td,{children:"greater than equal to"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"co"})}),(0,s.jsx)(n.td,{children:"contains"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"sw"})}),(0,s.jsx)(n.td,{children:"starts with"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"ew"})}),(0,s.jsx)(n.td,{children:"ends with"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"in"})}),(0,s.jsx)(n.td,{children:"in a list"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"pr"})}),(0,s.jsx)(n.td,{children:"present"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:(0,s.jsx)(n.code,{children:"not"})}),(0,s.jsx)(n.td,{children:"not of a logical expression"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select a specific user: ",(0,s.jsx)(n.code,{children:'key eq "example@example.com"'})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select all identified users: ",(0,s.jsx)(n.code,{children:"anonymous ne true"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select a user with a custom property: ",(0,s.jsx)(n.code,{children:'userId eq "12345"'})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select on multiple criteria:\n",(0,s.jsxs)(n.em,{children:["All users with ids finishing by ",(0,s.jsx)(n.code,{children:"@test.com"})," that have the role ",(0,s.jsx)(n.code,{children:"backend engineer"})," in the ",(0,s.jsx)(n.code,{children:"pro"})," environment for the\ncompany ",(0,s.jsx)(n.code,{children:"go-feature-flag"})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'(key ew "@test.com") and (role eq "backend engineer") and (env eq "pro") and (company eq "go-feature-flag")\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"environments",children:"Environments"}),"\n",(0,s.jsxs)(n.p,{children:["When you initialise ",(0,s.jsx)(n.code,{children:"go-feature-flag"})," you can set an ",(0,s.jsx)(n.a,{href:"../go_module/configuration/#option_environment",children:"environment"})," for the instance of this SDK."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",metastring:'linenums="1"',children:'ffclient.Init(ffclient.Config{\n    // ...\n    Environment:    "prod",\n    // ...\n})\n'})}),"\n",(0,s.jsxs)(n.p,{children:["When an environment is set, it adds a new field in your user called ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"env"})})," that you can use in your rules.\nIt means that you can decide to activate a flag only for some ",(0,s.jsx)(n.strong,{children:"environment"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example of rules based on the environment:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# Flag activate only in dev\nrule: env == "dev"\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# Flag used only in dev and staging environment\nrule: (env == "dev") or (env == "staging")\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# Flag used on non prod environments except for the user 1234 in prod\nrule: (env != "prod") or (user_id == 1234)\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>l});var s=r(67294);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);