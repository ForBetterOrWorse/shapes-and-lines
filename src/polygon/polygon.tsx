import { VIEW_BOX_SIZE } from '../constants'
import { randomPolygonPoints } from '../randomizers'

export interface PolygonBaseProps {
  edgeCount: number
  margin?: {
    marginTop: number
    marginBottom: number
    marginLeft: number
    marginRight: number
  }
}

export const ConcavePolygon = ({ edgeCount = 3, margin }: PolygonBaseProps) => {
  const points = randomPolygonPoints({
    pointCount: edgeCount,
    max: VIEW_BOX_SIZE,
    concave: true,
  })

  const pts = points.map((p) => `${p.x} ${p.y}`).join(' ')

  return (
    <svg
      width={VIEW_BOX_SIZE}
      height={VIEW_BOX_SIZE}
      viewBox={`0 0 ${VIEW_BOX_SIZE} ${VIEW_BOX_SIZE}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points={pts} fill="none" stroke="black" style={{ ...margin }} />
    </svg>
  )
}

export const ConvexPolygon = ({ edgeCount = 3, margin }: PolygonBaseProps) => {
  const points = randomPolygonPoints({
    pointCount: edgeCount,
    max: VIEW_BOX_SIZE,
    concave: false,
  })

  const pts = points.map((p) => `${p.x} ${p.y}`).join(' ')

  return (
    <svg
      width={VIEW_BOX_SIZE}
      height={VIEW_BOX_SIZE}
      viewBox={`0 0 ${VIEW_BOX_SIZE} ${VIEW_BOX_SIZE}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points={pts} fill="none" stroke="black" style={{ ...margin }} />
    </svg>
  )
}
