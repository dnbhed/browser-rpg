import React ,{Fragment} from 'react'
import AvatarDisplay from '../Components/NewCharacterComponents/AvatarDisplay'
import {Link} from 'react-router-dom'

const NewCharacterContainer = ({spriteID, name, handleClick,handleNameChange,handleSubmit}) => {

        return(
        <Fragment>
            <AvatarDisplay handleClick={handleClick}/>
            <form className="character-form" onSubmit={handleSubmit} >
                <label>Sprite ID</label>
                <input id="Pog" type="number" value={spriteID} readOnly={true}/>
                <input id= "name" type="text" placeholder="Character name" value ={name} onChange={handleNameChange}/>
                <input type="submit" value="Create Character"/>
            </form>
            <h1 id="start-game-button" ><Link to="/battle">FIGHT</Link></h1>
        </Fragment>
        )
}

export default NewCharacterContainer