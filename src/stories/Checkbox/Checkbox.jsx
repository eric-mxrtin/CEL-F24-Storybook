import React, { useState, createContext, useContext } from "react";

const CheckboxGroupContext = createContext();

export const CheckboxGroup = ({ title, children }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    setSelectedOptions((prevSelected) => 
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    );
  };

  return (
    <CheckboxGroupContext.Provider value={{ selectedOptions, handleOptionChange }}>
      <div className="flex flex-col gap-2">
        <div className="font-semibold">{title}</div>
        {children}
      </div>
    </CheckboxGroupContext.Provider>
  );
};

export const Checkbox = ({ children, disabled = false }) => {
  const { selectedOptions, handleOptionChange } = useContext(CheckboxGroupContext);
  const isSelected = selectedOptions.includes(children);

  return (
    <label className={`inline-flex items-center gap-2 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <input
        type="checkbox"
        name={children}
        value={children}
        checked={isSelected}
        onChange={() => !disabled && handleOptionChange(children)}
        className="form-checkbox text-blue-500 focus:ring-0"
        disabled={disabled}
      />
      <span>{children}</span>
    </label>
  );
};
