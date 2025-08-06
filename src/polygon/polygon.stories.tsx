import type { Meta, StoryObj } from '@storybook/react'
import { ConcavePolygon, ConvexPolygon } from './polygon'
import { randomPolygonPoints } from '../randomizers'
// Point type for clarity
type Point = { x: number; y: number }

const meta: Meta = {
  title: 'Internal/Polygon',
}

type ConcaveStory = StoryObj<typeof ConcavePolygon>
type ConvexStory = StoryObj<typeof ConvexPolygon>

export const Concave: ConcaveStory = {
  render: () => {
    const pointCount = Math.floor(Math.random() * 7) + 3 // 3-9 edges
    const points: Point[] = randomPolygonPoints({
      pointCount,
      max: 100,
      concave: true,
    })
    return (
      <svg
        width={400}
        height={400}
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ConcavePolygon points={points} />
      </svg>
    )
  },
}

export const Convex: ConvexStory = {
  render: () => {
    const pointCount = Math.floor(Math.random() * 7) + 3 // 3-9 edges
    const points: Point[] = randomPolygonPoints({
      pointCount,
      max: 100,
      concave: false,
    })
    return (
      <svg
        width={400}
        height={400}
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ConvexPolygon points={points} />
      </svg>
    )
  },
}

export default meta
