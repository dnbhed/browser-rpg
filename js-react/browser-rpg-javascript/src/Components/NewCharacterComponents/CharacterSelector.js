import React from 'react'

const CharacterSelector = ({characters, currentPlayer, changeCharacter}) => {

    const playerCharacterList = characters.filter((character => currentPlayer.id === character.player_id));

    const characterList = playerCharacterList.map((character, index) => {
        return <option key={index} value={character.id} >
           {character.name}
         </option>
     })
 
     return (
        <select id="character-select" defaultValue="default" onChange={changeCharacter}>
          <option disabled value="default">
          Select character
          </option>
          {characterList}
        </select> 
     )

}

export default CharacterSelector