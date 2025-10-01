import { useEffect, useState } from "react";

const useProductsByCategory = (category) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    function fetchData() {
      setIsLoading(true);
      fetch(`https://dummyjson.com/products/category/${category}`)
        .then((res) => res.json())
        .then((resp) => {
          setIsLoading(false);
          setProducts(resp.products);
          setFilteredProducts(resp.products);
        })
        .catch((err) => {
          setIsLoading(false);
          setErrorMsg(err);
        });
    }
    fetchData();
  }, [category]);

  return {
    isLoading,
    errorMsg,
    products,
    filteredProducts,
    setFilteredProducts,
  };
};

export default useProductsByCategory;
