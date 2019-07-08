import React, {Component, Fragment} from 'react'
import StartScreenContainer from '../Containers/StartScreenContainer'
import NewCharacterContainer from '../Containers/NewCharacterContainer'
import PlayerSelectCharacterContainer from '../Containers/PlayerSelectCharacterContainer'
import BattleContainer from '../Containers/BattleContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'


class GameContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
            currentPlayer: null,
            currentCharacter: null,
            currentEnemy: null
        }
    }

    render(){
        return(
            <Router>
                <Fragment>
                    <Route exact path="/" component={StartScreenContainer} />
                    <Route path="/new-character" component={NewCharacterContainer} />
                    <Route exact path="/select-character-create-character" component={PlayerSelectCharacterContainer} />
                    <Route exact path="/battle" component={BattleContainer} />

                </Fragment>
            </Router>
        )
    }

}

export default GameContainer