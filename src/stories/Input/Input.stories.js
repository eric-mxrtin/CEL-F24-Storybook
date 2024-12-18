import { Input } from "./Input";

export default {
  title: 'Documented Components/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: "Input Element",
      },
    },
    layout: 'centered',
  },
  argTypes: {
    placeholder: {
      description: 'placeholder text',
    },
    label: {
      description: 'label for the input',
    },
    disabled:{
      description: 'disabled state of input',
    },
    size: {
      options: ["small", "default"],
      control: {type: 'radio'},
    }
  },
  tags: ['autodocs'],
};


export const Primary = {
  args: {
    placeholder: "Enter username",
    label: "Username",
    disabled: false
  },
};

export const Light = {
  args: {
    placeholder: "Type here",
    label: "Light input field",
    type: "light",
    disabled: false
  },
};

export const Disabled = {
  args: {
    placeholder: "Enter username",
    label: "Username",
    disabled: true
  },
};

export const Small = {
  args: {
    placeholder: "Enter username",
    label: "Username",
    size: "small",
  },
};