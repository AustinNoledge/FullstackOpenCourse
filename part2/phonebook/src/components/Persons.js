import React from 'react'

const Persons = ({persons, search, removeFunction}) => {
    const actualPersons = (search === '')
        ? persons
        : persons.filter(each => (each.name.toLowerCase().includes(search.toLowerCase())))

    return(
        <div>
            {actualPersons.map(each => (
                <li key={each.name} className="note">
                    {each.Name} {each.Number} <button onClick={() => removeFunction(each.id)}>delete</button>
                </li>
            ))}
        </div>
    )
}

export default Persons