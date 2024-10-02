import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Button',
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
    type: {
      description: 'default / primary / outline / ghost / soft / white / link',
    },
  },
};

export const Primary = {
  args: {
    label: 'Button',
  },
};

export const Outline = {
  args: {
    label: 'Outline',
    type: "outline",
  },
};

export const Ghost = {
  args: {
    label: 'Outline',
    type: "ghost",
  },
};

export const Soft = {
  args: {
    label: 'Outline',
    type: "soft",
  },
};

export const White = {
  args: {
    label: 'Outline',
    type: "white",
  },
};

export const Link = {
  args: {
    label: 'Outline',
    type: "link",
  },
};

