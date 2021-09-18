import React from 'react'
import { Card, Form, Image, Input } from 'semantic-ui-react'

function Item({ item }) {
  const { id, name, category, image } = item
  const itemName = `${name[0].toUpperCase()}${name.slice(1)}`
  return (
    <Card>
      <Image src={image} size="large" />
      <Card.Content>
        <Card.Header>{itemName}</Card.Header>
        <Card.Description>{`Category: ${category}`}</Card.Description>
        <Form size="tiny">
          <Input type="number" min="1" />
          <Input type="submit" value="Add"/>
        </Form>
      </Card.Content>
    </Card>
  )
}

export default Item