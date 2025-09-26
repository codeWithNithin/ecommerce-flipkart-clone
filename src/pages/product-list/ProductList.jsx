import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./ProductList.css";
import Filters from "../../components/Filters/Filters";

const ProductList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState("price");
  const [orderBy, setOrderBy] = useState("asc");

  const brands = [];

  if (products.length > 0) {
    products.forEach((product) => {
      if (!brands.includes(product.brand)) {
        brands.push(product.brand);
      }
    });
  }

  console.log("sortBy", sortBy);
  console.log("orderBy", orderBy);

  useEffect(() => {
    function fetchProductsByCategory() {
      fetch(
        `https://dummyjson.com/products/category/${category}?sortBy=${sortBy}&order=${orderBy}`
      )
        .then((res) => res.json())
        .then((resp) => {
          setProducts(resp.products);
          setFilteredProducts(resp.products);
        });
    }

    fetchProductsByCategory();
  }, [category, sortBy, orderBy]);

  function applyFilter(cb) {
    const tempProducts = products;
    const result = tempProducts.filter(cb);
    setFilteredProducts(result);
  }
  // on search functionality
  function onSearch(text) {
    applyFilter((ele) => ele.title.toLowerCase().includes(text.toLowerCase()));
  }

  // filtering with brand
  function onBrandFilterChange(brandsFilter) {
    const tempProducts = products;

    if (!brandsFilter || brandsFilter.length === 0) {
      setFilteredProducts(tempProducts);
      return;
    }

    applyFilter((ele) => brandsFilter.includes(ele.brand));
  }

  // filtering with rating
  function onRatingFilterChange(ratingsFilter) {
    const tempProducts = products;

    if (!ratingsFilter || ratingsFilter.length === 0) {
      setFilteredProducts(tempProducts);
      return;
    }

    applyFilter((ele) => ratingsFilter.includes(Math.floor(ele.rating)));
  }

  const onSortChange = (e) => {
    const arr = e.target.value.split("-");
    setSortBy(arr[0]);
    setOrderBy(arr[1]);
  };

  return (
    <>
      <Header onSearch={onSearch} />

      <div>
        <div className="content">
          <Filters
            brands={brands}
            brandsFilterHandler={onBrandFilterChange}
            onRatingFilterChange={onRatingFilterChange}
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
