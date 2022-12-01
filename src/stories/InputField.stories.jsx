import InputField from "../components/InputField";
import React, { useState } from "react";

export default {
  title: "Components/InputField",
  component: InputField,
};

// export const Primary = () => {
//   const [value, setValue] = useState("");
//   const [error, setError] = useState("");
//   return (
//     <InputField
//       name="Sample Test"
//       value={value}
//       onChange={(e) => {
//         setValue(e.target.value);
//         setError(value.length <= 4);
//       }}
//       onBlur={() => {
//         setError(value.length <= 4);
//       }}
//       placeholder="Type here.."
//       error={error}
//       label="Sample Test"
//       errorMessage="Invalid Input"
//     />
//   );
// };

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

export const Red = Template.bind({});
Red.args = {
  name: "Sample test",
  placeholder: "Type here..",
  label: "Sample Test",
  errorMessage: "Invalid Input",
};
