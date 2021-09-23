import React, { useState, useEffect } from 'react'
import { useParams, useHistory, useRouteMatch } from "react-router-dom";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
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

function ItemForm({ onAddItem, inventory }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    unitMeasurement: 'ea',
    amount: '',
    image: '',
    pricePerUnit: ''
  })

  const {name} = useParams()
  const history = useHistory()
  const match = useRouteMatch()
  const containsItem = inventory.some(item => item.name === name);

  useEffect(() => {
    if (name && containsItem) {
      const itemToChange = inventory.find(item => item.name === name);
      setFormData(itemToChange)
    }
  }, [name, inventory, containsItem])

  if (match.path === '/edit/:name' && !containsItem) {
    return <h1>404 not found!</h1>
  }

  function handleFormChange(e) {
    const {name, value} = e.target;
    const changes = { ...formData, [name]: value}
    setFormData(changes)
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!formData.category) {
      return;
    }

    const emptyFields =  {
      name: '',
      category: '',
      unitMeasurement: 'ea',
      amount: '',
      image: '',
      pricePerUnit: ''
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
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder="Name..." 
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input 
            type="text" 
            name="image" 
            id="image" 
            placeholder="Image..." 
            value={formData.image}
            onChange={handleFormChange}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select name="category" id="category" value={formData.category} onChange={handleFormChange}>
            <option value="">-- Choose a Category --</option>
            <option value="meat">Meat</option>
            <option value="poultry">Poultry</option>
            <option value="seafood">Seafood</option>
            <option value="dairy">Dairy</option>
            <option value="produce">Produce</option>
            <option value="bakery">Bakery and Desserts</option>
            <option value="supplies">Supplies</option>
            <option value="beverages">Beverages</option>
            <option value="pantry">Pantry Staples</option>
          </select>
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input 
            type="number"
            name="amount" 
            id="amount" 
            min="0" 
            placeholder="0.00"
            step=".01"
            value={formData.amount} 
            onChange={handleFormChange}
          />
          <select name="unitMeasurement" value={formData.unitMeasurement} onChange={handleFormChange}>
            <option value="ea">ea</option>
            <option value="oz">oz</option>
            <option value="lb">lb</option>
            <option value="g">g</option>
            <option value="kg">kg</option>
          </select>
        </div>
        <div>
          <label htmlFor="pricePerUnit">Price Per Unit:</label>
          <input 
            type="number" 
            name="pricePerUnit"
            id="pricePerUnit"
            min="0" 
            placeholder="0.00" 
            step=".01"
            value={formData.pricePerUnit}
            onChange={handleFormChange}
          />
        </div>
        <input type="submit" value={formData.id ? "Edit Item" : "Add Item"} />
      </form>
      <Form>
      <Form.Field 
        control={Input} 
        type="text" 
        label="Name" 
        placeholder="Name" 
      />
      <Form.Field 
        control={Input} 
        type="text" 
        label="Image" 
        placeholder="Image" 
      />
      <Form.Field 
        control={Select} 
        label="Category" 
        options={categoryOptions} 
        placeholder="Category"
      />
      <Form.Group inline>
        <Form.Field 
          control={Input} 
          type="number" 
          label="Amount" 
          placeholder="0.00"
        />
        <Form.Field 
          control={Select} 
          label="Unit" 
          options={unitOptions} 
          placeholder="Unit"
          />
      </Form.Group>
      <Form.Field 
        control={Input}
        type="number" 
        label="Price Per Unit" 
        placeholder="0.00"
      /> 
      <Form.Field control={Button}>Add Item</Form.Field>
    </Form>
    </div>
  )
}

export default ItemForm