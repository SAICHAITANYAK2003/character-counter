import {CharacterLiItem, CharacterValue} from './styledComponents'

const CharacterItem = props => {
  const {characterDetails} = props
  const {inputValue} = characterDetails
  return (
    <CharacterLiItem>
      <CharacterValue>
        {inputValue} : {inputValue.length}
      </CharacterValue>
    </CharacterLiItem>
  )
}
export default CharacterItem
