import { Checkbox } from "./Checkbox";

export default {
  title: 'Documented Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: "Checkbox element",
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label : {
        description: "label for checkbox"
    },
    disabled: {
        options: [true, false],
        control: {type: 'boolean'},
        description: 'active or disabled state of checkbox. defaults to active, passed in as a boolean',
      }
  }
};


export const Primary = {
  args: {
    label: 'Checkbox',
  },
};

export const Disabled = {
  args: {
    label: 'Disabled',
    disabled: true
  },
};