import React from "react";

const CurrentPlayer = ({ currentPlayer }) => {
	return (
		<div id="player-details">
			<h2>Name: {currentPlayer.name}</h2>
			<h2>Top Score: {currentPlayer.topScore}</h2>
		</div>
	);
};

export default CurrentPlayer;
