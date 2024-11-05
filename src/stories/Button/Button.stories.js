import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Documented Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "Buttons! **Buttons**",
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'label for the button',
    },
    size: {
      description: 'small or default size',
      control: {type: 'radio'},
      options: ['default', 'small'],
    },
    type: {
      options: ['default', 'primary', 'outline', 'ghost', 'soft', 'white', 'link'],
      control: {type: 'radio'},
      description: 'type of the button, passed in as a string. defaults to solid.',
    },
    color: {
      control: {type: 'color', presetColors: ['blue', 'red', 'yellow', 'green', 'purple', 'gray']},
    },
    iconLeft:{
      description: 'left icon passed in as a jsx component'
    },
    iconRight:{
      description: 'right icon passed in as a jsx component'
    },
    disabled: {
      options: [true, false],
      control: {type: 'boolean'},
      description: 'active or disabled state of button. defaults to active, passed in as a boolean',
    }
  },
};


export const Primary = {
  args: {
    label: 'Button',
    color: 'blue'
  },
};

export const Outline = {
  args: {
    label: 'Outline',
    type: "outline",
    color: 'blue'
  },
};

export const Ghost = {
  args: {
    label: 'Outline',
    type: "ghost",
    color: 'blue'
  },
};

export const Soft = {
  args: {
    label: 'Outline',
    type: "soft",
    color: 'blue'
  },
};

export const White = {
  args: {
    label: 'Outline',
    type: "white",
    color: 'blue'
  },
};

export const Link = {
  args: {
    label: 'Outline',
    type: "link",
    color: 'blue'
  },
};