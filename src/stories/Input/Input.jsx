export const Input = ({ placeholder, label, disabled, type, size }) => {
  if (size == "small") {
    if (type == "light") {
      return (
        <>
          <div className="max-w-sm">
            <label
              htmlFor="input-label"
              className="block text-input font-semibold mb-2 dark:text-white"
            >
              {label}
            </label>
            <input
              type="email"
              id="input-label"
              className="py-2.5 px-3 block w-full bg-gray-50 rounded-[8px] text-input focus:border-blue-500 focus:ring-4 focus:ring-blue-50 disabled:opacity-50 disabled:pointer-events-non dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder={placeholder}
              disabled={disabled}
            />
          </div>
        </>
      );
    }
    return (
      <>
        <div className="max-w-sm">
          <label
            htmlFor="input-label"
            className="block text-input font-semibold mb-2 dark:text-white"
          >
            {label}
          </label>
          <input
            type="email"
            id="input-label"
            className="py-2.5 px-3 block w-full border border-gray-200 rounded-[8px] text-input focus:border-blue-500 focus:ring-4 focus:ring-blue-50 disabled:opacity-50 disabled:pointer-events-non dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder={placeholder}
            disabled={disabled}
          />
        </div>
      </>
    );
  } else {
    if (type == "light") {
      return (
        <>
          <div className="max-w-sm">
            <label
              htmlFor="input-label"
              className="block text-input font-semibold mb-2 dark:text-white"
            >
              {label}
            </label>
            <input
              type="email"
              id="input-label"
              className="py-3.5 px-4 block w-full bg-gray-50 rounded-[8px] text-input focus:border-blue-500 focus:ring-4 focus:ring-blue-50 disabled:opacity-50 disabled:pointer-events-non dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder={placeholder}
              disabled={disabled}
            />
          </div>
        </>
      );
    }
    return (
      <>
        <div className="max-w-sm">
          <label
            htmlFor="input-label"
            className="block text-input font-semibold mb-2 dark:text-white"
          >
            {label}
          </label>
          <input
            type="email"
            id="input-label"
            className="py-3.5 px-4 block w-full border border-gray-200 rounded-[8px] text-input focus:border-blue-500 focus:ring-4 focus:ring-blue-50 disabled:opacity-50 disabled:pointer-events-non dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder={placeholder}
            disabled={disabled}
          />
        </div>
      </>
    );
  }
};
