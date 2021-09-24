import React from 'react'
import { Header, Table } from 'semantic-ui-react'
import { capitalize } from '../helpers'

function TableTotal({ category, total}) {
  const label = capitalize(category)
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