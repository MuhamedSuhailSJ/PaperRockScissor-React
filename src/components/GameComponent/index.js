import {Component} from 'react'
import ScoreHeader from '../ScoreCardComponent'
import AddChoiceItem from '../ChoiceItemComponent'
import RuleCard from '../RuleCardComponent'
import {ChoiceContainer} from './StyledComponent'

export default class Game extends Component {
  state = {
    choiceListItem: [],
    score: 0,
    useresult: undefined,
    showResult: false,
    opponentChoice: 0,
    userChoice: {},
  }

  componentDidMount() {
    this.getRandomItem()
    const {choicesList} = this.props
    this.setState({choiceListItem: choicesList})
  }

  getRandomItem = () => {
    const {choiceListItem} = this.state
    const num = Math.floor(Math.random() * choiceListItem.length)
    this.setState({opponentChoice: num})
  }

  onClickOption = id => {
    const {choiceListItem, opponentChoice, score} = this.state
    const choosedList = choiceListItem.filter(eachItem => eachItem.id === id)
    const userItem = choosedList[0].id
    const opponentItem = choiceListItem[opponentChoice].id
    let userscore = 0
    let useresult
    if (userItem === 'PAPER') {
      if (opponentItem === 'ROCK') {
        userscore += 1
        useresult = 'YOU WON'
      } else if (opponentItem === 'SCISSORS') {
        userscore -= 1
        useresult = 'YOU LOSE'
      } else {
        useresult = 'IT IS DRAW'
      }
    } else if (userItem === 'ROCK') {
      if (opponentItem === 'PAPER') {
        userscore -= 1
        useresult = 'YOU LOSE'
      } else if (opponentItem === 'SCISSORS') {
        userscore += 1
        useresult = 'YOU WON'
      } else {
        useresult = 'IT IS DRAW'
      }
    } else if (userItem === 'SCISSORS') {
      if (opponentItem === 'PAPER') {
        userscore += 1
        useresult = 'YOU WON'
      } else if (opponentItem === 'ROCK') {
        userscore -= 1
        useresult = 'YOU LOSE'
      } else {
        useresult = 'IT IS DRAW'
      }
    }
    this.setState({
      userChoice: choosedList,
      showResult: true,
      useresult,
      score: score + userscore,
    })
  }

  playagain = () => {
    this.setState({showResult: false}, this.getRandomItem())
  }

  render() {
    const {
      score,
      choiceListItem,
      opponentChoice,
      userChoice,
      showResult,
      useresult,
    } = this.state
    const showChoiceContainer = () => (
      <ChoiceContainer>
        {choiceListItem.map(eachItem => (
          <AddChoiceItem
            detail={eachItem}
            onClickOption={this.onClickOption}
            key={eachItem.id}
          />
        ))}
      </ChoiceContainer>
    )

    const showResultContainer = () => (
      <div>
        <div>
          <div>
            <p>YOU</p>
            <img src={userChoice[0].imageUrl} alt="your choice" />
          </div>
          <div>
            <p>OPPONENT</p>
            <img
              src={choiceListItem[opponentChoice].imageUrl}
              alt="opponent choice"
            />
          </div>
        </div>
        <p>{useresult}</p>
        <button type="button" onClick={this.playagain}>
          Play again
        </button>
      </div>
    )

    return (
      <>
        <ScoreHeader score={score} />
        {showResult ? showResultContainer() : showChoiceContainer()}
        <RuleCard />
      </>
    )
  }
}
