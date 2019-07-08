import React, {Component, Fragment} from 'react'
import PlayerBattleSprite from '../Components/BattleComponents/PlayerBattleSprite'
import EnemyBattleSprite from '../Components/BattleComponents/EnemyBattleSprite'
import ActionOptionsParent from '../Components/BattleComponents/ActionOptionsParent'
import './BattleContainer.css'

const BattleContainer = (props) => {
    
    console.log("battle props", props)
    
        return(
            <Fragment>
                <div id="battle-container">
                    <h1>FIGHT!</h1>
                    <PlayerBattleSprite hp={props.character}/>
                    <EnemyBattleSprite hp={props.enemy}/>
                    <button id="attack" onClick={props.playerAttacksEnemy}>Attack!</button>
                    <button id="defend">Defend!</button>

                </div>
                
            </Fragment>
        )

}

export default BattleContainer