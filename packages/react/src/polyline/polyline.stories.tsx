import type { Meta, StoryObj } from '@storybook/react'

import { Polyline, type PolylineProps } from './polyline'
import { randomPoints } from '../randomizers'
import { VIEW_BOX_SIZE } from '../constants'

const meta: Meta<typeof Polyline> = {
  title: 'Internal/Polyline',
  component: Polyline,
}

type Story = StoryObj<typeof Polyline>

const PolylineComp = ({ points, strokeOpacity }: PolylineProps) => (
  <svg
    width={VIEW_BOX_SIZE}
    height={VIEW_BOX_SIZE}
    viewBox={`0 0 ${VIEW_BOX_SIZE} ${VIEW_BOX_SIZE}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Polyline points={points} strokeOpacity={strokeOpacity} />
  </svg>
)

export const OneLine: Story = {
  render: PolylineComp,
  args: {
    points: randomPoints({ pointCount: 2, max: VIEW_BOX_SIZE }),
  },
}

export const MultipleLines: Story = {
  render: PolylineComp,
  args: {
    points: randomPoints({ pointCount: 7, max: VIEW_BOX_SIZE }),
  },
}

export const CustomOpacity: Story = {
  render: PolylineComp,
  args: {
    points: randomPoints({ pointCount: 7, max: VIEW_BOX_SIZE }),
    strokeOpacity: 0.5,
  },
}

export default meta
