import { useContext, useEffect } from "react";
import "./ProductCard.css";
import AppContext from "../../context/appContext";

const ProductCard = ({ title, price, img, rating }) => {
  const { theme } = useContext(AppContext);

  useEffect(() => {
    const cardRef = document.getElementById("card");

    if (theme === "light") {
      cardRef.style.background = "#fff";
      cardRef.style.color = "#000";
    } else {
      cardRef.style.background = "#000";
      cardRef.style.color = "#fff";
    }
  }, [theme]);

  return (
    <div className="card" id="card">
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
