import React, {Fragment} from 'react'
import finalboss from '../../sprites/final-boss.gif'



const EnemyBattleSprite = () => {
    return (
        <Fragment>
            <h3>HP: 100</h3>
            <img src={finalboss} height="200px" />
        </Fragment>
    )
}

export default EnemyBattleSprite;