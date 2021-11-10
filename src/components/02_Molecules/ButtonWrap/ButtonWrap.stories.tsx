import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "src/components/01_Atom/Button";
import ButtonWrap from "./ButtonWrap";

export default {
  title: "02_Molecules/ButtonWrap",
  component: ButtonWrap,
} as ComponentMeta<typeof ButtonWrap>;

const Template: ComponentStory<typeof ButtonWrap> = (args) => (
  <ButtonWrap {...args} />
);

export const Overview = Template.bind({});
Overview.args = {
  children: (
    <>
      <Button type="ghost">취소</Button>
      <Button type="solid">확인</Button>
    </>
  ),
};
