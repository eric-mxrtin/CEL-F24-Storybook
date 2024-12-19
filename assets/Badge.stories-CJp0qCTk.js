import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import"./preline-CebrZH6F.js";import{c as w}from"./createLucideIcon-CKqK2yAx.js";import"./index-DJO9vBfz.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=w("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),a=({type:e,color:s="blue",children:_,size:I})=>{const k="inline-flex items-center gap-x-1.5 text-xs font-medium",c={small:"py-px px-2 rounded-md",large:"py-[11px] px-[10px] rounded-md",default:"py-1.5 px-1.5 rounded-md"},p={outline:`border border-${s}-500 text-${s}-500`,soft:`bg-${s}-50 text-${s}-800 dark:bg-${s}-800/30 dark:text-${s}-500`,default:`bg-${s}-500 text-white`},D=`${k} ${c[I]||c.default} ${p[e]||p.default}`;return r.jsx("span",{className:D,children:_})};a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{color:{defaultValue:{value:'"blue"',computed:!1},required:!1}}};const L={title:"Documented Components/Badge",component:a,parameters:{docs:{description:{component:"Badge element"}},layout:"centered"},tags:["autodocs"],argTypes:{type:{options:["default","outline","soft"],control:{type:"radio"},description:"type of the badge, passed in as a string. defaults to solid."},size:{options:["default","small","large"],control:{type:"radio"},description:"size passed in as a string, defaults to default."},color:{control:{type:"color",presetColors:["blue","red","yellow","green","purple","gray"]}}}},n={render:e=>r.jsx(a,{...e,children:"Online"}),args:{}},t={render:e=>r.jsx(a,{...e,children:"Online"}),args:{color:"purple",type:"soft"}},o={render:e=>r.jsx(a,{...e,children:"Online"}),args:{color:"red",type:"outline"}},d={render:e=>r.jsxs(a,{...e,children:[r.jsx(i,{size:"12px"}),"Online",r.jsx(i,{size:"12px"})]}),args:{type:"soft"}},l={render:e=>r.jsx(a,{...e,children:"Online"}),args:{type:"soft",size:"small",color:"green"}};var g,u,m;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Badge {...args}>
      Online
    </Badge>,
  args: {}
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var f,x,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Badge {...args}>
      Online
    </Badge>,
  args: {
    color: "purple",
    type: "soft"
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var B,O,b;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <Badge {...args}>
      Online
    </Badge>,
  args: {
    color: "red",
    type: "outline"
  }
}`,...(b=(O=o.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var j,$,z;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Badge {...args}>
      <Circle size="12px" />
      Online
      <Circle size="12px" />
    </Badge>,
  args: {
    type: "soft"
  }
}`,...(z=($=d.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var C,S,h;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <Badge {...args}>
      Online
    </Badge>,
  args: {
    type: "soft",
    size: "small",
    color: "green"
  }
}`,...(h=(S=l.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const R=["Default","Soft","Outline","Icons","Small"];export{n as Default,d as Icons,o as Outline,l as Small,t as Soft,R as __namedExportsOrder,L as default};
