import type { Meta, StoryObj } from '@storybook/react'
import { ConcavePolygon, ConvexPolygon } from './polygon'

const meta: Meta = {
  title: 'Internal/Polygon',
}

type ConcaveStory = StoryObj<typeof ConcavePolygon>
type ConvexStory = StoryObj<typeof ConvexPolygon>

export const Concave: ConcaveStory = {
  render: (args) => (
    <svg
      width={400}
      height={400}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ConcavePolygon {...args} />
    </svg>
  ),
  args: {
    edgeCount: 5,
  },
  argTypes: {
    edgeCount: {
      control: { type: 'number', min: 3, max: 12 },
      description: 'Number of edges (and points) for the polygon',
    },
  },
}

export const Convex: ConvexStory = {
  render: (args) => (
    <svg
      width={400}
      height={400}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ConvexPolygon {...args} />
    </svg>
  ),
  args: {
    edgeCount: 5,
  },
  argTypes: {
    edgeCount: {
      control: { type: 'number', min: 3, max: 12 },
      description: 'Number of edges (and points) for the polygon',
    },
  },
}

export default meta
