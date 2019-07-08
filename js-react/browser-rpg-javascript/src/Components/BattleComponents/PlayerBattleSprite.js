import React, {Fragment} from 'react'
import joe from '../../sprites/joe.gif'


const PlayerBattleSprite = (props) => {
    console.log(props)

    return(
        <div id="player-sprite">
            <h2>Player 1</h2>
            <img src={joe} height="200px" />
            <h2>HP: {props.hp.currentHP}</h2>
        </div>
    )
}

export default PlayerBattleSprite;