import "./TopDealsCard.css";
const TopDealsCard = ({ products, category, img, price, cardHandler }) => {

  function onCardClick() {
    // window.location.href =
    //   "https://dummyjson.com/products/category/smartphones";
    // get the category and pass it to particular category api
    cardHandler?.({products, category});
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
