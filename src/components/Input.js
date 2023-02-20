import styled, { css } from 'styled-components'

const Input = styled.input(
  ({ theme }) => css`
    margin: 0;
    padding: ${theme.sizes.s0};

    background: ${theme.colors.n900};

    border: 1px solid ${theme.colors.n100};

    color: ${theme.colors.n200};
    font-size: ${theme.fontSizes.s0};

    cursor: pointer;

    transition: 0.2s border;

    &:active,
    &:focus {
      outline: none;
      border: 1px solid ${theme.colors.b500};
    }
  `
)

export default Input
