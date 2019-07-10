import React, {Fragment} from 'react'
import {Link, Redirect} from 'react-router-dom'
import trophy from '../sprites/trophy.gif'


const EndGameContainer = ({currentCharacterScore, currentCharacter, currentPlayer}) => {

    // if (!currentPlayer.id || !currentCharacter.maxHP) {
    //     return (
    //         <Redirect to="/" />
    //     )
    // }

    return (
        <div id="end-game-container">
            <h1>You Win. Epic Time!</h1>
            <h1>Your new score is {currentCharacterScore}</h1>
            <img src={trophy} width="480px" height="480px" className="trophy"/>
           <Link to='/'>
              <h2>Continue?</h2>
            </Link>
        </div>
    )
}

export default EndGameContainer