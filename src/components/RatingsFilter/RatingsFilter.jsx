import { useState } from "react";
import "./RatingsFilter.css";

const RatingsFilter = ({ onRatingFilterChange }) => {
  const [ratings, setRatings] = useState([]);

  const onCheckBoxClick = (e) => {
    let result;
    if (e.target.checked) {
      result = [...ratings, Number(e.target.value)];
    } else {
      result = ratings.filter((rating) => rating !== Number(e.target.value));
    }

    setRatings(result);
    onRatingFilterChange?.(result);
  };

  return (
    <>
      <h4>Customer Ratings</h4>
      <div className="checkbox">
        <input
          type="checkbox"
          id="4plus"
          value="4"
          onChange={onCheckBoxClick}
        />
        <label htmlFor="4plus">4★ & above</label>
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          id="3plus"
          value="3"
          onChange={onCheckBoxClick}
        />
        <label htmlFor="3plus">3★ & above</label>
      </div>
      <div className="checkbox">
        <input
          type="checkbox"
          id="2plus"
          value="2"
          onChange={onCheckBoxClick}
        />
        <label htmlFor="2plus">2★ & above</label>
      </div>
    </>
  );
};

export default RatingsFilter;
