export const RATIO = 1.618

const genSize = (n) =>
  n === 0
    ? 1 // rem
    : n === Math.abs(n)
    ? genSize(n - 1) * RATIO
    : genSize(n + 1) / RATIO

const genSizeUnit = (unit) => (n) => genSize(n).toString() + unit
const genRemSize = genSizeUnit('rem')

const genFontSize = (n) => `calc(${genRemSize(n)} + 0.05vw)` // slight dynamic font-sizing

export default {
  // 100 is darkest
  // 500 is default
  // 900 is lightest
  colors: {
    // blue (primary)
    b100: 'hsl(221,100%,11%)',
    b200: 'hsl(212,80%,20%)',
    b300: 'hsl(207,84%,24%)',
    b400: 'hsl(208,60%,35%)',
    b500: 'hsl(206,61%,40%)',
    b600: 'hsl(205,53%,48%)',
    b700: 'hsl(205,56%,57%)',
    b800: 'hsl(206,68%,71%)',
    b900: 'hsl(208,82%,85%)',

    // neutral
    n100: 'hsl(200,69%,9%)',
    n200: 'hsl(200,17%,16%)',
    n300: 'hsl(203,10%,22%)',
    n400: 'hsl(206,1%,38%)',
    n500: 'hsl(208,1%,53%)',
    n600: 'hsl(203,2%,70%)',
    n700: 'hsl(191,4%,84%)',
    n800: 'hsl(201,14%,94%)',
    n900: 'hsl(207,72%,99%)',
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
  fonts: {
    serif: "Charter, Georgia, serif",
    sans: "'Inter', Helvetica, sans-serif",
    mono: "Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace", // system mono; see code.css for other setting of mono
  },
}
