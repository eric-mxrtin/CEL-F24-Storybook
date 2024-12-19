import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import"./index-BlUnffmP.js";import{r as l}from"./index-DJO9vBfz.js";import"./iframe-BQMg04Ap.js";import"../sb-preview/runtime.js";import"./index-DJdX7xnk.js";import"./index-D-8MO0q_.js";import"./index-j_8AUxV0.js";import"./index-DrFu-skq.js";const y=l.createContext(),r=({title:o,children:t})=>{const[d,p]=l.useState(null),c=b=>{p(b)};return e.jsx(y.Provider,{value:{selectedOption:d,handleOptionChange:c},children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{className:"font-semibold",children:o}),t]})})},s=({children:o,disabled:t=!1})=>{const{selectedOption:d,handleOptionChange:p}=l.useContext(y),c=d===o;return e.jsxs("label",{className:`inline-flex items-center gap-2 ${t?"opacity-50 cursor-not-allowed":""}`,children:[e.jsx("input",{type:"radio",name:o,value:o,checked:c,onChange:()=>!t&&p(o),className:"form-radio text-blue-600 focus:ring-0",disabled:t}),e.jsx("span",{children:o})]})};r.__docgenInfo={description:"",methods:[],displayName:"RadioGroup"};s.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const q={title:"Documented Components/Radio",component:r,parameters:{docs:{description:{component:"Radio Group Element"}},layout:"centered"},argTypes:{title:{description:"Title for the question."}},tags:["autodocs"]},a={render:o=>e.jsxs(r,{...o,children:[e.jsx(s,{children:"Option 1"}),e.jsx(s,{children:"Option 2"}),e.jsx(s,{children:"Option 3"})]}),args:{title:"Options"},parameters:{docs:{description:{story:"This story demonstrates the usage of a Radio group."}}}},i={render:o=>e.jsxs(r,{...o,children:[e.jsx(s,{disabled:!0,children:"Option 1"}),e.jsx(s,{disabled:!0,children:"Option 2"}),e.jsx(s,{disabled:!0,children:"Option 3"})]}),args:{title:"Options"},parameters:{docs:{description:{story:"This story demonstrates the usage of a disabled Radio group."}}}},n={render:o=>e.jsxs(r,{...o,children:[e.jsx(s,{children:"Option 1"}),e.jsx(s,{disabled:!0,children:"Option 2"}),e.jsx(s,{children:"Option 3"})]}),args:{title:"Options"},parameters:{docs:{description:{story:"This story demonstrates the usage of a mixed Radio group."}}}};var u,m,R;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <RadioGroup {...args}>
      <Radio>Option 1</Radio>
      <Radio>Option 2</Radio>
      <Radio>Option 3</Radio>
    </RadioGroup>,
  args: {
    title: "Options"
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the usage of a Radio group."
      }
    }
  }
}`,...(R=(m=a.parameters)==null?void 0:m.docs)==null?void 0:R.source}}};var g,x,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <RadioGroup {...args}>
      <Radio disabled>Option 1</Radio>
      <Radio disabled>Option 2</Radio>
      <Radio disabled>Option 3</Radio>
    </RadioGroup>,
  args: {
    title: "Options"
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the usage of a disabled Radio group."
      }
    }
  }
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var O,f,j;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <RadioGroup {...args}>
      <Radio>Option 1</Radio>
      <Radio disabled>Option 2</Radio>
      <Radio>Option 3</Radio>
    </RadioGroup>,
  args: {
    title: "Options"
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the usage of a mixed Radio group."
      }
    }
  }
}`,...(j=(f=n.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const I=["Default","Disabled","Mixed"];export{a as Default,i as Disabled,n as Mixed,I as __namedExportsOrder,q as default};
