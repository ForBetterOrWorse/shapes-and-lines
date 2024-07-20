import type { Meta, StoryObj } from '@storybook/react'

import { Lines } from './lines'

const meta: Meta<typeof Lines> = {
  component: Lines,
}

type Story = StoryObj<typeof Lines>

export const Default: Story = {
  args: {},
}

export default meta
