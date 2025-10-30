import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { owners } from "../data/owners";

export default function OwnerLogin({ setCurrentOwner }) {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Find the owner by name (exact match)
    const owner = owners.find((o) => o.name === username);

    if (owner) {
      setCurrentOwner(owner); // save the owner in App.js state
      navigate("/owner-orders"); // redirect to orders page
    } else {
      setMessage("Owner not found! Please check the name.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Owner Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter owner name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <button
          type="submit"
          style={{ width: "100%", padding: "10px", cursor: "pointer" }}
        >
          Login
        </button>
      </form>
      {message && <p style={{ color: "red", marginTop: "10px" }}>{message}</p>}
    </div>
  );
}
