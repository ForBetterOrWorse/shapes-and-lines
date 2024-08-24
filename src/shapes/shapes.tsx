import { Shape } from '../shape'
import { randomConfigValues, randomDegree, randomMargins } from '../randomizers'
import cls from './shapes.module.css'
import { COLORS, SHAPE_TYPES } from '../constants'

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
  const types = randomConfigValues({
    count: shapeCount,
    baseConstant: SHAPE_TYPES,
  })

  const colors = randomConfigValues({
    count: shapeCount,
    baseConstant: COLORS,
  })

  const shapesToRender = []

  for (let i = 0; i < shapeCount; i++) {
    shapesToRender.push(
      <Shape
        key={i}
        type={types[i]}
        margin={randomMargins()}
        color={colors[i]}
        rotation={randomDegree()}
      />
    )
  }

  return <div className={cls.container}>{shapesToRender}</div>
}
