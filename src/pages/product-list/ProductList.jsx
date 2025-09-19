import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductList = ({ category }) => {
  console.log(category);
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
    <div className="product-list">
      {" "}
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
  );
};

export default ProductList;
