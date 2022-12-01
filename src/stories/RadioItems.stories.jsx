import RadioItem from "../components/RadioItems";
import React, { useState } from "react";

export default {
  title: "Components/RadioItems",
  component: "RadioItem",
  argTypes: {
    defaultChecked: {
      control: "select",
      options: ["option1", "option2", "none"],
    },
  },
};

const Template = (args) => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <RadioItem
        name={args.name}
        value={args.firstOption}
        id={args.firstOption}
        onChange={(e) => {
          setChecked(e.target.value);
        }}
        defaultChecked={args.defaultChecked === "option1"}
      />
      <RadioItem
        name={args.name}
        value={args.secondOption}
        id={args.secondOption}
        onChange={(e) => {
          setChecked(e.target.value);
        }}
        defaultChecked={args.defaultChecked === "option2"}
      />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  name: "gender",
  firstOption: "Male",
  secondOption: "Female",
  defaultChecked: "option1",
};
