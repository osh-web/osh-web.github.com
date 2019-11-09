import { Box as Base } from 'grid-styled'
import styled from 'styled-components'
import { fontSize, color } from 'styled-system'

export const Box = styled(Base)`
  ${fontSize} ${color};
`
export default Box

export const Grid = styled(Box)`
  display: inline-block;
`
