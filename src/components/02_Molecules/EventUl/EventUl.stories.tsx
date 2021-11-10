import { ComponentMeta, ComponentStory } from "@storybook/react";
import EventLi from "src/components/01_Atom/EventLi";
import EventUl from "./EventUl";

export default {
  title: "02_Molecules/EventUl",
  component: EventUl,
} as ComponentMeta<typeof EventUl>;

const Template: ComponentStory<typeof EventUl> = (args) => (
  <EventUl {...args} />
);

export const Overview = Template.bind({});
Overview.args = {
  children: (
    <>
      <EventLi company="아무개회사1" />
      <EventLi company="아무개회사2" />
      <EventLi company="아무개회사3" />
    </>
  ),
};
