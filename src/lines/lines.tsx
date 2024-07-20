import { VIEWBOX_SIZE } from '../constants'
import { Line } from '../line'
import {
  randomCurveCoordinates,
  randomExtensionCoordinates,
  randomMoveCoordinates,
} from '../randomizers'

export const Lines = () => {
  return (
    <svg
      viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Line
        move={randomMoveCoordinates()}
        curve={randomCurveCoordinates()}
        extensions={[randomExtensionCoordinates()]}
      />
      <Line
        move={randomMoveCoordinates()}
        curve={randomCurveCoordinates()}
        extensions={[randomExtensionCoordinates()]}
      />
      <Line
        move={randomMoveCoordinates()}
        curve={randomCurveCoordinates()}
        extensions={[randomExtensionCoordinates()]}
      />
      <Line
        move={randomMoveCoordinates()}
        curve={randomCurveCoordinates()}
        extensions={[randomExtensionCoordinates()]}
      />
      <Line
        move={randomMoveCoordinates()}
        curve={randomCurveCoordinates()}
        extensions={[randomExtensionCoordinates()]}
      />
      <Line
        move={randomMoveCoordinates()}
        curve={randomCurveCoordinates()}
        extensions={[randomExtensionCoordinates()]}
      />
      <Line
        move={randomMoveCoordinates()}
        curve={randomCurveCoordinates()}
        extensions={[randomExtensionCoordinates()]}
      />
    </svg>
  )
}
