import sample from 'lodash/sample'

import { Shape, type ShapeType } from '../shape'
import { randomColor, randomDegree, randomMargins } from '../randomizers'
import cls from './shapes.module.css'
import { SHAPE_TYPES } from '../constants'

interface Shape {
  type: ShapeType
  count: number
}

export interface ShapesProps {
  shapeCount?: number
}

/**
 * `Shapes` draws multiple shapes.
 *
 * Each shape is randomly assigned a type, margin, color, and rotation.
 * See [Shape](./?path=/docs/internal-shape--docs) for the shape types that the library offers.
 */
export const Shapes = ({ shapeCount = 5 }: ShapesProps) => {
  const shapesToRender = []

  for (let i = 0; i < shapeCount; i++) {
    shapesToRender.push(
      <Shape
        key={i}
        type={sample(SHAPE_TYPES)}
        margin={randomMargins()}
        color={randomColor()}
        rotation={randomDegree()}
      />
    )
  }

  return <div className={cls.container}>{shapesToRender}</div>
}
