import React from 'react'
import {Link} from 'react-router-dom'


const EndGameContainer = () => {
    return (
        <div id="end-game-container">
            <h1>You Win. Epic Time!</h1>
            <iframe src="https://giphy.com/embed/SHzl9RryJ4klFthKzD" width="480" height="480" frameBorder="0" class="trophy"></iframe>
           <Link to='/'>
              <h2>Continue?</h2>
            </Link>
        </div>
    )
}

export default EndGameContainer