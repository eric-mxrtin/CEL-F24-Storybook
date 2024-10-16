export const Input = ({ placeholder, label, disabled, type }) => {
  if (type == "light") {
    return (
      <>
        <div class="max-w-sm">
          <label
            for="input-label"
            class="block text-sm font-medium mb-2 dark:text-white"
          >
            {label}
          </label>
          <input
            type="email"
            id="input-label"
            class="py-3.5 px-4 block w-full bg-gray-50 rounded-lg text-input focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-non dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder={placeholder}
            disabled={disabled}
          />
        </div>
      </>
    );
  }
  return (
    <>
      <div class="max-w-sm">
        <label
          for="input-label"
          class="block text-sm font-medium mb-2 dark:text-white"
        >
          {label}
        </label>
        <input
          type="email"
          id="input-label"
          class="py-3.5 px-4 block w-full border border-gray-200 rounded-lg text-input focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-non dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
    </>
  );
};
