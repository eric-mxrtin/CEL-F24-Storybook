import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "../Button/Button";

export const Dropdown = ({ children, trigger, dropRight }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      {/* Custom Trigger */}
      <div onClick={toggleDropdown} className="cursor-pointer">
        {trigger || (
          <Button
            type="white"
            color="gray"
            className="text-gray-800"
          >
            Default Trigger
            <ChevronDown
              size="14px"
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        )}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute border border-gray-200 z-10 transition-[opacity,margin] duration-200 opacity-100 min-w-40 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 top-10 ${
            dropRight ? "right-0" : "left-0"
          }`}
          role="menu"
          aria-orientation="vertical"
        >
          <div className="p-1 space-y-0.5">{children}</div>
        </div>
      )}
    </div>
  );
};
