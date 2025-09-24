import "./BrandFilter.css";

const BrandFilter = ({ brands, setBrandsFilter, brandsFilter }) => {
  const onClick = (e) => {
    console.log(e.target);
    if (e.target.checked) {
      setBrandsFilter((prev) => [...prev, e.target.value]);
    } else {
      setBrandsFilter((prev) =>
        prev.filter((brand) => brand !== e.target.value)
      );
    }


    console.log("brandsFilter", brandsFilter);
    // setBrandsFilter((prev) => [...prev]);
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

      {brands.map((ele) => (
        <div className="checkbox" key={ele}>
          <input type="checkbox" id={ele} onChange={onClick} value={ele} />
          <label htmlFor={ele}>{ele}</label>
        </div>
      ))}
    </>
  );
};

export default BrandFilter;
