import { CSSProperties } from 'react'

interface TriangleProps {
  size?: number
  color?: string
  style?: CSSProperties
}

export const Triangle = ({
  size = 24,
  color = 'currentColor',
  style,
}: TriangleProps) => {
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
      <path d="m22 18-10-16-10 16z" />
    </svg>
  )
}
