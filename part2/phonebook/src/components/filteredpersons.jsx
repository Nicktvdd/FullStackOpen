import React from 'react'

const FilteredPersons = ({ filteredPersons, handleDeletePerson }) => {
  return <div>
    {filteredPersons.map(person => <div key={person.name}>{person.name}: 
    {person.number} <button onClick={() => 
    handleDeletePerson(person.id, person.name)}>delete</button></div>
    )}
  </div>;
}

export default FilteredPersons