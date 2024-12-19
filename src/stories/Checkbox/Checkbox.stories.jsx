import { Checkbox, CheckboxGroup } from "./Checkbox";

export default {
  title: 'Documented Components/Checkbox',
  component: CheckboxGroup,
  parameters: {
    docs: {
      description: {
        component: "Checkbox element",
      },
    },
    layout: 'centered',
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
    <CheckboxGroup {...args}>
      <Checkbox>Option 1</Checkbox>
      <Checkbox>Option 2</Checkbox>
      <Checkbox>Option 3</Checkbox>
    </CheckboxGroup>
  ),
  args: {
    title: "Select"
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the usage of a Checkbox group.",
      },
    },
  },
};

export const Disabled = {
  render: (args) => (
    <CheckboxGroup {...args}>
      <Checkbox disabled>Option 1</Checkbox>
      <Checkbox disabled>Option 2</Checkbox>
      <Checkbox disabled>Option 3</Checkbox>
    </CheckboxGroup>
  ),
  args: {
    title: "Select"
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the usage of a disabled Checkbox group.",
      },
    },
  },
};

export const Mixed = {
  render: (args) => (
    <CheckboxGroup {...args}>
      <Checkbox>Option 1</Checkbox>
      <Checkbox disabled>Option 2</Checkbox>
      <Checkbox >Option 3</Checkbox>
    </CheckboxGroup>
  ),
  args: {
    title: "Select",
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the usage of a mixed Checkbox group.",
      },
    },
  },
};
