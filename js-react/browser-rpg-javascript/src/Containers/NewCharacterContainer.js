import React, { Fragment, useState } from "react";
import AvatarDisplay from "../Components/NewCharacterComponents/AvatarDisplay";
import CharacterSelector from '../Components/NewCharacterComponents/CharacterSelector'
import { Link, Redirect } from "react-router-dom";
import joe from "../sprites/joe.gif";
import alison from "../sprites/alison.gif";
import kenny from "../sprites/kenny.gif";
import alex from "../sprites/alex.gif";
import CurrentPlayerCharacter from "../Components/CurrentPlayerCharacter";
import characterCreation from "../sounds/CharacterCreation.mp3";

const NewCharacterContainer = ({handleSubmit, currentPlayer, characters, currentCharacter, changeCharacter}) => {


	const sprites = [joe, alison, kenny, alex];
	const [newName, setNewName] = useState("");
	const [sprite, setSprite] = useState(1);
	const [points, setPoints] = useState(90);
	const [hp, setHp] = useState(30);
    const [power, setPower] = useState(30);
    
    if (!currentPlayer.id) {
        return (
            <Redirect to="/" />
        )
    }

	function handleNameChange(event) {
	    setNewName(event.target.value);
	}
    
    function handleSpriteChange(event){
        setSprite(event.target.id)
    }
	

	function spendPointsOnHP() {
		if (points > 0) {
			setHp(hp + 5);
			setPoints(points - 5);
		}
	}

	function removePointsFromHP() {
		if (points < 150 && hp > 30) {
			setHp(hp - 5);
			setPoints(points + 5);
		}
	}

	function spendPointsOnPower() {
		if (points >= 10) {
			setPower(power + 5);
			setPoints(points - 10);
		}
	}

	function removePointsFromPower() {
		if (points < 150 && power > 30) {
			setPower(power - 5);
			setPoints(points + 5);
		}
	}

	return (
		<Fragment>
            <CharacterSelector characters={characters}  currentPlayer={currentPlayer} changeCharacter={changeCharacter}/>
			<AvatarDisplay handleClick={handleSpriteChange} />
			<audio src={characterCreation} autoPlay loop={true} />
            <h1>Selected Sprite</h1>
            <img src={sprites[sprite - 1]} />
			<form className="character-form" onSubmit={handleSubmit}>
				<label>Sprite ID</label>
				<input
					id="spriteID"
					type="number"
					value={sprite}
					readOnly={true}
					onChange={handleSpriteChange}
				/>

				<input
					id="name"
					type="text"
					placeholder="Character name"
					value={newName}
					onChange={handleNameChange}
				/>

				<h3 id="points-to-spend">Points to spend: {points}</h3>

				<label>HP: </label>
				<input id="hp" type="number" value={hp} readOnly={true} />
				<h3 className="increment-button" onClick={spendPointsOnHP}>
					Add 5 HP
				</h3>
				<h3 className="increment-button" onClick={removePointsFromHP}>
					Remove 5 HP
				</h3>

				<label>Power: </label>
				<input id="power" type="number" value={power} readOnly={true} />
				<h3 className="increment-button" onClick={spendPointsOnPower}>
					Add 5 Power
				</h3>
				<h3 className="increment-button" onClick={removePointsFromPower}>
					Remove 5 Power
				</h3>

				<input type="submit" value="Create Character" />
			</form>
			<button id="start-game-button">
				<Link to="/battle">FIGHT</Link>
			</button>
			<CurrentPlayerCharacter
				currentPlayer={currentPlayer}
				currentCharacter={currentCharacter}
			/>
		</Fragment>
	);
};

export default NewCharacterContainer;
