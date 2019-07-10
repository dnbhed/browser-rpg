import React, { Fragment } from "react";
import finalboss from "../../sprites/final-boss.gif";
import finalbossdamage from "../../sprites/final-boss-damage.gif";

const EnemyBattleSprite = props => {
	let enemySprite = finalboss;

	if (props.damage) {
		enemySprite = finalbossdamage;
	}

	return (
		<div id="enemy-sprite">
			<h2>Mikey the Boss</h2>
			<img src={enemySprite} height="200px" />
			<h2>HP: {props.hp.currentHP}</h2>
		</div>
	);
};

export default EnemyBattleSprite;
