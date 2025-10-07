import { useEffect, useState } from "react";

const useProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrMsg] = useState("");

  useEffect(() => {
    getAllProducts();

    async function getAllProducts() {
      try {
        setIsLoading(true);
        const json = await fetch("https://dummyjson.com/products");
        const response = await json.json();
        setIsLoading(false);
        const productsList = response?.products;

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
            img: value.products[0].thumbnail,
            id: value.products[0].id,
            price: value.products[0].price,
            title: key,
          };
        });

        setProducts(result);
        setFilteredProducts(result);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
        setErrMsg(err.message);
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

  return {
    isLoading,
    isError,
    errorMsg,
    products,
    filteredProducts,
    setFilteredProducts,
  };
};

export default useProducts;
