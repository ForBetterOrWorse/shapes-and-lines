import type { Meta, StoryObj } from '@storybook/react'

import { Line } from './line'
import {
  randomCurveCoordinates,
  randomExtensionCoordinates,
  randomMoveCoordinates,
} from '../randomizers'

const meta: Meta<typeof Line> = {
  component: Line,
}

type Story = StoryObj<typeof Line>

export const OneExtension: Story = {
  args: {
    move: randomMoveCoordinates(),
    curve: randomCurveCoordinates(),
    extensions: [randomExtensionCoordinates()],
  },
}

export const MultipleExtensions: Story = {
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
