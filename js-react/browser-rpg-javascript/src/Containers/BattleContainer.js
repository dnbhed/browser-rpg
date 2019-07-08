import React, {Component, Fragment} from 'react'
import PlayerBattleSprite from '../Components/BattleComponents/PlayerBattleSprite'
import EnemyBattleSprite from '../Components/BattleComponents/EnemyBattleSprite'
import ActionOptionsParent from '../Components/BattleComponents/ActionOptionsParent'
import './BattleContainer.css'

class BattleContainer extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }


    render(){
        return(
            <Fragment>
                <div id="battle-container">
                    <h1>FIGHT!</h1>
                    <PlayerBattleSprite />
                    <EnemyBattleSprite />
                    <ActionOptionsParent />
                </div>
                
            </Fragment>
        )
    }
}

export default BattleContainer