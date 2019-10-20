import * as React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

/* Styles ---------------------------------------------- */

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: ${props => props.theme.regular};

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    font-weight: ${props => props.theme.regular};
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
    font-weight: ${props => props.theme.regular};
    text-decoration: none;
  }
`

const StyledButton = styled.button`
  border: none;
  background: none;
  text-align: left;
  padding: 0;
`

const CardStyles = styled.div<{
  animate: boolean
  fullWidth: boolean
}>`
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
    css`
      &&:hover {
        box-shadow: ${props => props.theme.shadow4};
        transform: translateY(-3px);
      }
    `}

  ${props => props.fullWidth && `max-width: 100%;`}
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
  trimLength?: number // 0 for no trimming
  onClick?: () => void
  link?: string
  externalLink?: string
  fullWidth?: boolean
}

const Card = ({
  title,
  content,
  detail,
  trimLength = 135,
  onClick,
  link,
  externalLink,
  fullWidth,
}: CardPropTypes): React.ReactElement => {
  const shouldAnimate =
    typeof onClick !== 'undefined' ||
    typeof link !== 'undefined' ||
    typeof externalLink !== 'undefined'

  const cardBody = (
    <CardStyles
      fullWidth={fullWidth || false}
      animate={shouldAnimate}
    >
      {title && <h4>{title}</h4>}
      {content && typeof content === 'string' ? (
        <p>
          {trimLength === 0 ? content : trim(trimLength)(content)}
        </p>
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
