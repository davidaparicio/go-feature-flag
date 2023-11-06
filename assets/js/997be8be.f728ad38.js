"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[82805],{21870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(85893),s=n(11151);const r={sidebar_position:20,description:"How to select who should have the flag activated."},i="Performing flag evaluations",o={id:"go_module/target_user",title:"Performing flag evaluations",description:"How to select who should have the flag activated.",source:"@site/versioned_docs/version-v1.2.1/go_module/target_user.md",sourceDirName:"go_module",slug:"/go_module/target_user",permalink:"/docs/v1.2.1/go_module/target_user",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.2.1/go_module/target_user.md",tags:[],version:"v1.2.1",sidebarPosition:20,frontMatter:{sidebar_position:20,description:"How to select who should have the flag activated."},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/v1.2.1/go_module/configuration"},next:{title:"Retrieve your feature flags configuration",permalink:"/docs/v1.2.1/go_module/store_file/"}},l={},d=[{value:"Users",id:"users",level:2},{value:"Anonymous users",id:"anonymous-users",level:2},{value:"Variation",id:"variation",level:2},{value:"Variation details",id:"variation-details",level:2},{value:"Get all flags for a specific user",id:"get-all-flags-for-a-specific-user",level:2}];function h(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"performing-flag-evaluations",children:"Performing flag evaluations"}),"\n",(0,a.jsx)(t.h2,{id:"users",children:"Users"}),"\n",(0,a.jsxs)(t.p,{children:["Feature flag targeting and rollouts are all determined by the user you pass to your ",(0,a.jsx)(t.strong,{children:"Variation"})," calls.\nThe SDK defines a ",(0,a.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/ffuser#User",children:(0,a.jsx)(t.code,{children:"User"})})," struct and a ",(0,a.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/ffuser#UserBuilder",children:(0,a.jsx)(t.code,{children:"UserBuilder"})})," to make this easy."]}),"\n",(0,a.jsx)(t.p,{children:"Here's an example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",metastring:'linenums="1"',children:'// User with only a key\nuser1 := ffuser.NewUser("user1-key")\n\n// User with a key plus other attributes\nuser2 = ffuser.NewUserBuilder("user2-key").\n AddCustom("firstname", "John").\n AddCustom("lastname", "Doe").\n AddCustom("email", "john.doe@example.com").\n Build()\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The most common attribute is the user's key and ",(0,a.jsx)(t.strong,{children:"this is the only mandatory user attribute."}),(0,a.jsx)(t.br,{}),"\n","The key should also uniquely identify each user. You can use a primary key, an e-mail address, or a hash, as long as the same user always has the same key.",(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.strong,{children:"We recommend using a hash if possible."}),(0,a.jsx)(t.br,{}),"\n","All the other attributes are optional."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["Custom attributes are one of the most powerful features.",(0,a.jsx)(t.br,{}),"\n","They let you have rules on these attributes and target users according to any data that you want."]})}),"\n",(0,a.jsx)(t.h2,{id:"anonymous-users",children:"Anonymous users"}),"\n",(0,a.jsx)(t.p,{children:"You can also distinguish logged-in users from anonymous users in the SDK, as follows:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",metastring:'linenums="1"',children:'// User with only a key\nuser1 := ffuser.NewAnonymousUser("user1-key")\n\n// User with a key plus other attributes\nuser2 = ffuser.NewUserBuilder("user2-key").\n  Anonymous(true).\n  AddCustom("firstname", "John").\n  AddCustom("lastname", "Doe").\n  AddCustom("email", "john.doe@example.com").\n  Build()\n'})}),"\n",(0,a.jsx)(t.p,{children:"You will still need to generate a unique key for anonymous users. Session IDs or UUIDs work best for this."}),"\n",(0,a.jsx)(t.p,{children:"Anonymous users work just like regular users, this information just helps you to add a rule to target a specific population."}),"\n",(0,a.jsx)(t.h2,{id:"variation",children:"Variation"}),"\n",(0,a.jsxs)(t.p,{children:["The Variation methods determine whether a flag is enabled or not for a specific user.\nThere is a Variation method for each type:",(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#BoolVariation",children:(0,a.jsx)(t.code,{children:"BoolVariation"})})," , ",(0,a.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#IntVariation",children:(0,a.jsx)(t.code,{children:"IntVariation"})}),"\n, ",(0,a.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#Float64Variation",children:(0,a.jsx)(t.code,{children:"Float64Variation"})}),"\n, ",(0,a.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#StringVariation",children:(0,a.jsx)(t.code,{children:"StringVariation"})}),"\n, ",(0,a.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#JSONArrayVariation",children:(0,a.jsx)(t.code,{children:"JSONArrayVariation"})}),"\n, ",(0,a.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#JSONVariation",children:(0,a.jsx)(t.code,{children:"JSONVariation"})})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",metastring:'linenums="1"',children:'result, _ := ffclient.BoolVariation("your.feature.key", user, false)\n\n// result is now true or false depending on the setting of\n// this boolean feature flag\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Variation methods take the feature ",(0,a.jsx)(t.strong,{children:"flag key"}),", a ",(0,a.jsx)(t.strong,{children:"user"}),", and a ",(0,a.jsx)(t.strong,{children:"default value"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The default value is return when an error is encountered ",(0,a.jsxs)(t.em,{children:["(",(0,a.jsx)(t.code,{children:"ffclient"})," not initialized, variation with wrong type, flag does not exist ...)."]})]}),"\n",(0,a.jsxs)(t.p,{children:["In the example, if the flag ",(0,a.jsx)(t.code,{children:"your.feature.key"})," does not exists, result will be ",(0,a.jsx)(t.code,{children:"false"}),".",(0,a.jsx)(t.br,{}),"\n","Not that you will always have a usable value in the result."]}),"\n",(0,a.jsx)(t.h2,{id:"variation-details",children:"Variation details"}),"\n",(0,a.jsxs)(t.p,{children:["If you want more information about your flag evaluation, you can use the variation details functions.\nThere is a Variation method for each type:",(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#BoolVariationDetails",children:(0,a.jsx)(t.code,{children:"BoolVariationDetails"})}),"\n, ",(0,a.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#IntVariationDetails",children:(0,a.jsx)(t.code,{children:"IntVariation"})}),"\n, ",(0,a.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#Float64VariationDetails",children:(0,a.jsx)(t.code,{children:"Float64VariationDetails"})}),"\n, ",(0,a.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#StringVariationDetails",children:(0,a.jsx)(t.code,{children:"StringVariationDetails"})}),"\n, ",(0,a.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#JSONArrayVariationDetails",children:(0,a.jsx)(t.code,{children:"JSONArrayVariationDetails"})}),"\n, ",(0,a.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#JSONVariationDetails",children:(0,a.jsx)(t.code,{children:"JSONVariationDetails"})})]}),"\n",(0,a.jsxs)(t.p,{children:["You can use these functions the same way as the other variation functions BUT it will return a generic object ",(0,a.jsx)(t.code,{children:"model.VariationResult[<type>]"})," containing your result.",(0,a.jsx)(t.br,{}),"\n","This object will contain these fields:"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"field"}),(0,a.jsx)(t.th,{children:"type"}),(0,a.jsx)(t.th,{children:"description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"TrackEvents"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"bool"})}),(0,a.jsx)(t.td,{children:"true` if this evaluation was tracked."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"VariationType"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"string"})}),(0,a.jsx)(t.td,{children:"The name of the variation used to get this value."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"Failed"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"bool"})}),(0,a.jsxs)(t.td,{children:[(0,a.jsx)(t.code,{children:"true"})," if an error occurred during the evaluation."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"Version"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"string"})}),(0,a.jsxs)(t.td,{children:["The ",(0,a.jsx)(t.strong,{children:"version"})," of the flag used to do the evaluation."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"Reason"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"flag.ResolutionReason"})}),(0,a.jsx)(t.td,{children:"The reason used for this evaluation."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"ErrorCode"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"flag.ErrorCode"})}),(0,a.jsx)(t.td,{children:"Error code in case we have an error."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"Value"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"<type T>"})}),(0,a.jsx)(t.td,{children:"Value of the flag in the expected type."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"get-all-flags-for-a-specific-user",children:"Get all flags for a specific user"}),"\n",(0,a.jsx)(t.p,{children:"If you want to send the information about a specific user to a front-end, you will want a snapshot of all the flags for\nthis user at a specific time."}),"\n",(0,a.jsxs)(t.p,{children:["The method ",(0,a.jsx)(t.code,{children:"ffclient.AllFlagsState"})," returns a snapshot of flag values and metadata.",(0,a.jsx)(t.br,{}),"\n","The function is evaluating all available flags for the user and return a ",(0,a.jsx)(t.code,{children:"flagstate.AllFlagsState"})," object containing the\ninformation you need."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",metastring:'linenums="1"',children:'user := ffuser.NewUser("example")\n// AllFlagsState will give you the value for all the flags available.\nallFlagsState := ffclient.AllFlagsState(u)\n\n// If you want to send it to a front-end you can Marshal it by calling MarshalJSON()\nforFE, err := allFlagsState.MarshalJSON()\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"MarshalJSON()"})," function will return something like bellow, that can be directly used by your front-end application."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",metastring:'linenums="1"',children:'{\n    "flags": {\n        "test-flag0": {\n            "value": true,\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": true\n        },\n        "test-flag1": {\n            "value": "true",\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": true\n        },\n        "test-flag2": {\n            "value": 1,\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": true\n        },\n        "test-flag3": {\n            "value": [\n                "yo",\n                "ya"\n            ],\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": true\n        },\n        "test-flag4": {\n            "value": {\n                "test": "yo"\n            },\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": true\n        },\n        "test-flag5": {\n            "value": 1.1,\n            "timestamp": 1622209328,\n            "variationType": "True",\n            "trackEvents": false\n        }\n    },\n    "valid": true\n}\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsx)(t.p,{children:"There is no tracking done when evaluating all the flag at once."})})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var a=n(67294);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);