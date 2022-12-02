import InputField from "../components/InputField";
import React, { useState } from "react";

export default {
  title: "Components/InputField",
  component: InputField,
};

const Template = (args) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  return (
    <InputField
      {...args}
      onChange={(e) => {
        setValue(e.target.value);
        setError(value.length <= 4);
      }}
      onBlur={() => {
        setError(value.length <= 4);
      }}
      error={error}
      value={value}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  name: "Sample test",
  placeholder: "Type here..",
  label: "Sample Test",
  errorMessage: "Invalid Input",
};
