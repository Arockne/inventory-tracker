import React from 'react'

function TableTotals({ inventory }) {
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
    <table></table>
  )
}

export default TableTotals