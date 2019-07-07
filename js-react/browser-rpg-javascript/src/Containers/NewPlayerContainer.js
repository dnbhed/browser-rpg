import React ,{Fragment} from 'react'
import NewPlayerForm from '../Components/NewPlayerComponents/NewPlayerCreation/NewPlayerForm'
import PlayerSelector from '../Components/NewPlayerComponents/PlayerSelector'
import ConfirmSelectedPlayerButton from '../Components/NewPlayerComponents/ConfirmSelectedPlayer'
import NewPlayerCreationButton from '../Components/NewPlayerComponents/NewPlayerCreationButton'

const NewPlayerContainer = () => {


    return (
       <Fragment>
           <NewPlayerCreationButton />
           <NewPlayerForm />
           <PlayerSelector />
           <ConfirmSelectedPlayerButton />
       </Fragment>
    )

}

export default NewPlayerContainer;