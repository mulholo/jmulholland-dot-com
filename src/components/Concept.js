import styled, { css, keyframes } from 'styled-components'

const gradientScroll = keyframes`
  0%{ background-position: 0% 50% }
  50%{ background-position: 100% 50% }
  100%{ background-position: 0% 50% }
`

const Concept = styled.span(
  ({ theme }) => css`
    text-transform: uppercase;
    font-size: 0.9em;

    // Gradient effect
    background-color: ${theme.colors.b400};
    background-image: linear-gradient(
      0.25turn,
      ${theme.colors.b400},
      ${theme.colors.b600}
    );
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

    // Animation
    animation: 5s ${gradientScroll} ease infinite;
  `
)

export default Concept
