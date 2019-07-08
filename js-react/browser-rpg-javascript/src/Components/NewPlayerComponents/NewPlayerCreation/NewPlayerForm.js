import React, {Fragment} from 'react'
import NewPlayerNameInput from './NewPlayerNameInput'
import ConfirmNewPlayerButton from './ConfirmNewPlayerButtton'
import '../NewPlayerComponents.css'

const NewPlayerForm = (props) => {

    return (
       <Fragment>
         <div id="new-player-form">
          <form className="player-form" onSubmit={props.handleSubmit} >
            <input id="name" type="text" placeholder="Player name" value={props.name} onChange={props.handleNameChange} />
            <input type="submit" value="Create Player" />
          </form>
         </div>
       </Fragment>
    )
}


export default NewPlayerForm