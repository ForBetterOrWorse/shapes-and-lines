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
}

export const Shape = ({ type, margin }: Props) => {
  switch (type) {
    case 'circle':
      return <FiCircle style={{ ...margin }} />
    case 'square':
      return <FiSquare style={{ ...margin }} />
    case 'triangle':
      return <FiTriangle style={{ ...margin }} />
  }
}
