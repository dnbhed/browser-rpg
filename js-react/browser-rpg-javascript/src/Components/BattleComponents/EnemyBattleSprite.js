import React, {Fragment} from 'react'
import finalboss from '../../sprites/final-boss.gif'



const EnemyBattleSprite = (props) => {
    return (
        <div id="enemy-sprite">
            <h2>Mikey the Boss</h2>
            <img src={finalboss} height="200px" />
            <h2>HP: {props.hp.currentHP}</h2>
        </div>
            
    )
}

export default EnemyBattleSprite;