import { ComponentMeta, ComponentStory } from "@storybook/react";
import Step3 from "./Step3";

export default {
  title: "03_Organism/Step3",
  component: Step3,
} as ComponentMeta<typeof Step3>;

const Template: ComponentStory<typeof Step3> = (args) => <Step3 />; //{...args}

export const Overview = Template.bind({});
Overview.args = {};
