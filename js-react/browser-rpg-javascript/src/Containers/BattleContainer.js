import React, {Component, Fragment} from 'react'
import PlayerBattleSprite from '../Components/BattleComponents/PlayerBattleSprite'
import EnemyBattleSprite from '../Components/BattleComponents/EnemyBattleSprite'

class BattleContainer extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }


    render(){
        return(
            <Fragment>
                <h1>Blah</h1>
                <PlayerBattleSprite />
                <EnemyBattleSprite />
            </Fragment>
        )
    }
}

export default BattleContainer