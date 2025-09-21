import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./ProductList.css";
import Filters from "../../components/Filters/Filters";

const ProductList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    function fetchProductsByCategory() {
      fetch(`https://dummyjson.com/products/category/${category}`)
        .then((res) => res.json())
        .then((resp) => {
          console.log("resp", resp);
          setProducts(resp.products);
        });
    }

    fetchProductsByCategory();
  }, [category]);

  return (
    <>
      <Header />

      <div className="">
        <div className="content">
          <Filters />
          <main>
            <div className="heading">
              <div>
                <div className="breadcrumbs">Home / Computers / Monitors</div>
                <div className="page-title">Monitors</div>
                <div className="results-meta">
                  Showing 1–24 of 2,134 results — Filters:{" "}
                  <span className="chip">Acer</span>
                  <span className="chip">Flipkart Assured</span>
                </div>
              </div>
              <div className="sort">
                <label style={{ fontSize: "13px", color: "var(--muted)" }}>
                  Sort by
                </label>
                <select className="select">
                  <option>Relevance</option>
                  <option>Price — Low to High</option>
                  <option>Price — High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>
            <h4> Product List </h4>
            <div className="product-list">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  img={product.thumbnail}
                  rating={product.rating}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ProductList;
