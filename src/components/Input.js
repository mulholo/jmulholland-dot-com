import styled, { css } from 'styled-components'

const Input = styled.input(
  ({ theme }) => css`
    background: ${theme.colors.n900};
    border: 1px solid ${theme.colors.n500};
    color: ${theme.colors.n200};
    margin: 0;
    padding: ${theme.sizes.s0};
    font-size: ${theme.fontSizes.s0};
    cursor: pointer;

    transition: 0.2s border, 0.2s box-shadow;

    &:active,
    &:focus {
      outline: none;
      border: 1px solid ${theme.colors.r500};
      box-shadow: inset 0px 0px 0px 3px
        ${({ theme }) => theme.colors.r500};
    }
  `
)

export default Input
