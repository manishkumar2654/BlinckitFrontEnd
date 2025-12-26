import { Link, Outlet, useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminName");
    navigate("/adminlogin");
  };

  return (
    <div className="admin-layout">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <h2 className="brand">Blinkit Admin</h2>

        <p className="admin-name">
          Welcome, {localStorage.getItem("adminName")}
        </p>

        <nav className="admin-menu">
          <Link to="uploadproduct">📦 Upload Product</Link>
          <Link to="customerorder">🧾 Customer Orders</Link>
        </nav>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
