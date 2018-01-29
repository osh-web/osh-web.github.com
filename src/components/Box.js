import { Box as Base } from 'grid-styled'
import { fontSize, color } from 'styled-system'

export const Box = Base.extend`
  ${fontSize} ${color};
`
export default Box

export const Grid = Box.extend`
  display: inline-block;
`
