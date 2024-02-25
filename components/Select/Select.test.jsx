// SelectComponent.test.tsx
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Select from "./Select";

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

it("Renders select without crashing", () => {
  render(<Select options={options} value="1" onChange={jest.fn()} />);

  const selectElement = screen.getByDisplayValue("Option 1");

  expect(selectElement).toBeTruthy();
});

it("Renders selected option", () => {
  render(<Select options={options} value="1" onChange={jest.fn()} />);

  // Get the select element by its test-id
  const selectElement = screen.getByDisplayValue("Option 1");

  // Simulate change event to select the second option
  fireEvent.click(selectElement, { target: { value: "2" } });

  // Verify if the selected value is correctly rendered
  expect(selectElement.value).toBe("2");
});
