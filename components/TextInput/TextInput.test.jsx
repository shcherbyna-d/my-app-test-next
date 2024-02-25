import TextInput from "./TextInput";
import { render, fireEvent, screen } from "@testing-library/react";
import { useState } from "react";

it("Renders input", () => {
  const component = render(<TextInput value="123" onChange={jest.fn()} />);

  expect(component).toMatchSnapshot();
});

it("Renders input with error", () => {
  const component = render(
    <TextInput value="123" error="Wrong email" onChange={jest.fn()} />
  );

  expect(component).toMatchSnapshot();
});

it("Renders input with change text", () => {
  function StateWrapper() {
    const [value, setValue] = useState("");

    onChange = jest.fn((v) => setValue(v));

    return <TextInput value={value} onChange={onChange} />;
  }

  render(<StateWrapper />);

  const textElement = screen.getByLabelText("text-input");

  expect(textElement.value).toBe("");
  fireEvent.change(textElement, { target: { value: "new text" } });
  expect(textElement.value).toBe("new text");
});
