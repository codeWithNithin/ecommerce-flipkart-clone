import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ProductList from "./pages/product-list/ProductList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product-list/:category" element={<ProductList />}></Route>
    </Routes>
  );
}

export default App;
