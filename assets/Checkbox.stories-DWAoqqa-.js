import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{a,C as o}from"./Checkbox-ce5VtHkS.js";import"./index-DJO9vBfz.js";const g={title:"Documented Components/Checkbox",component:a,parameters:{docs:{description:{component:"Checkbox element"}},layout:"centered"},argTypes:{title:{description:"Title for the question."}},tags:["autodocs"]},s={render:r=>e.jsxs(a,{...r,children:[e.jsx(o,{children:"Option 1"}),e.jsx(o,{children:"Option 2"}),e.jsx(o,{children:"Option 3"})]}),args:{title:"Select"},parameters:{docs:{description:{story:"This story demonstrates the usage of a Checkbox group."}}}},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(o,{disabled:!0,children:"Option 1"}),e.jsx(o,{disabled:!0,children:"Option 2"}),e.jsx(o,{disabled:!0,children:"Option 3"})]}),args:{title:"Select"},parameters:{docs:{description:{story:"This story demonstrates the usage of a disabled Checkbox group."}}}},n={render:r=>e.jsxs(a,{...r,children:[e.jsx(o,{children:"Option 1"}),e.jsx(o,{disabled:!0,children:"Option 2"}),e.jsx(o,{children:"Option 3"})]}),args:{title:"Select"},parameters:{docs:{description:{story:"This story demonstrates the usage of a mixed Checkbox group."}}}};var c,i,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <CheckboxGroup {...args}>
      <Checkbox>Option 1</Checkbox>
      <Checkbox>Option 2</Checkbox>
      <Checkbox>Option 3</Checkbox>
    </CheckboxGroup>,
  args: {
    title: "Select"
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the usage of a Checkbox group."
      }
    }
  }
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,h,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <CheckboxGroup {...args}>
      <Checkbox disabled>Option 1</Checkbox>
      <Checkbox disabled>Option 2</Checkbox>
      <Checkbox disabled>Option 3</Checkbox>
    </CheckboxGroup>,
  args: {
    title: "Select"
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the usage of a disabled Checkbox group."
      }
    }
  }
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,l,u;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <CheckboxGroup {...args}>
      <Checkbox>Option 1</Checkbox>
      <Checkbox disabled>Option 2</Checkbox>
      <Checkbox>Option 3</Checkbox>
    </CheckboxGroup>,
  args: {
    title: "Select"
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the usage of a mixed Checkbox group."
      }
    }
  }
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const O=["Default","Disabled","Mixed"];export{s as Default,t as Disabled,n as Mixed,O as __namedExportsOrder,g as default};
