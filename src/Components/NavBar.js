import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../api";

export default function NavBar({ setCategory }) {
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
          <Link to={`items/${category.category_name}`}>
            <button key={category.category_name} value={category.category_name}>
              {category.category_name}
            </button>
          </Link>
        );
      })}
    </>
  );
}
