export const Badge = ({ type, color, label, size, iconLeft, iconRight }) => {
    if (size == "small") {
      if (type == "outline") {
        return (
          <span
            className={`inline-flex items-center gap-x-1.5 py-px px-2 rounded-md text-xs font-medium border border-${color}-500 text-${color}-500`}
          >
            {iconLeft}
            {label}
            {iconRight}
          </span>
        );
      }
  
      if (type == "soft") {
        return (
          <span
            className={`inline-flex items-center gap-x-1.5 py-px px-2 rounded-md text-xs font-medium bg-${color}-50 text-${color}-800 dark:bg-${color}-800/30 dark:text-${color}-500`}
          >
            {iconLeft}
            {label}
            {iconRight}
          </span>
        );
      }
      return (
        <>
          <span
            className={`inline-flex items-center gap-x-1.5 py-px px-2 rounded-md text-xs font-medium bg-${color}-500 text-white`}
          >
            {iconLeft}
            {label}
            {iconRight}
          </span>
        </>
      );
    }
  
    if (size == "large") {
      if (type == "outline") {
        return (
          <span
            className={`inline-flex items-center gap-x-1.5 py-[11px] px-[10px] rounded-md text-xs font-medium border border-${color}-500 text-${color}-500`}
          >
            {iconLeft}
            {label}
            {iconRight}
          </span>
        );
      }
  
      if (type == "soft") {
        return (
          <span
            className={`inline-flex  items-center gap-x-1.5 py-[11px] px-[10px] rounded-md text-xs font-medium bg-${color}-50 text-${color}-800 dark:bg-${color}-800/30 dark:text-${color}-500`}
          >
            {iconLeft}
            {label}
            {iconRight}
          </span>
        );
      }
      return (
        <>
          <span
            className={`inline-flex items-center gap-x-1.5 py-[11px] px-[10px] rounded-md text-xs font-medium bg-${color}-500 text-white`}
          >
            {iconLeft}
            {label}
            {iconRight}
          </span>
        </>
      );
    }
  
    if (type == "outline") {
      return (
        <span
          className={`inline-flex items-center gap-x-1.5 py-1.5 px-1.5 rounded-md text-xs font-medium border border-${color}-500 text-${color}-500`}
        >
          {iconLeft}
          {label}
          {iconRight}
        </span>
      );
    }
  
    if (type == "soft") {
      return (
        <span
          className={`inline-flex items-center gap-x-1.5 py-1.5 px-1.5 rounded-md text-xs font-medium bg-${color}-50 text-${color}-800 dark:bg-${color}-800/30 dark:text-${color}-500`}
        >
          {iconLeft}
          {label}
          {iconRight}
        </span>
      );
    }
    return (
      <>
        <span
          className={`inline-flex items-center gap-x-1.5 py-1.5 px-1.5  rounded-md text-xs font-medium bg-${color}-500 text-white`}
        >
          {iconLeft}
          {label}
          {iconRight}
        </span>
      </>
    );
  };
  