import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import trophy from "../sprites/trophy.gif";

const EndGameContainer = ({ currentCharacter, currentPlayer }) => {
	if (!currentPlayer.id || !currentCharacter.maxHP) {
		return <Redirect to="/" />;
	}

        
    function printStatus(){
        if (currentCharacter.currentHP === 0 ){
            console.log(currentCharacter.currentHP)
            return (
                <h1>You Lose. Try Again!!</h1>
                )
            } else {
                return (
                    <h1>You Win. Epic Time!</h1>
                    )
                }
                    
            }
                
    return (
        <div id="end-game-container">
            {printStatus()}
            <h1>Your new score is {currentCharacter.score}</h1>
            <img src={trophy} width="480px" height="480px" className="trophy" />
            <Link to="/">
                <h2>Continue?</h2>
            </Link>
        </div>
    );
};
            

export default EndGameContainer
