import React from 'react'
import { Search as SearchBar } from 'semantic-ui-react'

function Search({ inventory, searchByName, setSearchByName }) {
  function handleSearchField(e) {
    setSearchByName(e.target.value)
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
        <select>
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