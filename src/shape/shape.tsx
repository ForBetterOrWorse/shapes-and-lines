import { FiCircle, FiSquare, FiTriangle } from 'react-icons/fi'

export type ShapeType = 'circle' | 'square' | 'triangle'

interface Props {
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

export const Shape = ({ type, margin, color, rotation }: Props) => {
  const style = { ...margin, transform: `rotate(${rotation}deg)` }

  switch (type) {
    case 'circle':
      return <FiCircle style={style} size={20} color={color} />
    case 'square':
      return <FiSquare style={style} size={20} color={color} />
    case 'triangle':
      return <FiTriangle style={style} size={20} color={color} />
  }
}
