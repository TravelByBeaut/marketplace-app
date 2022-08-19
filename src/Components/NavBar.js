import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../api";

export default function NavBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories()
      .then(({ categories }) => {
        setCategories(categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {categories.map((category) => {
        return (
          <Link
            to={`items/${category.category_name} `}
            key={category.category_name}
          >
            <button value={category.category_name}>
              {category.category_name}
            </button>
          </Link>
        );
      })}
      <Link to="/items/addItem">
        <button>List item</button>
      </Link>
    </>
  );
}
