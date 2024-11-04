import { Breadcrumb } from "./Breadcrumb";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Documented Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component: 'Breadcrumbs are an important navigational element that supports wayfinding — making users aware of their current location within the hierarchical structure of a website.'
      },
    },
    layout: 'centered',
  },
  argTypes: {
    pages : {
      description: "an array of page names and their links"
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    pages: [
      { name: "Home", link: "/home" },
      { name: "About", link: "/about" },
      { name: "Contact", link: "/contact" }
    ],
  },
};
