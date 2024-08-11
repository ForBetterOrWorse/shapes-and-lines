interface Move {
  mx: number
  my: number
}

interface Curve {
  cx1: number
  cy1: number
  cx2: number
  cy2: number
  cx: number
  cy: number
}

interface Extension {
  sx2: number
  sy2: number
  sx: number
  sy: number
}

export interface CurvedLineProps {
  move: Move
  curve: Curve
  extensions: Extension[]
  strokeOpacity?: number
}

/**
 * Line commands:
 * - M (move to):
 *   - Takes two parameters, a coordinate `x` and a coordinate `y`
 *     - M x y
 *   - We use this command to set the cursor / the beginning of the path
 * - C (cubic Bézier curve):
 *   - Takes three parameters, each is a set of coordinates
 *     - C x1 y1, x2 y2, x y
 *     - (x1, y1): is the control point for the start of the curve
 *     - (x2, y2): is the control point for the end of the curve
 *     - (x, y): specifies where the line should end
 *   - We use this command to draw the first curve
 * - S (extend curve):
 *   - Takes two parameters, each is a set of coordinates
 *     - S x2 y2, x y
 *     - (x2, y2): is the control point for the end of the curve
 * *   - (x, y): specifies where the line should end
 *     - Note: S doesn't take (x1, y1) for the first control point because it assumes that
 *             the first point (Sx1, Sy1) is the reflection of the previous control point (Cx2, Cy2)
 *   - We use this command to draw a new curve from the end point of the previous curve
 *
 * Ref: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
 */
export const CurvedLine = ({
  move: { mx, my },
  curve: { cx1, cy1, cx2, cy2, cx, cy },
  extensions: extensionsProp,
  strokeOpacity = 1,
}: CurvedLineProps) => {
  const move = `M ${mx} ${my}`
  const curve = `C ${cx1} ${cy1}, ${cx2} ${cy2}, ${cx} ${cy}`

  const extensions = extensionsProp
    .map(({ sx2, sy2, sx, sy }) => `S ${sx2} ${sy2}, ${sx} ${sy}`)
    .join(' ')

  return (
    <path
      d={`${move} ${curve} ${extensions}`}
      stroke="black"
      strokeOpacity={strokeOpacity}
      fill="transparent"
    />
  )
}
