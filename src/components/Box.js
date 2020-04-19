import styled, { css } from 'styled-components'

/**
 * Styles a box with some background.
 *
 * Not a layout component.
 */
const Box = styled.div(
  ({ theme, padding }) => css`
    background: ${theme.colors.n900};
    flex: 1 1 0;
    padding: ${theme.space[padding]};
  `
)

Box.defaultProps = {
  padding: 6,
}

export default Box
