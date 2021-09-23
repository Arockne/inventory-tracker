import React from 'react'
import { Header, Table } from 'semantic-ui-react'

function TableTotal({ categoryTotal }) {
  const [category, total] = categoryTotal
  const label = category.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
  return (
    <Table.Row>
      <Table.Cell>
        <Header as="h4">
          <Header.Content>{label}</Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>{`$${total}`}</Table.Cell>
    </Table.Row>
  )
}

export default TableTotal