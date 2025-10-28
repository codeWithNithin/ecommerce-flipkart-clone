import TopDealsCard from "../../components/TopDealsCard/TopDealsCard";
import "./Home.css";
import Header from "../../components/Header/Header";
import useProducts from "../../hooks/useProducts";
import { useEffect } from "react";
import { signInAnonymously } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/authSlice";
import Shimmer from "../../components/Shimmer/Shimmer";

const Home = () => {
  const {
    isLoading,
    isError,
    errorMsg,
    products,
    filteredProducts,
    setFilteredProducts,
  } = useProducts();

  const dispatch = useDispatch();

  const searchHandler = (searchText) => {
    const result = products.filter((product) =>
      product.category.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredProducts(result);
  };

  useEffect(() => {
    signInAnonymously(auth)
      .then(() => {
        // Signed in..
        console.log("signed in");
        dispatch(
          addUser({
            uid: null,
            email: null,
            isAnonymous: true,
            display: "Guest",
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ...
      });
  }, []);

  if (isLoading) return <Shimmer />;

  if (isError) return <div>{errorMsg}</div>;

  return (
    <div>
      <Header onSearch={searchHandler} products={products} />
      <h4> Top Deals </h4>
      <div className="product-list">
        {filteredProducts.map((ele) => (
          <TopDealsCard
            key={ele.id}
            category={ele.category}
            img={ele.img}
            price={ele.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
