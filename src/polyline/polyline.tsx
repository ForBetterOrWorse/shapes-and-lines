interface Point {
  x: number
  y: number
}

export interface PolylineProps {
  points: Point[]
  strokeOpacity?: number
}

/**
 * This component takes an array of points to draw a polyline.
 * The component needs at least two points in order to draw a line.
 * Ref: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline
 */
export const Polyline = ({ points, strokeOpacity = 1 }: PolylineProps) => {
  if (points.length < 2) {
    console.error(
      'The component needs at least two points in order to draw a line.'
    )
  }

  const pts = points
    .reduce((acc, curr) => {
      acc += `${curr.x} ${curr.y}` + ' '
      return acc
    }, '')
    .trim()

  return (
    <polyline
      points={pts}
      fill="none"
      stroke="black"
      strokeOpacity={strokeOpacity}
    />
  )
}
