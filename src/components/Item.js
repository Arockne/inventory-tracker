import React from 'react'
import { Card, Image } from 'semantic-ui-react'

function Item({ item }) {
  const { id, name, category, image } = item
  return (
    <Card>
      <Image src={image} size="large" />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{`Category: ${category}`}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default Item