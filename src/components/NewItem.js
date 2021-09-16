import React from 'react'

function NewItem() {
  return (
    <form className="new-item">
      <label>Name:
        <input type="text" name="name" id="name" placeholder="Name..."/>
      </label>
      <label>Image:
        <input type="text" name="image" id="image" placeholder="Image..."/>
      </label>
      <label>Category:
        <select name="category">
          <option value="">-- Choose a Category --</option>
          <option value="meat">Meat</option>
          <option value="poultry">Poultry</option>
          <option value="seafood">Seafood</option>
          <option value="dairy">Dairy</option>
          <option value="produce">Produce</option>
          <option value="bakery">Bakery and Desserts</option>
          <option value="supplies">Supplies</option>
          <option value="beverages">Beverages</option>
          <option value="pantry">Pantry Staples</option>
        </select>
      </label>
      <input type="submit" value="Add Item"/>
    </form>
  )
}

export default NewItem