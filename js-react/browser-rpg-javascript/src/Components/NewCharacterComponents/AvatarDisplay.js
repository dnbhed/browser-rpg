import React from 'react'
import './AvatarDisplayGrid.css';
import joe from '../../sprites/joe.gif'
import alison from '../../sprites/alison.gif'
import kenny from '../../sprites/kenny.gif'
import alex from '../../sprites/alex.gif'

const AvatarDisplay = ({handleClick}) => {

    return(
            <div className="grid-container" onClick={handleClick}>
                <h1 className="select-sprite">Select Sprite</h1>
            <div className="grid-item"  >
                < img id="1" src={joe}/>
            </div>
            <div className="grid-item" >
                < img id="2" src={alison}/>
            </div>
            <div className="grid-item" >
            < img id="3" src={kenny}/>
            </div>
            <div className="grid-item" >
                < img id="4" src={alex}/>
            </div>
            <div className="grid-item" id="5">5</div>
            <div className="grid-item" id="6">6</div>
            </div>
    )
}

export default AvatarDisplay