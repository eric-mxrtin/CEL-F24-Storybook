import React from "react";

/** Primary UI component for user interaction */
export const Button = ({
  label,
  onClick,
  type = "default",
  color = "blue",
  disabled = false,
  size = "medium",
  iconLeft,
  iconRight,
  className,
  children,
}) => {
  const baseClass = `inline-flex items-center gap-x-2 font-semibold rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none`;
  const sizeClass = size === "small" ? "py-2.5 px-3 text-xs" : "py-3.5 px-4 text-sm";
  const typeClassMap = {
    default: `border border-transparent bg-${color}-500 text-white hover:bg-${color}-700 focus:bg-${color}-700`,
    outline: `border border-${color}-200 text-${color}-500 hover:border-${color}-600 hover:text-${color}-600 focus:border-${color}-600 focus:text-${color}-600`,
    ghost: `border border-transparent text-${color}-600 hover:bg-${color}-50 hover:text-${color}-800 focus:bg-${color}-50 focus:text-${color}-800`,
    soft: `border border-transparent bg-${color}-50 text-${color}-800 hover:bg-${color}-200 focus:bg-${color}-200`,
    white: `border border-gray-200 bg-white text-${color}-600 shadow-sm hover:bg-gray-50 focus:bg-gray-50`,
    link: `border border-transparent text-${color}-600 hover:text-${color}-800 focus:text-${color}-800`,
  };

  const darkModeClassMap = {
    default: `dark:text-neutral-400 dark:hover:bg-${color}-800 dark:hover:text-${color}-400 dark:focus:bg-${color}-800`,
    outline: `dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-${color}-500 dark:hover:border-${color}-600 dark:focus:text-${color}-500 dark:focus:border-${color}-600`,
    ghost: `dark:text-${color}-500 dark:hover:bg-${color}-800/30 dark:hover:text-${color}-400 dark:focus:bg-${color}-800/30 dark:focus:text-${color}-400`,
    soft: `dark:text-${color}-400 dark:hover:bg-${color}-900 dark:focus:bg-${color}-900`,
    white: `dark:bg-neutral-800 dark:border-neutral-700 dark:text-${color}-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700`,
    link: `dark:text-${color}-500 dark:hover:text-${color}-400 dark:focus:text-${color}-400`,
  };

  const typeClass = typeClassMap[type] || typeClassMap.default;
  const darkModeClass = darkModeClassMap[type] || darkModeClassMap.default;

  return (
    <button
      type="button"
      className={`${baseClass} ${sizeClass} ${typeClass} ${darkModeClass} ${className || ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {iconLeft}
      {label}
      {children}
      {iconRight}
    </button>
  );
};
