import axios from "axios";
import { useState, useEffect } from "react";
import { addtoCart } from "../../cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import BackendURL from "../../BackendURL";

const Home = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadData = async () => {
    const api = `${BackendURL}/blinkitproduct/homedisplaydata`;
    try {
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const authCheck = async () => {
    let api = `${BackendURL}/user/authonchek`;
    let token = localStorage.getItem("taken");
    if (token) {
      try {
        const tokenResponse = await axios.post(api, null, {
          headers: { "x-auth-token": token },
        });

        if (tokenResponse.data) {
          localStorage.setItem("uservalid", true);
          localStorage.setItem("username", tokenResponse.data.name);
          localStorage.setItem("useremail", tokenResponse.data.email);
          localStorage.setItem("userid", tokenResponse.data._id);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
      }
    }
  };

  useEffect(() => {
    loadData();
    authCheck();
  }, []);

  return (
    <div className="home">
     

      <div className="product-grid">
        {mydata.map((item, idx) => (
          <div className="product-card" key={idx}>
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
    </div>
  );
};

export default Home;
