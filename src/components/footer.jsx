import React from 'react'
import styled from 'styled-components'

export default () => (
  <StyledFooter>
    <StyledSpan>Content © 2018 James Mulholland</StyledSpan>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  border-top: 1px solid #bababa;
  padding-top: 1rem;
  margin-top: 2rem;
`

const StyledSpan = styled.span`
  color: #bababa;
`
