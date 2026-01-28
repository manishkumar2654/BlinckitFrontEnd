import axios from "axios";
import { useState, useEffect } from "react";
import { addtoCart } from "../cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackendURL from "../BackendURL";
import "../specialpage/petpage.css";

const PetPage = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      const res = await axios.get(`${BackendURL}/blinkitproduct/pet-care`);
      setMydata(res.data);
    } catch (error) {
      console.log("Pet API Error 👉", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="pet-page">
      {/* 🔥 BANNER */}
      <div className="pet-banner">
        <img src="/petpro.png" alt="Pet Care" />
        <div className="banner-text">
          <h1>Pet Care Store</h1>
          <p>Food, Toys, Grooming & More</p>
        </div>
      </div>

      {/* 🔥 PRODUCT GRID */}
      <div className="pet-section">
        <h2 className="category-title">Popular in Pet Care</h2>
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

export default PetPage;
