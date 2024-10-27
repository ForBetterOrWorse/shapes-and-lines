import sample from 'lodash/sample'
import shuffle from 'lodash/shuffle'
import { polygon as turfPolygon } from '@turf/helpers'
import { kinks } from '@turf/kinks'

import {
  MAX_MARGIN,
  MAX_POINTS_PER_POLYLINE,
  MIN_POINTS_PER_POLYLINE,
  VIEW_BOX_SIZE,
} from './constants'
import type { Point } from './types'

// ----- Randomizers for shapes -----
const randomMargin = () => Math.floor(Math.random() * MAX_MARGIN)

export const randomMargins = () => ({
  marginTop: randomMargin(),
  marginBottom: randomMargin(),
  marginLeft: randomMargin(),
  marginRight: randomMargin(),
})
export const randomDegree = () => Math.floor(Math.random() * 360)

/**
 * Given a shape count, this function creates an array of values
 * that are randomly selected from the base constant
 * while ensuring that all values in the base constant are used.
 */
export const randomConfigValues = <T>({
  count,
  baseConstant,
}: {
  count: number
  baseConstant: ReadonlyArray<T>
}) => {
  let values = []

  if (count < baseConstant.length) {
    values = shuffle(baseConstant).slice(0, count)

    return values
  } else if (count === baseConstant.length) {
    values = shuffle(baseConstant)

    return values
  } else {
    // If `count` is greater than the number of items in the base array:
    // - Clone the base constant and shuffle the items
    // - Randomly pick and add items from the base array until the new array has enough items needed
    values = shuffle(baseConstant)

    while (values.length < count) {
      values.push(sample(baseConstant) as T)
    }

    return values
  }
}

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

export const randomPoints = ({
  pointCount,
  max,
}: {
  pointCount: number
  max: number
}) => {
  const points = []

  while (points.length < pointCount) {
    points.push(randomPointCoordinates(max))
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

/**
 * Generates polygon points and ensures that the polygon does not have self-intersections.
 */
export const randomPolygonPoints = ({
  pointCount,
  max,
}: {
  pointCount: number
  max: number
}): Point[] => {
  const points = randomPoints({ pointCount, max })

  // Use `turf.kinks` to detect self-intersections
  // Ref: https://turfjs.org/docs/api/kinks#examples
  const turfPolyPoints = points.reduce(
    (acc, curr) => {
      const coordinates = [curr.x, curr.y]
      acc.push(coordinates)
      return acc
    },
    [] as Array<Array<number>>
  )

  // `turf` requires that the first and end points match,
  // so we push the coordinates of the first point to the array.
  const turfPolyEndPoint = turfPolyPoints[0]
  turfPolyPoints.push(turfPolyEndPoint)

  const poly = turfPolygon([turfPolyPoints])
  const selfIntersections = kinks(poly)

  // Re-generate the points if there is a self-intersection.
  if (selfIntersections.features.length) {
    return randomPolygonPoints({ pointCount, max })
  }

  return points
}
