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
    iconLeft: {
        description: 'left icon passed in as a jsx component',
      },
    iconRight: {
        description: 'right icon passed in as a jsx component',
      },
    color: {
        control: {type: 'color', presetColors: ['blue', 'red', 'yellow', 'green', 'purple', 'gray']},
    },
  }
};


export const Primary = {
  args: {
    color: "blue",
    label: "Badge"
  },
};

export const Outline = {
  args: {
    color: "blue",
    label: "Outline",
    type: "outline"
  },
};

export const Soft = {
  args: {
    color: "blue",
    label: "Soft",
    type: "soft"
  },
};