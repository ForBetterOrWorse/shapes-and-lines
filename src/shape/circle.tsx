import { CSSProperties } from 'react'

interface CircleProps {
  size?: number
  color?: string
  style?: CSSProperties
}

export const Circle = ({
  size = 24,
  color = 'currentColor',
  style,
}: CircleProps) => {
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
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}
