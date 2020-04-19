import styled, { css } from 'styled-components'

/**
 * Styles a box with some background.
 *
 * Not a layout component.
 */
const Box = styled.div(
  ({ theme }) => css`
    background: ${theme.colors.n900};
    flex: 1 1 0;
    padding: ${theme.space[6]};
  `
)

export default Box
