import type { Meta, StoryObj } from '@storybook/react'
import { Polygons } from './polygons'

const meta: Meta<typeof Polygons> = {
  title: 'Internal/Polygons',
  component: Polygons,
}

export default meta

type Story = StoryObj<typeof Polygons>

export const Default: Story = {
  args: {
    polygonCount: 3,
  },
}

export const SinglePolygon: Story = {
  args: {
    polygonCount: 1,
  },
}

export const MultiplePolygons: Story = {
  args: {
    polygonCount: 7,
  },
}
