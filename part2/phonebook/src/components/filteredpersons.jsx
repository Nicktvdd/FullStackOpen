import React from 'react'
const baseUrl = 'http://localhost:3001/persons'
import axios from 'axios'

const FilteredPersons = ({ filteredPersons, handleDeletePerson }) => {
  return <div>
    {filteredPersons.map(person => <div key={person.name}>{person.name}: 
    {person.number} <button onClick={() => 
    handleDeletePerson(person.id)}>delete</button></div>
    )}
  </div>;
}

export default FilteredPersons