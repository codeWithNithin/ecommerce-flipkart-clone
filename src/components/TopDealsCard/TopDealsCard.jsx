import "./TopDealsCard.css";
const TopDealsCard = ({ products, category, img, price }) => {
  return (
    <a href="./ProductList.jsx">
      <div className="top-deals-card">
        <img src={img} alt="prod img" className="top-deals-card-img" />
        <div className="category">{category} </div>
        <div className="price">{price}</div>
      </div>
    </a>
  );
};

export default TopDealsCard;
