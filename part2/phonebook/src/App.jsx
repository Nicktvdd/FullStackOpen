import { useState } from 'react'
import React from 'react'

const Name = ({ name }) => {
  return (
    <li>{name}</li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if (compareName(newName)) {
      alert(`${newName} is already in the phonebook`)
    }
    else {
      const nameObject = {
        name: newName,
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
  }

  const compareName = (name) => {
    return persons.some((person) => person.name === name)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    if (compareName)
      setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        name: <input value={newName}
          onChange={handleNameChange}
        />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      <ul>
        {persons.map(person =>
          <Name key={person.name} name={person.name} />
        )}
      </ul>
    </div>
  )
}

export default App