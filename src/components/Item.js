import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import { Link } from "react-router-dom";

function Item({ item }) {
  const { name, category, amount, unitMeasurement, image, pricePerUnit } = item
  const itemName = name.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
  const totalCost = (Math.round(((parseFloat(pricePerUnit) * parseFloat(amount)) + Number.EPSILON) * 100)) / 100

  function cardColor({ category }) {
    switch(category) {
      case 'meat':
        return 'red';
      case 'poultry':
        return 'yellow';
      case 'seafood':
        return 'blue';
      case 'dairy':
        return 'orange'
      case 'produce':
        return 'green';
      case 'bakery':
        return 'black';
      case 'supplies':
        return 'purple';
      case 'beverages':
        return 'olive'
      case 'pantry':
        return 'brown'
      default :
        return null;
    }
  }

  return (
    <Card color={cardColor(item)}>
      <Image src={image} size="massive"/>
      <Card.Content>
        <Card.Header>
          {itemName}
          <Link to={`./edit/${name}`}>
            <Icon name="write" size="small" color="black"/>
          </Link>
        </Card.Header>
        <Card.Description content={`Category: ${category}`} />
        <Card.Description content={`Amount: ${amount}${unitMeasurement}`} />
        <Card.Description content={`Total Cost: $${totalCost}`} />
      </Card.Content>
    </Card>
  )
}

export default Item