import React from "react";
import "preline/dist/preline";
export const Footer = () => {
  return (
    <>
      <footer class="border-t-2 border-gray-100 mt-auto w-[1000px] max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div class="text-center">
          <div>
            <a
              class="flex-none text-2xl font-semibold text-black dark:text-white"
              href="#"
              aria-label="Brand"
            >
              CEL Systems
            </a>
          </div>

          <div class="mt-3">
            <p class="text-gray-500 dark:text-neutral-500">
              Associated with{" "}
              <a
                class="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                href="#"
              >
                the University of Waterloo.
              </a>{" "}
            </p>
            <p class="text-gray-500 dark:text-neutral-500">
              © 2024 University of Waterloo.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
