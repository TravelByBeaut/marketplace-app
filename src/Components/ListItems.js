import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { listItem } from "../api";

export default function ListItems() {
  const [item, setItem] = useState({});
  const navigate = useNavigate();

  const handleItemName = (event) =>
    setItem((currItem) => {
      const itemCopy = { ...currItem };
      itemCopy.item_name = event.target.value;
      return itemCopy;
    });
  const handleDescription = (event) =>
    setItem((currItem) => {
      const itemCopy = { ...currItem };
      itemCopy.description = event.target.value;
      return itemCopy;
    });
  const handleCategory = (event) =>
    setItem((currItem) => {
      const itemCopy = { ...currItem };
      itemCopy.category_name = event.target.value;
      return itemCopy;
    });
  const handlePrice = (event) =>
    setItem((currItem) => {
      const itemCopy = { ...currItem };
      itemCopy.price = event.target.value;
      return itemCopy;
    });
  const handleImage = (event) =>
    setItem((currItem) => {
      const itemCopy = { ...currItem };
      itemCopy.img_url = event.target.value;
      return itemCopy;
    });
  const handleSubmit = (event) => {
    event.preventDefault();
    listItem(
      item.item_name,
      item.description,
      item.img_url,
      item.price,
      item.category_name
    )
      .then(() => {
        navigate("/items");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="list-items">
      <form>
        <textarea
          placeholder="item name"
          value={item.item_name}
          onChange={handleItemName}
          required
        />{" "}
        <textarea
          placeholder="description"
          value={item.description}
          onChange={handleDescription}
          required
        />{" "}
        <select value={item.category_name} onChange={handleCategory} required>
          <option>Electronics</option>
          <option>Household</option>
          <option>Clothing</option>
        </select>{" "}
        <textarea
          placeholder="price"
          value={item.price}
          onChange={handlePrice}
          required
        />{" "}
        <textarea
          placeholder="image"
          value={item.img_url}
          onChange={handleImage}
          required
        />{" "}
        <Link to="/items">
          <button type="submit" onClick={handleSubmit}>
            Create listing
          </button>
        </Link>
        <button onClick={refreshPage}>Delete Listing</button>
      </form>
    </div>
  );
}
