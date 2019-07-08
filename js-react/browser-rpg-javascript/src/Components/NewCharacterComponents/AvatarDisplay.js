import React, {Fragment} from 'react'
import './AvatarDisplayGrid.css';

const AvatarDisplay = ({handleClick}) => {

    return(
        <Fragment>
            <div className="grid-container" onClick={handleClick}>
            <div className="grid-item" id="1" >1</div>
            <div className="grid-item" id="2">2</div>
            <div className="grid-item" id="3">3</div>
            <div className="grid-item" id="4">4</div>
            <div className="grid-item" id="5">5</div>
            <div className="grid-item" id="6">6</div>
            </div>
        </Fragment>
    )

}

export default AvatarDisplay