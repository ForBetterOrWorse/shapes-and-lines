import type { Meta, StoryObj } from '@storybook/react'

import { CurvedLines } from './curved-lines'

const meta: Meta<typeof CurvedLines> = {
  title: 'Components/CurvedLines',
  component: CurvedLines,
}

type Story = StoryObj<typeof CurvedLines>

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
    lineCount: 4,
  },
}

export default meta
