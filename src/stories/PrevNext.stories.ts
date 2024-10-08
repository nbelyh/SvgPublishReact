import type { Meta, StoryObj } from "@storybook/react";

import { SvgPublishComponent } from "../../lib/SvgPublishComponent";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Basic/PrevNext",
  component: SvgPublishComponent,
  tags: ["autodocs"],
  argTypes: {
    selectionMode: {
      control: "select",
      options: ["normal", "lighten", "darken"],
    },
  },
  parameters: {
    layout: "fullscreen",
  },
  args: {
    url: "/assets/connected-highlight.svg",
    enableSelection: true,
    enableHover: true,
    enableZoomCtrl: true,

    enableBoxSelection: false,

    enableConnDilate: false,
    connDilate: 2,
    height: "80vh",

    enablePrevShapeColor: true,
    prevShapeColor: "#ff0000",
    enableNextShapeColor: true,
    nextShapeColor: "#00ff00",

    enablePrevConnColor: true,
    prevConnColor: "#ff0000",
    enableNextConnColor: true,
    nextConnColor: "#00ff00",

    selectColor: "rgba(255, 255, 0, 0.4)",
    hoverColor: "rgba(255, 255, 0, 0.2)"
  },
} satisfies Meta<typeof SvgPublishComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ShapesOnly: Story = {
  parameters: {
    layout: "fullscreen",
    controls: {
      include: [
        "enableSelection",
        "enableHover",
        "selectColor",
        "hoverColor",
        "enableBoxSelection",
        "enablePrevShapeColor",
        "prevShapeColor",
        "enableNextShapeColor",
        "nextShapeColor",
      ],
    },
  },
  args: {
    enableNextConnColor: false,
    enablePrevConnColor: false,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ConnectorsOnly: Story = {
  parameters: {
    layout: "fullscreen",
    controls: {
      include: [
        "enableSelection",
        "enableHover",
        "selectColor",
        "hoverColor",
        "enableBoxSelection",
        "enablePrevConnColor",
        "prevConnColor",
        "enableNextConnColor",
        "nextConnColor",
      ],
    },
  },
  args: {
    enableNextShapeColor: false,
    enablePrevShapeColor: false,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SingleColor: Story = {
  parameters: {
    layout: "fullscreen",
    controls: {
      include: [
        "enableSelection",
        "enableHover",
        "selectColor",
        "hoverColor",
        "enableBoxSelection",
        "enablePrevShapeColor",
        "prevShapeColor",
        "enableNextShapeColor",
        "nextShapeColor",
      ],
    },
  },
  args: {
    nextConnColor: "rgba(255, 0, 0, 1)",
    prevConnColor: "rgba(255, 0, 0, 1)",
    prevShapeColor: "rgba(255, 0, 0, 1)",
    nextShapeColor: "rgba(255, 0, 0, 1)",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NextOnly: Story = {
  parameters: {
    layout: "fullscreen",
    controls: {
      include: [
        "enableSelection",
        "enableHover",
        "selectColor",
        "hoverColor",
        "enableBoxSelection",
        "enablePrevShapeColor",
        "prevShapeColor",
        "enableNextShapeColor",
        "nextShapeColor",
      ],
    },
  },
  args: {
    nextConnColor: "rgba(255, 0, 0, 1)",
    prevConnColor: "rgba(255, 0, 0, 1)",
    prevShapeColor: "rgba(255, 0, 0, 1)",
    nextShapeColor: "rgba(255, 0, 0, 1)",
    enablePrevConnColor: false,
    enablePrevShapeColor: false,
  },
};

export const ConnectorDilate: Story = {
  parameters: {
    layout: "fullscreen",
    controls: {
      include: [
        "enableSelection",
        "enableHover",
        "selectColor",
        "hoverColor",
        "enableConnDilate",
        "connDilate",
      ],
    },
  },
  args: {
    nextConnColor: "rgba(255, 0, 0, 1)",
    prevConnColor: "rgba(255, 0, 0, 1)",
    prevShapeColor: "rgba(255, 0, 0, 1)",
    nextShapeColor: "rgba(255, 0, 0, 1)",
    enablePrevConnColor: false,
    enablePrevShapeColor: false,
    enableConnDilate: true,
    connDilate: 2,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DatabaseDiagram: Story = {
  parameters: {
    layout: "fullscreen",
    controls: {
      include: [
        "enableSelection",
        "selectionMode",
        "enableHover",
        "selectColor",
        "hoverColor",
        "enableBoxSelection",
        "enablePrevShapeColor",
        "prevShapeColor",
        "enableNextShapeColor",
        "nextShapeColor",
        "enablePrevConnColor",
        "prevConnColor",
        "enableNextConnColor",
        "nextConnColor",
        "enableConnDilate",
        "connDilate",
      ],
    },
  },
  args: {
    url: "/assets/AdvWorksOLTPSchemaVisio.svg",
    selectionMode: 'lighten',
    enableBoxSelection: true,
    enableConnDilate: true,
    connDilate: 1,
  },
};