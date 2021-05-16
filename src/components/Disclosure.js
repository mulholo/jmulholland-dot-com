import React, { useState } from 'react'
import styled from 'styled-components'

export const Disclosure = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false)
  const Title = title

  return (
    <>
      <button
        aria-label='open/close'
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        css={`
          background: none;
          cursor: pointer;
          border: none;
          text-align: left;
          padding: 0;
          position: relative;
        `}
      >
        <Title
          icon={<DisclosureIcon isOpen={isOpen}>▼</DisclosureIcon>}
        />
      </button>
      {isOpen && children}
    </>
  )
}

const DisclosureIcon = styled.span`
  color: ${({ theme }) => theme.colors.b400};
  transform: rotate(${({ isOpen }) => (isOpen ? '0deg' : '-90deg')});
  display: inline-block;
  transition: transform 0.1s ease-in-out;
  margin: 0;
`
