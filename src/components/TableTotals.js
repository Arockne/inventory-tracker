import React from 'react'
import TableTotal from './TableTotal'
import { Header, Image, Table } from 'semantic-ui-react'

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
  
  const totalSum = Object.values(pricesByCategory).reduce((a,b) => {
    console.log(a);
    return Math.round((a + b + Number.EPSILON) * 100) / 100
  }, 0)

  return (
    <Table basic='very' celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell>Total Cost</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      </Table.Body>
    </Table>
  )
}

export default TableTotals