import { ConcavePolygon, ConvexPolygon } from '../polygon/polygon'
import { randomConfigValues, randomPolygonPoints } from '../randomizers'

const CANVAS_SIZE = 400
const POLYGON_MAX_SIZE = 150
const MARGIN = 15

export interface PolygonsProps {
  polygonCount?: number
}

interface PolygonData {
  center: { x: number; y: number }
  radius: number
  points: { x: number; y: number }[]
  isConcave: boolean
}

/**
 * `Polygons` draws multiple polygons (convex and/or concave).
 * If polygonCount is 1, randomly chooses convex or concave.
 * If polygonCount > 1, ensures at least one of each variant is present.
 */
export const Polygons = ({ polygonCount = 1 }: PolygonsProps) => {
  if (!polygonCount || polygonCount < 1) return null

  // Helper: random convex/concave array, at least one of each if count > 1
  const getVariants = (count: number): boolean[] => {
    if (count === 1) {
      return [Math.random() < 0.5]
    }
    // Ensure at least one true and one false
    const arr = Array(count - 2)
      .fill(null)
      .map(() => Math.random() < 0.5)
    // Shuffle positions for variety
    const variants = [true, false, ...arr]
    return randomConfigValues({ count, baseConstant: variants })
  }

  // Calculate actual bounding circle from polygon points
  const getBoundingCircle = (
    points: { x: number; y: number }[],
    center: { x: number; y: number }
  ) => {
    let maxDistance = 0
    for (const point of points) {
      const distance = Math.sqrt(
        Math.pow(point.x - center.x, 2) + Math.pow(point.y - center.y, 2)
      )
      maxDistance = Math.max(maxDistance, distance)
    }
    return maxDistance
  }

  // Check if two circles overlap (with margin)
  const circlesOverlap = (
    a: { center: { x: number; y: number }; radius: number },
    b: { center: { x: number; y: number }; radius: number }
  ) => {
    const distance = Math.sqrt(
      Math.pow(a.center.x - b.center.x, 2) +
        Math.pow(a.center.y - b.center.y, 2)
    )
    return distance < a.radius + b.radius + MARGIN
  }

  // Check if polygon is within canvas bounds
  const isWithinBounds = (points: { x: number; y: number }[]) => {
    return points.every(
      (point) =>
        point.x >= 0 &&
        point.x <= CANVAS_SIZE &&
        point.y >= 0 &&
        point.y <= CANVAS_SIZE
    )
  }

  const variants = getVariants(polygonCount)
  const polygonsData: PolygonData[] = []

  for (let i = 0; i < polygonCount; i++) {
    const edgeCount = Math.floor(Math.random() * 7) + 3 // 3-9 edges

    // Generate a random size for this polygon (60-100% of max size)
    const polygonSize = POLYGON_MAX_SIZE * (0.6 + Math.random() * 0.4)

    let polygonData: PolygonData | null = null
    let tries = 0

    // Keep trying until we find a non-overlapping position
    do {
      // Generate random center position
      const center = {
        x: Math.random() * (CANVAS_SIZE - 2 * MARGIN) + MARGIN,
        y: Math.random() * (CANVAS_SIZE - 2 * MARGIN) + MARGIN,
      }

      // Generate polygon points centered at origin
      const rawPoints = randomPolygonPoints({
        pointCount: edgeCount,
        max: polygonSize,
        concave: variants[i],
      })

      // Transform points to final position
      const points = rawPoints.map((pt) => ({
        x: pt.x + center.x - polygonSize / 2,
        y: pt.y + center.y - polygonSize / 2,
      }))

      // Calculate actual bounding radius from the real points
      const actualRadius = getBoundingCircle(points, center)

      // Check if polygon is within bounds and doesn't overlap with existing ones
      const overlaps = polygonsData.some((poly) =>
        circlesOverlap(
          { center, radius: actualRadius },
          { center: poly.center, radius: poly.radius }
        )
      )

      if (!overlaps && isWithinBounds(points)) {
        polygonData = {
          center,
          radius: actualRadius,
          points,
          isConcave: variants[i],
        }
      }

      tries++
    } while (polygonData === null && tries < 100)

    // If we found a valid position, add it; otherwise skip this polygon
    if (polygonData) {
      polygonsData.push(polygonData)
    }
  }

  return (
    <svg
      width={CANVAS_SIZE}
      height={CANVAS_SIZE}
      viewBox={`0 0 ${CANVAS_SIZE} ${CANVAS_SIZE}`}
    >
      {polygonsData.map((polygon, i) =>
        polygon.isConcave ? (
          <ConcavePolygon key={i} points={polygon.points} />
        ) : (
          <ConvexPolygon key={i} points={polygon.points} />
        )
      )}
    </svg>
  )
}
