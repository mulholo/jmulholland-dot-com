import * as React from 'react'
import styled from '../utils/styled-components'

const Footer = () => (
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

export default Footer
