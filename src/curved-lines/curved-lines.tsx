import { VIEW_BOX_SIZE } from '../constants'
import { CurvedLine } from '../curved-line'
import {
  randomCurveCoordinates,
  randomExtensionCoordinates,
  randomMoveCoordinates,
  randomOpacity,
} from '../randomizers'

export interface CurvedLinesProps {
  viewBoxWidth?: number
  viewBoxHeight?: number
  lineCount?: number
  hasRandomStrokeOpacity?: boolean
}

export const CurvedLines = ({
  viewBoxWidth = VIEW_BOX_SIZE,
  viewBoxHeight = VIEW_BOX_SIZE,
  lineCount = 2,
  hasRandomStrokeOpacity,
}: CurvedLinesProps) => {
  // If `width` and `height` are different, use width for the max value
  const randomizerMaxValue = viewBoxWidth
  const lines = []

  for (let i = 0; i < lineCount; i++) {
    lines.push(
      <CurvedLine
        key={i}
        move={randomMoveCoordinates(randomizerMaxValue)}
        curve={randomCurveCoordinates(randomizerMaxValue)}
        // Randomizing extension count for each line makes this a little too complicated.
        // For simplicity, every line has two extensions for now.
        extensions={[
          randomExtensionCoordinates(randomizerMaxValue),
          randomExtensionCoordinates(randomizerMaxValue),
        ]}
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
