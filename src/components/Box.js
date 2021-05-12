import styled, { css } from 'styled-components'

/**
 * Styles a box with some background.
 *
 * Not a layout component.
 */
const Box = styled.div(
  ({ theme, padding, borderY }) => css`
    background: ${theme.colors.n900};
    flex: 1 1 0;
    padding: ${theme.sizes[padding]};
    ${borderY &&
    `
    border-top: 1px solid ${theme.colors.n100};
    border-bottom: 1px solid ${theme.colors.n100};
    `}
  `
)

Box.defaultProps = {
  padding: 's2',
}

export default Box
