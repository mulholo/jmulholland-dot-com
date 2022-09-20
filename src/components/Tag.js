import styled from 'styled-components'

export const Tag = styled.button(
  ({ selected, theme }) => `
  border: 4px solid ${theme.colors.b500};
  background: ${selected ? theme.colors.b500 : 'transparent'};
  color: ${selected ? theme.colors.n900 : 'inherit'};
  font-weight: bold;
  padding: ${theme.sizes.s0};
  cursor: pointer;

  transition: 0.1s color, 0.1s background, box-shadow 0.2s, border 0.2s;

  &:active,
  &:hover,
  &:focus-visible {
    box-shadow: ${
      selected
        ? `inset 0px 0px 0px 3px ${theme.colors.b300}`
        : `inset 0px 0px 0px 3px ${theme.colors.b500}`
    };
    border: 4px solid ${
      selected ? theme.colors.b300 : theme.colors.b500
    };
    outline: none;
  }
`
)
