import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyle = {
  padding: '1% 2%',
  'borderRadius': '4px',
  'textDecoration': 'none'
}

const active = {
  backgroundColor: 'black',
  color: 'red'
}

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/" style={linkStyle} activeStyle={active}>Home</NavLink>
      <NavLink exact to="/inventory" style={linkStyle} activeStyle={active}>Inventory</NavLink>
      <NavLink exact to="/new" style={linkStyle} activeStyle={active}>New</NavLink>
    </nav>
  )
}

export default NavBar