import React, { useState, useEffect } from 'react'
import Search from './Search'
import Items from './Items'

function InventoryPage({ inventory }) {
  return (
    <div className='inventory-page'>
      <Search />
      <br />
      <Items inventory={inventory}/>
    </div>
  )
}

export default InventoryPage