import './BrandFilter.css';

const BrandFilter = () => {
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
      <div className="checkbox">
        <input type="checkbox" id="acer" />
        <label htmlFor="acer">Acer</label>
      </div>
      <div className="checkbox">
        <input type="checkbox" id="lg" />
        <label htmlFor="lg">LG</label>
      </div>
      <div className="checkbox">
        <input type="checkbox" id="samsung" />
        <label htmlFor="samsung">Samsung</label>
      </div>
    </>
  );
};

export default BrandFilter;
