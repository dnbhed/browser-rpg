import React, {Fragment} from 'react'
import {Link, Redirect} from 'react-router-dom'


const EndGameContainer = ({currentCharacter, currentPlayer}) => {

    if (!currentPlayer.id || !currentCharacter.maxHP) {
        return (
            <Redirect to="/" />
        )
    }

    // if (currentPlayer.currentHP )

    return (
        <div id="end-game-container">
        
            <h1>You Win. Epic Time!</h1>
            <h1>Your new score is {currentCharacter.score}</h1>
            <iframe src="https://giphy.com/embed/SHzl9RryJ4klFthKzD" width="480" height="480" frameBorder="0" class="trophy"></iframe>
           <Link to='/'>
              <h2>Continue?</h2>
            </Link>
        </div>
    )
}

export default EndGameContainer