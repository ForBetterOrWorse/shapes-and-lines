import type { Meta, StoryObj } from '@storybook/react'

import { Line, type LineProps } from './line'
import {
  randomCurveCoordinates,
  randomExtensionCoordinates,
  randomMoveCoordinates,
} from '../randomizers'
import { VIEWBOX_SIZE } from '../constants'

const meta: Meta<typeof Line> = {
  component: Line,
}

type Story = StoryObj<typeof Line>

const LineComp = ({ move, curve, extensions }: LineProps) => (
  <svg
    width={VIEWBOX_SIZE}
    height={VIEWBOX_SIZE}
    viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Line move={move} curve={curve} extensions={extensions} />
  </svg>
)

export const OneExtension: Story = {
  render: LineComp,
  args: {
    move: randomMoveCoordinates(),
    curve: randomCurveCoordinates(),
    extensions: [randomExtensionCoordinates()],
  },
}

export const MultipleExtensions: Story = {
  render: LineComp,
  args: {
    move: randomMoveCoordinates(),
    curve: randomCurveCoordinates(),
    extensions: [
      randomExtensionCoordinates(),
      randomExtensionCoordinates(),
      randomExtensionCoordinates(),
    ],
  },
}

export default meta
