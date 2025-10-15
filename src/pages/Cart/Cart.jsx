import Header from "../../components/Header/Header";
import "./Cart.css";
const Cart = () => {
  const cartItems = [
    {
      id: 1,
      title: "Product 1",
      price: 100,
      image: "https://via.placeholder.com/150",
      qty: 2,
    },
    {
      id: 2,
      title: "Product 2",
      price: 200,
      image: "https://via.placeholder.com/150",
      qty: 1,
    },
  ];

  return (
    <div>
      <Header />
      <div className="cart-container">
        {/* Left: Cart Items */}
        <div className="cart-items">
          <h2 className="cart-title">My Cart (0)</h2>

          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-details">
                <img src={item.image} alt={item.title} className="item-image" />
                <div>
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-price">₹{item.price.toLocaleString()}</p>
                  <div className="qty-controls">
                    <button onClick={() => {}}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => {}}>+</button>
                  </div>
                </div>
              </div>
              <p className="item-total">
                ₹{(item.price * item.qty).toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        {/* Right: Price Details */}
        <div className="price-details">
          <h2>PRICE DETAILS</h2>
          <div className="price-row">
            <span>Price ({cartItems.length} items)</span>
            <span>₹{30}</span>
          </div>
          <div className="price-row">
            <span>Discount</span>
            <span className="discount">− ₹500</span>
          </div>
          <div className="price-row">
            <span>Delivery Charges</span>
            <span className="free">Free</span>
          </div>
          <hr />
          <div className="price-row total">
            <span>Total Amount</span>
            <span>₹{(300).toLocaleString()}</span>
          </div>
          <button className="place-order-btn">PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
