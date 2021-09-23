import React from 'react'
import { Header, Table } from 'semantic-ui-react'

function TableTotal() {
  return (
    <Table.Row>
      <Table.Cell>
        <Header as="h4">
          <Header.Content></Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell></Table.Cell>
    </Table.Row>
  )
}

export default TableTotal