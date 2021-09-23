import React from 'react'
import { Header, Table } from 'semantic-ui-react'

function TableTotal({ category, total}) {
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