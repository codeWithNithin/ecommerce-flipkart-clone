import React, { useEffect, useState } from "react";
import TopDealsCard from "../../components/TopDealsCard/TopDealsCard";
import "./Home.css";
import ProductList from "../product-list/ProductList";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isCardView, setIsCardView] = useState(false);
  const [category, setCategory] = useState("");

  const productListData = {
    products,
    category: "",
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  function onCardClick(data) {
    console.log("data", data);
    productListData.products = data.products;
    productListData.category = data.category;
    setCategory(productListData.category);
    console.log("productListData", productListData);
    setIsCardView(true);
  }

  function getAllProducts() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((resp) => {
        const productsList = resp?.products;
        console.log("products", productsList);
        const data = {};

        productsList.forEach((product) => {
          if (!data[product.category])
            data[product.category] = { products: [] };

          data[product.category].products.push({
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            discountPercentage: product.discountPercentage,
            rating: product.rating,
            stock: product.stock,
            brand: product.brand,
            category: product.category,
            thumbnail: product.thumbnail,
            images: product.images,
          });
        });

        const result = Object.entries(data).map(([key, value]) => {
          return {
            category: key,
            products: value.products,
            img: value.products[0].thumbnail,
            id: value.products[0].id,
            price: value.products[0].price,
          };
        });

        setProducts(result);
      });
  }

  if (!products.length) return <div>Loading</div>;

  return (
    <div>
      <h4> {isCardView ? "Product List" : "Top Deals"} </h4>

      <div className="product-list">
        {!isCardView &&
          products.map((ele) => (
            <TopDealsCard
              key={ele.id}
              category={ele.category}
              img={ele.img}
              products={ele.products}
              price={ele.price}
              cardHandler={onCardClick}
            />
          ))}

        {isCardView && <ProductList category={category} />}
      </div>
    </div>
  );
};

export default Home;
