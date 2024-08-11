import type { Meta, StoryObj } from '@storybook/react'

import { Lines } from './lines'

const meta: Meta<typeof Lines> = {
  component: Lines,
}

type Story = StoryObj<typeof Lines>

export const Default: Story = {
  args: {},
}

export const CustomSvgSize: Story = {
  args: {
    width: 200,
    height: 300,
  },
}

export const CustomLineCount: Story = {
  args: {
    lineCount: 6,
  },
}

export const WithRandomStrokeOpacity: Story = {
  args: {
    hasRandomStrokeOpacity: true,
    lineCount: 4,
  },
}

export default meta
