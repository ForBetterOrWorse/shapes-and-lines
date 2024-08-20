import { MAX_POINTS_PER_POLYLINE, VIEWBOX_SIZE } from '../constants'
import { Polyline } from '../polyline'
import {
  randomOpacity,
  randomPoints,
  randomPolylinePointCount,
} from '../randomizers'

export interface PolylinesProps {
  width?: number
  height?: number
  lineCount: number
  hasRandomStrokeOpacity?: boolean
}

export const Polylines = ({
  width = VIEWBOX_SIZE,
  height = VIEWBOX_SIZE,
  lineCount = 2,
  hasRandomStrokeOpacity,
}: PolylinesProps) => {
  const lines = []

  for (let i = 0; i < lineCount; i++) {
    lines.push(
      <Polyline
        key={i}
        points={randomPoints(randomPolylinePointCount(MAX_POINTS_PER_POLYLINE))}
        strokeOpacity={hasRandomStrokeOpacity ? randomOpacity() : 1}
      />
    )
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {lines}
    </svg>
  )
}
