import React from 'react'
import { directive, typeAlias } from '@babel/types';
import { format } from 'url';

const NewPlayerCreationButton = () => {

    // onClick should reveal new player creation form 
    function revealNewPlayerForm(){
        document.getElementById("new-player-form").style.display = "block"
    }

    return (
        <button id="player-creation-button" onClick={revealNewPlayerForm}>
            Create New Player
        </button>
    )
}


export default NewPlayerCreationButton