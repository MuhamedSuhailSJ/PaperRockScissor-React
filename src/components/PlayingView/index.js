import {
  RockPaperScissorsItem,
  EachButton,
  ImageChoice,
} from './styledComponents'

const PlayingView = props => {
  const {choicesDetails, selectedChoice} = props
  const {imageUrl, id} = choicesDetails
  const testId = `${id.toLowerCase()}Button`

  const myChoice = () => {
    selectedChoice(id)
  }

  return (
    <RockPaperScissorsItem>
      <EachButton onClick={myChoice} data-testid={testId}>
        <ImageChoice src={imageUrl} alt={id} />
      </EachButton>
    </RockPaperScissorsItem>
  )
}

export default PlayingView
