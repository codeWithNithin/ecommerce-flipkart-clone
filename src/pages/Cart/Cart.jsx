import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import "./Cart.css";
import { updateQty } from "../../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();


  return (
    <div>
      <Header />
      <div className="cart-container">
        {/* Left: Cart Items */}
        <div className="cart-items">
          <h2 className="cart-title">My Cart ({cartItems.length})</h2>

          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-details">
                <img src={item.img} alt={item.title} className="item-image" />
                <div>
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-price">₹{item.price.toLocaleString()}</p>
                  <div className="qty-controls">
                    <button
                      onClick={() => {
                        if (item.qty > 1) {
                          dispatch(
                            updateQty({ id: item.id, qty: item.qty - 1 })
                          );
                        }
                      }}
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => {
                        dispatch(updateQty({ id: item.id, qty: item.qty + 1 }));
                      }}
                    >
                      +
                    </button>
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
            <span>
              ₹
              {cartItems
                .reduce((acc, item) => acc + item.price * item.qty, 0)
                .toLocaleString()}
            </span>
          </div>
          <button className="place-order-btn">PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
