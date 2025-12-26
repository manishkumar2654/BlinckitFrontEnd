import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import BackendURL from "../../BackendURL";

const ClieantLogin = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({});

  const testInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const buttonwork = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `${BackendURL}/user/logincheck`,
      input
    );
    localStorage.setItem("taken", response.data.accessToken);
    navigate("/");
  };

  return (
    <div className="login-box">
      <h2>User Login</h2>

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={testInput}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={testInput}
      />

      <button onClick={buttonwork}>Login</button>

      <p>
        Don’t have an account?
        <span onClick={() => navigate("/clientregister")}> Register</span>
      </p>
    </div>
  );
};

export default ClieantLogin;
