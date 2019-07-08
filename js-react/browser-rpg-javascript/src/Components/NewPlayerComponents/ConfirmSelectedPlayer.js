import React from 'react'

const ConfirmSelectedPlayer = () => {
    
    function handleClick(event){
        event.preventDefault()
    }

    return (
        <button onClick={handleClick}>
            Confirm Player
        </button>
    )
}

export default ConfirmSelectedPlayer