import "./RatingsFilter.css";

const RatingsFilter = () => {
  return (
    <>
      <h4>Customer Ratings</h4>
      <div className="checkbox">
        <input type="checkbox" id="4plus" value="4" />
        <label htmlFor="4plus">4★ & above</label>
      </div>
      <div className="checkbox">
        <input type="checkbox" id="3plus"  value="3" />
        <label htmlFor="3plus">3★ & above</label>
      </div>
      <div className="checkbox">
        <input type="checkbox" id="2plus" value="2" />
        <label htmlFor="2plus">2★ & above</label>
      </div>
    </>
  );
};

export default RatingsFilter;
