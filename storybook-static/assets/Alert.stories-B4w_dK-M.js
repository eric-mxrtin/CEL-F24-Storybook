import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const f=({type:i,color:r,title:l,message:a})=>i=="soft"?e.jsx(e.Fragment,{children:e.jsxs("div",{class:`mt-2 bg-${r}-100 border border-${r}-200 text-sm text-${r}-800 rounded-lg p-4 dark:bg-${r}-800/10 dark:border-${r}-900 dark:text-${r}-500"
          role="alert`,tabindex:"-1","aria-labelledby":"hs-soft-color-info-label",children:[e.jsx("span",{id:"hs-soft-color-info-label",class:"font-bold",children:l})," ",a]})}):i=="bordered"?e.jsx(e.Fragment,{children:e.jsx("div",{class:`bg-${r}-50 border border-${r}-200 text-sm text-${r}-800 rounded-lg p-4 dark:bg-${r}-800/10 dark:border-${r}-900 dark:text-${r}-500`,role:"alert",tabindex:"-1","aria-labelledby":"hs-with-description-label",children:e.jsxs("div",{class:"flex gap-4",children:[e.jsx("div",{class:"shrink-0",children:e.jsxs("svg",{class:"shrink-0 size-6 mt-0.5",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[e.jsx("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}),e.jsx("path",{d:"M12 9v4"}),e.jsx("path",{d:"M12 17h.01"})]})}),e.jsxs("div",{class:"ms-4",children:[e.jsx("h3",{id:"hs-with-description-label",class:"text-sm font-semibold",children:l}),e.jsx("div",{class:`mt-1 text-sm text-${r}-700`,children:a})]})]})})}):e.jsx(e.Fragment,{children:e.jsxs("div",{class:`mt-2 bg-${r}-500 text-sm text-white rounded-lg p-4 dark:bg-blue-500`,role:"alert",tabindex:"-1","aria-labelledby":"hs-solid-color-info-label",children:[e.jsx("span",{id:"hs-solid-color-info-label",class:"font-bold",children:l})," ",a]})});f.__docgenInfo={description:"",methods:[],displayName:"Alert"};const y={title:"Documented Components/Alert",component:f,parameters:{docs:{description:{component:"Alert lement"}},layout:"centered"},tags:["autodocs"],argTypes:{title:{description:"label for the alert"},message:{description:"message for the alert"},color:{control:{type:"color",presetColors:["blue","red","yellow","green","purple","gray"]}},type:{options:["solid","soft","bordered"],control:{type:"radio"},description:"type of alert"}}},s={args:{color:"blue",title:"Info Alert!",message:"Hello, this is an information alert."}},t={args:{color:"green",title:"Info",message:"Hello, this is an information alert.",type:"soft"}},o={args:{color:"green",title:"Submitted Sucessfully!",message:"You will be notified once a dean completes their review.",type:"bordered"}};var n,d,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    color: 'blue',
    title: 'Info Alert!',
    message: 'Hello, this is an information alert.'
  }
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    color: 'green',
    title: 'Info',
    message: 'Hello, this is an information alert.',
    type: "soft"
  }
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var b,g,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    color: 'green',
    title: 'Submitted Sucessfully!',
    message: 'You will be notified once a dean completes their review.',
    type: "bordered"
  }
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const w=["Solid","Soft","Bordered"];export{o as Bordered,t as Soft,s as Solid,w as __namedExportsOrder,y as default};
