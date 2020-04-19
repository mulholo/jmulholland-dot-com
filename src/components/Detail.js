import styled, { css } from 'styled-components'

const Detail = styled.span(
  ({ theme }) => css`
    font-family: ${theme.fonts[1]};
  `
)

export default Detail
