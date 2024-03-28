// SelectComponent.tsx
import React, { useEffect, useRef, useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={selectRef}>
      <button
        className="w-full text-left py-2 px-4 bg-white border border-slate-300 rounded-md shadow-sm text-slate-800 focus:outline-none focus:border-slate-500 focus:ring hover:ring focus:ring-slate-300 hover:ring-slate-300 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {options.find((option) => option.value === value)?.label || "Select..."}
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border overflow-hidden border-slate-300 rounded-md shadow-sm">
          {options.map((option) => (
            <li
              key={option.value}
              className="py-2 px-4 cursor-pointer hover:bg-slate-100 transition"
              onClick={() => handleClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
