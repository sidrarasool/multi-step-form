import React from "react";
import "./InputField.css";

const InputField = ({
  name,
  onChange,
  onBlur,
  placeholder,
  value = "",
  error,
}) => {
  return (
    <div>
      <input
        className={error ? "InputField_Error" : "InputField_TextField"}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
