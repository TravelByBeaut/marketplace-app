import "./App.css";
import Items from "./Components/Items";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import ListItems from "./Components/ListItems";
import SingleItem from "./Components/SingleItem";

function App() {
  const [category, setCategory] = useState("");

  return (
    <div className="App">
      <h1>Number 1 Shop</h1>
      <NavBar setCategory={setCategory} />
      <Routes>
        <Route path="/items" element={<Items />} />
        <Route path="/items/:category_name" element={<Items />} />
        <Route
          path="/items/addItem"
          element={<ListItems category={category} setCategory={setCategory} />}
        />
        {/* <Route path="/item/:item_id" element={<SingleItem />} /> */}
      </Routes>
    </div>
  );
}

export default App;
