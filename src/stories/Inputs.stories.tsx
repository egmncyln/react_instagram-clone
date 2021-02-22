import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import Input from "../components/inputs/Input";

export default {
  title: "Example/Inputs",
} as Meta;

export const Plain = () => <Input />;
