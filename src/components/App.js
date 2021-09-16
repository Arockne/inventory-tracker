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

function NewItem() {
  return (
    <form>
      <label>Name:
        <input type="text" name="name" id="name" placeholder="Name..."/>
      </label>
      <label>Image:
        <input type="text" name="image" id="image" placeholder="Image..."/>
      </label>
      <label>Category:
        <select name="category">
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
      </label>
      <input type="submit" value="Add Item"/>
    </form>
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
      <NewItem />
    </div>
  );
}

export default App;
