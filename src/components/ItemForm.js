import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newForm, setNewForm] = useState({
    name: "",
    category: "Produce"
  })

  function handleChange (e) {
    const name = e.target.name
    const value = e.target.value

    setNewForm(newForm => ({
      ...newForm,
      [name] : value
    }))
  }
  function handleSubmit (e) {
    e.preventDefault()
    onItemFormSubmit({
      id: uuid(),
      ...newForm
    })
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={newForm.name}/>
      </label>

      <label>
        Category:
        <select name="category" value={newForm.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
