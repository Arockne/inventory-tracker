import React, { useState } from 'react'


/*
    {
      "id": 3, 
      "name": "peas",
      "category": "produce", 
      "unitMeasurement": "lb", 
      "amount": 1,
      "image": "https://images.unsplash.com/photo-1615485500710-aa71300612aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
*/
function NewItem() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    unitMeasurement: 'ea',
    amount: '',
    image: '',
    price: ''
  })
  //console.log(formData)

  function onFormChange(e) {
    const {name, value} = e.target;
    const changes = { ...formData, [name]: value}
    setFormData(changes)
  }

  return (
    <form className="new-item">
      <label>Name:
        <input 
          type="text" 
          name="name" 
          id="name" 
          placeholder="Name..." 
          value={formData.name}
          onChange={onFormChange}
        />
      </label>
      <label>Image:
        <input 
          type="text" 
          name="image" 
          id="image" 
          placeholder="Image..." 
          value={formData.image}
          onChange={onFormChange}
        />
      </label>
      <label>Category:
        <select name="category" value={formData.category} onChange={onFormChange}>
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
      <label>Amount:
        <input 
          type="number"
          name="amount" 
          id="amount" 
          min="0" 
          value={formData.amount} 
          onChange={onFormChange}
        />
        <select name="unitMeasurement" value={formData.unitMeasurement} onChange={onFormChange}>
          <option value="ea">ea</option>
          <option value="oz">oz</option>
          <option value="lb">lb</option>
          <option value="g">g</option>
          <option value="kg">kg</option>
        </select>
      </label>
      <label>Price Per Unit:
        <input 
          type="number" 
          name="price"
          id="price"
          min="0" 
          placeholder="0.00" 
          value={formData.price}
          onChange={onFormChange}
        />
      </label>
      <input type="submit" value="Add Item" />
    </form>
  )
}

export default NewItem