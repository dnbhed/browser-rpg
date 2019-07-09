import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'


const EndGameContainer = () => {


    return (
        <Fragment>
            <h1>You Win. Epic Time!</h1>
           <Link to='/'>
              <h2>Continue?</h2>
            </Link>
        </Fragment>
    )
}

export default EndGameContainer