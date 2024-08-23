import {ListItem, ChoiceImg, ChoiceButton} from './StyledComponent'

const AddChoiceItem = props => {
  const {detail, onClickOption} = props
  const {imageUrl, id} = detail
  const onChoice = () => {
    onClickOption(id)
  }
  console.log(`${id.toLowerCase()}Button`)
  return (
    <ListItem>
      <button
        type="button"
        data-testid={`${id.toLowerCase()}Button`}
        onClick={onChoice}
      >
        <ChoiceImg src={imageUrl} alt={`${id}`} />
      </button>
    </ListItem>
  )
}

export default AddChoiceItem
