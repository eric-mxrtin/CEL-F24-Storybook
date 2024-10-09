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
        options: ['default', 'outline'],
        control: {type: 'radio'},
        description: 'type of the badge, passed in as a string. defaults to solid.',
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