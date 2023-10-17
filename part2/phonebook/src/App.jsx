import { Component, useState, useEffect } from 'react'
import React from 'react'
import Filter from './components/filter'
import PersonForm from './components/personform'
import FilteredPersons from './components/filteredpersons'
import personService from './services/persons'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [message, setMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        console.log('effect')
        personService
            .getAll()
            .then(initialPersons => {
                console.log('promise fulfilled')
                setPersons(initialPersons)
            })
    }, [])
    console.log('render', persons.length, 'persons')

    const addPerson = (event) => {
        event.preventDefault()
        const existingPerson = persons.find((person) => person.name === newName)

        if (existingPerson) {
            if (window.confirm(`${newName} 
			is already added to the phonebook, 
			replace the old number with a new one?`)) {
                const updatedPerson = {
                    ...existingPerson,
                    number: newNumber
                }
                personService
                    .update(existingPerson.id, updatedPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map((person) => (person.id === returnedPerson.id ? returnedPerson : person)))
                        setNewName('')
                        setNewNumber('')
                        setPersons(persons.filter(p => p.id !== id))
                    })
                    .catch(error => {
                        setErrorMessage(
                            `Information of ${existingPerson.name} has already been removed from server`
                        )
                        setTimeout(() => {
                            setErrorMessage(null)
                        }, 5000)
                    })
            }
        }
        else {
            const personObject = {
                name: newName,
                number: newNumber,
            }
            personService
                .create(personObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')
                    setMessage(
                        `Added ${personObject.name} `
                    )
                    setTimeout(() => {
                        setMessage(null)
                    }, 5000)
                })
                .catch(error => {
                    setErrorMessage('Validation error')
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 5000)
                })
        }
    }

    const Notification = ({ message }) => {
        if (message === null) {
            return null
        }
        const addedStyle = {
            color: 'green',
            background: 'lightgrey',
            fontSize: 20,
            borderStyle: 'solid',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10
        }
        return (
            <div style={addedStyle}>
                {message}
            </div>
        )
    }

    const Error = ({ errorMessage }) => {
        if (errorMessage === null) {
            return null
        }
        const errorStyle = {
            color: 'red',
            background: 'lightgrey',
            fontSize: 20,
            borderStyle: 'solid',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10
        }
        return (
            <div style={errorStyle}>
                {errorMessage}
            </div>
        )
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilter = (event) => {
        setFilter(event.target.value)
    }

    const handleDeletePerson = (id, name) => {
        if (window.confirm(`are you sure you want to delete ${name} from the phonebook?`)) {
            personService
                .remove(id)
                .then((data) => {
                    console.log(`Person with id ${id} removed successfully`);
                    setPersons(persons.filter(person => person.id !== id))
                })
        }
    }

    const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={message} />
            <Error errorMessage={errorMessage} />
            <Filter filter={filter} handleFilter={handleFilter} />
            <h3>Add a new contact</h3>
            <PersonForm addPerson={addPerson} newName={newName}
                handleNameChange={handleNameChange} newNumber={newNumber}
                handleNumberChange={handleNumberChange} />
            <h3>Numbers</h3>
            <FilteredPersons filteredPersons={filteredPersons} handleDeletePerson={handleDeletePerson} />
        </div>
    )
}

export default App


