import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        padding: "15px",
        background: "#fff3e0",
        fontWeight: "bold",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About Us</Link>
      <Link to="/owner-login">Owner Login</Link>
      
    </nav>
  );
}
