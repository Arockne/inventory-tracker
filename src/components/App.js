import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Home from './Home'
import InventoryPage from './InventoryPage'
import NewItem from './NewItem'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Home />
      <InventoryPage />
      <NewItem />
    </div>
  );
}

export default App;
