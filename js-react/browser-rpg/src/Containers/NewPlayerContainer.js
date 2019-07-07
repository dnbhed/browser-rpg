import React ,{Fragment} from 'react'
import NewPlayerForm from '../Components/NewPlayerComponents/NewPlayerForm'
import ConfirmNewPlayerButton from '../Components/NewPlayerComponents/ConfirmNewPlayerButton'

const NewPlayerContainer = () => {


    return (
       <Fragment>
           Helloo!!!! Player!!!
           <NewPlayerForm />
           <ConfirmNewPlayerButton />
           <PlayerSelector />
           <ConfirmSelectedPlayerButton />
       </Fragment>
    )

}

export default NewPlayerContainer;