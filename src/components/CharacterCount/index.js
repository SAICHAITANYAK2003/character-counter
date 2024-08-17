import {Component} from 'react'

import {v4 as uuidV4} from 'uuid'
import {
  CharacterCountContainer,
  CharacterCounterContainer,
  CharacterCounterHeader,
  HeaderContent,
  CharacterEnterContainer,
  EnterHeaderContent,
  FormContainer,
  CharacterInput,
  AddButton,
  CharacterListContainer,
  NoUserInputContainer,
  NoInputImage,
} from './styledComponents'

import CharacterItem from '../CharacterItem'

class CharacterCount extends Component {
  state = {
    inputValue: '',
    characterList: [],
  }

  changeInputValue = event => {
    this.setState({
      inputValue: event.target.value,
    })
  }
  onAddCharacter = event => {
    event.preventDefault()
    const {inputValue} = this.state
    const newCharacter = {
      id: uuidV4(),
      inputValue,
    }
    this.setState(prevState => ({
      characterList: [...prevState.characterList, newCharacter],
      inputValue: '',
    }))
  }

  renderCharacterList = () => {
    const {characterList} = this.state
    return (
      <CharacterListContainer>
        {characterList.map(eachCharacter => (
          <CharacterItem
            characterDetails={eachCharacter}
            key={eachCharacter.id}
          />
        ))}
      </CharacterListContainer>
    )
  }

  renderNoInput = () => (
    <NoUserInputContainer>
      <NoInputImage
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    </NoUserInputContainer>
  )

  render() {
    const {inputValue, characterList} = this.state

    const characterListLength = characterList.length > 0

    return (
      <CharacterCountContainer>
        <CharacterCounterContainer>
          <CharacterCounterHeader>
            <HeaderContent>
              Count the characters like a <br />
              Boss...
            </HeaderContent>
          </CharacterCounterHeader>
          {characterListLength
            ? this.renderCharacterList()
            : this.renderNoInput()}
        </CharacterCounterContainer>
        <CharacterEnterContainer>
          <EnterHeaderContent>Character Counter</EnterHeaderContent>
          <FormContainer onSubmit={this.onAddCharacter}>
            <CharacterInput
              type="text"
              placeholder="Enter the Characters here"
              value={inputValue}
              onChange={this.changeInputValue}
            />
            <AddButton type="submit">Add</AddButton>
          </FormContainer>
        </CharacterEnterContainer>
      </CharacterCountContainer>
    )
  }
}

export default CharacterCount
