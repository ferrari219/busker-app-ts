import { ComponentMeta, ComponentStory } from "@storybook/react";
import MenuLi from "src/components/01_Atom/MenuLi";
import MenuUl from "./MenuUl";

export default {
  title: "02_Molecules/MenuUl",
  component: MenuUl,
} as ComponentMeta<typeof MenuUl>;

const Template: ComponentStory<typeof MenuUl> = (args) => <MenuUl {...args} />;
export const Overview = Template.bind({});
Overview.args = {
  children: (
    <>
      <MenuLi icon="IcoSearch" />
    </>
  ),
};
