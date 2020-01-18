import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

/* Styles ---------------------------------------------- */

const StyledLink = styled(Link)`
  font-weight: ${props => props.theme.regular};
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
  background: none;
  border: none;
  padding: 0;
  text-align: left;
`

/**
 * @param {bool} animate
 */
const CardStyles = styled.div`
  background: ${props => props.theme.n900};
  border-radius: ${props => props.theme.border};
  box-shadow: ${props => props.theme.shadow2};
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.s4};
  transition: box-shadow 0.2s, transform 0.2s;
  width: 100%;

  ${props =>
    props.animate &&
    css`
      &&:hover {
        box-shadow: ${props => props.theme.shadow3};
        transform: translateY(-2px);
      }
    `}
`

/* Main Component -------------------------------------- */

const Card = ({ onClick, link, externalLink, children }) => {
  const shouldAnimate =
    typeof onClick !== 'undefined' ||
    typeof link !== 'undefined' ||
    typeof externalLink !== 'undefined'

  return (
    <CardStyles animate={shouldAnimate}>
      {link ? (
        <StyledLink to={link}>{children}</StyledLink>
      ) : externalLink ? (
        <StyledA href={externalLink}>{children}</StyledA>
      ) : onClick ? (
        <StyledButton onClick={onClick}>{children}</StyledButton>
      ) : (
        children
      )}
    </CardStyles>
  )
}

export default Card
