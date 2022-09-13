import styled from 'styled-components'

export const Tag = styled.button(
  ({ selected, theme }) => `
  border: 4px solid ${theme.colors.r500};
  background: ${selected ? theme.colors.r500 : 'transparent'};
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
        ? `inset 0px 0px 0px 3px ${theme.colors.r300}`
        : `inset 0px 0px 0px 3px ${theme.colors.r500}`
    };
    border: 4px solid ${
      selected ? theme.colors.r300 : theme.colors.r500
    };
    outline: none;
  }
`
)
