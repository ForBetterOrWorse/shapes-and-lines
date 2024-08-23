import sample from 'lodash/sample'

import {
  COLORS,
  MAX_MARGIN,
  MAX_POINTS_PER_POLYLINE,
  MIN_POINTS_PER_POLYLINE,
  VIEW_BOX_SIZE,
} from './constants'

// ----- Randomizers for shapes -----
const randomMargin = () => Math.floor(Math.random() * MAX_MARGIN)

export const randomMargins = () => ({
  marginTop: randomMargin(),
  marginBottom: randomMargin(),
  marginLeft: randomMargin(),
  marginRight: randomMargin(),
})
export const randomColor = () => sample(COLORS) as string
export const randomDegree = () => Math.floor(Math.random() * 360)

// ----- Randomizers for lines -----

// The divisor is 1 so that the coordinates can spread the entire SVG size.
// Adjust the value if the display is not desirable.
export const randomCoordinate = (max = VIEW_BOX_SIZE) =>
  Math.floor(Math.random() * (max / 1))

export const randomMoveCoordinates = (max?: number) => ({
  mx: randomCoordinate(max),
  my: randomCoordinate(max),
})

export const randomCurveCoordinates = (max?: number) => ({
  cx1: randomCoordinate(max),
  cy1: randomCoordinate(max),
  cx2: randomCoordinate(max),
  cy2: randomCoordinate(max),
  cx: randomCoordinate(max),
  cy: randomCoordinate(max),
})

export const randomExtensionCoordinates = (max?: number) => ({
  sx2: randomCoordinate(max),
  sy2: randomCoordinate(max),
  sx: randomCoordinate(max),
  sy: randomCoordinate(max),
})

const randomPointCoordinates = (max?: number) => ({
  x: randomCoordinate(max),
  y: randomCoordinate(max),
})

export const randomPoints = (pointCount: number) => {
  const points = []

  while (points.length < pointCount) {
    points.push(randomPointCoordinates())
  }

  return points
}

// This function ensures that the returned point count is at least 2,
// so that polyline can draw properly.
export const randomPolylinePointCount = (max: number) => {
  const mx = max > 1 ? max : MAX_POINTS_PER_POLYLINE

  const count = Math.floor(
    Math.random() * (mx - MIN_POINTS_PER_POLYLINE) + MIN_POINTS_PER_POLYLINE
  )

  return count
}

// Use `+` to convert the string back to number
export const randomOpacity = () => +(Math.random() * 1).toFixed(2)
