import shuffle from 'lodash/shuffle'
import sample from 'lodash/sample'

import { Shape, ShapeType } from '../shape'
import { COLORS, MAX_MARGIN } from '../constants'
import './shapes.css'

interface Shape {
  type: ShapeType
  count: number
}

interface Props {
  shapes: Shape[]
}

const rand = () => Math.floor(Math.random() * MAX_MARGIN)
const randomMargin = () => ({
  marginTop: rand(),
  marginBottom: rand(),
  marginLeft: rand(),
  marginRight: rand(),
})
const randomColor = () => sample(COLORS) as string

export const Shapes = ({ shapes }: Props) => {
  const shapesToRender = shapes.reduce((allShapes, shapeConfig) => {
    const { count, type } = shapeConfig

    for (let i = count; i--; i > 0) {
      allShapes.push(
        <Shape
          key={`${type}-${i}`}
          type={type}
          margin={randomMargin()}
          color={randomColor()}
        />
      )
    }

    return allShapes
  }, [] as React.ReactNode[])

  const shuffled = shuffle(shapesToRender)

  return <div className="container">{shuffled}</div>
}
