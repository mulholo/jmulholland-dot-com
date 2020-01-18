import styled from 'styled-components'

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  /* div is BlogCard */
  && > div {
    margin-bottom: ${({ theme }) => theme.s4};
  }
`

export default CardsContainer
