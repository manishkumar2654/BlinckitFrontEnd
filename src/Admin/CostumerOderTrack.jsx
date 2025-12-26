import axios from "axios";
import { useEffect, useState } from "react";
import "./CustomerOrderTrack.css";
import BackendURL from "../BackendURL";

const CostumerOderTrack = () => {
  const [oderdata, setOrderData] = useState([]);

  const oredrfun = async () => {
    let api = `${BackendURL}/admintrakorder/orderstrack`;
    const response = await axios.post(api);
    setOrderData(response.data);
  };

  useEffect(() => {
    oredrfun();
  }, []);

  return (
    <div className="order-page">
      <h2>Customer Orders</h2>

      <div className="order-table">
        <div className="order-head">
          <span>Amount</span>
          <span>Products</span>
          <span>Name</span>
          <span>City</span>
          <span>Phone</span>
        </div>

        {oderdata.map((item, idx) => (
          <div className="order-row" key={idx}>
            <span>₹{item.amount}</span>
            <span className="products">{item.products}</span>
            <span>{item.clientname}</span>
            <span>{item.city}</span>
            <span>{item.phone}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CostumerOderTrack;
