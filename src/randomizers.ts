import sample from 'lodash/sample'

import { COLORS, MAX_MARGIN, VIEWBOX_SIZE } from './constants'

// ----- Randomizers for shapes -----
const randomMargin = () => Math.floor(Math.random() * MAX_MARGIN)

export const randomMargins = () => ({
  marginTop: randomMargin(),
  marginBottom: randomMargin(),
  marginLeft: randomMargin(),
  marginRight: randomMargin(),
})
export const randomColor = () => sample(COLORS) as string
export const randomDegree = () => Math.floor(Math.random() * 360)

// ----- Randomizers for lines -----

// The divisor is 1 so that the coordinates can spread the entire SVG size
export const randomCoordinate = (max = VIEWBOX_SIZE) =>
  Math.floor(Math.random() * (max / 1))

export const randomMoveCoordinates = (max?: number) => ({
  mx: randomCoordinate(max),
  my: randomCoordinate(max),
})

export const randomCurveCoordinates = (max?: number) => ({
  cx1: randomCoordinate(max),
  cy1: randomCoordinate(max),
  cx2: randomCoordinate(max),
  cy2: randomCoordinate(max),
  cx: randomCoordinate(max),
  cy: randomCoordinate(max),
})

export const randomExtensionCoordinates = (max?: number) => ({
  sx2: randomCoordinate(max),
  sy2: randomCoordinate(max),
  sx: randomCoordinate(max),
  sy: randomCoordinate(max),
})
