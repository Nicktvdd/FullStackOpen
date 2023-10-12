import React from 'react'
const baseUrl = 'http://localhost:3001/persons'
import axios from 'axios'

const Remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const handleDeletePerson = (id) => {
  Remove(id)
    .then((data) => {
      console.log(`Person with id ${id} removed successfully`);
    })
}

const FilteredPersons = ({ filteredPersons, onDeletePerson }) => {
  return <div>
    {filteredPersons.map(person => <div key={person.name}>{person.name}: 
    {person.number} <button onClick={() => 
    handleDeletePerson(person.id)}>delete</button></div>
    )}
  </div>;
}

export default FilteredPersons