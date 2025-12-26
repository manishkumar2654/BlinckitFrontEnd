import axios from "axios";
import { useState } from "react";
import "./UploadProduct.css";
import BackendURL from "../BackendURL";

const UploadProduct = () => {
  const [input, setInput] = useState({});
  const [selectedImage, setSelectedImage] = useState([]);

  const handleIput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((val) => ({ ...val, [name]: value }));
  };

  const handleImage = (e) => {
    const files = e.target.files;
    setSelectedImage(files);
  };

  const handilbutton = async (e) => {
    e.preventDefault();
    const forData = new FormData();

    for (var key in input) {
      forData.append(key, input[key]);
    }

    for (let i = 0; i < selectedImage.length; i++) {
      forData.append("images", selectedImage[i]);
    }

    const api = `${BackendURL}/admin/productsave`;
    const response = await axios.post(api, forData);
    console.log(response);
    alert("Product saved successfully");
  };

  return (
    <div className="upload-page">
      <h2>Upload New Product</h2>

      <form className="upload-form">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={handleIput}
        />

        <input
          type="text"
          name="decription"
          placeholder="Product Description"
          onChange={handleIput}
        />

        <input
          type="text"
          name="price"
          placeholder="Product Price"
          onChange={handleIput}
        />

        <select name="category" onChange={handleIput}>
          <option value="">Select Category</option>
          <option value="dairy-bread-eggs">Dairy, Bread & Eggs</option>
          <option value="paan-corner">Paan Corner</option>
          <option value="snacks-munchies">Snacks & Munchies</option>
          <option value="cold-drinks-juices">Cold Drinks & Juices</option>
          <option value="candies-gums">Candies & Gums</option>
          <option value="chicken-meat-fish">Chicken, Meat & Fish</option>
          <option value="pet-care">Pet Care</option>
          <option value="baby-care">Baby Care</option>
          <option value="magazines">Magazines</option>
          <option value="sweet-tooth">Sweet Tooth</option>
          <option value="beauty-cosmetics">Beauty & Cosmetics</option>
          <option value="toys-games">Toys & Games</option>
          <option value="vegetables-fruits">Vegetables & Fruits</option>
          <option value="bakery-biscuits">Bakery & Biscuits</option>
          <option value="frozen-desserts-icecream">
            Frozen Desserts & Ice Cream
          </option>
          <option value="pharma-wellness">Pharma & Wellness</option>
          <option value="personal-care">Personal Care</option>
          <option value="digital-goods">Digital Goods</option>
          <option value="cleaning-essentials">Cleaning Essentials</option>
          <option value="atta-rice-dal">Atta Rice Dal</option>
        </select>

        <input type="file" multiple onChange={handleImage} />

        <button onClick={handilbutton}>Upload Product</button>
      </form>
    </div>
  );
};

export default UploadProduct;
