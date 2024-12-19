import { Circle } from "lucide-react";
import { Badge } from "./Badge";
import "preline/dist/preline";

export default {
  title: 'Documented Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: "Badge element",
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
        options: ['default', 'outline', 'soft'],
        control: {type: 'radio'},
        description: 'type of the badge, passed in as a string. defaults to solid.',
      },
    size: {
        options: ['default', 'small', 'large'],
        control: {type: 'radio'},
        description: 'size passed in as a string, defaults to default.',
      },
    color: {
        control: {type: 'color', presetColors: ['blue', 'red', 'yellow', 'green', 'purple', 'gray']},
    },
  }
};

export const Default = {
  render: (args) => (
    <Badge {...args}>
      Online
    </Badge>
  ),
  args: {
  }
};

export const Soft = {
  render: (args) => (
    <Badge {...args}>
      Online
    </Badge>
  ),
  args: {
    color: "purple",
    type: "soft"
  }
};

export const Outline = {
  render: (args) => (
    <Badge {...args}>
      Online
    </Badge>
  ),
  args: {
    color: "red",
    type: "outline"
  }
};

export const Icons = {
  render: (args) => (
    <Badge {...args}>
      <Circle size="12px"/>
      Online
      <Circle size="12px"/>
    </Badge>
  ),
  args: {
    type: "soft"
  }
};

export const Small = {
  render: (args) => (
    <Badge {...args}>
      Online
    </Badge>
  ),
  args: {
    type: "soft",
    size: "small",
    color: "green"
  }
};