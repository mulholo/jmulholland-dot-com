import { css } from 'styled-components'

export const fadeIn = css`
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  opacity: 1;
  animation-name: fade-in;
  animation-duration: 1.5s;
`
