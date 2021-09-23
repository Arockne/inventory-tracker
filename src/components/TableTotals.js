import React from 'react'
import TableTotal from './TableTotal'
import { Table } from 'semantic-ui-react'

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
    return Math.round((a + b + Number.EPSILON) * 100) / 100
  }, 0)

  return (
    <Table basic='very' celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell>Totals</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {
          Object.entries(pricesByCategory).map(([cat, total]) => <TableTotal key={cat} category={cat} total={total}/>)
        }
        <TableTotal category={'Total Coast Of Goods'} total={totalSum}/>
      </Table.Body>
    </Table>
  )
}

export default TableTotals