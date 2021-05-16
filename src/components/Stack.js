import styled, { css } from 'styled-components'

/**
 * Vertically stacks and spaces its contents.
 *
 * Layout component.
 */
const Stack = styled.div(
  ({ theme, spacer }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;

    ${spacer &&
    `
  & > * + * {
    margin-top: ${theme.sizes[spacer]};
  }`}
  `
)

export default Stack
