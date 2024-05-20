import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';

export type ShapeType = 'circle' | 'square'

interface Props {
  type: ShapeType
}

export const Shape = ({ type }: Props) => {
  switch (type) {
    case 'circle':
      return <CircleOutlinedIcon />
    case 'square': 
      return <SquareOutlinedIcon />
  }
}
