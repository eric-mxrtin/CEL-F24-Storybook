import { ArgTypes } from "@storybook/blocks";
import { RadioGroup, Radio } from "./Radio";

export default {
  title: "Documented Components/Radio",
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component: "Radio Group Element",
      },
    },
    layout: "centered",
  },
  argTypes: {
    title: {
      description: "Title for the question.",
    },
  },
  tags: ["autodocs"],
};

export const Default = {
  render: (args) => (
    <RadioGroup {...args}>
      <Radio>Option 1</Radio>
      <Radio>Option 2</Radio>
      <Radio>Option 3</Radio>
    </RadioGroup>
  ),
  args: {
    title: "Options"
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the usage of a Radio group.",
      },
    },
  },
};

export const Disabled = {
  render: (args) => (
    <RadioGroup {...args}>
      <Radio disabled>Option 1</Radio>
      <Radio disabled>Option 2</Radio>
      <Radio disabled>Option 3</Radio>
    </RadioGroup>
  ),
  args: {
    title: "Options"
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the usage of a disabled Radio group.",
      },
    },
  },
};

export const Mixed = {
  render: (args) => (
    <RadioGroup {...args}>
      <Radio>Option 1</Radio>
      <Radio disabled>Option 2</Radio>
      <Radio >Option 3</Radio>
    </RadioGroup>
  ),
  args: {
    title: "Options",
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the usage of a mixed Radio group.",
      },
    },
  },
};
