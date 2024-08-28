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
  lineCount?: number
  hasRandomStrokeOpacity?: boolean
}

/**
 * `Polylines` draws multiple polylines.
 *
 * Each polyline is created with a random point count and random point positions.
 * The lines can have a random stroke opacity if `hasRandomStrokeOpacity` is enabled.
 */
export const Polylines = ({
  viewBoxWidth = VIEW_BOX_SIZE,
  viewBoxHeight = VIEW_BOX_SIZE,
  lineCount = 2,
  hasRandomStrokeOpacity,
}: PolylinesProps) => {
  // If `width` and `height` are different, use width for the max value
  const randomizerMaxValue = viewBoxWidth
  const lines = []

  for (let i = 0; i < lineCount; i++) {
    lines.push(
      <Polyline
        key={i}
        points={randomPoints({
          pointCount: randomPolylinePointCount(MAX_POINTS_PER_POLYLINE),
          max: randomizerMaxValue,
        })}
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
