import React from 'react'
import TableTotals from './TableTotals'

/*
I need to create two functions
  One that grabs the total price of all items in inventory
  once that grabs the price 
*/
function Home({ inventory }) {
  const pricesByCategory = inventory.reduce((a, b) => {
    const currentItemTotal = (Math.round(((parseFloat(b.pricePerUnit) * parseFloat(b.amount)) + Number.EPSILON) * 100)) / 100;
    if (!a[b.category]) {
      a[b.category] = currentItemTotal;
    } else {
      a[b.category] += currentItemTotal;
    }
    return a;
  }, {})

  return (
    <div className="home">
      <h2>Welcome to my inventory food tracker</h2>
      <TableTotals />
    </div>
  )
}

export default Home