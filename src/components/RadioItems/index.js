import React from "react";
import PropTypes from "prop-types";
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

RadioItem.propTypes = {
  /**
   * The value of the radio input and it is mandatory
   */
  value: PropTypes.string.isRequired,
  /**
   * A function that will trigger on value change and it is mandatory
   */
  onChange: PropTypes.func.isRequired,
  /**
   *  A name for radio button and it is mandatory
   */
  name: PropTypes.string.isRequired,
  /**
   * The default value of the radio is true or false
   */
  defaultChecked: PropTypes.bool,
  /**
   * The ID of the input element, corresponding to the label's htmlFor attribute and it is mandatory
   */
  id: PropTypes.string.isRequired,
};

export default RadioItem;
