import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  // 定义全局状态
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')
  const [ message, setMessage ] = useState('')
  const [ allWell, setAllWell ] = useState(true)
  
  // 定义表单提交handle函数
  const handleChangeName = (event) => setNewName(event.target.value)
  const handleChangeNumber = (event) => setNewNumber(event.target.value)
  const handleChangeSearch = (event) => setSearch(event.target.value)

  // 使用effect hook获取初始数据
  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
        // 推送屏幕通知
        setMessage("finished fetching data")
        setTimeout(() => {
          setMessage("")
        }, 1000)
      })
      .catch(error => {
        console.log("something wrong when fetching data from the server");
      })
  }, [])

  // 定义添加函数（查重逻辑）
  const addPerson = (event) => {
    event.preventDefault()
    // 防止重复添加
    // if (persons.some(each => (each.name === newName))) {
    //     // alert(`${newName} is already added to the phonebook`)
    //     if (window.confirm(`Do you want to overwrite ${newName} number?`)) {
    //       const target = persons.find(each => each.name === newName)
    //       const changePerson = {...target, number: newNumber}
    //       personService
    //         .update(target.id, changePerson)
    //         .then(response => {
    //           setPersons(persons.map(each => (each.name === newName) ? response : each))
    //           setNewName("")
    //           setNewNumber("")
    //           setMessage("finished overwriting this person")
    //           setTimeout(() => {
    //             setMessage("")
    //           }, 1000)
    //         })
    //     }
    // } else if (persons.some(each => (each.number === newNumber))) {
    //     alert(`${newNumber} is already added to the phonebook`)
    // } else {
    //     const newPerson = {name: newName, number: newNumber, id:persons.length+1}
    //     personService
    //       .create(newPerson)
    //       .then(response => {
    //         setPersons(persons.concat(response))
    //         setNewName("")
    //         setNewNumber("")
    //         setMessage("finished adding it to the server")
    //         setTimeout(() => {
    //           setMessage("")
    //         }, 1000)
    //       })
    // }
    const newPerson = {name: newName, number: newNumber}
    personService
      .create(newPerson)
      .then(response => {
        setPersons(persons.concat(response))
        setNewName("")
        setNewNumber("")
        setMessage("finished adding it to the server")
        setTimeout(() => {
          setMessage("")
        }, 1000)
      })
      .catch(error => {
        setAllWell(false)
        setMessage(error.response.data.err)
        setTimeout(() => {
          setMessage("")
          setAllWell(true)
        }, 5000)
      })
  }

  // 定义删除函数
  const removePerson = (id) => {
    if (window.confirm("delete this person?")) {
      personService
        .remove(id)
        .then(response => {
          setPersons(persons.filter(each => (each.id !== id)))
          setMessage("finished removing it")
          setTimeout(() => {
            setMessage("")
          }, 1000)
        })
        .catch(error => {
          setAllWell(false)
          setMessage("information of this person has been deleted")
          setTimeout(() => {
            setAllWell(true)
            setMessage("")
          }, 2000)
        })
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} allWell={allWell} />
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
      <ul>
        <Persons persons={persons} search={search} removeFunction={removePerson} />
      </ul>
      {/* {actualPersons.map(each => (<p key={each.name}>{each.name} {each.number}</p>))} */}
    </div>
  )
}

export default App