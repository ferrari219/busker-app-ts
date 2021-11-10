import { ComponentMeta, ComponentStory } from "@storybook/react";
import StepLi from "src/components/01_Atom/StepLi";
import StepUl from "./StepUl";

export default {
  title: "02_Molecules/StepUl",
  component: StepUl,
} as ComponentMeta<typeof StepUl>;

const Template: ComponentStory<typeof StepUl> = (args) => <StepUl {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  children: (
    <>
      <StepLi step={1} label="스토어 등록" active />
      <StepLi step={2} label="위치 등록" />
    </>
  ),
};
