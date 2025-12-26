import { useState } from "react";
import axios from "axios";
import "./ClientRegi.css";
import BackendURL from "../../BackendURL";

const ClientRegi = () => {
  const [input, setInput] = useState({});

  const handilInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((val) => ({ ...val, [name]: value }));
  };

  const handilSubmit = async (e) => {
    e.preventDefault();
    let api = `${BackendURL}/user/registration`;
    const response = await axios.post(api, input);
    console.log(response.data);
    alert("Registration successful");
  };

  return (
    <div className="reg-page">
      <div className="reg-box">
        <h2>Create Account</h2>

        <form>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handilInput}
          />

          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handilInput}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handilInput}
          />

          <input
            type="text"
            name="adders"
            placeholder="Address"
            onChange={handilInput}
          />

          <input
            type="number"
            name="pincode"
            placeholder="Pincode"
            onChange={handilInput}
          />

          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            onChange={handilInput}
          />

          <input
            type="password"
            name="password"
            placeholder="Create Password"
            onChange={handilInput}
          />

          <button onClick={handilSubmit}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default ClientRegi;
