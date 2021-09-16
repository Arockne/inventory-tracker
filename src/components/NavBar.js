import React from 'react'
import { NavLink } from 'react-router-dom'

const active = {
  backgroundColor: 'black',
  color: 'red'
}

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/" activeStyle={active}>Home</NavLink>
      <NavLink exact to="/inventory" activeStyle={active}>Inventory</NavLink>
      <NavLink exact to="/new" activeStyle={active}>New</NavLink>
    </nav>
  )
}

export default NavBar