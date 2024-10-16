export const Alert = ({ type, color, title, message }) => {
  if (type == "soft") {
    return (
      <>
        <div
          class={`mt-2 bg-${color}-100 border border-${color}-200 text-sm text-${color}-800 rounded-lg p-4 dark:bg-${color}-800/10 dark:border-${color}-900 dark:text-${color}-500"
          role="alert`}
          tabindex="-1"
          aria-labelledby="hs-soft-color-info-label"
        >
          <span id="hs-soft-color-info-label" class="font-bold">
            {title}
          </span>{" "}
          {message}
        </div>
      </>
    );
  }
  if (type == "bordered") {
    return (
      <>
        <div
          class={`bg-${color}-50 border border-${color}-200 text-sm text-${color}-800 rounded-lg p-4 dark:bg-${color}-800/10 dark:border-${color}-900 dark:text-${color}-500`}
          role="alert"
          tabindex="-1"
          aria-labelledby="hs-with-description-label"
        >
          <div class="flex gap-4">
            <div class="shrink-0">
              <svg
                class="shrink-0 size-6 mt-0.5"
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
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </div>
            <div class="ms-4">
              <h3 id="hs-with-description-label" class="text-sm font-semibold">
              {title}
              </h3>
              <div class={`mt-1 text-sm text-${color}-700`}>
                {message}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div
        class={`mt-2 bg-${color}-500 text-sm text-white rounded-lg p-4 dark:bg-blue-500`}
        role="alert"
        tabindex="-1"
        aria-labelledby="hs-solid-color-info-label"
      >
        <span id="hs-solid-color-info-label" class="font-bold">
          {title}
        </span>{" "}
        {message}
      </div>
    </>
  );
};
