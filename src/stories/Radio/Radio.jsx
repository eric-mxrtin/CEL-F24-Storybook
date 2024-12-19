import React, { useState, createContext, useContext } from "react";

const RadioGroupContext = createContext();

export const RadioGroup = ({ title, children }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <RadioGroupContext.Provider value={{ selectedOption, handleOptionChange }}>
      <div className="flex flex-col gap-2">
        <div className="font-semibold">{title}</div>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

export const Radio = ({ children, disabled = false }) => {
  const { selectedOption, handleOptionChange } = useContext(RadioGroupContext);
  const isSelected = selectedOption === children;

  return (
    <label className={`inline-flex items-center gap-2 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <input
        type="radio"
        name={children}
        value={children}
        checked={isSelected}
        onChange={() => !disabled && handleOptionChange(children)}
        className="form-radio text-blue-600 focus:ring-0"
        disabled={disabled}
      />
      <span>{children}</span>
    </label>
  );
};