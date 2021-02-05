import React, { useState } from 'react'

const Search = ({keyword, changeKeyword}) => {
    
    return(
        <div>
            Find Countries
            <input value={keyword} onChange={changeKeyword} />
        </div>
    )
}

export default Search