import styled, { css } from 'styled-components'

const Detail = styled.span(
  ({ theme }) => css`
    font-family: ${theme.fonts[1]};
    font-size: ${theme.fontSizes[2]};
    color: ${theme.colors.n400};
  `
)

export default Detail
