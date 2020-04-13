import styled from 'styled-components'
import { border, color, layout, grid, space } from 'styled-system'

const Grid = styled.div(grid, layout, color, border, space)
Grid.defaultProps = {
  display: 'inline-grid',
}

export default Grid
