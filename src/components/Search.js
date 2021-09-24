import React from 'react'
import { Input, Search as SearchBar } from 'semantic-ui-react'

function Search({ inventory, searchByName, setSearchByName, categoryFilter, setCategoryFilter }) {
  function handleSearchField(e) {
    console.log(e)
    setSearchByName(e.target.value)
  }

  function handleCategoryChange(e) {
    setCategoryFilter(e.target.value)
  }

  const categoryOptions = inventory.reduce((a,b) => {
    if (!a.includes(b.category)) {
      a.push(b.category)
    }
    return a;
  },[]).map(item => <option key={item} value={item}>{item}</option>)
  
  return (
    <form>
      <label>Filter By:
        <select value={categoryFilter} onChange={handleCategoryChange}>
          <option value="">-- --</option>
          {
            categoryOptions
          }
        </select>
      </label>
    <SearchBar  
      placeholder="Search By Name"
      showNoResults={false}
      value={searchByName}
      onSearchChange={handleSearchField}
    />
    </form>
  )
}

export default Search