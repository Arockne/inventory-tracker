import React, { useState, useEffect } from 'react'
import HeaderBlock from './Header'
import NavBar from './NavBar'
import Home from './Home'
import InventoryPage from './InventoryPage'
import ItemForm from './ItemForm'
import { Route } from "react-router-dom";

/*
You must make a single page application (only one index.html file) using create-react-app
Your app should use at least 5 components in a way that keeps your code well organized
There should be at least 3 client-side routes using react-router (Links to an external site.)
Use a json-server to create a RESTful API for your backend and make both a GET and a POST request to the json server. Additionally, you may choose to incorporate data from an external API but it is not required.
You should keep your json-server data simple: avoid nested data and associations. You'll learn how to work with more complex data in the next two phases. Focus on the frontend for this project.
Stretch Goals
Once you have met the minimum requirements, feel free to explore! These are only the basic requirements — you're free to add on as much stuff as you'd like.

Some ideas for stretch goals:

Incorporate data from an external API. Use this list of APIs (Links to an external site.) if you need some inspiration!
Add some styling: you're encouraged to write your CSS from scratch, either by using styled-components (Links to an external site.) or writing CSS files and using id/className to style your elements. You can also incorporate a UI framework (like react-bootstrap (Links to an external site.), semantic-ui (Links to an external site.) material-ui (Links to an external site.)) if you prefer.
*/

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

  return (
    <div className="App">
      <HeaderBlock />
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/inventory">
        <InventoryPage inventory={inventory} />
      </Route>
      <Route exact path="/new">
        <ItemForm onAddItem={handleAddItem}/>
      </Route>
      <Route exac path="/edit/:name">
        <ItemForm />
      </Route>
    </div>
  );
}

export default App;
