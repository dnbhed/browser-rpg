import React, {Fragment} from 'react'


const NewPlayerForm = ({handleSubmit, handleNameChange, name}) => {

    return (
       <Fragment>
         <div id="new-player-form">
          <form className="player-form" onSubmit={handleSubmit} >
            <input id="name" type="text" placeholder="Player name" value={name} onChange={handleNameChange} />
            <input type="submit" value="Create Player" />
          </form>
         </div>
       </Fragment>
    )
}


export default NewPlayerForm