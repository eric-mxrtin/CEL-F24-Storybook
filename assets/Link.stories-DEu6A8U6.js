import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";import{L as n}from"./Link-CtazcyOc.js";const L={title:"Documented Components/Link",component:n,parameters:{layout:"centered",docs:{description:{component:"A customizable Link component for navigation."}}},tags:["autodocs"],argTypes:{className:{description:"Additional classes for custom styling.",control:"text"},color:{description:"The color of the link. Defaults to gray.",control:"text"},href:{description:"The URL the link navigates to.",control:"text"},children:{description:"The content inside the link, usually text or elements.",control:"text"}}},o={render:e=>r.jsx(n,{...e,children:"Default Link"}),args:{href:"#",color:"gray"},parameters:{docs:{description:{story:"This is the default **Link** component. It includes text content and points to the specified `href` URL."}}}},s={render:e=>r.jsx(n,{...e,children:"Custom Color Link"}),args:{href:"#",color:"blue"},parameters:{docs:{description:{story:"This version of the **Link** component demonstrates how to use the `color` prop to customize the link color."}}}},t={render:e=>r.jsx(n,{...e,children:"Custom Class Link"}),args:{href:"#",className:"text-lg font-bold"},parameters:{docs:{description:{story:"This example shows how to apply custom classes to the **Link** component using the `className` prop."}}}};var a,i,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <Link {...args}>Default Link</Link>,
  args: {
    href: '#',
    color: 'gray'
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the default **Link** component. It includes text content and points to the specified \`href\` URL.'
      }
    }
  }
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,p,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Link {...args}>Custom Color Link</Link>,
  args: {
    href: '#',
    color: 'blue'
  },
  parameters: {
    docs: {
      description: {
        story: 'This version of the **Link** component demonstrates how to use the \`color\` prop to customize the link color.'
      }
    }
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,h,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Link {...args}>Custom Class Link</Link>,
  args: {
    href: '#',
    className: 'text-lg font-bold'
  },
  parameters: {
    docs: {
      description: {
        story: 'This example shows how to apply custom classes to the **Link** component using the \`className\` prop.'
      }
    }
  }
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const x=["Default","CustomColor","CustomClass"];export{t as CustomClass,s as CustomColor,o as Default,x as __namedExportsOrder,L as default};
