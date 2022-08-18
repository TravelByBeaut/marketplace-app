import "./App.css";
import Items from "./Components/Items";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchItems } from "./api";

function App() {
  const [category, setCategory] = useState("");

  return (
    <div className="App">
      <h1>Number 1 Shop</h1>
      <NavBar setCategory={setCategory} />
      <Routes>
        <Route path="/items" element={<Items />} />
        <Route path="/items/:category_name" element={<Items />} />
      </Routes>
    </div>
  );
}

export default App;
