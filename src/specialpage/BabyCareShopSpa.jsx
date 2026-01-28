import axios from "axios";
import { useState, useEffect } from "react";
import { addtoCart } from "../cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackendURL from "../BackendURL";
// import "../specialpage/BabyCareShopSpa.css";

const BabyCareShopSpa = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      const res = await axios.get(`${BackendURL}/blinkitproduct/baby-care`);
      setMydata(res.data);
    } catch (error) {
      console.log("Baby Care API Error 👉", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="baby-page">
      {/* 🔥 BANNER */}
      <div className="baby-banner">
        <img src="/baby-care-banner.jpg" alt="Baby Care" />
        <div className="banner-text">
          <h1>Baby Care</h1>
          <p>Gentle Care for Your Little One</p>
        </div>
      </div>

      {/* 🔥 PRODUCT SECTION */}
      <div className="baby-section">
        <h2 className="category-title">Popular in Baby Care</h2>

        <div className="product-grid">
          {mydata.map((item) => (
            <div className="product-card" key={item._id}>
              <img
                src={item.defaultImage}
                alt={item.name}
                onClick={() => navigate(`/productdispaly/${item._id}`)}
              />

              <h4>{item.name}</h4>
              <p className="desc">{item.category}</p>

              <div className="price-row">
                <span className="price">₹{item.price}</span>
                <button
                  className="add-btn"
                  onClick={() =>
                    dispatch(
                      addtoCart({
                        ...item,
                        qnty: 1,
                      })
                    )
                  }
                >
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BabyCareShopSpa;
