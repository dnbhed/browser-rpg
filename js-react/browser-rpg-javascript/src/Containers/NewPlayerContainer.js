import React from 'react'
import NewPlayerForm from '../Components/NewPlayerComponents/NewPlayerForm'
import PlayerSelector from '../Components/NewPlayerComponents/PlayerSelector'
import ConfirmSelectedPlayerButton from '../Components/NewPlayerComponents/ConfirmSelectedPlayer'
import './NewPlayerContainer.css'

const NewPlayerContainer = ({players, changePlayer, handleSubmit}) => {



      return (
        <div className="create-new-player">

          <button className="new-player-form">
            Create New Player
          </button>
          <h1 className="create-new-player-head">Create a new Player</h1>
          <NewPlayerForm handleSubmit={handleSubmit} />

            <PlayerSelector
              players={players} changePlayer={changePlayer}/>
            <ConfirmSelectedPlayerButton />

        </div>
      )
  

}

export default NewPlayerContainer;