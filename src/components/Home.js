import React from 'react'
import TableTotals from './TableTotals'

function Home({ inventory }) {
  return (
    <div className="home">
      <h2>Welcome to my inventory food tracker</h2>
      <TableTotals inventory={inventory}/>
    </div>
  )
}

export default Home