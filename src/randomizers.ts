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
 * Checks if a polygon has self-intersections using Turf.js
 */
const hasSelfintersections = (points: Point[]): boolean => {
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

  return selfIntersections.features.length > 0
}

/**
 * Generates points for a polygon by creating a base polygon.
 * If concave is true, makes one or more vertices "dent inward" to guarantee concavity.
 * If concave is false, generates a convex polygon.
 */
const generatePolygonPoints = ({
  pointCount,
  max,
  concave,
}: {
  pointCount: number
  max: number
  concave: boolean
}): Point[] => {
  // Start with points arranged in a circle to form a convex base
  const center = { x: max / 2, y: max / 2 }
  const radius = Math.min(max * 0.3, max * 0.4) // Use 30-40% of max as radius
  const points: Point[] = []

  // Generate points in a circular arrangement
  for (let i = 0; i < pointCount; i++) {
    const angle = (i / pointCount) * 2 * Math.PI
    const x = center.x + radius * Math.cos(angle)
    const y = center.y + radius * Math.sin(angle)
    points.push({ x: Math.round(x), y: Math.round(y) })
  }

  if (concave) {
    // Make at least one point concave by moving it toward the center
    // This guarantees the polygon will be concave
    const concaveIndex = Math.floor(Math.random() * pointCount)
    const concavePoint = points[concaveIndex]

    // Move the point toward center by 30-70% of the distance
    const moveRatio = 0.3 + Math.random() * 0.4
    const newX = concavePoint.x + (center.x - concavePoint.x) * moveRatio
    const newY = concavePoint.y + (center.y - concavePoint.y) * moveRatio

    points[concaveIndex] = { x: Math.round(newX), y: Math.round(newY) }

    // Optionally add more concave points for variety (20% chance per remaining point)
    for (let i = 0; i < pointCount; i++) {
      if (i !== concaveIndex && Math.random() < 0.2) {
        const point = points[i]
        const ratio = 0.2 + Math.random() * 0.3
        const x = point.x + (center.x - point.x) * ratio
        const y = point.y + (center.y - point.y) * ratio
        points[i] = { x: Math.round(x), y: Math.round(y) }
      }
    }
  }

  // Add some randomness to point positions
  const randomnessAmount = concave ? 20 : 15 // Less randomness for convex to maintain convexity
  return points.map((point) => ({
    x: Math.max(
      0,
      Math.min(max, point.x + (Math.random() - 0.5) * randomnessAmount)
    ),
    y: Math.max(
      0,
      Math.min(max, point.y + (Math.random() - 0.5) * randomnessAmount)
    ),
  }))
}

/**
 * Generates polygon points that form a concave polygon and ensures
 * that the polygon does not have self-intersections.
 */
export const randomPolygonPoints = ({
  pointCount,
  max,
  concave = true,
}: {
  pointCount: number
  max: number
  concave?: boolean
}): Point[] => {
  const points = generatePolygonPoints({ pointCount, max, concave })

  // Re-generate the points if there is a self-intersection
  if (hasSelfintersections(points)) {
    return randomPolygonPoints({ pointCount, max, concave })
  }

  return points
}
