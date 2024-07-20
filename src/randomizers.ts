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
export const randomCoordinate = () =>
  Math.floor(Math.random() * (VIEWBOX_SIZE / 10))

export const randomMoveCoordinates = () => ({
  mx: randomCoordinate(),
  my: randomCoordinate(),
})

export const randomCurveCoordinates = () => ({
  cx1: randomCoordinate(),
  cy1: randomCoordinate(),
  cx2: randomCoordinate(),
  cy2: randomCoordinate(),
  cx: randomCoordinate(),
  cy: randomCoordinate(),
})

export const randomExtensionCoordinates = () => ({
  sx2: randomCoordinate(),
  sy2: randomCoordinate(),
  sx: randomCoordinate(),
  sy: randomCoordinate(),
})
