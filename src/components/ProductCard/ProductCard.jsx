import "./ProductCard.css";

const ProductCard = ({ title, price, img, rating }) => {
  return (
    <div className="card">
      <div className="thumb">
        <img src={img} alt="" />
      </div>
      <div className="title">{title}</div>
      <div className="rating">{rating} ★</div>
      <div className="price">₹ {price}</div>
    </div>
  );
};

export default ProductCard;
