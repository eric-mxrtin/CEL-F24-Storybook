import { Breadcrumb } from "./Breadcrumb";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component: 'Breadcrumbs are an important navigational element that supports wayfinding — making users aware of their current location within the hierarchical structure of a website.'
      },
      source : {
        code: `
              <Breadcrumb first={"Home"} second={"Courses"} third={"Math"} />
        
              import React from "react";
              import "preline/dist/preline";
              
              export const Breadcrumb = ( {first, second, third}) => {
                return (
                  <>
                    <ol class="flex items-center whitespace-nowrap">
                      <li class="inline-flex items-center">
                        <a
                          class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                          href="#"
                        >
                          {first}
                        </a>
                        <svg
                          class="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </li>
                      <li class="inline-flex items-center">
                        <a
                          class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                          href="#"
                        >
                          {second}
                          <svg
                            class="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </a>
                      </li>
                      <li
                        class="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
                        aria-current="page"
                      >
                        {third}
                      </li>
                    </ol>
                  </>
                );
              };
            `
      }
    },
    layout: 'centered',
  },
  argTypes: {
    first: {
      description: 'The innermost page',
    },
    second: {
      description: 'The middlemost page',
    },
    third: {
      description: 'The current, outermost page',
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    first: 'Home',
    second: 'Courses',
    third: 'Math'
  },
};

export const Secondary = {
  args: {
    first: 'Courses',
    second: 'Math',
    third: 'Unit 1'
  },
};