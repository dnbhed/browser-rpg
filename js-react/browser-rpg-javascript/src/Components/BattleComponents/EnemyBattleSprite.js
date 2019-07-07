import React, {Fragment} from 'react'
import finalboss from '../../sprites/final-boss.gif'



const EnemyBattleSprite = () => {
    return (
        <div id="enemy-sprite">
            <h2>Mikey the Boss</h2>
            <img src={finalboss} height="200px" />
            <h3>HP: 100</h3>
        </div>
            
    )
}

export default EnemyBattleSprite;