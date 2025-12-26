import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";
import BackendURL from "../BackendURL";

const AdminLogin = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const api = `${BackendURL}/admin/adminlogin`;
      const response = await axios.post(api, formData);
      localStorage.setItem("adminName", response.data.adminName);
      alert("Login successful");
      navigate("/admindashboard");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-box">
        <h2>Admin Login</h2>

        <form onSubmit={submitData}>
          <input
            type="text"
            name="adminEmail"
            placeholder="Admin Email"
            onChange={handleChange}
          />

          <input
            type="text"
            name="adminID"
            placeholder="Admin ID"
            onChange={handleChange}
          />

          <input
            type="text"
            name="adminName"
            placeholder="Admin Name"
            onChange={handleChange}
          />

          <input
            type="password"
            name="adminPassword"
            placeholder="Password"
            onChange={handleChange}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
