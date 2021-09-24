import React from 'react'
import { Dropdown, Search as SearchBar } from 'semantic-ui-react'

function Search({ inventory, searchByName, setSearchByName, categoryFilter, setCategoryFilter }) {
  function handleSearchField(e) {
    setSearchByName(e.target.value)
  }

  function handleCategoryChange(e, { value }) {
    setCategoryFilter(value)
  }

  const moreOptions = inventory.reduce((a,b) => {
    if (!a.includes(b.category)) {
      a.push(b.category)
    }
    return a;
  },[]).map(item => ({ key:item, value:item, text:item }))
  
  return (
    <div className="search-container">
      <div className="search">
        <SearchBar  
          placeholder="Search By Name"
          showNoResults={false}
          value={searchByName}
          onSearchChange={handleSearchField}
        />
        <Dropdown 
          clearable
          placeholder="Filter By" 
          options={moreOptions} 
          value={categoryFilter} 
          onChange={handleCategoryChange}
        />
      </div>
    </div>
  )
}

export default Search