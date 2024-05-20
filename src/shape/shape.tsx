import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined'
import ChangeHistoryOutlinedIcon from '@mui/icons-material/ChangeHistoryOutlined'

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
      return <CircleOutlinedIcon style={{ ...margin }} />
    case 'square':
      return <SquareOutlinedIcon style={{ ...margin }} />
    case 'triangle':
      return <ChangeHistoryOutlinedIcon style={{ ...margin }} />
  }
}
