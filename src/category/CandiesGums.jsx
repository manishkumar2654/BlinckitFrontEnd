import axios from "axios";
import { useState, useEffect } from "react";
import { addtoCart } from "../cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackendURL from "../BackendURL";
import "../Css/cat.css";



const CandiesGums = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 🔹 Load candies & gums products
  const loadData = async () => {
    try {
      const api = `${BackendURL}/blinkitproduct/candy`;
      const res = await axios.get(api);
      setMydata(res.data);
    } catch (error) {
      console.log("Candy API Error 👉", error);
    }
  };

  // 🔹 Auth check
  const authCheck = async () => {
    const api = `${BackendURL}/user/authonchek`;
    const token = localStorage.getItem("taken");

    if (token) {
      try {
        const res = await axios.post(api, null, {
          headers: { "x-auth-token": token },
        });

        if (res.data) {
          localStorage.setItem("uservalid", true);
          localStorage.setItem("username", res.data.name);
          localStorage.setItem("useremail", res.data.email);
          localStorage.setItem("userid", res.data._id);
        }
      } catch (err) {
        console.log("Auth Error 👉", err);
      }
    }
  };

  useEffect(() => {
    loadData();
    authCheck();
  }, []);

  return (
    <>
      <h2 className="category-title">Candies & Gums</h2>

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

            <button
              className="view-btn"
              onClick={() => navigate(`/productdispaly/${item._id}`)}
            >
              View
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default CandiesGums;
