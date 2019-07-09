import React, {Fragment} from 'react'
import PlayerBattleSprite from '../Components/BattleComponents/PlayerBattleSprite'
import EnemyBattleSprite from '../Components/BattleComponents/EnemyBattleSprite'

import {Redirect} from 'react-router-dom'

import './BattleContainer.css'

const BattleContainer = ({currentPlayer, currentCharacter, currentEnemy, playerAttacksEnemy}) => {
    
    if (currentEnemy.alive === false) {
        return (
            <Redirect to="/endgame" />
        )
    }


    if (!currentPlayer.id || !currentCharacter.maxHP) {
        return (
            <Redirect to="/" />
        )
    }
    
        return(
            <Fragment>
                <div id="battle-container">
                    <h1>FIGHT!</h1>
                    <PlayerBattleSprite hp={currentCharacter}/>
                    <EnemyBattleSprite hp={currentEnemy}/>
                    <button id="attack" onClick={playerAttacksEnemy}>Attack!</button>
                    <button id="defend">Defend!</button>

                </div>
                
            </Fragment>
        )

}

export default BattleContainer