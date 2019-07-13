import React, { Fragment, useState } from "react";
import PlayerBattleSprite from "../Components/BattleComponents/PlayerBattleSprite";
import EnemyBattleSprite from "../Components/BattleComponents/EnemyBattleSprite";

import { Redirect } from "react-router-dom";

import "./BattleContainer.css";
import battle from '../sounds/battle.mp3'

const BattleContainer = ({
	currentPlayer,
	currentCharacter,
	currentEnemy,
	playerAttacksEnemy,
	enemyAttacksPlayer,
	playerDefends,
	resetEnemy,
    accumulateScore,
    setCurrentHPCharacter
}) => {
	// const [playerTurn, setPlayerTurn] = useState(true);
	const [enemyDamaged, setEnemyDamaged] = useState(false);
	const [playerDamaged, setPlayerDamaged] = useState(false);

	if (!currentPlayer.id || !currentCharacter) {
		return <Redirect to="/" />;
	}

	if (currentEnemy.alive === false) {
		console.log(currentEnemy.currentHP);
		resetEnemy();
		accumulateScore();
		return <Redirect to="/endgame" />;
	}

	if (currentCharacter.alive === false) {
        console.log(currentCharacter.currentHP);
        setCurrentHPCharacter();
		resetEnemy();
		return <Redirect to="/endgame" />;
	}

	function attack() {
		setEnemyDamaged(true);
		setTimeout(() => {
			setEnemyDamaged(false);
			playerAttacksEnemy();
			if(currentEnemy.currentHP - currentPlayer.power <=0) return
			setPlayerDamaged(true);
			setTimeout(() => {
				setPlayerDamaged(false);
				enemyAttacksPlayer();
			}, 3000);
		}, 3000);
	}

	function defend() {
		setEnemyDamaged(true);
		setTimeout(() => {
			setEnemyDamaged(false);
			playerDefends();
			setPlayerDamaged(true);
			setTimeout(() => {
				setPlayerDamaged(false);
				enemyAttacksPlayer();
			}, 3000);
		}, 3000);
	}

	return (
		<Fragment>
			<div>
			<h1 id="battle-title">Battle</h1>
			</div>
			<div id="battle-container">
                <audio src={battle} autoPlay loop={true}/>
				<PlayerBattleSprite
					currentCharacter={currentCharacter}
					damage={playerDamaged}
				/>
				<EnemyBattleSprite hp={currentEnemy} damage={enemyDamaged} />
				<h1 id="x">X</h1>
				<button id="attack" onClick={attack}>
					Attack!
				</button>
				<button id="defend" onClick={defend}>
					Defend!
				</button>
			</div>
		</Fragment>
	);
};

export default BattleContainer;
