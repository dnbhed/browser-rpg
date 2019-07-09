import React, {Fragment, useState} from 'react'
import PlayerBattleSprite from '../Components/BattleComponents/PlayerBattleSprite'
import EnemyBattleSprite from '../Components/BattleComponents/EnemyBattleSprite'

import {Redirect} from 'react-router-dom'

import './BattleContainer.css'

const BattleContainer = ({currentPlayer, currentCharacter, currentEnemy, playerAttacksEnemy, enemyAttacksPlayer, playerDefends}) => {

    const [playerTurn, setPlayerTurn] = useState(true);
    
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

    if(playerTurn === false){
        enemyAttacksPlayer()
        
        setPlayerTurn(true)

    }

    function attack(){
        playerAttacksEnemy()
        setPlayerTurn(false)

    }

    function defend(){
        playerDefends()
        setPlayerTurn(false)
    }
    
        return(
            <Fragment>
                <div id="battle-container">
                    <h1>FIGHT!</h1>
                    <PlayerBattleSprite currentCharacter={currentCharacter}/>
                    <EnemyBattleSprite hp={currentEnemy}/>
                    <button id="attack" onClick={attack}>Attack!</button>
                    <button id="defend" onClick={defend}>Defend!</button>

                </div>
                
            </Fragment>
        )

}

export default BattleContainer