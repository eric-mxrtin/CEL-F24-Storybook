import { ArgTypes } from "@storybook/blocks";
import { Tabs, Tab } from "./Tabs";

export default {
  title: "Documented Components/Tabs",
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: "Tabs element.",
      },
    },
    layout: "centered",
  },
  argTypes: {
    title: {
      description: "Title for each tab.",
    },
  },
  tags: ["autodocs"],
};

export const Default = {
  render: (args) => (
    <Tabs>
      <Tab title="Tab 1">Content for Tab 1</Tab>
      <Tab title="Tab 2">Content for Tab 2</Tab>
      <Tab title="Tab 3" {...args}>
        Content for Tab 3
      </Tab>
    </Tabs>
  ),
  args: {
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the usage of default Tabs.",
      },
    },
  },
};

export const Disabled = {
  render: (args) => (
    <Tabs>
      <Tab title="Tab 1">Content for Tab 1</Tab>
      <Tab title="Tab 2">Content for Tab 2</Tab>
      <Tab title="Tab 3" {...args}>
        Content for Tab 3
      </Tab>
    </Tabs>
  ),
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the usage of Tabs, with one of them disabled.",
      },
    },
  },
};

export const Large = {
  render: (args) => (
    <Tabs>
      <Tab title="Tab 1">
        <div className="w-80 flex flex-col">
          <p className="text-lg font-semibold">Header 1</p>
          <p>Content for tab 1</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </Tab>
      <Tab title="Tab 2">
        {" "}
        <div className="w-80 flex flex-col">
          <p className="text-lg font-semibold">Header 2</p>
          <p>Content for tab 2</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </Tab>
      <Tab title="Tab 3" {...args}>
        <div className="w-80 flex flex-col">
          <p className="text-lg font-semibold">Header 3</p>
          <p>Content for tab 3</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </Tab>
    </Tabs>
  ),
  args: {
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the usage of Tabs with more content.",
      },
    },
  },
};
