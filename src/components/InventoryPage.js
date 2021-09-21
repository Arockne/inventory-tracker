import React, { useState, useEffect } from 'react'
import Search from './Search'
import Items from './Items'

function InventoryPage({ inventory, searchByName, setSearchByName }) {
  return (
    <div className='inventory-page'>
      <Search inventory={inventory} searchByName={searchByName} setSearchByName={setSearchByName}/>
      <br />
      <Items inventory={inventory}/>
    </div>
  )
}

export default InventoryPage