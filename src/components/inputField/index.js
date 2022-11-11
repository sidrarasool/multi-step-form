import React from "react";
import "./InputField.css";

const InputField = ({ name, onChange, onBlur, placeholder, value="" }) => {
  return (
    <div>
      <input
        className="InputField_EmailField"
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
