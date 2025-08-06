import type { Meta, StoryObj } from '@storybook/react'
import { Polygons } from './polygons'

const meta: Meta<typeof Polygons> = {
  title: 'Components/Polygons',
  component: Polygons,
}

export default meta

type Story = StoryObj<typeof Polygons>

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
