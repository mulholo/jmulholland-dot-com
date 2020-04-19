import styled, { css } from 'styled-components'
import { media } from '../utils'

const numToGridProperty = n => '1fr '.repeat(n).trim()

const Grid = styled.div(
  ({ theme, outline, numCols }) => css`
    display: inline-grid;
    flex: 1 1 0;
    grid-auto-rows: 1fr;
    grid-template-columns: ${numToGridProperty(numCols[0])};

    ${outline &&
      css`
        background-color: ${theme.colors.n400};
        border: ${theme.space[1]} solid ${theme.colors.n400};
        gap: ${theme.space[1]} ${theme.space[1]};
      `}

    ${media.tablet`
      grid-template-columns: ${numToGridProperty(numCols[1])};
    `}
  `
)

Grid.defaultProps = {
  outline: true,
  numCols: [1, 2, 2],
}

export default Grid
