import styled from 'styled-components'
import { flexbox, layout, space, compose } from 'styled-system'

const Stack = styled.div(
  { display: 'flex' },
  compose(layout, flexbox, space, layout)
)
Stack.defaultProps = {
  flexDirection: 'column',
  flex: '1',
}
export default Stack
