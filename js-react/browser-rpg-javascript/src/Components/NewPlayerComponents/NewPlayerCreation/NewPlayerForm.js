import React, {Fragment} from 'react'
import NewPlayerNameInput from './NewPlayerNameInput'
import ConfirmNewPlayerButton from './ConfirmNewPlayerButtton'
import '../NewPlayerComponents.css'

const NewPlayerForm = () => {

    return (
       <Fragment>
         <div id="new-player-form">
           <form method="post">
             <NewPlayerNameInput />
             <ConfirmNewPlayerButton />
           </form>
         </div>
       </Fragment>
    )
}


export default NewPlayerForm