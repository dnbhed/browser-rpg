import React ,{Fragment} from 'react'
import NewPlayerForm from '../Components/NewPlayerComponents/NewPlayerCreation/NewPlayerForm'
import PlayerSelector from '../Components/NewPlayerComponents/PlayerSelector'
import ConfirmSelectedPlayerButton from '../Components/NewPlayerComponents/ConfirmSelectedPlayer'

const NewPlayerContainer = () => {


    return (
       <Fragment>
           Helloo!!!! Player!!!
           <NewPlayerForm />
           <PlayerSelector />
           <ConfirmSelectedPlayerButton />
       </Fragment>
    )

}

export default NewPlayerContainer;