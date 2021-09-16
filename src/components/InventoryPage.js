import React, { useState, useEffect } from 'react'
import Search from './Search'
import Items from './Items'

function InventoryPage() {
  const [inventory, setInventory] = useState([])

  useEffect(() => {
    fetch('http://localhost:3004/inventory')
    .then(r => r.json())
    .then(setInventory)
  }, [])

  return (
    <div className='inventory-page'>
      <Search />
      <Items inventory={inventory}/>
    </div>
  )
}

export default InventoryPage