import React from "react";
import "./RadioItem.css";

const RadioItem = ({ value, onChange, name, defaultChecked = false, id }) => {
  return (
    <>
      <input
        type="radio"
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        defaultChecked={defaultChecked}
        className="RadioItems_radio_input"
      />
      <label htmlFor={id} className="RadioItems_radio_label">
        {value}
      </label>
    </>
  );
};

export default RadioItem;
