import React, {Fragment} from 'react'
import NewPlayerForm from '../Components/NewPlayerComponents/NewPlayerForm'
import PlayerSelector from '../Components/NewPlayerComponents/PlayerSelector'
import ConfirmSelectedPlayerButton from '../Components/NewPlayerComponents/ConfirmSelectedPlayer'
import './NewPlayerContainer.css'
import playerCreation from '../sounds/PlayerCreation.mp3'

const NewPlayerContainer = ({players, changePlayer, handleSubmit}) => {



      return (
        <Fragment>
          <PlayerSelector
            players={players} 
            changePlayer={changePlayer}
          />
          <div className="player-greeting">
            <h2>**Intruder ALERT!!**</h2>
            <br/>
            <h2>**Foreign Life-form DETECED!!**</h2>
            <br/>
            <h1>So you thought you could infiltrate my base without any repercussions. You will be dispatched of swiftly and painfully.</h1><br/>
            <h1>INITIATE DESTROYER PROTOCOL!!</h1>
            <h2>**Protocol initiated. Dispatching DESTROYER Unit!!**</h2><br/>
          </div>
          <audio src={playerCreation} autoPlay loop={true}/>
        <div className="create-new-player">

          <button className="new-player-form">
            Create New Player
          </button>
          <h1 className="create-new-player-head">Create a new Player</h1>
          <NewPlayerForm handleSubmit={handleSubmit} />

            <ConfirmSelectedPlayerButton />

        </div>
        </Fragment>
      )
  

}

export default NewPlayerContainer;