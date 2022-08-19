import React, { useEffect, useState } from "react";
import { listItem } from "../api";

export default function ListItems({ items, setItems, category, setCategory }) {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
 
  const handleItemName = (event) => setItems(event.target.value);
  const handleDescription = (event) => setDescription(event.target.value);
  const handleCategory = (event) => setCategory(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    listItem(
      items.item_name,
      items.description,
      items.img_url,
      price,
      items.category_name 
    )
      .then(({ data }) => { 
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="list-items">
      <form>
        <input
          placeholder="item name"
          value={items.item_name}
          onChange={handleItemName}
          required
        />{" "}
        <textarea
          placeholder="description"
          value={items.description}
          onChange={handleDescription}
          required
        />{" "}
        <textarea
          placeholder="category"
          value={items.category_name}
          onChange={handleCategory}
          required
        />{" "}
        <textarea
          placeholder="category"
          value={price}
          onChange={handleCategory}
          required
        />{" "}
        <button type="submit" onClick={handleSubmit}>
          List item
        </button>
      </form>
    </div>
  );
}
