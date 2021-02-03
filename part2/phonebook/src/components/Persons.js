import React from 'react'

const Persons = ({persons, search}) => {
    const actualPersons = (search === '')
        ? persons
        : persons.filter(each => (each.name.toLowerCase().includes(search.toLowerCase())))

    return(
        <div>
            {actualPersons.map(each => (<p key={each.name}>{each.name} {each.number}</p>))}
        </div>
    )
}

export default Persons