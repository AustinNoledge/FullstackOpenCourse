import React, { useState } from 'react'
import SinglePage from './SinglePage'

const Results = ({countries, keyword, setKeyword}) => {
    const show = (keyword === "")
        ? countries
        : countries.filter(each => (each.name.toLowerCase().includes(keyword.toLowerCase())))

    if (show.length === 1) {
        const country = show[0]
        return(
            <SinglePage country={country} />
        )
    } else if (show.length > 1 && show.length <= 10) {
        return(
            <div>
                {show.map(each => (
                    <p key={each.name}>
                        {each.name} 
                        {/* 逻辑：expand之后改变keyword */}
                        <button onClick={() => setKeyword(each.name)}>Expand</button>
                    </p>
                ))}
            </div>
        )
    } else {
        return(
            <div>
                <p>Too many results, specific another filter</p>
            </div>
        )
    }
}

export default Results