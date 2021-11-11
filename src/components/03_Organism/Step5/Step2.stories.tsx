import { ComponentMeta, ComponentStory } from "@storybook/react";
import Step1 from "./Step2";

export default {
  title: "03_Organism/Step1",
  component: Step1,
} as ComponentMeta<typeof Step1>;

const Template: ComponentStory<typeof Step1> = (args) => <Step1 />; //{...args}

export const Overview = Template.bind({});
Overview.args = {};
