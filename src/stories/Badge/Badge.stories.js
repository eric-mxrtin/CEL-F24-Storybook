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
<<<<<<< HEAD
    label: "Soft",
=======
    label: "RETURNED WITH FEEDBACK",
>>>>>>> b4ffc2b9d4f1b5cc5af13c3856bfc99c5553e4c8
    type: "soft"
  },
};