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

function Home() {
  return (
    <div>
      <h2>Welcome to my inventory foood tracker</h2>
    </div>
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
      <Home />
    </div>
  );
}

export default App;
