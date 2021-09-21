import React from 'react'
import { Search as SearchBar } from 'semantic-ui-react'

function Search({ searchByName, setSearchByName }) {
  function handleSearchField(e) {
    setSearchByName(e.target.value)
  }

  return (
    <form>
      <input 
        type="text"
        placeholder="Search By Name.."
        value={searchByName}
        onChange={handleSearchField}
      />
    </form>
  )
}

export default Search