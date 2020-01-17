import styled from 'styled-components'

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;

  && > a {
    margin-bottom: ${props => props.theme.s4};
  }
`

export default CardsContainer
