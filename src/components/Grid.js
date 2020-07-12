import styled, { css } from 'styled-components'
import { media } from '../utils'

const numToGridProperty = (n) => '1fr '.repeat(n).trim()

const Grid = styled.div(
  ({ theme, outline, numCols }) => css`
    display: inline-grid;
    flex: 1 1 0;
    grid-template-columns: ${numToGridProperty(numCols[0])};

    ${outline &&
    css`
      background-color: ${theme.colors.n300};
      border: 1px solid ${theme.colors.n300};
      gap: 1px;
    `}

    ${media.tablet`
      grid-template-columns: ${numToGridProperty(numCols[1])};
      grid-auto-rows: 1fr;
    `}
  `
)

Grid.defaultProps = {
  outline: true,
  numCols: [1, 2, 2],
}

export default Grid
