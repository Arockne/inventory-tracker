import React from 'react'
import { Card, Image } from 'semantic-ui-react'

function Item({ item }) {
  const { name, category, amount, unitMeasurement, image } = item
  const itemName = name.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
  
  return (
    <Card>
      <Image src={image} size="massive"/>
      <Card.Content>
        <Card.Header>
          {itemName}
          <button>✏️</button>
        </Card.Header>
        <Card.Description>
          {
            `
              Category: ${category}
              Amount: ${amount}${unitMeasurement}
            `
          }
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default Item