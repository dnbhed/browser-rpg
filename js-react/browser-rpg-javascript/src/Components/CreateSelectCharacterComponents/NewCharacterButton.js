import React from 'react'
import { Link } from 'react-router-dom'


const NewCharacterButton = () => {

    return (
        <h2 id="new-character-button" className="button">
            <Link to="/new-character">Create New Character...</Link>
        </h2>
    )


}

export default NewCharacterButton