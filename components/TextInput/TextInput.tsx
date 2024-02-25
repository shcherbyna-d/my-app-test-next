import React from "react";
import styles from "./TextInput.module.scss";

interface TextInputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  value,
  onChange,
  error,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={error ? styles.inputContainerError : styles.inputContainer}>
      <input
        aria-label="text-input"
        type="type here"
        className={error ? styles.inputError : styles.input}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};

export default TextInput;
