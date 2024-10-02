import { Dropdown } from './Dropdown';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
    docs: { story: { iframeHeight: '1000px' } } 
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'label for the dropdown',
    },
    items: {
      description: 'items for the dropdown',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    label: 'dropdown',
    items: ['1', '2', '3']
  },
};

