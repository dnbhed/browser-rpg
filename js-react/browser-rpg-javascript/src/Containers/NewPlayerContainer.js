import React ,{Component, Fragment} from 'react'
import NewPlayerForm from '../Components/NewPlayerComponents/NewPlayerForm'
import PlayerSelector from '../Components/NewPlayerComponents/PlayerSelector'
import ConfirmSelectedPlayerButton from '../Components/NewPlayerComponents/ConfirmSelectedPlayer'
import './NewPlayerContainer.css'

const NewPlayerContainer = ({players, changePlayer, handleSubmit, handleNameChange, name}) => {



      return (
        <Fragment>
          <button id="player-creation-button" className="new-player-form">
            Create New Player
          </button>
          <NewPlayerForm handleSubmit={handleSubmit} 
          name={name}/>

            <PlayerSelector
              players={players} changePlayer={changePlayer}/>
            <ConfirmSelectedPlayerButton />

        </Fragment>
      )
  

}

export default NewPlayerContainer;