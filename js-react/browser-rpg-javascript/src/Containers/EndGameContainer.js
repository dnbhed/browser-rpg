import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import trophy from "../sprites/trophy.gif";
import victory from "../sounds/Victory.mp3";
import lose from "../sounds/Lose.mp3";

const EndGameContainer = ({ currentCharacter, currentPlayer }) => {
	if (!currentPlayer.id || !currentCharacter.maxHP) {
		return <Redirect to="/" />;
	}

<<<<<<< HEAD
        
    function printStatus(){
        if (currentCharacter.currentHP === 0 ){
            console.log(currentCharacter.currentHP)
            return (
                <Fragment>
                    <h1>You Lose. Try Again!!</h1>
                    <audio src={lose} autoPlay loop={true}/>
                </Fragment>
                )
            } else {
                return (
                    <Fragment>
                      <h1>You Win. Epic Time!</h1>
                      <audio src={victory} autoPlay loop={true}/>
                      <Link to="/battle">
                        <h1>Continue?</h1>
                      </Link>
                    </Fragment>
                    )
                }
                    
            }
                
    return (
        <div id="end-game-container">
            {printStatus()}
            <h1>Your new score is {currentCharacter.score}</h1>
            <img src={trophy} width="480px" height="480px" className="trophy" />
        </div>
    );
=======
	function printStatus() {
		if (currentCharacter.currentHP === 0) {
			console.log(currentCharacter.currentHP);
			return (
				<Fragment>
					<h1>You Lose. Try Again!!</h1>
					<audio src={lose} autoPlay loop={true} />
				</Fragment>
			);
		} else {
			return (
				<Fragment>
					<h1>You Win. Epic Time!</h1>
					<audio src={victory} autoPlay loop={true} />
				</Fragment>
			);
		}
	}

	return (
		<div id="end-game-container">
			{printStatus()}
			<h1>Your new score is {currentCharacter.score}</h1>
			<img src={trophy} width="480px" height="480px" className="trophy" />
			<Link to="/battle">
				<h1>Continue?</h1>
			</Link>
		</div>
	);
>>>>>>> develop
};

export default EndGameContainer;
