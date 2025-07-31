import type { Meta, StoryObj } from '@storybook/react'
import sample from 'lodash/sample'

import { Shape } from './shape'
import { randomMargins, randomDegree } from '../randomizers'
import { SHAPE_COLORS } from '../constants'

const meta: Meta<typeof Shape> = {
  title: 'Internal/Shape',
  component: Shape,
}

export default meta
type Story = StoryObj<typeof Shape>

export const Circle: Story = {
  args: {
    type: 'circle',
    color: '#eb5353',
    rotation: 0,
  },
}

export const Square: Story = {
  args: {
    type: 'square',
    color: '#efbb00',
    rotation: 0,
  },
}

export const Triangle: Story = {
  args: {
    type: 'triangle',
    color: '#36ae7c',
    rotation: 0,
  },
}

export const X: Story = {
  args: {
    type: 'x',
    color: '#187498',
    rotation: 0,
  },
}

export const Star: Story = {
  args: {
    type: 'star',
    color: '#eb5353',
    rotation: 0,
  },
}

export const Heart: Story = {
  args: {
    type: 'heart',
    color: '#efbb00',
    rotation: 0,
  },
}

export const Hexagon: Story = {
  args: {
    type: 'hexagon',
    color: '#36ae7c',
    rotation: 0,
  },
}

export const Pentagon: Story = {
  args: {
    type: 'pentagon',
    color: '#187498',
    rotation: 0,
  },
}

export const RandomCircle: Story = {
  render: (args) => (
    <Shape
      {...args}
      type="circle"
      color={sample(SHAPE_COLORS) as string}
      rotation={randomDegree()}
      margin={randomMargins()}
    />
  ),
  args: {},
}

export const RandomSquare: Story = {
  render: (args) => (
    <Shape
      {...args}
      type="square"
      color={sample(SHAPE_COLORS) as string}
      rotation={randomDegree()}
      margin={randomMargins()}
    />
  ),
  args: {},
}

export const RandomTriangle: Story = {
  render: (args) => (
    <Shape
      {...args}
      type="triangle"
      color={sample(SHAPE_COLORS) as string}
      rotation={randomDegree()}
      margin={randomMargins()}
    />
  ),
  args: {},
}

export const RandomX: Story = {
  render: (args) => (
    <Shape
      {...args}
      type="x"
      color={sample(SHAPE_COLORS) as string}
      rotation={randomDegree()}
      margin={randomMargins()}
    />
  ),
  args: {},
}

export const RandomStar: Story = {
  render: (args) => (
    <Shape
      {...args}
      type="star"
      color={sample(SHAPE_COLORS) as string}
      rotation={randomDegree()}
      margin={randomMargins()}
    />
  ),
  args: {},
}

export const RandomHeart: Story = {
  render: (args) => (
    <Shape
      {...args}
      type="heart"
      color={sample(SHAPE_COLORS) as string}
      rotation={randomDegree()}
      margin={randomMargins()}
    />
  ),
  args: {},
}

export const RandomHexagon: Story = {
  render: (args) => (
    <Shape
      {...args}
      type="hexagon"
      color={sample(SHAPE_COLORS) as string}
      rotation={randomDegree()}
      margin={randomMargins()}
    />
  ),
  args: {},
}

export const RandomPentagon: Story = {
  render: (args) => (
    <Shape
      {...args}
      type="pentagon"
      color={sample(SHAPE_COLORS) as string}
      rotation={randomDegree()}
      margin={randomMargins()}
    />
  ),
  args: {},
}
