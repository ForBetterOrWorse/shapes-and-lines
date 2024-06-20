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
}

export const Shape = ({ type, margin, color }: Props) => {
  switch (type) {
    case 'circle':
      return <FiCircle style={{ ...margin }} size={20} color={color} />
    case 'square':
      return <FiSquare style={{ ...margin }} size={20} color={color} />
    case 'triangle':
      return <FiTriangle style={{ ...margin }} size={20} color={color} />
  }
}
