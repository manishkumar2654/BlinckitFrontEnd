import { useSelector, useDispatch } from "react-redux";
import { dataIncrease, dataDecrease } from "./cartSlice";
import { useNavigate } from "react-router-dom";
import "./Css/Cart.css";

const CardData = () => {
  const cartData = useSelector(state => state.mycart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let totalAmount = 0;

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cartData.map((item, idx) => {
        totalAmount += item.price * item.qnty;
        return (
          <div className="cart-item" key={idx}>
            <img src={item.defaultImage} />
            <div>
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
              <div className="qty">
                <button onClick={() => dispatch(dataDecrease({ id: item.id }))}>-</button>
                <span>{item.qnty}</span>
                <button onClick={() => dispatch(dataIncrease({ id: item.id }))}>+</button>
              </div>
            </div>
          </div>
        );
      })}

      <h3>Total: ₹{totalAmount}</h3>
      <button className="checkout-btn" onClick={() => navigate("/checkout")}>
        Checkout
      </button>
    </div>
  );
};

export default CardData;
