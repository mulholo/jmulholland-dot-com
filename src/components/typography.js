import styled from 'styled-components'
import { color, layout, typography, compose } from 'styled-system'

const baseHeadingConfig = [
  { margin: 0 },
  compose(typography, color, layout),
]

const baseHeadingProps = {
  color: 'n200',
}

const H1 = styled.h1(...baseHeadingConfig)
H1.defaultProps = { ...baseHeadingProps, lineHeight: 1 }

const H2 = styled.h1(...baseHeadingConfig)
H2.defaultProps = { ...baseHeadingProps, lineHeight: 1 }

const H3 = styled.h1(...baseHeadingConfig)
H3.defaultProps = { ...baseHeadingProps, lineHeight: 1 }

const H4 = styled.h4(...baseHeadingConfig)
H4.defaultProps = { ...baseHeadingProps, lineHeight: 1 }

const Detail = styled.span(typography)
Detail.defaultProps = {
  fontFamily: 1,
  margin: 0,
}

export { H1, H2, H3, H4, Detail }
