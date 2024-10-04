import { Navbar } from './Navbar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    docs: {
      description: {
        component: "Navbar / Header element",
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
};


export const Primary = {
  args: {

  },
};