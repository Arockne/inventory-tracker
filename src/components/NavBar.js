import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyle = {
  margin: '0 1rem',
  padding: '1% 3%',
  color: 'red',
  border: 'red solid 1px',
  'textDecoration': 'none',
  'borderRadius': '20px'
}

const active = {
  margin: '0 1rem',
  padding: '1% 3%',
  color: 'red',
  border: 'red solid 1px',
  backgroundColor: 'black',
  'textDecoration': 'none',
  'borderRadius': '20px'
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