// src/specialpage/PaanShopSpa.jsx
import axios from "axios";
import { useState, useEffect } from "react";
import { addtoCart } from "../cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackendURL from "../BackendURL";
import "../specialpage/PaanShopSpa.css";

const PaanShopSpa = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      const api = `${BackendURL}/blinkitproduct/pann`;
      const res = await axios.get(api);
      setMydata(res.data);
    } catch (error) {
      console.log("Paan API Error 👉", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="paan-page">
      {/* 🔥 BANNER */}
      <div className="paan-banner">
        <img src="/pannnshopa.jpg" alt="Paan Shop" />
        <div className="banner-text">
          <h1>Paan Corner</h1>
          <p>Fresh Paan, Mouth Fresheners & More</p>
        </div>
      </div>

      {/* 🔥 PRODUCT GRID */}
      <div className="paan-section">
        <h2 className="category-title">Popular in Paan Shop</h2>
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
                        id: item._id,
                        name: item.name,
                        category: item.category,
                        decription: item.decription,
                        price: item.price,
                        defaultImage: item.defaultImage,
                        images: item.images,
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

export default PaanShopSpa;
