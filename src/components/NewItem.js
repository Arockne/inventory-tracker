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
function NewItem({ onAddItem }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    unitMeasurement: 'ea',
    amount: '',
    image: '',
    pricePerUnit: ''
  })

  function handleFormChange(e) {
    const {name, value} = e.target;
    const changes = { ...formData, [name]: value}
    setFormData(changes)
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!formData.category) {
      return;
    }

    const emptyFields =  {
      name: '',
      category: '',
      unitMeasurement: 'ea',
      amount: '',
      image: '',
      pricePerUnit: ''
    }

    formData.name = formData.name.trim().toLowerCase();
    formData.amount = parseFloat(formData.amount)
    formData.pricePerUnit = parseFloat(formData.pricePerUnit)

    fetch('http://localhost:3004/inventory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => {
      onAddItem(data)
      setFormData(emptyFields)
    })
  }

  return (
    <form className="new-item" onSubmit={handleFormSubmit}>
      <label>Name:
        <input 
          type="text" 
          name="name" 
          id="name" 
          placeholder="Name..." 
          value={formData.name}
          onChange={handleFormChange}
          required
        />
      </label>
      <label>Image:
        <input 
          type="text" 
          name="image" 
          id="image" 
          placeholder="Image..." 
          value={formData.image}
          onChange={handleFormChange}
          required
        />
      </label>
      <label>Category:
        <select name="category" value={formData.category} onChange={handleFormChange}>
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
          placeholder="0.00"
          step=".01"
          value={formData.amount} 
          onChange={handleFormChange}
        />
        <select name="unitMeasurement" value={formData.unitMeasurement} onChange={handleFormChange}>
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
          name="pricePerUnit"
          id="pricePerUnit"
          min="0" 
          placeholder="0.00" 
          step=".01"
          value={formData.pricePerUnit}
          onChange={handleFormChange}
        />
      </label>
      <input type="submit" value="Add Item" />
    </form>
  )
}

export default NewItem