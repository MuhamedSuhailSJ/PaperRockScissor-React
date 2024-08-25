import {Component} from 'react'

import ScoreHeader from '../ScoreHeader'

import PlayingView from '../PlayingView'

import {
  RockPaperScissorsBg,
  RockPaperScissorsUl,
  ImageChoice,
  RulesButton,
  PopupContainer,
  RulesImage,
  IconCross,
  GameResultView,
  GameChoiceView,
  ChoiceView,
  ChoiceTitle,
  GameResult,
  PlayAgainButton,
  PopupOverLay,
} from './styledComponents'

const gameResultCases = {
  rock: 'ROCK',
  paper: 'PAPER',
  scissors: 'SCISSORS',
}

class RockPaperScissors extends Component {
  state = {
    score: 0,
    gameResult: false,
    selectedId: '',
    opponentChoice: {},
    popup: false,
  }

  selectedChoice = id => {
    const {choicesList} = this.props
    const randomChoice = Math.floor(Math.random() * 3)
    const opponentChoice = choicesList[randomChoice]
    this.setState({opponentChoice})

    if (id === 'ROCK') {
      if (opponentChoice.id === 'SCISSORS') {
        this.setState(prev => ({
          gameResult: true,
          score: prev.score + 1,
          selectedId: id,
        }))
      } else if (opponentChoice.id === 'PAPER') {
        this.setState(prev => ({
          gameResult: true,
          score: prev.score - 1,
          selectedId: id,
        }))
      } else {
        this.setState({gameResult: true, selectedId: id})
      }
    } else if (id === 'PAPER') {
      if (opponentChoice.id === 'SCISSORS') {
        this.setState(prev => ({
          gameResult: true,
          score: prev.score - 1,
          selectedId: id,
        }))
      } else if (opponentChoice.id === 'ROCK') {
        this.setState(prev => ({
          gameResult: true,
          score: prev.score + 1,
          selectedId: id,
        }))
      } else {
        this.setState({gameResult: true, selectedId: id})
      }
    } else if (id === 'SCISSORS') {
      if (opponentChoice.id === 'ROCK') {
        this.setState(prev => ({
          gameResult: true,
          score: prev.score - 1,
          selectedId: id,
        }))
      } else if (opponentChoice.id === 'PAPER') {
        this.setState(prev => ({
          gameResult: true,
          score: prev.score + 1,
          selectedId: id,
        }))
      } else {
        this.setState({gameResult: true, selectedId: id})
      }
    }
  }

  playAgain = () => {
    this.setState({gameResult: false})
  }

  rulesClick = () => {
    this.setState({popup: true})
  }

  switchRender = () => {
    const {selectedId, opponentChoice} = this.state

    switch (selectedId) {
      case gameResultCases.rock:
        if (opponentChoice.id === 'SCISSORS') {
          return <GameResult> YOU WON </GameResult>
        }
        if (opponentChoice.id === 'PAPER') {
          return <GameResult> YOU LOSE </GameResult>
        }
        return <GameResult> IT IS DRAW </GameResult>

      case gameResultCases.paper:
        if (opponentChoice.id === 'SCISSORS') {
          return <GameResult> YOU LOSE </GameResult>
        }
        if (opponentChoice.id === 'ROCK') {
          return <GameResult> YOU WON </GameResult>
        }
        return <GameResult>IT IS DRAW </GameResult>
      case gameResultCases.scissors:
        if (opponentChoice.id === 'ROCK') {
          return <GameResult> YOU LOSE </GameResult>
        }
        if (opponentChoice.id === 'PAPER') {
          return <GameResult> YOU WON </GameResult>
        }
        return <GameResult>IT IS DRAW </GameResult>
      default:
        return null
    }
  }

  render() {
    const {score, gameResult, selectedId, opponentChoice, popup} = this.state
    const {choicesList} = this.props

    const yourChoice = choicesList.find(
      eachChoice => eachChoice.id === selectedId,
    )

    console.log(popup)

    return (
      <RockPaperScissorsBg popup={popup}>
        <ScoreHeader score={score} />
        {gameResult ? (
          <GameResultView>
            <GameChoiceView>
              <ChoiceView>
                <ChoiceTitle>You</ChoiceTitle>
                <ImageChoice src={yourChoice.imageUrl} alt="your choice" />
              </ChoiceView>
              <ChoiceView>
                <ChoiceTitle>Opponent</ChoiceTitle>
                <ImageChoice
                  src={opponentChoice.imageUrl}
                  alt="opponent choice"
                />
              </ChoiceView>
            </GameChoiceView>
            {this.switchRender()}
            <PlayAgainButton onClick={this.playAgain}>
              PLAY AGAIN
            </PlayAgainButton>
          </GameResultView>
        ) : (
          <RockPaperScissorsUl>
            {choicesList.map(eachChoice => (
              <PlayingView
                key={eachChoice.id}
                choicesDetails={eachChoice}
                selectedChoice={this.selectedChoice}
              />
            ))}
          </RockPaperScissorsUl>
        )}

        <PopupOverLay
          modal
          trigger={<RulesButton onClick={this.rulesClick}>Rules</RulesButton>}
          closeOnDocumentClick
        >
          {close => (
            <PopupContainer>
              <IconCross onClick={close} />
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopupContainer>
          )}
        </PopupOverLay>
      </RockPaperScissorsBg>
    )
  }
}

export default RockPaperScissors
