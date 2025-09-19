import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";

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
    </>
  );
};

export default ProductList;
