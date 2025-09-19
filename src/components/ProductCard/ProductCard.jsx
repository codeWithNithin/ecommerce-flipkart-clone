import "./ProductCard.css";

const ProductCard = ({ title, price, img, rating }) => {
  return (
    <div className="product-card">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="title">{title}</div>
      <div className="ratings">{rating}</div>
      <div className="price">₹ {price}</div>
    </div>
  );
};

export default ProductCard;
