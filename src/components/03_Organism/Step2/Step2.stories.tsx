import { ComponentMeta, ComponentStory } from "@storybook/react";
import Step2 from "./Step2";

export default {
  title: "03_Organism/Step2",
  component: Step2,
} as ComponentMeta<typeof Step2>;

const Template: ComponentStory<typeof Step2> = (args) => <Step2 />; //{...args}

export const Overview = Template.bind({});
Overview.args = {};
