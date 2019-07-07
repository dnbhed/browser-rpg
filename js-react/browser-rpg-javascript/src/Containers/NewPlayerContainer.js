import React ,{Component, Fragment} from 'react'
import NewPlayerForm from '../Components/NewPlayerComponents/NewPlayerCreation/NewPlayerForm'
import PlayerSelector from '../Components/NewPlayerComponents/PlayerSelector'
import ConfirmSelectedPlayerButton from '../Components/NewPlayerComponents/ConfirmSelectedPlayer'
import NewPlayerCreationButton from '../Components/NewPlayerComponents/NewPlayerCreationButton'

class NewPlayerContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
            players: [
            ]
        }
    }

    
    componentDidMount(){
        fetch("http://localhost:8080/players")
          .then(res => res.json())
          .then(existingPlayers => this.setState({players: existingPlayers._embedded.players}))
          .then(err => console.error)
    }

    render(){
      return (
        <Fragment>
            <NewPlayerCreationButton />
            <NewPlayerForm />
            <form>
              <PlayerSelector 
              players = {this.state.players} />
              <ConfirmSelectedPlayerButton />
            </form>
        </Fragment>

        )
    }
    
    

}

export default NewPlayerContainer;