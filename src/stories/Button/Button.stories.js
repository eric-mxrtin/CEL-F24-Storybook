import { User } from 'lucide-react';
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
    children: 'Button',
  },
};

export const Outline = {
  args: {
    type: "outline",
    children: "Outline",
  },
};

export const Ghost = {
  args: {
    children: 'Ghost',
    type: "ghost",
  },
};

export const Soft = {
  args: {
    children: 'Soft',
    type: "soft",
  },
};

export const White = {
  args: {
    children: 'White',
    type: "white"
  },
};

export const Disabled ={
  args: {
    children: "Disabled",
    disabled: true,
  }
}

export const Small ={
  args: {
    children: "Small",
    size: "small",
  }
}