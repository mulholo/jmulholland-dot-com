import styled, { css } from 'styled-components'
import Stack from './Stack'

/**
 * A stack which spaces text correctly
 */
const TextContainer = styled(Stack)(
  ({ recursive = true }) => css`
    /*
    Space child elements recursively according to font-size
    */
    // Stop code blocks and footnotes overflowing
    & > div {
      overflow: scroll;
      max-width: calc(100vw - ${props => props.theme.sizes.s3});
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
  `
)

export default TextContainer
