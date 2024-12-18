import { Button } from "../Button/Button.jsx";
import { Dropdown } from "./Dropdown.jsx";
import { User, Settings, LogOut, ChevronDown } from "lucide-react";
// Default export for Storybook configuration
export default {
  title: 'Documented Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable Dropdown component that can be triggered by a button or any custom trigger. Supports left or right dropdown alignment and auto-closes on outside click. Selection options are passed in as JSX elements, as children.'
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      description: 'Custom trigger element to open the dropdown, passed as JSX. If not provided, a default trigger with an icon is used.',
      control: 'text',
    },
    dropRight: {
      description: 'Controls whether the dropdown aligns to the right or left of the trigger.',
      control: 'boolean',
    },
    children: {
      description: 'Content to be rendered inside the dropdown. This can be a list of menu items, links, or any custom content.',
      control: {type: 'object'},
    }
  },
};

export const DropLeft = {
  render: (args) => (
    <Dropdown {...args}
  >
    <a
      href="/profile"
      className="flex justify-between items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
    >
      Profile
      <User size="14px" />
    </a>
    <a
      href="/settings"
      className="flex justify-between items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
    >
      Settings
      <Settings size="14px" />
    </a>
    <a
      href="/"
      className="flex justify-between items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
    >
      Log Out
      <LogOut size="14px" />
    </a>
  </Dropdown>
  ),
  args: {
    dropRight: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the default **DropLeft** behavior. Notice how children passed into the dropdown are styled <a> tags.'
      },
    },
  },
};
export const DropRight = {
  render: (args) => (
    <Dropdown {...args}
  >
    <a
      href="/profile"
      className="flex justify-between items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
    >
      Profile
      <User size="14px" />
    </a>
    <a
      href="/settings"
      className="flex justify-between items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
    >
      Settings
      <Settings size="14px" />
    </a>
    <a
      href="/"
      className="flex justify-between items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
    >
      Log Out
      <LogOut size="14px" />
    </a>
  </Dropdown>
  ),
  args: {
    dropRight: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the **DropRight** behavior.'
      },
    },
  },
};

export const CustomTrigger = {
  render: (args) => (
    <Dropdown {...args}
    trigger={
      <Button size="small" type="white" color="black">
        <User size="14px"/>
        e24marti
        <ChevronDown size="14px"/>
      </Button>
    }
  >
    <a
      href="/profile"
      className="flex justify-between items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
    >
      Profile
      <User size="14px" />
    </a>
    <a
      href="/settings"
      className="flex justify-between items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
    >
      Settings
      <Settings size="14px" />
    </a>
    <a
      href="/"
      className="flex justify-between items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
    >
      Log Out
      <LogOut size="14px" />
    </a>
  </Dropdown>
  ),
  args: {
    dropRight: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates using a custom trigger, a small white button with dual-icons.'
      },
    },
  },
};