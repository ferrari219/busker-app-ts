import { ComponentMeta, ComponentStory } from "@storybook/react";
import Step4 from "./Step4";

export default {
  title: "03_Organism/Step4",
  component: Step4,
} as ComponentMeta<typeof Step4>;

const Template: ComponentStory<typeof Step4> = (args) => <Step4 />; //{...args}

export const Overview = Template.bind({});
Overview.args = {};
