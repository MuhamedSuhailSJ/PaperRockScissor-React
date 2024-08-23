import {Container, HeaderContainer, ScoreContainer,Scorenumber} from './StyledComponent'

const ScoreHeader = props => {
  const {score} = props
  return (
    <Container>
      <HeaderContainer>
        <h1>ROCK PAPER SCISSORS</h1>
      </HeaderContainer>
      <ScoreContainer>
        <Scorenumber>Score</Scorenumber>
        <p>{score}</p>
      </ScoreContainer>
    </Container>
  )
}

export default ScoreHeader
