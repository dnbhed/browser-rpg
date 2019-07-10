import React, {Fragment} from 'react'
import {Link, Redirect} from 'react-router-dom'


const EndGameContainer = ({currentCharacterScore, currentCharacter, currentPlayer}) => {

    // if (!currentPlayer.id || !currentCharacter.maxHP) {
    //     return (
    //         <Redirect to="/" />
    //     )
    // }

    return (
        <Fragment>
            <h1>You Win. Epic Time!</h1>
            <h1>Your new score is {currentCharacterScore}</h1>
           <Link to='/'>
              <h2>Continue?</h2>
            </Link>
        </Fragment>
    )
}

export default EndGameContainer