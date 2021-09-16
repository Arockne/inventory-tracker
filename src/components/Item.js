import React from 'react'

function Item({ item }) {
  const { id, name, category, image } = item
  return (
    <div>
      <img src={image} alt={name}/>
      <h3>{name}</h3>
      <button>Add</button>
    </div>
  )
}

export default Item