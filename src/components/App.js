import React from 'react'

function Header() {
  return (
    <div>
      <h1>Inventory Tracker<span>🍌🍇🥬</span></h1>
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
       <Header />
      }
    </div>
  );
}

export default App;
