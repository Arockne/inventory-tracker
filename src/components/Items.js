import React from 'react'
import { Card } from 'semantic-ui-react'
import Item from './Item'

function Items({ inventory }) {
  return (
    <Card.Group itemsPerRow={6}>
      {inventory.map(item => <Item key={item.id} item={item}/>)}
    </Card.Group>
  )
}

export default Items