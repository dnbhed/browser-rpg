import React ,{Component, Fragment} from 'react'
import NewPlayerForm from '../Components/NewPlayerComponents/NewPlayerCreation/NewPlayerForm'
import PlayerSelector from '../Components/NewPlayerComponents/PlayerSelector'
import ConfirmSelectedPlayerButton from '../Components/NewPlayerComponents/ConfirmSelectedPlayer'
import NewPlayerCreationButton from '../Components/NewPlayerComponents/NewPlayerCreationButton'

const NewPlayerContainer = ({players, changePlayer, handleSubmit, handleNameChange, name}) => {



      return (
        <Fragment>
          <NewPlayerCreationButton />
          <NewPlayerForm handleSubmit={handleSubmit} handleNameChange={handleNameChange}
          name={name}/>

            <PlayerSelector
              players={players} changePlayer={changePlayer}/>
            <ConfirmSelectedPlayerButton />

        </Fragment>
      )
  

}

export default NewPlayerContainer;