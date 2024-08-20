import type { Meta, StoryObj } from '@storybook/react'

import { Polyline, type PolylineProps } from './polyline'
import { randomPointCoordinates } from '../randomizers'
import { VIEWBOX_SIZE } from '../constants'

const meta: Meta<typeof Polyline> = {
  component: Polyline,
}

type Story = StoryObj<typeof Polyline>

const PolylineComp = ({ points, strokeOpacity }: PolylineProps) => (
  <svg
    width={VIEWBOX_SIZE}
    height={VIEWBOX_SIZE}
    viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Polyline points={points} strokeOpacity={strokeOpacity} />
  </svg>
)

export const OneLine: Story = {
  render: PolylineComp,
  args: {
    points: [randomPointCoordinates(), randomPointCoordinates()],
  },
}

export const MultipleLines: Story = {
  render: PolylineComp,
  args: {
    points: [
      randomPointCoordinates(),
      randomPointCoordinates(),
      randomPointCoordinates(),
      randomPointCoordinates(),
      randomPointCoordinates(),
    ],
  },
}

export const CustomOpacity: Story = {
  render: PolylineComp,
  args: {
    points: [
      randomPointCoordinates(),
      randomPointCoordinates(),
      randomPointCoordinates(),
      randomPointCoordinates(),
      randomPointCoordinates(),
    ],
    strokeOpacity: 0.5,
  },
}

export default meta
