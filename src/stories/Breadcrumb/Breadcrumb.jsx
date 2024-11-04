import React from "react";
import "preline/dist/preline";

export const Breadcrumb = ({ pages }) => {
  return (
    <ol className="flex items-center whitespace-nowrap">
      {pages.map((page, index) => (
        <li key={index} className="inline-flex items-center">
          <a
            className={`flex items-center text-base ${
              index === pages.length - 1
                ? "font-semibold text-blue-500 dark:text-blue-400"
                : "font-medium hover:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500"
            }`}
            href={page.link}
            aria-current={index === pages.length - 1 ? "page" : undefined}
          >
            {page.name}
          </a>
          {index < pages.length - 1 && (
            <svg
              className="shrink-0 size-5 text-gray-400 dark:text-neutral-600 mx-2"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 13L10 3"
                stroke="currentColor"
                strokeLinecap="round"
              ></path>
            </svg>
          )}
        </li>
      ))}
    </ol>
  );
};
