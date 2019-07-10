import React ,{Fragment} from 'react'
import NewPlayerForm from '../Components/NewPlayerComponents/NewPlayerForm'
import PlayerSelector from '../Components/NewPlayerComponents/PlayerSelector'
import ConfirmSelectedPlayerButton from '../Components/NewPlayerComponents/ConfirmSelectedPlayer'
import './NewPlayerContainer.css'

const NewPlayerContainer = ({players, changePlayer, handleSubmit}) => {



      return (
        <Fragment>
          <PlayerSelector
            players={players} 
            changePlayer={changePlayer}
          />
          <NewPlayerForm handleSubmit={handleSubmit} />

            <ConfirmSelectedPlayerButton />

        </Fragment>
      )
  

}

export default NewPlayerContainer;