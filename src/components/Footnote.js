import React from 'react'
import styled from 'styled-components'
import { RATIO, HEADER_SWITCH_SIZE } from '../utils'

const FootnoteContext = React.createContext()

const FootnoteContainer = styled.aside`
  position: relative;
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.sizes.s0};
  }
`

const N = styled.span`
  position: absolute;
  left: -${({ theme }) => theme.sizes.s0};
  top: 0;
  color: ${({ theme }) => theme.colors.b400};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`

const FootnoteNContainer = styled.sup`
  color: ${({ theme }) => theme.colors.b400};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${({ theme }) => theme.fontSizes['s-1']};
`

const FootnoteNButton = styled.button`
  // reset
  background: none;
  border: none;
  text-align: left;
  margin: 0;

  &:active,
  &:focus {
    outline: none;
  }
`

export function FootnoteN({ children, className }) {
  const { toggleIsOpen } = React.useContext(FootnoteContext)

  return (
    <FootnoteNButton onClick={toggleIsOpen} className={className}>
      <FootnoteNContainer>{children}</FootnoteNContainer>
    </FootnoteNButton>
  )
}

export const Footnote = ({ children, n, className }) => {
  return (
    <FootnoteContainer className={className}>
      {n && <N>{n}</N>}
      {children}
    </FootnoteContainer>
  )
}

const FootnoteStackContainer = styled.button`
  &&& {
    // reset
    background: none;
    border: none;
    outline: none;
    text-align: left;

    cursor: pointer;

    margin: 0 0 0 ${({ theme }) => theme.sizes.s1};
    position: absolute;
    top: 5px;

    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: ${({ theme }) => theme.fontSizes['s-1']};
    line-height: ${RATIO};
    color: ${({ theme }) => theme.colors.n400};

    left: calc(100% + ${({ theme }) => theme.sizes.s0});
    right: -20rem;

    @media (min-width: ${HEADER_SWITCH_SIZE}) {
      left: ${(1 / RATIO) * 100}%;
      right: 0;
      cursor: inherit;
    }
  }
`

export function FootnoteStack({ children, className }) {
  const { toggleIsOpen } = React.useContext(FootnoteContext)

  return (
    <FootnoteStackContainer
      className={className}
      onClick={toggleIsOpen}
    >
      {children}
    </FootnoteStackContainer>
  )
}

const FootnoteParagraphWrapperContainer = styled.div`
  && {
    position: relative;
    overflow-y: initial;
    overflow-x: initial;

    transform: translateX(
      ${({ $isOpen, theme }) => ($isOpen ? `calc(-100% - ${theme.sizes.s1})` : `0`)}
    );
    transition: 0.25s transform ease-in-out;

    & > *:not(${FootnoteStackContainer}) { 
      margin-right: 0;
    }

    @media (min-width: ${HEADER_SWITCH_SIZE}) {
      width: 100%;
      transform: none;

      & > *:not(${FootnoteStackContainer}) {
        margin-right: ${(1 - 1 / RATIO) * 100}%;
        max-width: 100%;
      }
    }
  }
`

export function FootnoteParagraphWrapper({ children, className }) {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleIsOpen = () => setIsOpen((b) => !b)

  return (
    <FootnoteContext.Provider value={{ isOpen, toggleIsOpen }}>
      <FootnoteParagraphWrapperContainer
        className={className}
        $isOpen={isOpen}
      >
        {children}
      </FootnoteParagraphWrapperContainer>
    </FootnoteContext.Provider>
  )
}
