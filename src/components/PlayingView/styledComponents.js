import styled from 'styled-components'

export const RockPaperScissorsItem = styled.li`
  margin: 10px;
`

export const EachButton = styled.button`
  background-color: transparent;
  border-width: 0px;
`

export const ImageChoice = styled.img`
  max-width: 150px;
  max-height: 150px;
  @media screen and (min-width: 768px) {
    width: 180px;
    height: 180px;
  }
  @media screen and (min-width: 992px) {
    width: 180px;
    height: 180px;
  }
`
