import { Shape, ShapeType } from "../shape"

interface Shape {
  type: ShapeType
  count: number
}

interface Props {
  shapes: Shape[]
}

export const Shapes = ({ shapes }: Props) => {
  return shapes.reduce((allShapes, shapeConfig) => {
    const { count, type } = shapeConfig

    for (let i = count; i--; i > 0) {
      allShapes.push(<Shape key={`${type}-${i}`} type={type} />)
    }

    return allShapes
  }, [] as React.ReactNode[])
}