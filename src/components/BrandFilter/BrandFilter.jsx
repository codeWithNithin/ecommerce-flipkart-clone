import { useState } from "react";
import "./BrandFilter.css";

const BrandFilter = ({ brands, onBrandFilterChange }) => {
  const [brandsFilter, setBrandsFilter] = useState([]);

  const onClick = (e) => {
    console.log(e.target.checked);
    console.log(e.target.value);

    let result;

    if (e.target.checked) {
      result = [...brandsFilter, e.target.value];
    } else {
      result = brandsFilter.filter((brand) => brand !== e.target.value);
    }

    setBrandsFilter(result);
    onBrandFilterChange?.(result);
  };

  return (
    <>
      <div
        className="brand-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong>Brand</strong>
        <small className="muted">Clear</small>
      </div>

      {brands.length === 0 ? (
        <div> No Brands found </div>
      ) : (
        brands.map((ele) => (
          <div className="checkbox" key={ele}>
            <input type="checkbox" id={ele} onChange={onClick} value={ele} />
            <label htmlFor={ele}>{ele}</label>
          </div>
        ))
      )}
    </>
  );
};

export default BrandFilter;
