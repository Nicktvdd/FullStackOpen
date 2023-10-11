import React from 'react';

const FilteredPersons = ({ filteredPersons }) => {
  return <div>
    {filteredPersons.map(person => <div key={person.name}>{person.name}: {person.number}</div>
    )}
  </div>;
}

export default FilteredPersons