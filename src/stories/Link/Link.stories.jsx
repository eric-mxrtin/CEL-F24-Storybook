import React from 'react';
import { Link } from './Link';

// Default export for Storybook configuration
export default {
  title: 'Documented Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable Link component for navigation.'
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: 'Additional classes for custom styling.',
      control: 'text',
    },
    color: {
      description: 'The color of the link. Defaults to gray.',
      control: 'text',
    },
    href: {
      description: 'The URL the link navigates to.',
      control: 'text',
    },
    children: {
      description: 'The content inside the link, usually text or elements.',
      control: 'text',
    },
  },
};

export const Default = {
  render: (args) => <Link {...args}>Default Link</Link>,
  args: {
    href: '#',
    color: 'gray',
  },
  parameters: {
    docs: {
      description: {
        story: 'This is the default **Link** component. It includes text content and points to the specified `href` URL.'
      },
    },
  },
};

export const CustomColor = {
  render: (args) => <Link {...args}>Custom Color Link</Link>,
  args: {
    href: '#',
    color: 'blue',
  },
  parameters: {
    docs: {
      description: {
        story: 'This version of the **Link** component demonstrates how to use the `color` prop to customize the link color.'
      },
    },
  },
};

export const CustomClass = {
  render: (args) => <Link {...args}>Custom Class Link</Link>,
  args: {
    href: '#',
    className: 'text-lg font-bold',
  },
  parameters: {
    docs: {
      description: {
        story: 'This example shows how to apply custom classes to the **Link** component using the `className` prop.'
      },
    },
  },
};
