import{j as c}from"./jsx-runtime-CkxqCPlQ.js";import{r as s}from"./index-DJO9vBfz.js";import{B as f}from"./Button-CLF04v1S.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),u=(...r)=>r.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var g={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:a="",children:o,iconNode:d,...l},i)=>s.createElement("svg",{ref:i,...g,width:e,height:e,stroke:r,strokeWidth:n?Number(t)*24/Number(e):t,className:u("lucide",a),...l},[...d.map(([m,p])=>s.createElement(m,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=(r,e)=>{const t=s.forwardRef(({className:n,...a},o)=>s.createElement(h,{ref:o,iconNode:e,className:u(`lucide-${w(r)}`,n),...a}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=v("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),b=({children:r,trigger:e,dropRight:t})=>{const[n,a]=s.useState(!1),o=s.useRef(null),d=()=>a(i=>!i),l=()=>a(!1);return s.useEffect(()=>{const i=m=>{o.current&&!o.current.contains(m.target)&&l()};return document.addEventListener("click",i),()=>{document.removeEventListener("click",i)}},[]),c.jsxs("div",{ref:o,className:"relative inline-block gap-y-2",children:[c.jsx("div",{onClick:d,className:"cursor-pointer",children:e||c.jsxs(f,{type:"white",color:"gray",className:"text-gray-800",children:["Label",c.jsx(x,{size:"14px",className:`transition-transform duration-200 ${n?"rotate-180":""}`})]})}),n&&c.jsx("div",{className:`absolute border border-gray-200 z-10 transition-[opacity,margin] duration-200 opacity-100 min-w-40 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 ${t?"right-0":"left-0"}`,role:"menu","aria-orientation":"vertical",children:c.jsx("div",{className:"p-1 space-y-0.5",children:r})})]})};b.__docgenInfo={description:"",methods:[],displayName:"Dropdown"};export{x as C,b as D,v as c};
