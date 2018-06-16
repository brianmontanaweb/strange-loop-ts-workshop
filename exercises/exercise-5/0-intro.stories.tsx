import { storiesOf, RenderFunction } from "@storybook/react";
import React from "react";
import { action } from "@storybook/addon-actions";
import { StaticExample } from "./example";

import "./styles.css";
import { Protein } from "../exercise-4/code";
import { Icon, AllComponents, TotalSection } from "./code";

storiesOf("Receipt", module).add("static example", () => (
  <StaticExample />
));
