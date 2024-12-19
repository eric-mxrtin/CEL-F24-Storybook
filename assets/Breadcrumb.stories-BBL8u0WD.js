import{j as s}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";import{L as b}from"./Link-CtazcyOc.js";const r=({pages:e})=>s.jsx("ol",{className:"flex items-center whitespace-nowrap",children:e.map((i,o)=>s.jsxs("li",{className:"inline-flex items-center",children:[s.jsx(b,{color:o===e.length-1?"blue":"gray",href:i.link,children:i.name}),o<e.length-1&&s.jsx("svg",{className:"shrink-0 size-5 text-gray-400 dark:text-neutral-600 mx-2",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:s.jsx("path",{d:"M6 13L10 3",stroke:"currentColor",strokeLinecap:"round"})})]},o))});r.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs"};const f={title:"Documented Components/Breadcrumbs",component:r,parameters:{docs:{description:{component:"Breadcrumbs element"}},layout:"centered"},tags:["autodocs"]},a={render:e=>s.jsx(r,{...e}),args:{pages:[{name:"Reviews",link:"/"},{name:"Master's in Emerging Technologies",link:"/"},{name:"Statement of Interest",link:"/"}]},parameters:{docs:{description:{story:"This story demonstrates a small button."}}}},t={render:e=>s.jsx(r,{...e}),args:{pages:[{name:"Reviews",link:"/"}]},parameters:{docs:{description:{story:"This story demonstrates a small button."}}}},n={render:e=>s.jsx(r,{...e}),args:{pages:[{name:"Reviews",link:"/"},{name:"Master's in Emerging Technologies",link:"/"}]},parameters:{docs:{description:{story:"This story demonstrates a small button."}}}};var m,c,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args} />,
  args: {
    pages: [{
      name: "Reviews",
      link: "/"
    }, {
      name: "Master's in Emerging Technologies",
      link: "/"
    }, {
      name: "Statement of Interest",
      link: "/"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates a small button."
      }
    }
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,p,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args} />,
  args: {
    pages: [{
      name: "Reviews",
      link: "/"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates a small button."
      }
    }
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,h,k;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args} />,
  args: {
    pages: [{
      name: "Reviews",
      link: "/"
    }, {
      name: "Master's in Emerging Technologies",
      link: "/"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates a small button."
      }
    }
  }
}`,...(k=(h=n.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const j=["Default","Single","Double"];export{a as Default,n as Double,t as Single,j as __namedExportsOrder,f as default};
