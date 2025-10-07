import TopDealsCard from "../../components/TopDealsCard/TopDealsCard";
import "./Home.css";
import Header from "../../components/Header/Header";
import useProducts from "../../hooks/useProducts";

const Home = () => {
  const {
    isLoading,
    isError,
    errorMsg,
    products,
    filteredProducts,
    setFilteredProducts,
  } = useProducts();

  const searchHandler = (searchText) => {
    const result = products.filter((product) =>
      product.category.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredProducts(result);
  };

  if (isLoading) return <div>Loading</div>;

  if (isError) return <div>{errorMsg}</div>;

  return (
    <div>
      <Header onSearch={searchHandler}  products={products} />
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
