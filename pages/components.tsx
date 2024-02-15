import Layout from "@/components/Layout/Layout";
import React, { ReactElement, useState } from "react";
import TextInput from "@/components/TextInput/TextInput";
import Select from "@/components/Select/Select";

export default function Components() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (value: string) => {
    setInputValue(value);
  };

  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];
  const [selectedValue, setSelectedValue] = useState("");

  const handleChangeSelect = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <h2>Components</h2>
      <ul>
        <li key={0}>
          <TextInput
            placeholder="Enter text..."
            value={inputValue}
            onChange={handleChange}
          />
        </li>
        <li key={1}>
          <Select
            options={options}
            value={selectedValue}
            onChange={handleChangeSelect}
          />
        </li>
      </ul>
    </div>
  );
}

Components.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
