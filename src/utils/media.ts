import { css } from './styled-components'
import { ThemedCssFunction } from 'styled-components'

interface Sizes {
  desktopLarge: number // macbook pro 15"
  desktop: number // 13" macbook air
  tabletLarge: number // iPad pro
  tablet: number // ipad
  mobile: number // just larger than 7Plus
}

const sizes: Sizes = {
  desktopLarge: 2560, // macbook pro 15"
  desktop: 1440, // 13" macbook air
  tabletLarge: 1024, // iPad pro
  tablet: 800, // ipad is 768
  mobile: 450, // just larger than 7Plus
}

type Media = { [P in keyof Sizes]: ThemedCssFunction<any> }

/**
 * Produces media queries to be used in styled-components
 *
 * e.g.:
 *
 * const ResponsiveDiv = styled.div`
 *   color: #000;
 *   ${media.mobile`flex-wrap: wrap;`}
 * `;
 *
 */
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) =>
    css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${
          // @ts-ignore
          args.length >= 1 && css(...args)
        }
        }
      }
    `
  return acc
}, {}) as Media

export default media
