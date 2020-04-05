import styled from 'styled-components'

const Input = styled.input`
  color: ${props => props.theme.n100};
  background: ${props => props.theme.n900};
  border-radius: ${props => props.theme.border};
  box-shadow: ${props => props.theme.shadow1};
  border: none;
  font-size: ${props => props.theme.tMedium};
  padding: ${props => props.theme.s1} ${props => props.theme.s3};
`

export default Input
