import { useNavigate } from "react-router-dom";
import "./TopDealsCard.css";
const TopDealsCard = ({ category, img, price }) => {
  const navigate = useNavigate();

  function onCardClick() {
    navigate(`/product-list/${category}`);
  }

  return (
    <div className="top-deals-card" onClick={onCardClick}>
      <img src={img} alt="prod img" className="top-deals-card-img" />
      <div className="category">{category} </div>
      <div className="price">{price}</div>
    </div>
  );
};

export default TopDealsCard;
