import { Circle } from './circle'
import { Square } from './square'
import { Triangle } from './triangle'
import { X } from './x'
import { SHAPE_COLORS, SHAPE_SIZE, SHAPE_TYPES } from '../constants'

// Create a union type from the constant
export type ShapeType = (typeof SHAPE_TYPES)[number]
export type ShapeColor = (typeof SHAPE_COLORS)[number]

interface ShapeProps {
  type: ShapeType
  margin?: {
    marginTop: number
    marginBottom: number
    marginLeft: number
    marginRight: number
  }
  color: string
  rotation: number
}

export const Shape = ({ type, margin, color, rotation }: ShapeProps) => {
  const style = { ...margin, transform: `rotate(${rotation}deg)` }

  switch (type) {
    case 'circle':
      return <Circle style={style} size={SHAPE_SIZE} color={color} />
    case 'square':
      return <Square style={style} size={SHAPE_SIZE} color={color} />
    case 'triangle':
      return <Triangle style={style} size={SHAPE_SIZE} color={color} />
    case 'x':
      return <X style={style} size={SHAPE_SIZE} color={color} />
  }
}
