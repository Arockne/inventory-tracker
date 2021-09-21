import React, { useState } from 'react'
import Search from './Search'
import Items from './Items'

function InventoryPage({ inventory }) {
  const [searchByName, setSearchByName] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')

  const inventoryResult = inventory.filter(item => { 
    if (categoryFilter) {
      return item.name.toLowerCase().includes(searchByName.toLowerCase()) && (item.category === categoryFilter)
    } 
    return item.name.toLowerCase().includes(searchByName.toLowerCase())
  })

  return (
    <div className='inventory-page'>
      <Search inventory={inventory} searchByName={searchByName} setSearchByName={setSearchByName} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter}/>
      <br />
      <Items inventory={inventoryResult}/>
    </div>
  )
}

export default InventoryPage