import styled, { css } from 'styled-components'
import { RATIO, HEADER_SWITCH_SIZE } from "../utils"
import Stack from './Stack'

/**
 * A stack which spaces text correctly
 */
export const TextContainer = styled(Stack)(
  ({ recursive = true }) => css`
    /*
    Space child elements recursively according to font-size
    */
    // Stop code blocks and footnotes overflowing
    & > div {
      overflow: scroll;
      max-width: calc(100vw - ${(props) => props.theme.sizes.s3});
    }

    @media (min-width: ${HEADER_SWITCH_SIZE}) {
      & > * {
        margin-right: ${(1 - (1/RATIO)) * 100}%;
      }
    }

    ${recursive
      ? css`
          & * + * {
            margin-top: 1.618em;
          }

          & * + li,
          & * + ul {
            margin-top: calc(1.618em / 4);
          }

          /* Give lists below headings p-like spacing */
          & h1 + ol,
          & h2 + ol,
          & h3 + ol,
          & h4 + ol,
          & h5 + ol,
          & h6 + ol,
          & h1 + ul,
          & h2 + ul,
          & h3 + ul,
          & h4 + ul,
          & h5 + ul,
          & h6 + ul {
            margin-top: 1.618em;
          }

          & blockquote p + footer {
            margin-top: calc(1.618em / 2);
          }
        `
      : // Copy and paste the above but add child selector
        css`
          & > * + * {
            margin-top: 1.618em;
          }

          & * + li,
          & * + ul {
            margin-top: calc(1.618em / 4);
          }

          & > h1 + ol,
          & > h2 + ol,
          & > h3 + ol,
          & > h4 + ol,
          & > h5 + ol,
          & > h6 + ol,
          & > h1 + ul,
          & > h2 + ul,
          & > h3 + ul,
          & > h4 + ul,
          & > h5 + ul,
          & > h6 + ul {
            margin-top: 1.618em;
          }
        `}

    // The CSS classes selected below are auto-generated by Gatsby,
    // hence a lack of more specific styling via styled-components

    // Stop code blocks and images from overflowing
    .gatsby-highlight,
    .gatsby-resp-image-link,
    .no-overflow {
      overflow: scroll;
      // Set max-width to viewport width, minus the width of the TextColumn
      // spacer divs specified above in grid-template-columns
      // prettier-ignore
      max-width: calc(100vw - ${({ theme }) =>
        `${theme.sizes.s2} - ${theme.sizes.s2}`});
    }
  `
)