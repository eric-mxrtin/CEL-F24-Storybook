import React from "react";
import "preline/dist/preline";

/** Primary UI component for user interaction */
export const Button = ({ label, type, color, disabled }) => {
  if (type == "outline") {
    return (
      <button
        type="button"
        class={`py-3.5 px-4 inline-flex items-center gap-x-2 text-input font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-${color}-600 hover:text-${color}-600 focus:outline-none focus:border-${color}-600 focus:text-${color}-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-${color}-500 dark:hover:border-${color}-600 dark:focus:text-${color}-500 dark:focus:border-${color}-600`}
        disabled={disabled}
      >
        {label}
      </button>
    );
  }
  if (type == "ghost") {
    return (
      <button
        type="button"
        class={`py-3.5 px-4 inline-flex items-center gap-x-2 text-input font-semibold rounded-lg border border-transparent text-${color}-600 hover:bg-${color}-100 hover:text-${color}-800 focus:outline-none focus:bg-${color}-100 focus:text-${color}-800 disabled:opacity-50 disabled:pointer-events-none dark:text-${color}-500 dark:hover:bg-${color}-800/30 dark:hover:text-${color}-400 dark:focus:bg-${color}-800/30 dark:focus:text-${color}-400`}
        disabled={disabled}
      >
        {label}
      </button>
    );
  }
  if (type == "soft") {
    return (
      <button
        type="button"
        class={`py-3.5 px-4 inline-flex items-center gap-x-2 text-input font-semibold rounded-lg border border-transparent bg-${color}-100 text-${color}-800 hover:bg-${color}-200 focus:outline-none focus:bg-${color}-200 disabled:opacity-50 disabled:pointer-events-none dark:text-${color}-400 dark:hover:bg-${color}-900 dark:focus:bg-${color}-900`}
        disabled={disabled}
      >
        {label}
      </button>
    );
  }
  if (type == "white") {
    return (
      <button
        type="button"
        class={`py-3.5 px-4 inline-flex items-center gap-x-2 text-input font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700`}
        disabled={disabled}
      >
        {label}
      </button>
    );
  }
  if (type == "link") {
    return (
      <button
        type="button"
        class={`py-3.5 px-4 inline-flex items-center gap-x-2 text-input font-semibold rounded-lg border border-transparent text-${color}-600 hover:text-${color}-800 focus:outline-none focus:text-${color}-800 disabled:opacity-50 disabled:pointer-events-none dark:text-${color}-500 dark:hover:text-${color}-400 dark:focus:text-${color}-400`}
        disabled={disabled}
      >
        {label}
      </button>
    );
  }
  return (
    <button
      type="button"
      class={`py-3.5 px-4 inline-flex items-center gap-x-2 text-input text-color-white font-semibold rounded-lg border border-transparent bg-${color}-500 text-white hover:bg-${color}-700 focus:outline-none focus:bg-${color}-700 disabled:opacity-50 disabled:pointer-events-none`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
