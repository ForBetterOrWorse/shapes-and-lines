import { VIEWBOX_SIZE } from '../constants'
import { CurvedLine } from '../curved-line'
import {
  randomCurveCoordinates,
  randomExtensionCoordinates,
  randomMoveCoordinates,
  randomOpacity,
} from '../randomizers'

interface CurvedLinesProps {
  width?: number
  height?: number
  lineCount?: number
  hasRandomStrokeOpacity?: boolean
}

export const CurvedLines = ({
  width = VIEWBOX_SIZE,
  height = VIEWBOX_SIZE,
  lineCount = 2,
  hasRandomStrokeOpacity,
}: CurvedLinesProps) => {
  // If `width` and `height` are different, use width for the max value
  const randomizerMaxValue = width
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
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {lines}
    </svg>
  )
}
