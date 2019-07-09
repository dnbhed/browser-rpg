import React ,{Fragment, useState, useEffect} from 'react'
import AvatarDisplay from '../Components/NewCharacterComponents/AvatarDisplay'
import {Link, Redirect} from 'react-router-dom'
import joe from '../sprites/joe.gif'
import alison from '../sprites/alison.gif'
import kenny from '../sprites/kenny.gif'
import alex from '../sprites/alex.gif'

const NewCharacterContainer = ({spriteID, handleSubmit, currentPlayer}) => {

    const sprites = [joe, alison, kenny, alex]
    const [newName, setNewName] = useState("")
    const [sprite, setSprite] = useState(1)
    
    function handleNameChange(event){
        console.log(event.target.value);
        
        setNewName(event.target.value)
    }

    function handleSpriteChange(event){
        setSprite(event.target.id)
    }
    
    if (!currentPlayer.id) {
        return (
            <Redirect to="/" />
        )
    }
        return(
          <Fragment>
            <AvatarDisplay handleClick={handleSpriteChange} />
            <form className="character-form" onSubmit={handleSubmit} >
                <label>Sprite ID</label>
                <input id="SpriteID" type="number" value={sprite} readOnly={true} onChange={handleSpriteChange}/>
                <input id= "name" type="text" placeholder="Character name" value={newName} onChange={handleNameChange}/>
                <input type="submit" value="Create Character"/>
            </form>
            <h1 id="start-game-button" ><Link to="/battle">FIGHT</Link></h1>
            <h1>Selected Sprite</h1>
            <img src={sprites[sprite - 1]}/>
          </Fragment>
        )
}

export default NewCharacterContainer