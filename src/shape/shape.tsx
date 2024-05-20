import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';

export type ShapeType = 'circle' | 'square'

interface Props {
  type: ShapeType
}

const rand = () => Math.floor(Math.random() * 30)
const randomMargin = () => ({
  marginTop: rand(), 
  marginBottom: rand(), 
  marginLeft: rand(), 
  marginRight: rand() 
})

export const Shape = ({ type }: Props) => {
  switch (type) {
    case 'circle':
      return <CircleOutlinedIcon style={randomMargin()} />
    case 'square':
      return <SquareOutlinedIcon style={randomMargin()} />
  }
}
