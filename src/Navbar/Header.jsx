import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const cartData = useSelector(state => state.mycart.cart);
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>
        Blinkit
      </div>

      <nav className="nav">
        <Link to="/">Home</Link>
      
      </nav>

      <div className="header-right">
        <button className="login-btn" onClick={() => navigate("/clientlogin")}>
          Login
        </button>

        <div className="cart" onClick={() => navigate("/carddata")}>
          <FaCartPlus />
          <span>{cartData.length}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
