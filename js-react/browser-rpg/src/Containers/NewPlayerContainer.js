import React ,{Fragment} from 'react'
import NewPlayerForm from './Components/NewPlayerComponents/NewPlayerForm'
import ConfirmNewPlayerButton from './Components/NewPlayerComponents/ConfirmNewPlayerButton'

const NewPlayerContainer = () => {


    return (
       <Fragment>
           Helloo!!!! New Player!!!
           <NewPlayerForm />
           <ConfirmNewPlayerButton />
       </Fragment>
    )

}

export default NewPlayerContainer;