import styled from 'styled-components'

const Button = styled.button`
  color: ${props => props.theme.n900};
  background: ${props => props.theme.b500};
  border-radius: ${props => props.theme.border};
  border: none;
  font-weight: ${props => props.theme.bold};
  box-shadow: ${props => props.theme.shadow1};
  font-size: ${props => props.theme.tMedium};
  padding: ${props => props.theme.s1} ${props => props.theme.s3};
`

export default Button
