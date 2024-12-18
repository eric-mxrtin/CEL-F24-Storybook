import{j as m}from"./jsx-runtime-CkxqCPlQ.js";import{r as u}from"./index-DJO9vBfz.js";import"./preline-CebrZH6F.js";const h=({label:r,onClick:t,type:a="default",color:e="blue",disabled:d=!1,size:s="medium",iconLeft:n,iconRight:o,className:f,children:i})=>{const b="inline-flex items-center gap-x-2 font-semibold rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none",g=s==="small"?"py-2.5 px-3 text-xs":"py-3.5 px-4 text-sm",$={default:`border border-transparent bg-${e}-500 text-white hover:bg-${e}-700 focus:bg-${e}-700`,outline:`border border-${e}-200 text-${e}-500 hover:border-${e}-600 hover:text-${e}-600 focus:border-${e}-600 focus:text-${e}-600`,ghost:`border border-transparent text-${e}-600 hover:bg-${e}-50 hover:text-${e}-800 focus:bg-${e}-100 focus:text-${e}-800`,soft:`border border-transparent bg-${e}-50 text-${e}-800 hover:bg-${e}-100 focus:bg-${e}-200`,white:`border border-gray-200 bg-white text-${e}-600 shadow-sm hover:bg-gray-50 focus:bg-gray-50`,link:`border border-transparent text-${e}-600 hover:text-${e}-800 focus:text-${e}-800`},x={default:`dark:text-neutral-400 dark:hover:bg-${e}-800 dark:hover:text-${e}-400 dark:focus:bg-${e}-800`,outline:`dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-${e}-500 dark:hover:border-${e}-600 dark:focus:text-${e}-500 dark:focus:border-${e}-600`,ghost:`dark:text-${e}-500 dark:hover:bg-${e}-800/30 dark:hover:text-${e}-400 dark:focus:bg-${e}-800/30 dark:focus:text-${e}-400`,soft:`dark:text-${e}-400 dark:hover:bg-${e}-900 dark:focus:bg-${e}-900`,white:`dark:bg-neutral-800 dark:border-neutral-700 dark:text-${e}-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700`,link:`dark:text-${e}-500 dark:hover:text-${e}-400 dark:focus:text-${e}-400`},k=$[a]||$.default,l=x[a]||x.default;return m.jsxs("button",{type:"button",className:`${b} ${g} ${k} ${l} ${f||""}`,disabled:d,onClick:t,children:[n,r,i,o]})};h.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{type:{defaultValue:{value:'"default"',computed:!1},required:!1},color:{defaultValue:{value:'"blue"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},required:!1}}};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),p=(...r)=>r.filter((t,a,e)=>!!t&&t.trim()!==""&&e.indexOf(t)===a).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=u.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:e,className:d="",children:s,iconNode:n,...o},f)=>u.createElement("svg",{ref:f,...w,width:t,height:t,stroke:r,strokeWidth:e?Number(a)*24/Number(t):a,className:p("lucide",d),...o},[...n.map(([i,b])=>u.createElement(i,b)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=(r,t)=>{const a=u.forwardRef(({className:e,...d},s)=>u.createElement(c,{ref:s,iconNode:t,className:p(`lucide-${v(r)}`,e),...d}));return a.displayName=`${r}`,a};export{h as B,B as c};
