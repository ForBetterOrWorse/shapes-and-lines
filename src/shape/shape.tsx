import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';
import ChangeHistoryOutlinedIcon from '@mui/icons-material/ChangeHistoryOutlined';

export type ShapeType = 'circle' | 'square' | 'triangle'

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
    case 'triangle':
      return <ChangeHistoryOutlinedIcon style={randomMargin()} />
  }
}
