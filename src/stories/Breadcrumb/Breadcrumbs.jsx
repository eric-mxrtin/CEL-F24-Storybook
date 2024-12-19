import React from "react";
import { Link } from "../Link/Link";

export const Breadcrumbs = ({ pages }) => {
  return (
    <ol className="flex items-center whitespace-nowrap">
      {pages.map((page, index) => (
        <li key={index} className="inline-flex items-center">
          <Link
            color={index === pages.length - 1 ? "blue" : "gray"}
            href={page.link}
          >
            {page.name}
          </Link>
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
