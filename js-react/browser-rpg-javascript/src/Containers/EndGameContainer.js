<<<<<<< HEAD
import React, {Fragment} from 'react'
import {Link, Redirect} from 'react-router-dom'


const EndGameContainer = ({currentCharacterScore, currentCharacter, currentPlayer}) => {

    // if (!currentPlayer.id || !currentCharacter.maxHP) {
    //     return (
    //         <Redirect to="/" />
    //     )
    // }

=======
import React from 'react'
import {Link} from 'react-router-dom'


const EndGameContainer = () => {
>>>>>>> develop
    return (
        <div id="end-game-container">
            <h1>You Win. Epic Time!</h1>
<<<<<<< HEAD
            <h1>Your new score is {currentCharacterScore}</h1>
=======
            <iframe src="https://giphy.com/embed/SHzl9RryJ4klFthKzD" width="480" height="480" frameBorder="0" class="trophy"></iframe>
>>>>>>> develop
           <Link to='/'>
              <h2>Continue?</h2>
            </Link>
        </div>
    )
}

export default EndGameContainer