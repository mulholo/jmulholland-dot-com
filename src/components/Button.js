import styled, { css } from 'styled-components'

const Button = styled.button(
  ({ theme }) => css`
    background: ${theme.colors.r500};
    border: none;
    color: ${theme.colors.n900};
    cursor: pointer;
    font-size: ${theme.fontSizes.s0};
    font-weight: 600;
    margin: 0;
    padding: ${theme.sizes.s0};
    text-transform: uppercase;
    transition: 0.2s background;

    &:focus,
    &:active {
      outline: none;
      background: ${theme.colors.r300};
    }
  `
)

export default Button
