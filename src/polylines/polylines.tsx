import { MAX_POINTS_PER_POLYLINE, VIEW_BOX_SIZE } from '../constants'
import { Polyline } from '../polyline'
import {
  randomOpacity,
  randomPoints,
  randomPolylinePointCount,
} from '../randomizers'

export interface PolylinesProps {
  viewBoxWidth?: number
  viewBoxHeight?: number
  lineCount: number
  hasRandomStrokeOpacity?: boolean
}

export const Polylines = ({
  viewBoxWidth = VIEW_BOX_SIZE,
  viewBoxHeight = VIEW_BOX_SIZE,
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
      width={viewBoxWidth}
      height={viewBoxHeight}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {lines}
    </svg>
  )
}
