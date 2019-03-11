import * as React from 'react'
import styled from '../utils/styled-components'
import { Link } from 'gatsby'

/* Styles ---------------------------------------------- */

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

const StyledA = styled.a`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

const StyledButton = styled.button`
  border: none;
  background: none;
  text-align: left;
  padding: 0;
`

const CardStyles = styled('div')<{ animate: boolean }>`
  background: ${props => props.theme.n900};
  box-shadow: ${props => props.theme.shadow3};
  padding: ${props => props.theme.s4};
  border-radius: ${props => props.theme.border};
  max-width: ${props => props.theme.xs};
  display: flex;
  flex-direction: column;

  h4 {
    margin: 0 0 ${props => props.theme.s2} 0;
    line-height: 1.2;
  }

  p {
    line-height: 1.25;
    margin: ${props => props.theme.s2} 0;
  }

  span.detail {
    margin-top: ${props => props.theme.s4};
    font-size: ${props => props.theme.tSmall};
    color: ${props => props.theme.n500};
  }

  a {
    box-shadow: none;
  }

  transition: box-shadow 0.2s, transform 0.2s;

  ${props =>
    props.animate &&
    `&&:hover {
    box-shadow: ${props => props.theme.shadow4};
    transform: translateY(-3px);
  }`}
`

/* Utility --------------------------------------------- */

/** Returns a trimmed version of a string which is below a certain character length */
const trim = (chars = 180) => (s: string): string =>
  s.length < chars ? s : `${s.slice(0, chars)}...`

/* Main Component -------------------------------------- */

interface CardPropTypes {
  title?: string
  content?: string | React.ReactNode
  detail?: string
  shouldTrim?: boolean
  // @ts-ignore
  onClick?: () => any
  link?: string
  externalLink?: string
}

const Card = ({
  title,
  content,
  detail,
  shouldTrim,
  onClick,
  link,
  externalLink,
}: CardPropTypes): React.ReactElement => {
  const shouldAnimate =
    typeof onClick !== 'undefined' ||
    typeof link !== 'undefined' ||
    typeof externalLink !== 'undefined'

  const cardBody = (
    <CardStyles animate={shouldAnimate}>
      {title && <h4>{title}</h4>}
      {content && typeof content === 'string' ? (
        <p>{shouldTrim ? trim(135)(content) : content}</p>
      ) : (
        content
      )}
      {detail && <span className='detail'>{detail}</span>}
    </CardStyles>
  )

  return link ? (
    <StyledLink to={link}>{cardBody}</StyledLink>
  ) : externalLink ? (
    <StyledA href={externalLink}>{cardBody}</StyledA>
  ) : onClick ? (
    <StyledButton onClick={onClick}>{cardBody}</StyledButton>
  ) : (
    cardBody
  )
}

export default Card
