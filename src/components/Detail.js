import styled, { css } from 'styled-components'

const Detail = styled.span(
  ({ theme }) => css`
    font-family: ${theme.fonts.mono};
    font-size: ${theme.fontSizes.s0};
    color: ${theme.colors.n400};
  `
)

export default Detail
