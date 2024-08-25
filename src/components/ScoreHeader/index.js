import {
  ScoreHeaderContainer,
  ScoreTitle,
  ScoreBox,
  ScoreText,
  ScoreNumber,
} from './styledComponents'

const ScoreHeader = props => {
  const {score} = props

  return (
    <ScoreHeaderContainer>
      <ScoreTitle>
        ROCK <br />
        PAPER <br />
        SCISSORS <br />
      </ScoreTitle>
      <ScoreBox>
        <ScoreText>Score</ScoreText>
        <ScoreNumber>{score}</ScoreNumber>
      </ScoreBox>
    </ScoreHeaderContainer>
  )
}

export default ScoreHeader
