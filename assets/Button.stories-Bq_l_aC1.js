import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{B as t}from"./createLucideIcon-aZ_5j4Lj.js";import{U as H,S as K,A as Q}from"./user-CKChpFaU.js";import"./index-DJO9vBfz.js";import"./preline-CebrZH6F.js";const es={title:"Documented Components/Button",component:t,parameters:{layout:"centered",docs:{description:{component:"A customizable Button component that supports multiple variants, sizes, colors, and states. Children can be text, icons, or any JSX content."}}},tags:["autodocs"],argTypes:{type:{options:["default (solid)","outline","soft"],control:{type:"radio"},description:"type of the button, passed in as a string. defaults to solid."},color:{control:{type:"color",presetColors:["blue","red","yellow","green","purple","gray"]}},size:{options:["default","small"],control:{type:"radio"},description:"size of button, passed in as string if small. defaults to medium"},disabled:{description:"Disables the button when true.",control:"boolean"},className:{description:"Additional classes for custom styling.",control:"text"}}},r={render:s=>e.jsx(t,{...s,children:"Click Me"}),args:{type:"default",color:"blue"},parameters:{docs:{description:{story:"This story demonstrates the default **Primary** button with text passed as children."}}}},o={render:s=>e.jsxs(t,{...s,children:[e.jsx(H,{size:"14px"}),"Profile"]}),args:{},parameters:{docs:{description:{story:"This story demonstrates a button with an icon on the left and text passed as children."}}}},n={render:s=>e.jsxs(t,{...s,children:["Settings",e.jsx(K,{size:"14px"})]}),args:{},parameters:{docs:{description:{story:"This story demonstrates a button with text and an icon on the right passed as children."}}}},a={render:s=>e.jsxs(t,{...s,children:[e.jsx(Q,{size:"14px"}),"Back",e.jsx(H,{size:"14px"})]}),args:{},parameters:{docs:{description:{story:"This story demonstrates a button with icons on both sides and text passed as children."}}}},i={render:s=>e.jsx(t,{...s,children:"Disabled"}),args:{disabled:!0},parameters:{docs:{description:{story:"This story demonstrates a disabled button."}}}},d={render:s=>e.jsx(t,{...s,children:"Click Me"}),args:{size:"small"},parameters:{docs:{description:{story:"This story demonstrates a small button."}}}},c={render:s=>e.jsx(t,{...s,children:"Click Me"}),args:{type:"outline",color:"green"},parameters:{docs:{description:{story:"This story demonstrates a green outlined button."}}}},p={render:s=>e.jsx(t,{...s,children:"Click Me"}),args:{type:"soft",color:"red"},parameters:{docs:{description:{story:"This story demonstrates a soft red button."}}}},l={render:s=>e.jsx(t,{...s,children:"Click Me"}),args:{type:"white",color:"yellow"},parameters:{docs:{description:{story:"This story demonstrates a yellow white button."}}}},m={render:s=>e.jsx(t,{...s,children:"Click Me"}),args:{type:"ghost",color:"purple"},parameters:{docs:{description:{story:"This story demonstrates a purple ghost button."}}}},u={render:s=>e.jsx(t,{...s,className:"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white",children:"Custom Button"}),args:{},parameters:{docs:{description:{story:"This story demonstrates a button with a custom class name."}}}};var h,g,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Button {...args}>
      Click Me
    </Button>,
  args: {
    type: 'default',
    color: 'blue'
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the default **Primary** button with text passed as children.'
      }
    }
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,x,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Button {...args}>
      <User size="14px" />
      Profile
    </Button>,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a button with an icon on the left and text passed as children.'
      }
    }
  }
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var B,w,S;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <Button {...args}>
      Settings
      <Settings size="14px" />
    </Button>,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a button with text and an icon on the right passed as children.'
      }
    }
  }
}`,...(S=(w=n.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var T,C,j;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Button {...args}>
      <ArrowLeftFromLine size="14px" />
      Back
      <User size="14px" />
    </Button>,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a button with icons on both sides and text passed as children.'
      }
    }
  }
}`,...(j=(C=a.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var k,z,M;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Button {...args}>
      Disabled
    </Button>,
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a disabled button.'
      }
    }
  }
}`,...(M=(z=i.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var W,D,I;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <Button {...args}>
      Click Me
    </Button>,
  args: {
    size: 'small'
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a small button.'
      }
    }
  }
}`,...(I=(D=d.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var L,P,A;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <Button {...args}>
      Click Me
    </Button>,
  args: {
    type: 'outline',
    color: 'green'
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a green outlined button.'
      }
    }
  }
}`,...(A=(P=c.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var U,v,N;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <Button {...args}>
      Click Me
    </Button>,
  args: {
    type: 'soft',
    color: 'red'
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a soft red button.'
      }
    }
  }
}`,...(N=(v=p.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var O,R,_;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <Button {...args}>
      Click Me
    </Button>,
  args: {
    type: 'white',
    color: 'yellow'
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a yellow white button.'
      }
    }
  }
}`,...(_=(R=l.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var E,F,G;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <Button {...args}>
      Click Me
    </Button>,
  args: {
    type: 'ghost',
    color: 'purple'
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a purple ghost button.'
      }
    }
  }
}`,...(G=(F=m.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,X,q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <Button {...args} className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      Custom Button
    </Button>,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a button with a custom class name.'
      }
    }
  }
}`,...(q=(X=u.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};const ts=["Primary","WithIconLeft","WithIconRight","WithIconBothSides","Disabled","Small","Outline","Soft","White","Ghost","CustomClass"];export{u as CustomClass,i as Disabled,m as Ghost,c as Outline,r as Primary,d as Small,p as Soft,l as White,a as WithIconBothSides,o as WithIconLeft,n as WithIconRight,ts as __namedExportsOrder,es as default};
