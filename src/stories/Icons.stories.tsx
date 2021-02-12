import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import * as Icon from "../components/icons/icons";

export default {
  title: "Example/Icons",
} as Meta;

export const Home = () => <Icon.Home />;

export const HomeFill = () => <Icon.HomeFill />;

export const Message = () => <Icon.Message />;

export const MessageFill = () => <Icon.MessageFill />;

export const Explore = () => <Icon.Explore />;

export const ExploreFill = () => <Icon.ExploreFill />;

export const Heart = () => <Icon.Heart />;
