import RadioItem from "../components/RadioItems";
import React, { useState } from "react";

export default {
  title: "components/RadioItem",
  component: RadioItem,
};

const Template = ({ name }) => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <RadioItem
        name={name}
        value="Male"
        id="male"
        onChange={(e) => {
          setChecked(e.target.value);
        }}
        defaultChecked={false}
      />
      <RadioItem
        name={name}
        value="Female"
        id="femlae"
        onChange={(e) => {
          setChecked(e.target.value);
        }}
        defaultChecked={true}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: "gender",
};
