import { ComponentMeta, ComponentStory } from "@storybook/react";
import Step5 from "./Step5";

export default {
  title: "03_Organism/Step5",
  component: Step5,
} as ComponentMeta<typeof Step5>;

const Template: ComponentStory<typeof Step5> = (args) => <Step5 />; //{...args}

export const Overview = Template.bind({});
Overview.args = {};
