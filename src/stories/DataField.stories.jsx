import DataField from "../components/DataField";

export default {
  title: "Components/DataField",
  component: DataField,
};

const Template = (args) => <DataField {...args} />;

export const UserName = Template.bind({});
UserName.args = {
  label: "UserName",
  data: "@sidra.rasool",
};

export const Email = Template.bind({});
Email.args = {
  label: "Email",
  data: "sidra.rasool@gmail.com",
};
