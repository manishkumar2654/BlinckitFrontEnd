import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [search, setSearch] = useState(""); // ✅ search state add ki
  const cartData = useSelector((state) => state.mycart.cart);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top border-bottom">
      <div className="container-fluid px-4">
        {/* LOGO */}
        <span
          className="navbar-brand fw-bold logo-text"
          onClick={() => navigate("/")}
        >
          Blinkit
        </span>

        {/* TOGGLER (MOBILE) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#blinkitNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV CONTENT */}
        <div className="collapse navbar-collapse" id="blinkitNavbar">
          {/* DELIVERY INFO */}
          <div className="delivery-info ms-lg-3 d-none d-lg-block">
            <h6 className="mb-0 fw-bold">Delivery in 10 minutes</h6>
            <small className="text-muted">Airport Rd, Raja Bhoj Airport</small>
          </div>

          {/* SEARCH */}
          <form
            className="d-flex flex-grow-1 mx-lg-4 my-3 my-lg-0"
            onSubmit={(e) => {
              e.preventDefault();
              if (!search.trim()) return;
              navigate(`/search?q=${search}`);
              setSearch(""); // optional: clear input after search
            }}
          >
            <input
              className="form-control search-input"
              type="search"
              placeholder="Search for products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>

          {/* RIGHT */}
          <div className="d-flex align-items-center gap-3">
            <button
              className="btn btn-outline-dark"
              onClick={() => navigate("/clientlogin")}
            >
              Login
            </button>

            <div className="cart-btn" onClick={() => navigate("/carddata")}>
              <FaCartPlus />
              <span className="cart-count">{cartData.length}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
