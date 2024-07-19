import type { Meta, StoryObj } from '@storybook/react'

import { Line } from './line'

const meta: Meta<typeof Line> = {
  component: Line,
}

type Story = StoryObj<typeof Line>

export const OneExtension: Story = {
  args: {
    move: {
      mx: 10,
      my: 10,
    },
    curve: {
      cx1: 20,
      cy1: 30,
      cx2: 35,
      cy2: 30,
      cx: 20,
      cy: 20,
    },
    extensions: [
      {
        sx2: 90,
        sy2: 30,
        sx: 20,
        sy: 70,
      },
    ],
  },
}

export const MultipleExtensions: Story = {
  args: {
    move: {
      mx: 10,
      my: 10,
    },
    curve: {
      cx1: 20,
      cy1: 20,
      cx2: 40,
      cy2: 50,
      cx: 20,
      cy: 50,
    },
    extensions: [
      {
        sx2: 10,
        sy2: 30,
        sx: 30,
        sy: 70,
      },
      {
        sx2: 50,
        sy2: 40,
        sx: 60,
        sy: 30,
      },
      {
        sx2: 25,
        sy2: 20,
        sx: 50,
        sy: 50,
      },
    ],
  },
}

export default meta
