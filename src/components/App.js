import React, { useState, useEffect } from 'react'
import HeaderBlock from './Header'
import NavBar from './NavBar'
import Home from './Home'
import InventoryPage from './InventoryPage'
import ItemForm from './ItemForm'
import { Route, Switch } from "react-router-dom";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react'

/*
            <option value="ea">ea</option>
            <option value="oz">oz</option>
            <option value="lb">lb</option>
            <option value="g">g</option>
            <option value="kg">kg</option>
*/

function NewForm() {
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
  return (
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
  )
}


function App() {
  const [inventory, setInventory] = useState([])

  useEffect(() => {
    fetch('http://localhost:3004/inventory')
    .then(r => r.json())
    .then(setInventory)
  }, [])

  function handleAddItem(item) {
    setInventory([ ...inventory, item ])
  }

  function handleItemEdit(itemEdit) {
    setInventory(inventory.map(item => {
      if (item.id === itemEdit.id) {
        return itemEdit
      }
      return item
    }))
  }

  return (
    <div className="App">
      <HeaderBlock />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home inventory={inventory}/>
        </Route>
        <Route exact path="/inventory">
          <InventoryPage inventory={inventory} />
        </Route>
        <Route exact path="/new">
          <ItemForm onAddItem={handleAddItem} inventory={inventory}/>
        </Route>
        <Route exac path="/edit/:name">
          <ItemForm onAddItem={handleItemEdit} inventory={inventory}/>
        </Route>
        <Route path="/*">
          <h1>404 Not Found!</h1>
        </Route>
      </Switch>
      <NewForm />
    </div>
  );
}

export default App;
