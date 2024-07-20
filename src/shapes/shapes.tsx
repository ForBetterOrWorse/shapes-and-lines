import shuffle from 'lodash/shuffle'

import { Shape, ShapeType } from '../shape'
import { randomColor, randomDegree, randomMargins } from '../randomizers'
import './shapes.css'

interface Shape {
  type: ShapeType
  count: number
}

interface Props {
  shapes: Shape[]
}

export const Shapes = ({ shapes }: Props) => {
  const shapesToRender = shapes.reduce((allShapes, shapeConfig) => {
    const { count, type } = shapeConfig

    for (let i = count; i--; i > 0) {
      allShapes.push(
        <Shape
          key={`${type}-${i}`}
          type={type}
          margin={randomMargins()}
          color={randomColor()}
          rotation={randomDegree()}
        />
      )
    }

    return allShapes
  }, [] as React.ReactNode[])

  const shuffled = shuffle(shapesToRender)

  return <div className="container">{shuffled}</div>
}
