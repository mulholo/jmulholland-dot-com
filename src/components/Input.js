import styled, { css } from 'styled-components'

const Input = styled.input(
  ({ theme }) => css`
    background: ${theme.colors.n900};
    border: 1px solid ${theme.colors.n500};
    color: ${theme.colors.n200};
    flex: 1 1 0;
    font-size: ${theme.fontSizes[2]};
    margin: 0;
    padding: ${theme.size[4]} ${theme.size[4]};

    transition: 0.2s border, 0.2s box-shadow;

    &:active,
    &:focus {
      outline: none;
      border: 1px solid ${theme.colors.b500};
      box-shadow: inset 0px 0px 0px 3px
        ${({ theme }) => theme.colors.b500};
    }
  `
)

export default Input
