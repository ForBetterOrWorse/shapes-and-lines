import type { Meta, StoryObj } from '@storybook/react'

import { Polygon, type PolygonProps } from './polygon'
import { randomPolygonPoints } from '../randomizers'
import { VIEW_BOX_SIZE } from '../constants'

const meta: Meta<typeof Polygon> = {
  title: 'Internal/Polygon',
  component: Polygon,
}

type Story = StoryObj<typeof Polygon>

const PolygonComp = ({ points }: PolygonProps) => (
  <svg
    width={VIEW_BOX_SIZE}
    height={VIEW_BOX_SIZE}
    viewBox={`0 0 ${VIEW_BOX_SIZE} ${VIEW_BOX_SIZE}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Polygon points={points} />
  </svg>
)

export const ConcavePolygon: Story = {
  render: PolygonComp,
  args: {
    points: randomPolygonPoints({
      pointCount: 5,
      max: VIEW_BOX_SIZE,
      concave: true,
    }),
  },
}

export const ConvexPolygon: Story = {
  render: PolygonComp,
  args: {
    points: randomPolygonPoints({
      pointCount: 5,
      max: VIEW_BOX_SIZE,
      concave: false,
    }),
  },
}

export default meta
