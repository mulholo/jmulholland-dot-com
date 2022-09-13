import { RATIO } from './constants'

const genSize = (n) =>
  n === 0
    ? 1 // rem
    : n === Math.abs(n)
    ? genSize(n - 1) * RATIO
    : genSize(n + 1) / RATIO

const genSizeUnit = (unit) => (n) => genSize(n).toString() + unit
const genRemSize = genSizeUnit('rem')

const genFontSize = (n) => `calc(${genRemSize(n)} + 0.05vw)` // slight dynamic font-sizing

export const theme = {
  // 100 is darkest
  // 500 is default
  // 900 is lightest
  colors: {
    // red (primary)
    r100: "#FD726D",
    r200: "#F15A55",
    r300: "#EC4946",
    r400: "#E32E2B",
    r500: "#D11815",
    r600: "#AF0B08",
    r700: "#9E0000",

    // neutral
    n100: '#1D1816',
    n200: '#343332',
    n300: '#514E4D',
    n400: '#6B6866',
    n500: '#8D8986',
    n600: '#B8B4B2',
    n700: '#D5D0CD',
    n800: '#EFECEC',
    n900: '#FCFAFA',
  },
  sizes: {
    0: '0px',
    's-4': genRemSize(-4),
    's-3': genRemSize(-3),
    's-2': genRemSize(-2),
    's-1': genRemSize(-1),
    s0: genRemSize(0),
    s1: genRemSize(1),
    s2: genRemSize(2),
    s3: genRemSize(3),
    s4: genRemSize(4),
    s5: genRemSize(5),
    s6: genRemSize(6),
    s7: genRemSize(7),
    s8: genRemSize(8),
    s9: genRemSize(9),
    s10: genRemSize(10),
  },
  fontSizes: {
    's-2': genFontSize(-2),
    's-1': genFontSize(-1),
    s0: genFontSize(0),
    s1: genFontSize(1),
    s2: genFontSize(2),
    s3: genFontSize(3),
    s4: genFontSize(4),
  },
  fontWeights: {
    regular: 400,
    semiBold: 500,
  },
  fonts: {
    serif: 'Charter, Georgia, serif',
    sans: "'Inter', Helvetica, sans-serif",
    mono: 'Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace', // system mono; see code.css for other setting of mono
  },
}
