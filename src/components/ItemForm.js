import React, { useState, useEffect } from 'react'
import { useParams, useHistory, useRouteMatch } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  Select,
} from 'semantic-ui-react'

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

const unitOptions = [
  { key: 'ea', text:'ea', value:'ea' },
  { key: 'oz', text: 'oz', value:'oz' },
  { key: 'lb', text:'lb', value:'lb' },
  { key: 'g', text:'g', value:'g' },
  { key: 'kg', text:'kg', value:'kg' }
]

const emptyFields =  {
  name: '',
  category: '',
  unitMeasurement: 'ea',
  amount: '',
  image: '',
  pricePerUnit: ''
}

function ItemForm({ onAddItem, inventory }) {
  const [formData, setFormData] = useState(emptyFields)

  const {name} = useParams()
  const history = useHistory()
  const match = useRouteMatch()
  const containsItem = inventory.some(item => item.name === name);

  useEffect(() => {
    if (name && containsItem) {
      const itemToChange = inventory.find(item => item.name === name);
      setFormData(itemToChange)
    } else {
      setFormData(emptyFields)
    }
  }, [name, inventory, containsItem])

  if (match.path === '/edit/:name' && !containsItem) {
    return <h1>404 not found!</h1>
  }

  function handleFormChange(e, { name, value }) {
    const changes = { ...formData, [name]: value}
    setFormData(changes)
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!formData.category) {
      return;
    }

    formData.name = formData.name.trim().toLowerCase();
    formData.amount = parseFloat(formData.amount)
    formData.pricePerUnit = parseFloat(formData.pricePerUnit)
    
    if (formData.id) {
      fetch(`http://localhost:3004/inventory/${formData.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(r => r.json())
      .then(data => {
        onAddItem(data)
        setFormData(emptyFields)
        history.push('/inventory')
      })

    } else {
      fetch('http://localhost:3004/inventory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(r => r.json())
      .then(data => {
        onAddItem(data)
        setFormData(emptyFields)
        history.push('/inventory')
      })
    }
  }

  return (
    <div className="item-form">
      <Form onSubmit={handleFormSubmit}>
        <Form.Field 
          control={Input} 
          type="text" 
          label="Name" 
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
          required
        />
        <Form.Field 
          control={Input} 
          type="text" 
          label="Image" 
          placeholder="Image" 
          name="image"
          value={formData.image}
          onChange={handleFormChange}
          required
        />
        <Form.Field 
          control={Select} 
          label="Category" 
          options={categoryOptions} 
          placeholder="Category"
          name="category"
          value={formData.category} 
          onChange={handleFormChange}
          required
        />
        <Form.Group>
          <Form.Field 
            control={Input} 
            type="number" 
            label="Amount" 
            placeholder="0.00"
            step=".01"
            min="0"
            name="amount"
            value={formData.amount} 
            onChange={handleFormChange}
            required
          />
          <Form.Field 
            control={Select} 
            label="Unit" 
            options={unitOptions} 
            placeholder="Unit"
            name="unitMeasurement" 
            value={formData.unitMeasurement} 
            onChange={handleFormChange}
            required
          />
        </Form.Group>
        <Form.Field 
          control={Input}
          type="number" 
          label="Price Per Unit" 
          placeholder="0.00"
          step=".01"
          min="0"
          name="pricePerUnit"
          value={formData.pricePerUnit}
          onChange={handleFormChange}
          required
        /> 
        <Form.Field 
          control={Button} 
          className="submit" 
          color="black" 
          size="medium"
          fluid 
        >
        {formData.id ? "Edit Item" : "Add Item"}
        </Form.Field>
      </Form>
    </div>
  )
}

export default ItemForm