import React, {Fragment} from 'react'

const AvatarSelector = ({spriteID}) => {



    return(
        <Fragment>
            <label>Sprite ID</label>
            <input
            type="number"
            value={spriteID}
            />
        </Fragment>
    )

}

export default AvatarSelector