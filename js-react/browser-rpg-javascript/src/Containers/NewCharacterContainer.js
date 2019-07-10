import React ,{Fragment, useState} from 'react'
import AvatarDisplay from '../Components/NewCharacterComponents/AvatarDisplay'
import CharacterSelector from '../Components/NewCharacterComponents/CharacterSelector'
import {Link, Redirect} from 'react-router-dom'
import joe from '../sprites/joe.gif'
import alison from '../sprites/alison.gif'
import kenny from '../sprites/kenny.gif'
import alex from '../sprites/alex.gif'

const NewCharacterContainer = ({handleSubmit, currentPlayer, characters, changeCharacter}) => {

    const sprites = [joe, alison, kenny, alex]
    const [newName, setNewName] = useState("")
    const [sprite, setSprite] = useState(1)
    const [points, setPoints] = useState(150);
    const [hp, setHp] = useState(0);
    const [power, setPower] = useState(0);
    
    function handleNameChange(event){
        console.log(event.target.value);
        
        setNewName(event.target.value)
    }

    

    function handleSpriteChange(event){
        setSprite(event.target.id)
    }

    function spendPointsOnHP(){
        if(points > 0){
            setHp(hp + 5)
            setPoints(points - 5)
        }
    }

    function removePointsFromHP(){
        if(points < 150){
            setHp(hp - 5)
            setPoints(points + 5)
        }
    }

    function spendPointsOnPower(){
        if(points > 0){
            setPower(power + 5)
            setPoints(points - 5)
        }
    }

    function removePointsFromPower(){
        if(points < 150){
            setPower(power - 5)
            setPoints(points + 5)
        }
    }
    
    if (!currentPlayer.id) {
        return (
            <Redirect to="/" />
        )
    }
        return(
          <Fragment>
            <CharacterSelector
                characters={characters}
                currentPlayer={currentPlayer} 
                changeCharacter={changeCharacter}
            />
            <AvatarDisplay handleClick={handleSpriteChange} />
            <form className="character-form" onSubmit={handleSubmit} >
                <label>Sprite ID</label>
                <input id="spriteID" type="number" value={sprite} readOnly={true} onChange={handleSpriteChange}/>

                <input id= "name" type="text" placeholder="Character name" value={newName} onChange={handleNameChange}/>

                <h3 id="points-to-spend">Points to spend: {points}</h3>

                <label>HP: </label>
                <input id="hp" type="number" value={hp} readOnly={true}></input>
                <button onClick={spendPointsOnHP}>Add 5 HP</button>
                <button onClick={removePointsFromHP}>Remove 5 HP</button>


                <label>Power: </label>
                <input id="power" type="number" value={power} readOnly={true}></input>
                <button onClick={spendPointsOnPower}>Add 5 Power</button>
                <button onClick={removePointsFromPower}>Remove 5 Power</button>


                <input type="submit" value="Create Character"/>
            </form>
                <h1>Selected Sprite</h1>
                <img src={sprites[sprite - 1]} />
            <button id="start-game-button" ><Link to="/battle">FIGHT</Link></button>
          </Fragment>    
        )
}

export default NewCharacterContainer