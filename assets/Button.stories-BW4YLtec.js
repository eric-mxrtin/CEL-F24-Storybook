import{B as _}from"./Button-CLF04v1S.js";import"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const P={title:"Documented Components/Button",component:_,parameters:{docs:{description:{component:"Buttons! **Buttons**"}},layout:"centered"},tags:["autodocs"],argTypes:{label:{description:"label for the button"},size:{description:"small or default size",control:{type:"radio"},options:["default","small"]},type:{options:["default","primary","outline","ghost","soft","white","link"],control:{type:"radio"},description:"type of the button, passed in as a string. defaults to solid."},color:{control:{type:"color",presetColors:["blue","red","yellow","green","purple","gray"]}},iconLeft:{description:"left icon passed in as a jsx component"},iconRight:{description:"right icon passed in as a jsx component"},disabled:{options:[!0,!1],control:{type:"boolean"},description:"active or disabled state of button. defaults to active, passed in as a boolean"}}},e={args:{children:"Button"}},r={args:{type:"outline",children:"Outline"}},s={args:{children:"Ghost",type:"ghost"}},t={args:{children:"Soft",type:"soft"}},o={args:{children:"White",type:"white"}},a={args:{children:"Disabled",disabled:!0}},n={args:{children:"Small",size:"small"}};var i,c,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,p,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: "outline",
    children: "Outline"
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,h,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Ghost',
    type: "ghost"
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,f,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Soft',
    type: "soft"
  }
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var S,B,D;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'White',
    type: "white"
  }
}`,...(D=(B=o.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var O,w,x;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: "Disabled",
    disabled: true
  }
}`,...(x=(w=a.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var z,G,W;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: "Small",
    size: "small"
  }
}`,...(W=(G=n.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};const k=["Primary","Outline","Ghost","Soft","White","Disabled","Small"];export{a as Disabled,s as Ghost,r as Outline,e as Primary,n as Small,t as Soft,o as White,k as __namedExportsOrder,P as default};
