import styled, { css } from 'styled-components'

const Input = styled.input(
  ({ theme }) => css`
    background: ${theme.colors.n900};
    border: 1px solid ${theme.colors.n500};
    color: ${theme.colors.n100};
    flex: 1 1 0;
    font-size: ${theme.fontSizes[2]};
    margin: 0;
    padding: ${theme.space[4]} ${theme.space[4]};
  `
)

export default Input
