import React, {Fragment} from 'react'
import './AvatarDisplayGrid.css';
import joe from '../../sprites/joe.gif'
import alison from '../../sprites/alison.gif'
import kenny from '../../sprites/kenny.gif'
import alex from '../../sprites/alex.gif'

const CurrentSprite = ({selectedSprite}) => {

    const sprites = [joe, alison, kenny, alex]


    return(
        <Fragment>
           <h1>Selected Sprite</h1>
           <img src={sprites[selectedSprite - 1]} />
        </Fragment>
    )

}

export default CurrentSprite