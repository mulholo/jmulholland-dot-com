import styled, { css } from 'styled-components'

export const Tag = styled.button(
  ({ selected, theme }) => css`
    padding: ${theme.sizes['s-2']};

    background: ${selected ? theme.colors.b500 : 'transparent'};
    color: ${selected ? theme.colors.n900 : 'inherit'};

    font-weight: bold;

    cursor: pointer;

    outline: none;
    border-width: solid;
    border-style: solid;
    border-color: ${selected ? theme.colors.b500 : theme.colors.n100};

    transition: 0.1s color, 0.1s background, border-color 0.2s;

    &:active,
    &:hover,
    &:focus {
      color: ${selected ? theme.colors.n900 : theme.colors.b500};
      border-color: ${selected
        ? theme.colors.b300
        : theme.colors.b500};
      outline: none;
    }
  `
)
