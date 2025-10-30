// OwnerOrder.jsx
import { useState } from "react";

export default function OwnerOrder() {
  const [name, setName] = useState("");
  const [foodItem, setFoodItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = { name, foodItem, quantity, phone };
    try {
      const res = await fetch("http://localhost:8080/api/orders", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(order),
});


      if (res.ok) {
        alert("Order added successfully!");
        setName("");
        setFoodItem("");
        setQuantity("");
        setPhone("");
      } else {
        alert("Failed to add order.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Error adding order.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Add New Order</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Food Item"
          value={foodItem}
          onChange={(e) => setFoodItem(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit" style={{ padding: "10px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" }}>Add Order</button>
      </form>
    </div>
  );
}
