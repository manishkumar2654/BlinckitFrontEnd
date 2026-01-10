import axios from "axios";
import { useState, useEffect } from "react";
import { addtoCart } from "../cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackendURL from "../BackendURL";
import "../Css/cat.css";


const ChickenMeatFish = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      const res = await axios.get(`${BackendURL}/blinkitproduct/chicken-meat-fish`);
      setMydata(res.data);
    } catch (err) {
      console.log("Chicken/Meat API Error 👉", err);
    }
  };

  const authCheck = async () => {
    const token = localStorage.getItem("taken");
    if (token) {
      try {
        const res = await axios.post(`${BackendURL}/user/authonchek`, null, {
          headers: { "x-auth-token": token },
        });
        if (res.data) {
          localStorage.setItem("uservalid", true);
          localStorage.setItem("username", res.data.name);
          localStorage.setItem("useremail", res.data.email);
          localStorage.setItem("userid", res.data._id);
        }
      } catch (err) { console.log(err); }
    }
  };

  useEffect(() => { loadData(); authCheck(); }, []);

  return (
    <div  >
      <h2 className="category-title">Chicken, Meat & Fish</h2>
      <div className="product-grid">
        {mydata.map(item => (
          <div className="product-card" key={item._id}>
            <img src={item.defaultImage} alt={item.name} onClick={() => navigate(`/productdispaly/${item._id}`)}/>
            <h4>{item.name}</h4>
            <p className="desc">{item.category}</p>
            <div className="price-row">
              <span className="price">₹{item.price}</span>
              <button className="add-btn" onClick={() => dispatch(addtoCart({...item,qnty:1}))}>ADD</button>
            </div>
            <button className="view-btn" onClick={() => navigate(`/productdispaly/${item._id}`)}>View</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ChickenMeatFish;