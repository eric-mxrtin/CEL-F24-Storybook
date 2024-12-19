// Breadcrumbs.stories.jsx
import React from "react";
import { Breadcrumbs } from "./Breadcrumbs";

export default {
  title: 'Documented Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    docs: {
      description: {
        component: "Breadcrumbs element",
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  render: (args) => (
    <Breadcrumbs {...args}/>
  ),
  args: {
    pages: [
      { name: "Reviews", link: "/" },
      { name: "Master's in Emerging Technologies", link: "/" },
      { name: "Statement of Interest", link: "/" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates a small button.",
      },
    },
  },
};

export const Single = {
  render: (args) => (
    <Breadcrumbs {...args}/>
  ),
  args: {
    pages: [
      { name: "Reviews", link: "/" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates a small button.",
      },
    },
  },
};

export const Double = {
  render: (args) => (
    <Breadcrumbs {...args}/>
  ),
  args: {
    pages: [
      { name: "Reviews", link: "/" },
      { name: "Master's in Emerging Technologies", link: "/" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates a small button.",
      },
    },
  },
};
