import * as SC from 'styled-components'
import theme from './theme'

type Theme = typeof theme

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = SC as SC.ThemedStyledComponentsModule<Theme>

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled
