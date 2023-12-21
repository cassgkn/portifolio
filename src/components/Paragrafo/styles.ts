import styled from 'styled-components'

import { Props } from '.'

export const P = styled.p<Props>`
  font-size: 14px;
  text-align: justify;
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line-height: 18px;
`
