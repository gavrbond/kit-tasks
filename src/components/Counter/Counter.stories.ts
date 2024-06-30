import { Meta, StoryObj } from "@storybook/react"
import { Counter } from "./Counter"
const meta: Meta<typeof Counter> = {
  title: "components/counter",
  component: Counter,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: [8, 12, 16, 20, 24],
      },
      description: "Размер Counter",
    },
    pulse: {
      control: "boolean",
    },
    stroke: {
      control: "boolean",
    },
    theme: {
      control: {
        type: "radio",
        options: ["primary", "secondary"],
      },
    },
    borderColor: {
      control: "color",
    },
  },
}

export default meta
type Story = StoryObj<typeof Counter>

export const Primary: Story = {
  args: {
    theme: "primary",
    size: 16,
    stroke: false,
    quantity: 1,
    pulse: false,
    borderColor: "#4caf50",
  },
}
