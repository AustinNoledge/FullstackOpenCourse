import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  // 定义全局状态
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

  // 使用effect hook获取初始数据
  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  // 定义表单提交handle函数
  const handleChangeName = (event) => setNewName(event.target.value)
  const handleChangeNumber = (event) => setNewNumber(event.target.value)
  const handleChangeSearch = (event) => setSearch(event.target.value)
  
  // 定义添加函数（查重逻辑）
  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(each => (each.name === newName))) {
        alert(`${newName} is already added to the phonebook`)
    } else if (persons.some(each => (each.number === newNumber))) {
        alert(`${newNumber} is already added to the phonebook`)
    } else {
        const newPerson = {name: newName, number: newNumber}
        setPersons(persons.concat(newPerson))
        setNewName("")
        setNewNumber("")
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleChangeSearch={handleChangeSearch} />
      <h3>Add a new</h3>
      <PersonForm
        newName = {newName}
        newNumber = {newNumber}
        addPerson = {addPerson}
        handleChangeName = {handleChangeName}
        handleChangeNumber = {handleChangeNumber}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} search={search} />
      {/* {actualPersons.map(each => (<p key={each.name}>{each.name} {each.number}</p>))} */}
    </div>
  )
}

export default App