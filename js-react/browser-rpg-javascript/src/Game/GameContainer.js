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
            currentEnemy: null,
            newCharacterName: '',
            newCharacterSpriteID: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const url = 'http://localhost:8080/characters'
        const newCharacter = { name: event.target.name.value, }
        const headers = { 'Content-Type': 'application/json' }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(newCharacter),
            headers: headers
        })

    }
    handleClick(event) {
        this.setState({ newCharacterSpriteID: event.target.id })
    }

    handleNameChange(event) {
        this.setState({ newCharacterName: event.target.value })
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
                    <Route exact path="/new-character" 
                        render={(props) => 
                        <NewCharacterContainer {...props} 
                        spriteID={this.state.newCharacterSpriteID} 
                        name={this.state.newCharacterName} 
                        handleClick={this.handleClick} 
                        handleNameChange={this.handleNameChange} 
                        handleSubmit={this.handleSubmit}
                        />}
                        />
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