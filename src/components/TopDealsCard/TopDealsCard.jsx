import "./TopDealsCard.css";
const TopDealsCard = ({ products, category, img, price }) => {
  function onCardClick() {
    const card = document.getElementById("card");
    const anchorTag = document.createElement("a");

    anchorTag.href = "./pages/product-list/ProductList.jsx";

    card.appendChild(anchorTag);
  }

  return (
    <div className="top-deals-card" id="card" onClick={onCardClick}>
      <img src={img} alt="prod img" className="top-deals-card-img" />
      <div className="category">{category} </div>
      <div className="price">{price}</div>
    </div>
  );
};

export default TopDealsCard;
