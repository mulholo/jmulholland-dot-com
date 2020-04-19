import styled from 'styled-components'
import {
  border,
  color,
  flexbox,
  layout,
  space,
  compose,
} from 'styled-system'

const Box = styled.div(compose(space, layout, border, flexbox, color))

export default Box
