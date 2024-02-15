import React, { useState } from "react";
import styles from "./Select.module.scss";

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

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={styles.selectContainer}>
      <div className={styles.selectedOption} onClick={() => setIsOpen(!isOpen)}>
        {options.find((option) => option.value === value)?.label || "Select"}
      </div>
      {isOpen && (
        <div className={styles.optionList}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles.option}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
