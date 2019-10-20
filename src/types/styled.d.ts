// import original module declarations
import 'styled-components'
import theme from '../utils/theme'

// extend the module declarations using custom theme type
type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
