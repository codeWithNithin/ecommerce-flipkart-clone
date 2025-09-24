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
  const [sortBy, setSortBy] = useState("asc");
  const [rating, setRating] = useState();
  const [brandsFilter, setBrandsFilter] = useState([]);
  const [search, setSearch] = useState("");

  const brands = [];

  if (products.length > 0) {
    products.forEach((product) => {
      if (!brands.includes(product.brand)) {
        brands.push(product.brand);
      }
    });
  }

  useEffect(() => {
    function fetchProductsByCategory() {
      fetch(
        `https://dummyjson.com/products/category/${category}?sortBy=price&order=${sortBy}`
      )
        .then((res) => res.json())
        .then((resp) => {
          setProducts(resp.products);
          setFilteredProducts(resp.products);
        });
    }

    fetchProductsByCategory();
  }, [category, sortBy]);

  useEffect(() => {
    const tempProducts = products;

    if (brandsFilter.length > 0) {
      const result = tempProducts.filter((ele) => {
        if (brandsFilter.includes(ele.brand)) {
          return ele;
        }
      });

      setFilteredProducts(result);
    } else if (search) {
      const result = tempProducts.filter((ele) => {
        if (ele.title.toLowerCase().includes(search.toLowerCase())) {
          return ele;
        }
      });
      setFilteredProducts(result);
    } else {
      setFilteredProducts(tempProducts);
    }
  }, [products, brandsFilter, search]);

  console.log(filteredProducts);

  const onSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <>
      <Header setSearch={setSearch} search={search} />

      <div className="">
        <div className="content">
          <Filters
            setRating={setRating}
            brands={brands}
            setBrandsFilter={setBrandsFilter}
            brandsFilter={brandsFilter}
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
                  value={sortBy}
                >
                  <option value="asc">Price — Low to High</option>
                  <option value="desc">Price — High to Low</option>
                  {/* <option>Newest First</option> */}
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
