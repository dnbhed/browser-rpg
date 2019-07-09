import React from 'react'
import joe from '../../sprites/joe.gif'
import alison from '../../sprites/alison.gif'
import kenny from '../../sprites/kenny.gif'
import alex from '../../sprites/alex.gif'


const PlayerBattleSprite = (props) => {

    const spriteId = props.currentCharacter.spriteID
    console.log(spriteId)
    let sprite = joe;


    function chosenSprite(){
        if (spriteId == 1) {
            sprite = joe
        } else if (spriteId == 2) {
            sprite = alison
        } else if (spriteId == 3) {
            sprite = kenny
        } else if (spriteId == 4) {
            sprite = alex
        }
        return sprite;
    }
    

    return(
        <div id="player-sprite">
            <h2>{props.currentCharacter.name}</h2>
            <img src={chosenSprite()} height="200px" />
            <h2>HP: {props.currentCharacter.currentHP}</h2>
        </div>
    )
}

export default PlayerBattleSprite;