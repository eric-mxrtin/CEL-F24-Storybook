import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as s}from"./index-BrnU7xv7.js";import{ae as i}from"./index-CQl4qfFO.js";import"./index-DJO9vBfz.js";import"./iframe-CUp6c5er.js";import"../sb-preview/runtime.js";import"./index-DJdX7xnk.js";import"./index-D-8MO0q_.js";import"./index-j_8AUxV0.js";import"./index-DrFu-skq.js";function o(t){const n={h1:"h1",h3:"h3",p:"p",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{title:"Configuration/Design Workflow"}),`
`,e.jsx(n.h1,{id:"design-workflow",children:"Design Workflow"}),`
`,e.jsx(n.p,{children:"Outlining the workflow for how components are handed off from design to dev."}),`
`,e.jsx(n.h3,{id:"1-create-the-component-in-figma",children:"1. Create the component in Figma."}),`
`,e.jsx(n.p,{children:"This entails editing the base UI from Preline to match CEL's branding. Ensure that local variables and styles are used!"}),`
`,e.jsx(n.p,{children:"Typically, this process consists of only changing typography, padding, applying color variables, and removing any unnecessary variants (ex. dividers, excessive icon usage, additional dropdowns...)"}),`
`,e.jsx(n.h3,{id:"2-edit-the-base-preline-component-in-react-to-match-the-figma-style",children:"2. Edit the base preline component in React to match the Figma style."}),`
`,e.jsx(n.p,{children:"Change the tailwind class names to apply these styles that were changed in Figma. Use variables when possible to ensure a single source of truth."}),`
`,e.jsxs(n.p,{children:["Ex. if the font style in Figma is ",e.jsx(n.strong,{children:"Input/Semi Bold"})," then apply the class names ",e.jsx(n.strong,{children:"text-input and font-semibold"}),"."]}),`
`,e.jsx(n.h3,{id:"3-create-a-storybook-story-for-this-component",children:"3. Create a Storybook story for this component."}),`
`,e.jsx(n.p,{children:"Create the associated Properties to manage the component's various states. These properties will typically change things such as color and content (such as placeholder text or labels)."}),`
`,e.jsx(n.h3,{id:"4-create-the-storybook-documentation-for-this-component",children:"4. Create the Storybook documentation for this component.."}),`
`,e.jsx(n.p,{children:"Outline the components purpose and usage guidelines. This entails both how the component is used within a design context, and how developers should insert this component within their code."})]})}function x(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{x as default};
