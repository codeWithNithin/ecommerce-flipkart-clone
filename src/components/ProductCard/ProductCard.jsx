import { useContext, useEffect } from "react";
import "./ProductCard.css";
import AppContext from "../../context/appContext";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const ProductCard = ({ title, price, img, rating }) => {
  const { theme } = useContext(AppContext);

  useEffect(() => {
    const cardRef = document.getElementById("card");
    cardRef.classList.remove("light", "dark");
    cardRef.classList.add(theme);
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

export const WithRedirectiobBtns = (ProductCard) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToCartHandler = ({ id, title, price, img, rating }) => {
    //  1. dispatch an action
    dispatch(addItem({ id, title, price, img, rating}));

    // 2. navigate to cart
    navigate("/cart");
  };

  return (props) => {
    return (
      <div>
        <ProductCard {...props} />
        <Button
          name="Add to cart"
          styleType="primary"
          clickHandler={() => {
            addToCartHandler(props);
          }}
        />
        <Button
          name="home"
          styleType="secondary"
          clickHandler={() => {
            navigate("/");
          }}
        />
      </div>
    );
  };
};

export default ProductCard;
