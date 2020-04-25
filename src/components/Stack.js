import styled from 'styled-components'

/**
 * Vertically stacks and spaces its contents.
 *
 * Layout component.
 */
const Stack = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${({ spacer, theme }) =>
    spacer &&
    `
  & > * + * {
    margin-top: ${theme.size[spacer]}
  }`}
`

export default Stack
