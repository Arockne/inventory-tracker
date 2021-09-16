import React from 'react'
import Item from './Item'

function Items({ inventory }) {
  return (
    <div>
      {inventory.map(item => <Item key={item.id} item={item}/>)}
    </div>
  )
}

export default Items