import React from 'react'
import TableTotal from './TableTotal'
import { Table } from 'semantic-ui-react'
import { totalCost } from '../helpers'

function TableTotals({ inventory }) {
  const pricesByCategory = inventory.reduce((a, b) => {
    if (!a[b.category]) {
      a[b.category] = totalCost(b);
    } else {
      a[b.category] += totalCost(b);
    }
    debugger;
    return a;
  }, {})
  
  const totalSum = Object.values(pricesByCategory).reduce((a,b) => {
    return Math.round((a + b) * 100) / 100
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
        <TableTotal category={'Total Cost Of Goods'} total={totalSum}/>
      </Table.Body>
    </Table>
  )
}

export default TableTotals