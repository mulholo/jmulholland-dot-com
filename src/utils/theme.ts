// typecasting with as lets you get literals on autocomplete popup
const theme = {
  /* Colours --------------------------------------------- */

  // 100 is darkest
  // 500 is default
  // 900 is lightest
  // TODO alphas
  // TODO gradients

  // blue (primary)
  b100: 'hsl(221,100%,11%)' as 'hsl(221,100%,11%)',
  b200: 'hsl(212,80%,20%)' as 'hsl(212,80%,20%)',
  b300: 'hsl(207,84%,24%)' as 'hsl(207,84%,24%)',
  b400: 'hsl(208,60%,35%)' as 'hsl(208,60%,35%)',
  b500: 'hsl(206,61%,40%)' as 'hsl(206,61%,40%)',
  b600: 'hsl(205,53%,48%)' as 'hsl(205,53%,48%)',
  b700: 'hsl(205,56%,57%)' as 'hsl(205,56%,57%)',
  b800: 'hsl(206,68%,71%)' as 'hsl(206,68%,71%)',
  b900: 'hsl(208,82%,85%)' as 'hsl(208,82%,85%)',

  // neutral
  n100: 'hsl(200,69%,9%)' as 'hsl(200,69%,9%)',
  n200: 'hsl(200,17%,16%)' as 'hsl(200,17%,16%)',
  n300: 'hsl(203,10%,22%)' as 'hsl(203,10%,22%)',
  n400: 'hsl(206,1%,38%)' as 'hsl(206,1%,38%)',
  n500: 'hsl(208,1%,53%)' as 'hsl(208,1%,53%)',
  n600: 'hsl(203,2%,70%)' as 'hsl(203,2%,70%)',
  n700: 'hsl(191,4%,84%)' as 'hsl(191,4%,84%)',
  n800: 'hsl(201,14%,94%)' as 'hsl(201,14%,94%)',
  n900: 'hsl(207,72%,99%)' as 'hsl(207,72%,99%)',

  // red
  r100: 'hsl(000,98%,23%)' as 'hsl(000,98%,23%)',
  r200: 'hsl(008,97%,27%)' as 'hsl(008,97%,27%)',
  r300: 'hsl(008,92%,31%)' as 'hsl(008,92%,31%)',
  r400: 'hsl(006,80%,38%)' as 'hsl(006,80%,38%)',
  r500: 'hsl(008,72%,44%)' as 'hsl(008,72%,44%)',
  r600: 'hsl(008,72%,60%)' as 'hsl(008,72%,60%)',
  r700: 'hsl(008,91%,70%)' as 'hsl(008,91%,70%)',
  r800: 'hsl(008,99%,83%)' as 'hsl(008,99%,83%)',
  r900: 'hsl(008,100%,95%)' as 'hsl(008,100%,95%)',

  // green
  g100: 'hsl(123,98%,9%)' as 'hsl(123,98%,9%)',
  g200: 'hsl(115,98%,13%)' as 'hsl(115,98%,13%)',
  g300: 'hsl(110,97%,20%)' as 'hsl(110,97%,20%)',
  g400: 'hsl(109,95%,23%)' as 'hsl(109,95%,23%)',
  g500: 'hsl(106,70%,30%)' as 'hsl(106,70%,30%)',
  g600: 'hsl(108,63%,36%)' as 'hsl(108,63%,36%)',
  g700: 'hsl(116,40%,53%)' as 'hsl(116,40%,53%)',
  g800: 'hsl(111,53%,74%)' as 'hsl(111,53%,74%)',
  g900: 'hsl(99,95%,94%)' as 'hsl(99,95%,94%)',

  // yellow
  y100: 'hsl(046,99%,28%)' as 'hsl(046,99%,28%)',
  y200: 'hsl(048,98%,34%)' as 'hsl(048,98%,34%)',
  y300: 'hsl(049,96%,42%)' as 'hsl(049,96%,42%)',
  y400: 'hsl(049,89%,47%)' as 'hsl(049,89%,47%)',
  y500: 'hsl(048,85%,54%)' as 'hsl(048,85%,54%)',
  y600: 'hsl(045,90%,65%)' as 'hsl(045,90%,65%)',
  y700: 'hsl(042,92%,69%)' as 'hsl(042,92%,69%)',
  y800: 'hsl(043,93%,72%)' as 'hsl(043,93%,72%)',
  y900: 'hsl(042,100%,92%)' as 'hsl(042,100%,92%)',

  /* Spacing  -------------------------------------------- */

  // inspired by https://tailwindcss.com/docs/spacing/#app
  s0: '0' as '0',
  s1: '0.25rem' as '0.25rem', // 4px
  s2: '0.5rem' as '0.5rem', // 8px
  s3: '0.75rem' as '0.75rem', // 12px
  s4: '1rem' as '1rem', // 16px
  s5: '1.25rem' as '1.25rem',
  s6: '1.5rem' as '1.5rem',
  s8: '2rem' as '2rem', // 32px
  s10: '2.5rem' as '2.5rem',
  s12: '3rem' as '3rem',
  s16: '4rem' as '4rem', // 64px
  s20: '5rem' as '5rem',
  s24: '6rem' as '6rem',
  s32: '8rem' as '8rem', // 128px
  xs: '20rem' as '20rem',
  sm: '30rem' as '30rem',
  md: '40rem' as '40rem',
  lg: '50rem' as '50rem',
  xl: '60rem' as '60rem', // 720px - container width

  /* Typography ------------------------------------------ */

  // system fonts. One day I shall have Univers Next
  fontStack: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' as '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',

  // size
  tSmaller: '0.75rem' as '0.75rem', // 12px
  tSmall: '0.875rem' as '0.875rem', // 14px
  tMedium: '1rem' as '1rem', // 16px
  tMediumLarge: '1.125rem' as '1.125rem', // 18px
  tLarge: '1.25rem' as '1.25rem', // 20px
  tLarger: '1.5rem' as '1.5rem', // 24px
  tLargerStill: '1.875rem' as '1.875rem', // 30px
  tLargest: '2.25rem' as '2.25rem', // 36px
  tDisplaySmall: '3rem' as '3rem', // 48px
  tDisplay: '3rem' as '3rem', // 48px
  tDisplayLarge: '3.75rem' as '3.75rem', // 60px

  // weight
  regular: '400' as '400',
  semiBold: '600' as '600',
  bold: '700' as '700',
}

export default theme
