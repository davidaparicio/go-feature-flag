"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[45223],{70827:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(85893),o=t(11151);const r={sidebar_position:2},s="Webhook Notifier",a={id:"go_module/notifier/webhook",title:"Webhook Notifier",description:"The Webhook notifier will perform an HTTP POST request to the specified endpoint everytime that a change in the flags is detected.",source:"@site/versioned_docs/version-v1.2.2/go_module/notifier/webhook.md",sourceDirName:"go_module/notifier",slug:"/go_module/notifier/webhook",permalink:"/docs/v1.2.2/go_module/notifier/webhook",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.2.2/go_module/notifier/webhook.md",tags:[],version:"v1.2.2",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Slack Notifier",permalink:"/docs/v1.2.2/go_module/notifier/slack"},next:{title:"Custom Notifier",permalink:"/docs/v1.2.2/go_module/notifier/custom"}},d={},l=[{value:"Configure the webhook notifier",id:"configure-the-webhook-notifier",level:2},{value:"Configuration fields",id:"configuration-fields",level:2},{value:"Format",id:"format",level:2},{value:"Example",id:"example",level:3},{value:"Signature",id:"signature",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"webhook-notifier",children:"Webhook Notifier"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Webhook notifier"})," will perform an HTTP POST request to the specified endpoint everytime that a change in the flags is detected."]}),"\n",(0,i.jsxs)(n.p,{children:["The format of the call is specified in the ",(0,i.jsx)(n.a,{href:"#format",children:"format section"})," and, you can ",(0,i.jsx)(n.a,{href:"#signature",children:"sign the body"})," to trust the data you are receiving."]}),"\n",(0,i.jsx)(n.h2,{id:"configure-the-webhook-notifier",children:"Configure the webhook notifier"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'ffclient.Config{ \n    // ...\n    Notifiers: []notifier.Notifier{\n        &webhooknotifier.Notifier{\n            EndpointURL: " https://example.com/hook",\n            Secret:     "Secret",\n            Meta: map[string]string{\n                "app.name": "my app",\n            },\n        },\n        // ...\n    },\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"EndpointURL"})}),(0,i.jsxs)(n.td,{children:["The complete URL of your API ",(0,i.jsxs)(n.em,{children:["(we will send a POST request to this URL, ",(0,i.jsx)(n.a,{href:"#format",children:"see format"}),")"]})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Secret"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"(optional)"}),(0,i.jsx)("br",{}),"A secret key you can share with your webhook. We will use this key to sign the request ",(0,i.jsxs)(n.em,{children:["(see ",(0,i.jsx)(n.a,{href:"#signature",children:"signature section"})," for more details)"]}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Meta"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"(optional)"}),(0,i.jsx)("br",{}),"A list of key value that will be add in your request, this is super useful if you want to add information on the current running instance of your app.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"By default the hostname is always added in the meta information."})]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"format",children:"Format"}),"\n",(0,i.jsxs)(n.p,{children:["If you have configured a webhook, a ",(0,i.jsx)(n.code,{children:"POST"})," request will be sent to the ",(0,i.jsx)(n.code,{children:"EndpointURL"})," with a body in this format:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "meta": {\n        "hostname": "server01",\n        // ...\n    },\n    "flags": {\n        "deleted": {}, // map of your deleted flags\n        "added": {}, // map of your added flags\n        "updated": {\n            "flag-name": { // an object that contains old and new value\n                "old_value": {},\n                "new_value": {}\n            }\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n   "meta":{\n       "hostname": "server01"\n   },\n   "flags":{\n       "deleted": {\n           "test-flag": {\n               "rule": "key eq \\"random-key\\"",\n               "percentage": 100,\n               "true": true,\n               "false": false,\n               "default": false\n           }\n       },\n       "added": {\n           "test-flag3": {\n               "percentage": 5,\n               "true": "test",\n               "false": "false",\n               "default": "default"\n           }\n       },\n       "updated": {\n           "test-flag2": {\n               "old_value": {\n                   "rule": "key eq \\"not-a-key\\"",\n                   "percentage": 100,\n                   "true": true,\n                   "false": false,\n                   "default": false\n               },\n               "new_value": {\n                   "disable": true,\n                   "rule": "key eq \\"not-a-key\\"",\n                   "percentage": 100,\n                   "true": true,\n                   "false": false,\n                   "default": false\n               }\n           }\n       }\n   }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"signature",children:"Signature"}),"\n",(0,i.jsxs)(n.p,{children:["This header ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"X-Hub-Signature-256"})})," is sent if the webhook is configured with a secret. This is the HMAC hex digest of the request body, and is generated using the SHA-256 hash function and the secret as the HMAC key."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["The recommendation is to always use the ",(0,i.jsx)(n.code,{children:"Secret"})," and on your API/webook always verify the signature key to be sure that you don't have a man in the middle attack."]})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(67294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);