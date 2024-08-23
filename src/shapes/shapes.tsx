import shuffle from 'lodash/shuffle'

import { Shape, ShapeType } from '../shape'
import { randomColor, randomDegree, randomMargins } from '../randomizers'
import cls from './shapes.module.css'

interface Shape {
  type: ShapeType
  count: number
}

export interface ShapesProps {
  shapes: Shape[]
}

/**
 * `Shapes` draws multiple shapes.
 *
 * Each shape is randomly assigned a type, margin, color, and rotation.
 * See [Shape](./?path=/docs/internal-shape--docs) for the shape types that the library offers.
 */
export const Shapes = ({ shapes }: ShapesProps) => {
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

  return <div className={cls.container}>{shuffled}</div>
}
