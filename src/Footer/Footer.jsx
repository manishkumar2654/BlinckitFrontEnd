import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <p>© 2025 Blinkit Clone</p>
      <button onClick={() => navigate("/adminlogin")}>
        Admin Login
      </button>
    </footer>
  );
};

export default Footer;
