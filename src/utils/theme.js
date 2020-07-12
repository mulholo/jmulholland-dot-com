const RATIO = 1.618

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

    // red
    r100: 'hsl(000,98%,23%)',
    r200: 'hsl(008,97%,27%)',
    r300: 'hsl(008,92%,31%)',
    r400: 'hsl(006,80%,38%)',
    r500: 'hsl(008,72%,44%)',
    r600: 'hsl(008,72%,60%)',
    r700: 'hsl(008,91%,70%)',
    r800: 'hsl(008,99%,83%)',
    r900: 'hsl(008,100%,95%)',

    // green
    g100: 'hsl(123,98%,9%)',
    g200: 'hsl(115,98%,13%)',
    g300: 'hsl(110,97%,20%)',
    g400: 'hsl(109,95%,23%)',
    g500: 'hsl(106,70%,30%)',
    g600: 'hsl(108,63%,36%)',
    g700: 'hsl(116,40%,53%)',
    g800: 'hsl(111,53%,74%)',
    g900: 'hsl(99,95%,94%)',

    // yellow
    y100: 'hsl(046,99%,28%)',
    y200: 'hsl(048,98%,34%)',
    y300: 'hsl(049,96%,42%)',
    y400: 'hsl(049,89%,47%)',
    y500: 'hsl(048,85%,54%)',
    y600: 'hsl(045,90%,65%)',
    y700: 'hsl(042,92%,69%)',
    y800: 'hsl(043,93%,72%)',
    y900: 'hsl(042,100%,92%)',
  },
  sizes: {
    's-4': genRemSize(-4),
    's-3': genRemSize(-3),
    's-2': genRemSize(-2),
    's-1': genRemSize(-1),
    s0: genRemSize(0),
    s1: genRemSize(1),
    s2: genRemSize(2),
    s3: genRemSize(3),
    s4: genRemSize(4),
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
    // One day, I shall have Univers Next
    sans: "'Inter var', Helvetica, sans-serif",
    mono: "'Source Code Pro', Menlo, monospace",
  },
}
