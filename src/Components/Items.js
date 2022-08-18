import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchItemsByCategory, fetchItems } from "../api";

export default function Items() {
  const [items, setItems] = useState([]);
  const { category_name } = useParams();

  useEffect(() => {
    if (!category_name) {
      fetchItems()
        .then((data) => {
          setItems(data.items);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      fetchItemsByCategory(category_name)
        .then((data) => {
          setItems(data.items);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [category_name]);

  return (
    <ul>
      {items.map((item) => {
        return (
          <li className="list" key={item.item_id}>
            {item.item_name}, {item.description}
            <div className="images">
              <img src={item.img_url} alt={item.item_name} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
