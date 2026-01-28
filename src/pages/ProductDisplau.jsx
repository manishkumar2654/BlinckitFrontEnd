//ye page jub product view karege to ye page dikhega

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice";
import "../Css/ProductDisplay.css";
import BackendURL from "../BackendURL";

const ProductDisplau = () => {
  const { id } = useParams();
  const [pdata, setPdata] = useState({});
  const [imglist, setImglist] = useState([]);
  const [mypimg, setMypimg] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadProduct = async () => {
    const api = `${BackendURL}/blinkitproduct/productdisplay/?id=${id}`;
    const response = await axios.get(api);
    setPdata(response.data);
    setImglist(response.data.images);
    setMypimg(response.data.defaultImage);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const handleAddToCart = () => {
    dispatch(
      addtoCart({
        id: pdata._id,
        name: pdata.name,
        category: pdata.category,
        decription: pdata.decription,
        price: pdata.price,
        defaultImage: pdata.defaultImage,
        images: pdata.images,
        qnty: 1,
      })
    );

    
  };

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

          <button className="add-btn" onClick={handleAddToCart}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplau;
