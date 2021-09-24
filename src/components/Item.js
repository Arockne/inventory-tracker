import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

/*
const categoryOptions = [
  { key: 'meat', text:'Meat', value:'meat' },
  { key: 'poultry', text:'Poultry', value:'poultry' },
  { key: 'seafood', text:'Seafood', value:'seafood' },
  { key: 'dairy', text:'Dairy', value:'dairy'},
  { key: 'produce', text:'Produce', value:'produce' },
  { key: 'bakery', text:'Bakery and Desserts', value:'bakery' },
  { key: 'supplies', text:'Supplies', value:'supplies' },
  { key: 'beverages', text:'Beverages', value:'beverages' },
  { key: 'pantry', text:'Pantry Staples', value:'pantry' }
]
*/

function Item({ item }) {
  const { name, category, amount, unitMeasurement, image } = item
  const itemName = name.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')

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
            <button>✏️</button>
          </Link>
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