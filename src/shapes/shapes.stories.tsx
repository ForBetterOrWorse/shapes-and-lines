import type { Meta, StoryObj } from '@storybook/react'

import { Shapes } from './shapes'

const meta: Meta<typeof Shapes> = {
  title: 'Components/Shapes',
  component: Shapes,
}

export default meta

type Story = StoryObj<typeof Shapes>

export const Default: Story = {
  args: {},
}

export const CustomShapeCount: Story = {
  args: {
    shapeCount: 10,
  },
}
