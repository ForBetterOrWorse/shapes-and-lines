interface PolygonBaseProps {
  points: { x: number; y: number }[]
  margin?: {
    marginTop: number
    marginBottom: number
    marginLeft: number
    marginRight: number
  }
}

export const ConcavePolygon = ({ points, margin }: PolygonBaseProps) => {
  const pts = points.map((p) => `${p.x} ${p.y}`).join(' ')
  return (
    <polygon points={pts} fill="none" stroke="black" style={{ ...margin }} />
  )
}

export const ConvexPolygon = ({ points, margin }: PolygonBaseProps) => {
  const pts = points.map((p) => `${p.x} ${p.y}`).join(' ')
  return (
    <polygon points={pts} fill="none" stroke="black" style={{ ...margin }} />
  )
}
