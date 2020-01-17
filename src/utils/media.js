import { css } from 'styled-components'

const sizes = {
  desktopLarge: 2560, // macbook pro 15"
  desktop: 1440, // 13" macbook air
  tabletLarge: 1024, // iPad pro
  tablet: 800, // ipad is 768
  mobile: 450, // just larger than 7Plus
}

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
      @media (min-width: ${sizes[label] / 16}em) {
        ${args.length >= 1 && css(...args)}
        }
      }
    `
  return acc
}, {})

export default media
