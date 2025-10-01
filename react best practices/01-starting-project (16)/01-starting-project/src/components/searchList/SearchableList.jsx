import React, { useRef, useState } from 'react'

const SearchableList = ({ items, children, keyGenerator }) => {
  const lastChange = useRef();
  const [searchTerm, setSearchterm] = useState("");

  function handleSearch(e) {
    // setSearchterm(e.target.value);
    if (lastChange.current) { // check if there exist a timer running to clear it and make a new one
      clearTimeout(lastChange.current); //extend the last timer
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchterm(e.target.value);
    }, 500); // wait 500ms to ensure no keystroke used
  }

  const searchResult = items.filter((item) => {
    return JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase());
  })

  return (
    <div className='searchable-list'>
          <input type='search' placeholder='search' onChange={handleSearch}/>
          <ul>
        {searchResult.map((item) => (<li key={keyGenerator(item)} >
          {children(item)}
        </li>))}
        </ul>
    </div>
  )
}

export default SearchableList
