import { SHAPE_COLORS } from '../constants'

// Create a union type from the constant
export type PolygonColor = (typeof SHAPE_COLORS)[number]

interface Point {
  x: number
  y: number
}

export interface PolygonProps {
  points: Point[]
  margin?: {
    marginTop: number
    marginBottom: number
    marginLeft: number
    marginRight: number
  }
}

export const Polygon = ({ points, margin }: PolygonProps) => {
  const style = { ...margin }

  if (points.length < 3) {
    console.error(
      'The component needs at least three points in order to draw a polygon.'
    )
  }

  const pts = points
    .reduce((acc, curr) => {
      acc += `${curr.x} ${curr.y}` + ' '
      return acc
    }, '')
    .trim()

  return <polygon points={pts} fill="none" stroke="black" style={style} />
}
