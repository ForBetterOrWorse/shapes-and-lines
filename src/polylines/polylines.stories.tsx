import type { Meta, StoryObj } from '@storybook/react'

import { Polylines } from './polylines'

const meta: Meta<typeof Polylines> = {
  title: 'Components/Polylines',
  component: Polylines,
}

type Story = StoryObj<typeof Polylines>

export const Default: Story = {
  args: {},
}

export const CustomSvgSize: Story = {
  args: {
    viewBoxWidth: 200,
    viewBoxHeight: 300,
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
    lineCount: 6,
  },
}

export default meta
