import { ArgTypes } from '@storybook/blocks';
import { Radio } from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: "Radio Element",
      },
    },
    layout: 'centered',
  },
  argTypes: {
    label: {
      description: 'label for radio'
    },
    disabled: {
      description: 'whether or not its disabled',
      control: 'boolean'
    }
  },
  tags: ['autodocs'],
};


export const Primary = {
  args: {
    label: "Radio Button",
    disabled: false
  },
};

export const Disabled = {
  args: {
    label: "Radio Button",
    disabled: true
  },
};