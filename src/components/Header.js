import React from 'react'
import { Header as Title }  from 'semantic-ui-react'

function Header() {
  return (
    <Title as="h1">
      <Title.Content>
        📋 <span className="title">Inventory Tracker</span> 🧮
      </Title.Content>
    </Title>
  )
}

export default Header