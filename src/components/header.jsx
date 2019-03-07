import React from 'react'
import styled from 'styled-components'

const Header = () => (
  <StyledHeader>
    <SiteName>James Mulholland</SiteName>
  </StyledHeader>
)

const SiteName = styled.h4`
  display: inline;
  color: ${props => props.theme.B500};
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0;
  margin-bottom: 2rem;
  border-bottom: 2px solid #dd9801;
`

export default Header
