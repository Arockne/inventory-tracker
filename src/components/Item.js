import React from 'react'
import { Card, Form, Image, Input } from 'semantic-ui-react'


/*
    {
      "id": 3, 
      "name": "peas",
      "category": "produce", 
      "unitMeasurement": "lb", 
      "amount": 1,
      "image": "https://images.unsplash.com/photo-1615485500710-aa71300612aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
*/
function Item({ item }) {
  const { id, name, category, amount, unitMeasurement, image } = item
  const itemName = `${name[0].toUpperCase()}${name.slice(1)}`
  return (
    <Card>
      <Image src={image} size="large" />
      <Card.Content>
        <Card.Header>{itemName}</Card.Header>
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