import "./Filters.css";

function Filters({ setRating }) {

  const onRatingChange = (e) => {
    console.log(e.target.value);
    setRating(e.target.value);
  }

  return (
    <aside className="filters">
      <h4>Filters</h4>
      <div className="filter-group">
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
      </div>

      <div className="filter-group">
        <h4>Price</h4>
        <div className="range">
          <input
            placeholder="Min"
            style={{
              flex: 1,
              padding: "8px",
              borderRadius: "8px",
              border: "1px solid #e6e9ef",
            }}
          />
          <input
            placeholder="Max"
            style={{
              flex: 1,
              padding: "8px",
              borderRadius: "8px",
              border: "1px solid #e6e9ef",
            }}
          />
        </div>
      </div>

      <div className="filter-group">
        <h4>Availability</h4>
        <div className="checkbox">
          <input type="checkbox" id="assured" />
          <label htmlFor="assured">Flipkart Assured</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="free" />
          <label htmlFor="free">Free Delivery</label>
        </div>
      </div>

      <div className="filter-group">
        <h4>Screen Size</h4>
        <div className="checkbox">
          <input type="checkbox" id="24" />
          <label htmlFor="24">Up to 24"</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="27" />
          <label htmlFor="27">24" - 27"</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="32" />
          <label htmlFor="32">28" & above</label>
        </div>
      </div>

      <div className="filter-group">
        <h4>Customer Ratings</h4>
        <div className="checkbox">
          <input
            type="checkbox"
            id="4plus"
            onChange={onRatingChange}
            value="4"
          />
          <label htmlFor="4plus">4★ & above</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="3plus"
            onChange={onRatingChange}
            value="3"
          />
          <label htmlFor="3plus">3★ & above</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="2plus"
            onChange={onRatingChange}
            value="2"
          />
          <label htmlFor="2plus">2★ & above</label>
        </div>
      </div>
    </aside>
  );
}

export default Filters;
