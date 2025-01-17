import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  const itemsToDisplay = itemsDisplay.filter(item => {
    let toBeSearched = item.name.toLowerCase()
    let searched = toBeSearched.includes(search.toLowerCase())
    return searched
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter 
        onCategoryChange={handleCategoryChange}
        search={search}
        onSearchChange={setSearch} 
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
