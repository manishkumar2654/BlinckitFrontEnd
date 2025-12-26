import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Css/ProductDisplay.css";
import BackendURL from "../BackendURL";

const ProductDisplau = () => {
  const { id } = useParams();
  const [pdata, setPdata] = useState({});
  const [imglist, setImglist] = useState([]);
  const [mypimg, setMypimg] = useState("");

  const manish = async () => {
    const api = `${BackendURL}/blinkitproduct/productdisplay/?id=${id}`;
    const response = await axios.get(api);
    setPdata(response.data);
    setImglist(response.data.images);
    setMypimg(response.data.defaultImage);
  };

  useEffect(() => {
    manish();
  }, []);

  return (
    <div className="product-page">
      <div className="product-box">
        {/* LEFT IMAGE SECTION */}
        <div className="image-section">
          <img src={mypimg} className="main-image" />

          <div className="thumbs">
            {imglist.map((item, idx) => (
              <img
                key={idx}
                src={item}
                onMouseOver={() => setMypimg(item)}
              />
            ))}
          </div>
        </div>

        {/* RIGHT DETAILS SECTION */}
        <div className="details-section">
          <h2>{pdata.name}</h2>
          <p className="category">{pdata.category}</p>

          <h3 className="price">₹{pdata.price}</h3>

          <p className="desc">{pdata.decription}</p>

          <button className="add-btn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplau;
