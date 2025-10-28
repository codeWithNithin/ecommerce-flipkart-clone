import { useState } from "react";
import ProductCard, {
  WithRedirectiobBtns,
} from "../../components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./ProductList.css";
import Filters from "../../components/Filters/Filters";
import useProductsByCategory from "../../hooks/useProductsByCategory";
import mergeSort from "../../utils/helpers";

const ProductList = () => {
  const { category } = useParams();
  const [sortBy, setSortBy] = useState("price");
  const [orderBy, setOrderBy] = useState("asc");

  const ProductWithRedirectionBtns = WithRedirectiobBtns(ProductCard);

  const brands = [];

  const {
    isLoading,
    errorMsg,
    isError,
    products,
    filteredProducts,
    setFilteredProducts,
  } = useProductsByCategory(category);

  if (products.length > 0) {
    products.forEach((product) => {
      if (product.brand && !brands.includes(product.brand)) {
        brands.push(product.brand);
      }
    });
  }

  function applyFilter(cb) {
    const tempProducts = products;

    const result = tempProducts.filter(cb);
    setFilteredProducts(result);
  }
  // on search functionality
  function onSearchHandler(text) {
    if (text.trim() === "") {
      setFilteredProducts(products);
      return;
    }
    applyFilter((ele) => ele.title.toLowerCase().includes(text.toLowerCase()));
  }

  // generic filter function
  function onFilterChange(data) {
    const { filter, result: arr } = data;

    if (!arr || arr.length === 0) {
      setFilteredProducts(products);
      return;
    }

    let cb;

    if (filter == "brand") {
      cb = (ele) => arr.includes(ele.brand);
    } else {
      cb = (ele) => arr.includes(Math.floor(ele.rating));
    }

    applyFilter(cb);
  }

  const onSortChange = (e) => {
    const arr = e.target.value.split("-");
    setSortBy(arr[0]);
    setOrderBy(arr[1]);

    const res = mergeSort(products, sortBy);

    // we have asc and desc
    setFilteredProducts(res);
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{errorMsg}</h1>;

  return (
    <>
      <Header onSearch={(e) => onSearchHandler(e)} products={products} />
      <div className="content">
        <Filters
          brands={brands}
          brandsFilterHandler={onFilterChange}
          onRatingFilterChange={onFilterChange}
        />
        <main>
          <div className="heading">
            <div>
              <div className="breadcrumbs">Home / {category} </div>
              <div className="page-title"> {category} </div>
            </div>
            <div className="sort">
              <label style={{ fontSize: "13px", color: "var(--muted)" }}>
                Sort by
              </label>
              <select
                className="select"
                onChange={onSortChange}
                value={`${sortBy}-${orderBy}`}
              >
                <option value="price-asc">Price — Low to High</option>
                <option value="price-desc">Price — High to Low</option>
                <option value="rating-asc">Rating — Low to High</option>
                <option value="rating-desc">Rating — High to Low</option>
              </select>
            </div>
          </div>
          <h4> Product List </h4>
          <div className="product-list">
            {filteredProducts.map((product) => (
              <ProductWithRedirectionBtns
                key={product.id}
                title={product.title}
                price={product.price}
                img={product.thumbnail}
                rating={product.rating}
                id={product.id}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default ProductList;
