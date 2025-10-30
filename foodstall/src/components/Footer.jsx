import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "15px",
        background: "#333",
        color: "white",
        marginTop: "20px",
      }}
    >
      <div style={{ marginBottom: "10px" }}>
        <Link to="/" style={{ color: "white", margin: "0 10px" }}>Home</Link>
        <Link to="/menu" style={{ color: "white", margin: "0 10px" }}>Menu</Link>
        <Link to="/contact" style={{ color: "white", margin: "0 10px" }}>Contact</Link>
        <Link to="/about" style={{ color: "white", margin: "0 10px" }}>About Us</Link>
      </div>
      <p>© 2025 Food Stall. All rights reserved.</p>
    </footer>
  );
}
