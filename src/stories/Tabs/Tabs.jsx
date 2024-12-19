import { Lock } from "lucide-react";
import { useState } from "react";

export const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  // Ensure `children` is always an array
  const childrenArray = children ? (Array.isArray(children) ? children : [children]) : [];

  const handleTabClick = (index, disabled) => {
    if (!disabled) {
      setActiveTab(index);
    }
  };

  return (
    <div>
      {/* Tab Headers */}
      <div className="border-b border-gray-200 dark:border-neutral-700">
        <nav className="flex">
          {childrenArray.map((child, index) => (
            <button
              key={index}
              type="button"
              className={`flex-grow gap-2 text-sm font-medium py-2 px-1 inline-flex items-center justify-center border-b-2 whitespace-nowrap focus:outline-none ${
                child.props.disabled
                  ? "text-gray-300 border-transparent cursor-not-allowed"
                  : activeTab === index
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-600 border-transparent hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-500"
              }`}
              id={`tabs-item-${index}`}
              aria-controls={`tabs-panel-${index}`}
              aria-selected={activeTab === index}
              aria-disabled={child.props.disabled || undefined}
              onClick={() => handleTabClick(index, child.props.disabled)}
              role="tab"
              disabled={child.props.disabled}
            >
              {child.props.disabled && <Lock size="14px"/>}
              {child.props.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-3">
        {childrenArray.map((child, index) => (
          <div
            key={index}
            id={`tabs-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`tabs-item-${index}`}
            className={activeTab === index ? "" : "hidden"}
          >
            {child.props.children}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Tab = ({ children }) => {
  return <>{children}</>;
};
