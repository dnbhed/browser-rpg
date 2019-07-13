import React from "react";
import PlayerBattleSprite from "./BattleComponents/PlayerBattleSprite";
import CurrentPlayer from "./CurrentPlayer";
import "./CurrentPlayerCharacter.css";

const CurrentPlayerCharacter = ({ currentPlayer, currentCharacter }) => {
	return (
		<div id="player-character-container">
			<h1 id="player-title">Current Player</h1>
			<CurrentPlayer currentPlayer={currentPlayer} />
			<h1 id="character-title">Current Character</h1>
			<PlayerBattleSprite currentCharacter={currentCharacter} />
		</div>
	);
};

export default CurrentPlayerCharacter;
