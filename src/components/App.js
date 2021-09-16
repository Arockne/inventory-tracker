import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Home from './Home'
import InventoryPage from './InventoryPage'
import NewItem from './NewItem'
import { Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/inventory">
        <InventoryPage />
      </Route>
      <Route exact path="/new">
        <NewItem />
      </Route>
    </div>
  );
}

export default App;
