import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import"./index-BlUnffmP.js";import{r as y}from"./index-DJO9vBfz.js";import{c as q}from"./createLucideIcon-CKqK2yAx.js";import"./iframe-BQMg04Ap.js";import"../sb-preview/runtime.js";import"./index-DJdX7xnk.js";import"./index-D-8MO0q_.js";import"./index-j_8AUxV0.js";import"./index-DrFu-skq.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=q("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),o=({children:a})=>{const[d,v]=y.useState(0),c=a?Array.isArray(a)?a:[a]:[],j=(r,t)=>{t||v(r)};return e.jsxs("div",{children:[e.jsx("div",{className:"border-b border-gray-200 dark:border-neutral-700",children:e.jsx("nav",{className:"flex",children:c.map((r,t)=>e.jsxs("button",{type:"button",className:`flex-grow gap-2 text-sm font-medium py-2 px-1 inline-flex items-center justify-center border-b-2 whitespace-nowrap focus:outline-none ${r.props.disabled?"text-gray-300 border-transparent cursor-not-allowed":d===t?"text-blue-600 border-blue-600":"text-gray-600 border-transparent hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-500"}`,id:`tabs-item-${t}`,"aria-controls":`tabs-panel-${t}`,"aria-selected":d===t,"aria-disabled":r.props.disabled||void 0,onClick:()=>j(t,r.props.disabled),role:"tab",disabled:r.props.disabled,children:[r.props.disabled&&e.jsx(C,{size:"14px"}),r.props.title]},t))})}),e.jsx("div",{className:"mt-3",children:c.map((r,t)=>e.jsx("div",{id:`tabs-panel-${t}`,role:"tabpanel","aria-labelledby":`tabs-item-${t}`,className:d===t?"":"hidden",children:r.props.children},t))})]})},s=({children:a})=>e.jsx(e.Fragment,{children:a});o.__docgenInfo={description:"",methods:[],displayName:"Tabs"};s.__docgenInfo={description:"",methods:[],displayName:"Tab"};const S={title:"Documented Components/Tabs",component:o,parameters:{docs:{description:{component:"Tabs element."}},layout:"centered"},argTypes:{title:{description:"Title for each tab."}},tags:["autodocs"]},i={render:a=>e.jsxs(o,{children:[e.jsx(s,{title:"Tab 1",children:"Content for Tab 1"}),e.jsx(s,{title:"Tab 2",children:"Content for Tab 2"}),e.jsx(s,{title:"Tab 3",...a,children:"Content for Tab 3"})]}),args:{disabled:!1},parameters:{docs:{description:{story:"This story demonstrates the usage of default Tabs."}}}},n={render:a=>e.jsxs(o,{children:[e.jsx(s,{title:"Tab 1",children:"Content for Tab 1"}),e.jsx(s,{title:"Tab 2",children:"Content for Tab 2"}),e.jsx(s,{title:"Tab 3",...a,children:"Content for Tab 3"})]}),args:{disabled:!0},parameters:{docs:{description:{story:"This story demonstrates the usage of Tabs, with one of them disabled."}}}},l={render:a=>e.jsxs(o,{children:[e.jsx(s,{title:"Tab 1",children:e.jsxs("div",{className:"w-80 flex flex-col",children:[e.jsx("p",{className:"text-lg font-semibold",children:"Header 1"}),e.jsx("p",{children:"Content for tab 1"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."})]})}),e.jsxs(s,{title:"Tab 2",children:[" ",e.jsxs("div",{className:"w-80 flex flex-col",children:[e.jsx("p",{className:"text-lg font-semibold",children:"Header 2"}),e.jsx("p",{children:"Content for tab 2"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."})]})]}),e.jsx(s,{title:"Tab 3",...a,children:e.jsxs("div",{className:"w-80 flex flex-col",children:[e.jsx("p",{className:"text-lg font-semibold",children:"Header 3"}),e.jsx("p",{children:"Content for tab 3"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."})]})})]}),args:{disabled:!1},parameters:{docs:{description:{story:"This story demonstrates the usage of Tabs with more content."}}}};var m,u,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Tabs>
      <Tab title="Tab 1">Content for Tab 1</Tab>
      <Tab title="Tab 2">Content for Tab 2</Tab>
      <Tab title="Tab 3" {...args}>
        Content for Tab 3
      </Tab>
    </Tabs>,
  args: {
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the usage of default Tabs."
      }
    }
  }
}`,...(p=(u=i.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,T,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Tabs>
      <Tab title="Tab 1">Content for Tab 1</Tab>
      <Tab title="Tab 2">Content for Tab 2</Tab>
      <Tab title="Tab 3" {...args}>
        Content for Tab 3
      </Tab>
    </Tabs>,
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the usage of Tabs, with one of them disabled."
      }
    }
  }
}`,...(f=(T=n.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var x,h,g;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Tabs>
      <Tab title="Tab 1">
        <div className="w-80 flex flex-col">
          <p className="text-lg font-semibold">Header 1</p>
          <p>Content for tab 1</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </Tab>
      <Tab title="Tab 2">
        {" "}
        <div className="w-80 flex flex-col">
          <p className="text-lg font-semibold">Header 2</p>
          <p>Content for tab 2</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </Tab>
      <Tab title="Tab 3" {...args}>
        <div className="w-80 flex flex-col">
          <p className="text-lg font-semibold">Header 3</p>
          <p>Content for tab 3</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </Tab>
    </Tabs>,
  args: {
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the usage of Tabs with more content."
      }
    }
  }
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const E=["Default","Disabled","Large"];export{i as Default,n as Disabled,l as Large,E as __namedExportsOrder,S as default};
