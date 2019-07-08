import React, {Fragment} from 'react'
import joe from '../../sprites/joe.gif'


const PlayerBattleSprite = () => {
    return(
        <div id="player-sprite">
            <h2>Player 1</h2>
            <img src={joe} height="200px" />
            <h3>HP: 100</h3>
        </div>
    )
}

export default PlayerBattleSprite;