import { Dropdown } from "./Dropdown.jsx";

// Default export for Storybook configuration
export default {
  title: 'Documented Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable Dropdown component that can be triggered by a button or any custom trigger. Supports left or right alignment and auto-closes on outside click.'
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      description: 'Custom trigger element to open the dropdown. If not provided, a default button with an icon is used.',
      control: 'text',
    },
    dropRight: {
      description: 'Controls whether the dropdown aligns to the right or left of the trigger.',
      control: 'boolean',
    },
    children: {
      description: 'Content to be rendered inside the dropdown. This can be a list of menu items, links, or any custom content.',
      control: 'text',
    }
  },
};

// ** Story 1: DropLeft (Default Behavior) **
export const DropLeft = {
  args: {
    trigger: 'Open Menu',
    dropRight: false,
    children: (
      <>
        <button className="block w-full text-left p-2 hover:bg-gray-100">Item 1</button>
        <button className="block w-full text-left p-2 hover:bg-gray-100">Item 2</button>
        <button className="block w-full text-left p-2 hover:bg-gray-100">Item 3</button>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the default **DropLeft** behavior. The dropdown opens to the left of the trigger.'
      },
    },
  },
};

// ** Story 2: DropRight **
export const DropRight = {
  args: {
    trigger: 'Open Menu',
    dropRight: true,
    children: (
      <>
        <button className="block w-full text-left p-2 hover:bg-gray-100">Item 1</button>
        <button className="block w-full text-left p-2 hover:bg-gray-100">Item 2</button>
        <button className="block w-full text-left p-2 hover:bg-gray-100">Item 3</button>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the **DropRight** behavior. The dropdown opens to the right of the trigger button.'
      },
    },
  },
};

// ** Story 3: Custom Trigger **
export const CustomTrigger = {
  args: {
    trigger: (
      <button className="p-2 bg-blue-500 text-white rounded-md">
        Custom Trigger
      </button>
    ),
    dropRight: false,
    children: (
      <>
        <button className="block w-full text-left p-2 hover:bg-gray-100">Item 1</button>
        <button className="block w-full text-left p-2 hover:bg-gray-100">Item 2</button>
        <button className="block w-full text-left p-2 hover:bg-gray-100">Item 3</button>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'This story shows a **custom trigger** for the dropdown. Instead of the default button, you can provide your own trigger element.'
      },
    },
  },
};
