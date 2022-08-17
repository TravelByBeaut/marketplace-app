import "./App.css";
import Items from "./Components/Items";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/items" element={<Items />}></Route>
      </Routes>
    </div>
  );
}

export default App;
