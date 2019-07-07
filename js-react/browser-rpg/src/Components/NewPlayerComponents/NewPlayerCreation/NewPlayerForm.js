import React, {Fragment} from 'react'
import NewPlayerNameInput from './NewPlayerNameInput'
import ConfirmNewPlayerButton from './ConfirmNewPlayerButtton'

const NewPlayerForm = () => {

    return (
       <Fragment>
         <NewPlayerNameInput />
         <ConfirmNewPlayerButton />
       </Fragment>
    )
}


export default NewPlayerForm