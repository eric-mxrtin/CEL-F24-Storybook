import { Button } from "../Button/Button.jsx";
import { User, Settings, LogOut, ChevronDown, ArrowLeftFromLine, Bell, SendHorizonal } from "lucide-react";

// Default export for Storybook configuration
export default {
  title: 'Documented Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable Button component that supports multiple variants, sizes, colors, and states. Children can be text, icons, or any JSX content.'
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['default (solid)', 'outline', 'soft'],
      control: {type: 'radio'},
      description: 'type of the button, passed in as a string. defaults to solid.',
    },
    color: {
      control: {type: 'color', presetColors: ['blue', 'red', 'yellow', 'green', 'purple', 'gray']},
  },
    size: {
      options: ['default', 'small'],
      control: {type: 'radio'},
      description: 'size of button, passed in as string if small. defaults to medium'
  },
    disabled: {
      description: 'Disables the button when true.',
      control: 'boolean',
    },
    className: {
      description: 'Additional classes for custom styling.',
      control: 'text',
    },
  },
};

export const Primary = {
  render: (args) => (
    <Button {...args}>
      Click Me
    </Button>
  ),
  args: {
    type: 'default',
    color: 'blue',
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the default **Primary** button with text passed as children.'
      },
    },
  },
};

export const WithIconLeft = {
  render: (args) => (
    <Button {...args}>
      <User size="14px" />
      Profile
    </Button>
  ),
  args: {
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a button with an icon on the left and text passed as children.'
      },
    },
  },
};

export const WithIconRight = {
  render: (args) => (
    <Button {...args}>
      Settings
      <Settings size="14px" />
    </Button>
  ),
  args: {
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a button with text and an icon on the right passed as children.'
      },
    },
  },
};

export const WithIconBothSides = {
  render: (args) => (
    <Button {...args}>
      <ArrowLeftFromLine size="14px" />
      Back
      <User size="14px" />
    </Button>
  ),
  args: {
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a button with icons on both sides and text passed as children.'
      },
    },
  },
};

export const Disabled = {
  render: (args) => (
    <Button {...args}>
      Disabled
    </Button>
  ),
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a disabled button.'
      },
    },
  },
};

export const Small = {
  render: (args) => (
    <Button {...args}>
      Click Me
    </Button>
  ),
  args: {
    size: 'small'
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a small button.'
      },
    },
  },
};

export const Outline = {
  render: (args) => (
    <Button {...args}>
      Click Me
    </Button>
  ),
  args: {
    type: 'outline',
    color: 'green'
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a green outlined button.'
      },
    },
  },
};

export const Soft = {
  render: (args) => (
    <Button {...args}>
      Click Me
    </Button>
  ),
  args: {
    type: 'soft',
    color: 'red',
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a soft red button.'
      },
    },
  },
};

export const White = {
  render: (args) => (
    <Button {...args}>
      Click Me
    </Button>
  ),
  args: {
    type: 'white',
    color: 'yellow',
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a yellow white button.'
      },
    },
  },
};
export const Ghost = {
  render: (args) => (
    <Button {...args}>
      Click Me
    </Button>
  ),
  args: {
    type: 'ghost',
    color: 'purple',
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a purple ghost button.'
      },
    },
  },
};

export const CustomClass = {
  render: (args) => (
    <Button {...args} className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      Custom Button
    </Button>
  ),
  args: {
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a button with a custom class name.'
      },
    },
  },
};
