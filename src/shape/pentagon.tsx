import { CSSProperties } from 'react'

interface PentagonProps {
  size?: number
  color?: string
  style?: CSSProperties
}

export const Pentagon = ({
  size = 24,
  color = 'currentColor',
  style,
}: PentagonProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <polygon points="12 3 20.5 9.5 17.5 19.5 6.5 19.5 3.5 9.5 12 3" />
    </svg>
  )
}
