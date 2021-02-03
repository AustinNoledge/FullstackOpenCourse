import React from 'react'

const PersonForm = ({newName, newNumber, addPerson, handleChangeName, handleChangeNumber}) => {

    return(
        <form onSubmit={addPerson}>
        <h2>Add a new person</h2>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm