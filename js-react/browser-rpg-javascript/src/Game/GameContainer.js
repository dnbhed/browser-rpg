import React, {Component, Fragment} from 'react'
import StartScreenContainer from '../Containers/StartScreenContainer'
import NewCharacterContainer from '../Containers/NewCharacterContainer'
import PlayerSelectCharacterContainer from '../Containers/PlayerSelectCharacterContainer'
import BattleContainer from '../Containers/BattleContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NewPlayerContainer from '../Containers/NewPlayerContainer';


class GameContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
            players: [],
            currentPlayer: null,
            currentCharacter: null,
            currentEnemy: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
    }

    handleSubmit(event) {
        const url = 'http://localhost:8080/characters'
        const newCharacter = { name: event.target.name.value, }
        const headers = { 'Content-Type': 'application/json' }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(newCharacter),
            headers: headers
        })
        event.preventDefault();

    }
    handleClick(event) {
        this.setState({ spriteID: event.target.id })
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value })
    }

    componentDidMount(){
        fetch("http://localhost:8080/players")
            .then(res => res.json())
            .then(existingPlayers => this.setState({ players: existingPlayers._embedded.players }))
            .then(err => console.error)
    }

    render(){
        return(
            <Router>
                <Fragment>
                    <Route exact path="/" component={StartScreenContainer} />
                    <Route exact path="/new-character" component={NewCharacterContainer} test="Hello World"/>
                    <Route exact path="/select-character-create-character" component={PlayerSelectCharacterContainer} />
                    <Route exact path="/select-player" 
                        render={(props) => <NewPlayerContainer {...props} players={this.state.players}/>}
                        />
                    <Route exact path="/battle" component={BattleContainer} />
                </Fragment>
            </Router>
        )
    }


}

export default GameContainer