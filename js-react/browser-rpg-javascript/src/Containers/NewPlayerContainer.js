import React ,{Component, Fragment} from 'react'
import NewPlayerForm from '../Components/NewPlayerComponents/NewPlayerCreation/NewPlayerForm'
import PlayerSelector from '../Components/NewPlayerComponents/PlayerSelector'
import ConfirmSelectedPlayerButton from '../Components/NewPlayerComponents/ConfirmSelectedPlayer'
import NewPlayerCreationButton from '../Components/NewPlayerComponents/NewPlayerCreationButton'

const NewPlayerContainer = (props) => {



      return (
        <Fragment>
          <NewPlayerCreationButton />
          <NewPlayerForm handleSubmit={props.handleSubmit} handleNameChange={props.handleNameChange}/>

            <PlayerSelector
              players={props.players} changePlayer={props.changePlayer}/>
            <ConfirmSelectedPlayerButton />

        </Fragment>
      )
  

}

export default NewPlayerContainer;