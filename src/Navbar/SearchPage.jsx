import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BackendURL from "../BackendURL";
// import "./SearchPage.css";

const SearchPage = () => {
  const [data, setData] = useState([]);
  const query = new URLSearchParams(useLocation().search).get("q");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;

      try {
        const res = await axios.get(
          `${BackendURL}/blinkitproduct/search?q=${query}`
        );
        setData(res.data);
      } catch (err) {
        console.log("Search API Error:", err);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="container mt-4">
      <h4>Search Results for "{query}"</h4>

      {data.length === 0 && <p>No products found.</p>}

      <div className="row">
        {data.map((item) => (
          <div className="col-6 col-md-3 mb-3" key={item._id}>
            <div
              className="card h-100 cursor-pointer"
              onClick={() => navigate(`/productdispaly/${item._id}`)}
            >
              <img
                src={item.images?.[0] || "https://via.placeholder.com/150"}
                className="card-img-top"
                alt={item.name}
              />
              <div className="card-body">
                <h6>{item.name}</h6>
                <p>₹{item.price}</p>
                <small className="text-muted">{item.category}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
