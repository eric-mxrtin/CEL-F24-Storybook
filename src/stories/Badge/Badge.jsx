export const Badge = ({ type, color="blue", children, size }) => {
  const baseClasses = "inline-flex items-center gap-x-1.5 text-xs font-medium";
  const sizeClasses = {
    small: "py-px px-2 rounded-md",
    large: "py-[11px] px-[10px] rounded-md",
    default: "py-1.5 px-1.5 rounded-md",
  };
  const typeClasses = {
    outline: `border border-${color}-500 text-${color}-500`,
    soft: `bg-${color}-50 text-${color}-800 dark:bg-${color}-800/30 dark:text-${color}-500`,
    default: `bg-${color}-500 text-white`,
  };

  const classes = `${baseClasses} ${sizeClasses[size] || sizeClasses.default} ${typeClasses[type] || typeClasses.default}`;

  return (
    <span className={classes}>
      {children}
    </span>
  );
};
