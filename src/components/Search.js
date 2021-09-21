import React from 'react'
import { Search as SearchBar } from 'semantic-ui-react'

function Search({ inventory, searchByName, setSearchByName, categoryFilter }) {
  function handleSearchField(e) {
    setSearchByName(e.target.value)
  }

  function handleCategoryChange(e) {
    
  }

  const categoryOptions = inventory.reduce((a,b) => {
    console.log(a)
    if (!a.includes(b.category)) {
      a.push(b.category)
    }
    return a;
  },[]).map(item => <option key={item} value={item}>{item}</option>)
  
  return (
    <form>
      <label>Category:
        <select value={categoryFilter} onChange={handleCategoryChange}>
          <option value="">-- --</option>
          {
            categoryOptions
          }
        </select>
      </label>
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