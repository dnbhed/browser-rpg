import React from "react";
import joe from "../../sprites/joe.gif";
import alison from "../../sprites/alison.gif";
import kenny from "../../sprites/kenny.gif";
import alex from "../../sprites/alex.gif";
import joedamage from "../../sprites/joe-damage.gif";
import alisondamage from "../../sprites/alison-damage.gif";
import kennydamage from "../../sprites/kenny-damage.gif";
import alexdamage from "../../sprites/alex-damage.gif";

const PlayerBattleSprite = props => {
	let spriteId = null;

	if (props.currentCharacter) {
		spriteId = props.currentCharacter.spriteID;
	}

	let sprite = joe;

	function chosenSprite() {
		console.log(props.damage);

		if (spriteId == 1 && props.damage) {
			sprite = joedamage;
		} else if (spriteId == 1) {
			sprite = joe;
		} else if (spriteId == 2 && props.damage) {
			sprite = alisondamage;
		} else if (spriteId == 2) {
			sprite = alison;
		} else if (spriteId == 3 && props.damage) {
			sprite = kennydamage;
		} else if (spriteId == 3) {
			sprite = kenny;
		} else if (spriteId == 4 && props.damage) {
			sprite = alexdamage;
		} else if (spriteId == 4) {
			sprite = alex;
		}
		return sprite;
	}

	const finalSprite = chosenSprite();

	if (props.currentCharacter) {
		return (
			<div id="player-sprite">
				<h2>{props.currentCharacter.name}</h2>
				<img src={finalSprite} height="200px" />
				<h2>HP: {props.currentCharacter.currentHP}</h2>
			</div>
		);
	} else {
		return null;
	}
};

export default PlayerBattleSprite;
