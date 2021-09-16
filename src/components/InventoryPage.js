import React, { useState, useEffect } from 'react'
import Search from './Search'
import Item from './Item'

function InventoryPage() {
  const [masterInventory, setMasterInventory] = useState([])

  useEffect(() => {
    fetch('http://localhost:3004/inventory')
    .then(r => r.json())
    .then(setMasterInventory)
  }, [])
  
  return (
    <div className='inventory-page'>
      <Search />
      
    </div>
  )
}

export default InventoryPage