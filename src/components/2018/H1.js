import styled from 'styled-components'
import { accent } from '../../resources/color'

const H1 = styled.h1`
  font-size: 30px;
  margin: 20px;

  color: ${accent};
  display: block;
  text-align: center;
  border: solid ${accent} 0px;
  border-bottom-width: 1px;
  font-weight: 100;
`

export default H1
