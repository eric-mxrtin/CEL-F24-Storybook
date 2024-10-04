import "preline/dist/preline";

export const Radio = ({label, disabled}) => {
  return (
    <>
      <div class="flex gap-2">
        <input
          type="radio"
          name="hs-default-radio"
          class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          id="hs-default-radio"
          disabled={disabled}
        />
        <label
          for="hs-default-radio"
          class="text-sm text-gray-800 ms-2 dark:text-neutral-400
          disabled:text-gray-200"
          disabled={disabled}
        >
          {label}
        </label>
      </div>
    </>
  );
};
