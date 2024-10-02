import { Navbar } from './Navbar';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

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
    viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: 'ipad',
      },
    layout: 'centered',
  },
  tags: ['autodocs'],
};


export const Primary = {
  args: {

  },
};