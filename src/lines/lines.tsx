import { VIEWBOX_SIZE } from '../constants'
import { Line } from '../line'
import {
  randomCurveCoordinates,
  randomExtensionCoordinates,
  randomMoveCoordinates,
} from '../randomizers'

interface LinesProps {
  width?: number
  height?: number
  lineCount?: number
}

export const Lines = ({
  width = VIEWBOX_SIZE,
  height = VIEWBOX_SIZE,
  lineCount = 2,
}: LinesProps) => {
  // If `width` and `height` are different, use width for the max value
  const randomizerMaxValue = width
  const lines = []

  for (let i = 0; i < lineCount; i++) {
    lines.push(
      <Line
        key={i}
        move={randomMoveCoordinates(randomizerMaxValue)}
        curve={randomCurveCoordinates(randomizerMaxValue)}
        extensions={[randomExtensionCoordinates(randomizerMaxValue)]}
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
