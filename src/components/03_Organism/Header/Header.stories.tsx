import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "./Header";

export default {
  title: "03_Organism/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  left: "왼쪽",
  mid: "가운데",
  right: "오른쪽",
};
