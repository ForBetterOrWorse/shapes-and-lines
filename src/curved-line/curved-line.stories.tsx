import type { Meta, StoryObj } from '@storybook/react'

import { CurvedLine, type CurvedLineProps } from './curved-line'
import {
  randomCurveCoordinates,
  randomExtensionCoordinates,
  randomMoveCoordinates,
} from '../randomizers'
import { VIEW_BOX_SIZE } from '../constants'

const meta: Meta<typeof CurvedLine> = {
  title: 'Internal/CurvedLine',
  component: CurvedLine,
}

type Story = StoryObj<typeof CurvedLine>

const CurvedLineComp = ({
  move,
  curve,
  extensions,
  strokeOpacity,
}: CurvedLineProps) => (
  <svg
    width={VIEW_BOX_SIZE}
    height={VIEW_BOX_SIZE}
    viewBox={`0 0 ${VIEW_BOX_SIZE} ${VIEW_BOX_SIZE}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <CurvedLine
      move={move}
      curve={curve}
      extensions={extensions}
      strokeOpacity={strokeOpacity}
    />
  </svg>
)

export const OneExtension: Story = {
  render: (args) => (
    <CurvedLineComp
      {...args}
      move={randomMoveCoordinates()}
      curve={randomCurveCoordinates()}
      extensions={[randomExtensionCoordinates()]}
    />
  ),
  args: {
    strokeOpacity: 1,
  },
}

export const MultipleExtensions: Story = {
  render: (args) => (
    <CurvedLineComp
      {...args}
      move={randomMoveCoordinates()}
      curve={randomCurveCoordinates()}
      extensions={[
        randomExtensionCoordinates(),
        randomExtensionCoordinates(),
        randomExtensionCoordinates(),
      ]}
    />
  ),
  args: {
    strokeOpacity: 1,
  },
}

export const CustomOpacity: Story = {
  render: (args) => (
    <CurvedLineComp
      {...args}
      move={randomMoveCoordinates()}
      curve={randomCurveCoordinates()}
      extensions={[randomExtensionCoordinates()]}
    />
  ),
  args: {
    strokeOpacity: 0.5,
  },
}

export default meta
