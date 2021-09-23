import React from 'react'
import TableTotals from './TableTotals'

/*
I need to create two functions
  One that grabs the total price of all items in inventory
  once that grabs the price 
*/
function Home({ inventory }) {
  return (
    <div className="home">
      <h2>Welcome to my inventory food tracker</h2>
      <TableTotals inventory={inventory}/>
    </div>
  )
}

export default Home