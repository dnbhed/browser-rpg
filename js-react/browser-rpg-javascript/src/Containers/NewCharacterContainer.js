import React ,{Fragment, useState} from 'react'
import AvatarDisplay from '../Components/NewCharacterComponents/AvatarDisplay'
import {Link, Redirect} from 'react-router-dom'

const NewCharacterContainer = ({spriteID, handleClick, handleSubmit, currentPlayer}) => {

    
    const [newName, setNewName] = useState("")
    
    function handleNameChange(event){
        setNewName(event.target.value)
    }
    
    if (currentPlayer.name !== "") {
        return (
            <Redirect to="/" />
        )
    }
        return(
          <Fragment>
            <AvatarDisplay handleClick={handleClick}/>
            <form className="character-form" onSubmit={handleSubmit} >
                <label>Sprite ID</label>
                <input id="Pog" type="number" value={spriteID} readOnly={true}/>
                <input id= "name" type="text" placeholder="Character name" value={newName} onChange={handleNameChange}/>
                <input type="submit" value="Create Character"/>
            </form>
            <h1 id="start-game-button" ><Link to="/battle">FIGHT</Link></h1>
          </Fragment>
        )
}

export default NewCharacterContainer