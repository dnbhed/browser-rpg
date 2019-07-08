import React, {Fragment} from 'react'
import NewPlayerNameInput from './NewPlayerNameInput'
import ConfirmNewPlayerButton from './ConfirmNewPlayerButtton'
import '../NewPlayerComponents.css'

const NewPlayerForm = () => {

    function handleSubmit(event){
      const url = 'http://localhost:8080/players'
        const newPlayer = {name: event.target.name.value}
        const headers = {'Content-Type':'application/json'}
        fetch(url, {
            method:'POST',
            body: JSON.stringify(newPlayer),
            headers:headers
        })
    }

    return (
       <Fragment>
         <div id="new-player-form">
           <form method="post" onSubmit={handleSubmit}>
             <NewPlayerNameInput />
             <ConfirmNewPlayerButton />
           </form>
         </div>
       </Fragment>
    )
}


export default NewPlayerForm