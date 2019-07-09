import React, {Fragment, useState} from 'react'


const NewPlayerForm = ({handleSubmit}) => {

  const [newName, setNewName] = useState("")  

  function handleNameChange(event){
    setNewName(event.target.value)
  }
  
    return (
       <Fragment>
         <div id="new-player-form">
          <form className="player-form" onSubmit={handleSubmit} >
            <input id="name" type="text" placeholder="Player name" value={newName} onChange={handleNameChange} />
            <input type="submit" value="Create Player" />
          </form>
         </div>
       </Fragment>
    )
}


export default NewPlayerForm