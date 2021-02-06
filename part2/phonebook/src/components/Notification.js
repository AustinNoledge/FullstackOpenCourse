import React from 'react'

const Notification = ({message, allWell}) => {
    if (message === "") {
        return null
    }
    if (allWell) {
        return(
        <div className="notification">
            {message}
        </div>
        )
    } else {
        return(
            <div className="error">
                {message}
            </div>
        )
    }
}

export default Notification