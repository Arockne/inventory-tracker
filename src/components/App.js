import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Inventory Tracker<span>🍌🍇🥬</span></h1>
    </div>
  )
}

function Navbar() {
  return (
    <nav>
      <button>Home</button>
      <button>Inventory</button>
      <button>New</button>
    </nav>
  )
}

function App() {
  return (
    <div className="App">
      {
        /*
        Header
        Navbar
        InventoryPage
        New
        */
      }
      <Header />
      <Navbar />
    </div>
  );
}

export default App;
