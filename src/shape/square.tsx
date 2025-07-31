import { CSSProperties } from 'react'

interface SquareProps {
  size?: number
  color?: string
  style?: CSSProperties
}

export const Square = ({ size = 24, color = 'currentColor', style }: SquareProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    </svg>
  )
}
