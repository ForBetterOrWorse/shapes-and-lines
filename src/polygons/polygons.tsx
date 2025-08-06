import { ConcavePolygon, ConvexPolygon } from '../polygon/polygon'
import { randomConfigValues } from '../randomizers'

export interface PolygonsProps {
  polygonCount?: number
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

  const variants = getVariants(polygonCount)
  const polygonsToRender = []

  for (let i = 0; i < polygonCount; i++) {
    const edgeCount = Math.floor(Math.random() * 7) + 3 // 3-9 edges
    const props = { edgeCount }
    polygonsToRender.push(
      variants[i] ? (
        <ConcavePolygon key={`concave-${i}`} {...props} />
      ) : (
        <ConvexPolygon key={`convex-${i}`} {...props} />
      )
    )
  }

  return (
    <svg
      width={400}
      height={400}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      {polygonsToRender}
    </svg>
  )
}
