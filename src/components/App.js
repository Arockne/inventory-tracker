import React, { useState, useEffect } from 'react'
import HeaderBlock from './Header'
import NavBar from './NavBar'
import Home from './Home'
import InventoryPage from './InventoryPage'
import ItemForm from './ItemForm'
import { Route, Switch } from "react-router-dom";

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
    </div>
  );
}

export default App;
