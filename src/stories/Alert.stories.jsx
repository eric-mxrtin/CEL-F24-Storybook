import { Alert } from "./Alert";

export default {
  title:  'Documented Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: "Alert lement",
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'label for the alert',
    },
    message: {
      description: 'message for the alert',
    },
    color: {
      control: {type: 'color', presetColors: ['blue', 'red', 'yellow', 'green', 'purple', 'gray']},
    },
    type: {
      options: ['solid', 'soft', 'bordered'],
      control: {type: 'radio'},
      description: 'type of alert',
    }
  },
};


export const Solid = {
  args: {
    color: 'blue',
    title: 'Info Alert!',
    message: 'Hello, this is an information alert.'
  },
};

export const Soft = {
  args: {
    color: 'green',
    title: 'Info',
    message: 'Hello, this is an information alert.',
    type: "soft"
  },
};

export const Bordered = {
  args: {
    color: 'green',
    title: 'Submitted Sucessfully!',
    message: 'You will be notified once a dean completes their review.',
    type: "bordered"
  },
};