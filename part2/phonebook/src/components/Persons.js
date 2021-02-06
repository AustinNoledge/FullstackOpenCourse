import React from 'react'

const Persons = ({persons, search, removeFunction}) => {
    const actualPersons = (search === '')
        ? persons
        : persons.filter(each => (each.name.toLowerCase().includes(search.toLowerCase())))

    return(
        <div>
            {actualPersons.map(each => (
                <p key={each.name}>
                    {each.name} {each.number} <button onClick={() => removeFunction(each.id)}>delete</button>
                </p>
            ))}
        </div>
    )
}

export default Persons