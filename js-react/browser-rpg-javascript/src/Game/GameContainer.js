import React, {Component, Fragment} from 'react'
import StartScreenContainer from '../Containers/StartScreenContainer'
import NewCharacterContainer from '../Containers/NewCharacterContainer'
import PlayerSelectCharacterContainer from '../Containers/PlayerSelectCharacterContainer'
import BattleContainer from '../Containers/BattleContainer'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import EndGameContainer from '../Containers/EndGameContainer';
import NewPlayerContainer from '../Containers/NewPlayerContainer';
import HomeScreenButton from '../Components/HomeScreenButton';


class GameContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
            players: [],
            currentPlayer: {name:''},
            currentCharacter: null,
            currentEnemy: {alive: true},
            newCharacterName: '',
            newCharacterSpriteID: 0,
            createdNewPlayer: false,
            playerIsDefending: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleCurrentPlayerChange = this.handleCurrentPlayerChange.bind(this)
        this.handleNewPlayerForm = this.handleNewPlayerForm.bind(this)
        this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this)
        this.setCurrentPlayer = this.setCurrentPlayer.bind(this)
        this.playerAttacksEnemy = this.playerAttacksEnemy.bind(this)
        this.enemyAttacksPlayer = this.enemyAttacksPlayer.bind(this)
        this.playerDefends = this.playerDefends.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const url = 'http://localhost:8080/avatars'
        const newCharacter = { name: event.target.name.value, player: this.state.currentPlayer._links.player.href }
        console.log(newCharacter);
        
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

    handlePlayerNameChange(event) {
        this.setState({ newPlayerName: event.target.value })
    }

    handleNewPlayerForm(event) {
        event.preventDefault();
        const url = 'http://localhost:8080/players'
        const newPlayer = { name: event.target.name.value }
        const headers = { 'Content-Type': 'application/json' }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(newPlayer),
            headers: headers
        })
        this.setState({createdNewPlayer: true})
    }

    setCurrentPlayer(index){
        this.setState({ currentPlayer: this.state.players[index] })
    }

    handleCurrentPlayerChange(event){
        const playerIndex = event.target.value - 1 ;
        console.log(playerIndex)
        this.setState({currentPlayer: this.state.players[playerIndex]})
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.createdNewPlayer === true){
            fetch("http://localhost:8080/players")
                .then(res => res.json())
                .then(existingPlayers => this.setState({ players: existingPlayers._embedded.players }))
                .then(err => console.error)
                this.setState({createdNewPlayer:false})
        }
    }

    componentDidMount(){
        fetch("http://localhost:8080/players")
            .then(res => res.json())
            .then(existingPlayers => this.setState({ players: existingPlayers._embedded.players }))
            .then(err => console.error)

        fetch("http://localhost:8080/avatars/1")
            .then(res => res.json())
            .then(avatar => this.setState({ currentCharacter: avatar }))
            .then(err => console.error)

        fetch("http://localhost:8080/enemies/1")
            .then(res => res.json())
            .then(enemy => this.setState({ currentEnemy: enemy }))
            .then(err => console.error)
    }

    playerAttacksEnemy(){
        this.setState({ playerIsDefending: false })
       
        const power = this.state.currentCharacter.power;
        if(!(this.state.currentEnemy.currentHP - power <= 0)){
            this.setState(prevState => {
                const currentEnemy = { ...prevState.currentEnemy }
                currentEnemy.currentHP -= power;                             
                return { currentEnemy };
            })
        }else {
            this.setState(prevState => {
                const currentEnemy = { ...prevState.currentEnemy}
                currentEnemy.alive = false;
                return {currentEnemy};
            })
        }
    }

    enemyAttacksPlayer(){
        let power= 0;
        if(!this.state.playerIsDefending){
            power = this.state.currentEnemy.power;
        } else{
            power = this.state.currentEnemy.power - 20;
        }
        if (!(this.state.currentCharacter.currentHP - power <= 0)) {
            this.setState(prevState => {
                const currentCharacter = { ...prevState.currentCharacter }
                currentCharacter.currentHP -= power;
                return { currentCharacter };
            })
        } else {
            this.setState(prevState => {
                const currentCharacter = { ...prevState.currentCharacter }
                currentCharacter.alive = false;
                return { currentCharacter };
            })
        }
    }

    playerDefends(){
        this.setState({playerIsDefending: true})

        const power = this.state.currentCharacter.power;
        if (!(this.state.currentEnemy.currentHP - (power - 30) <= 0)) {
            this.setState(prevState => {
                const currentEnemy = { ...prevState.currentEnemy }
                currentEnemy.currentHP -= (power - 30);
                return { currentEnemy };
            })
        } else {
            this.setState(prevState => {
                const currentEnemy = { ...prevState.currentEnemy }
                currentEnemy.alive = false;
                return { currentEnemy };
            })
        }
    }

    render(){

        return(
            <Router>
                <Fragment>
                    <Route exact path="/" component={StartScreenContainer} />
                    <Route exact path="/select-player" 
                        render={(props) => <NewPlayerContainer {...props} 
                        players={this.state.players} 
                        currentPlayer={this.state.currentPlayer}
                        changePlayer={this.handleCurrentPlayerChange} 
                        handleSubmit={this.handleNewPlayerForm}
                        handleNameChange={this.handlePlayerNameChange}
                        />}
                        />
                    <Route exact path="/new-character" 
                        render={(props) => 
                        <NewCharacterContainer {...props} 
                            currentPlayer={this.state.currentPlayer}
                            
                            spriteID={this.state.newCharacterSpriteID} 
                            handleClick={this.handleClick} 
                            handleSubmit={this.handleSubmit}
                        />}
                        />
                    <Route exact path="/select-character-create-character" component={PlayerSelectCharacterContainer} />
                    <Route exact path="/battle" 
                        render={(props) => <BattleContainer {...props}
                        currentPlayer={this.state.currentPlayer}
                        currentCharacter={this.state.currentCharacter} 
                        currentEnemy={this.state.currentEnemy}
                        playerAttacksEnemy={this.playerAttacksEnemy}
                        enemyAttacksPlayer={this.enemyAttacksPlayer}
                        playerDefends={this.playerDefends}
                        />}
                        />
                    <Route path="/"component={HomeScreenButton} />   
                    <Route exact path="/endgame"component={EndGameContainer} />
                </Fragment>
            </Router>
        )
    }
}

export default GameContainer