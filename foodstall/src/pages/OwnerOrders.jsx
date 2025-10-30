export default function OwnerOrders({ currentOwner }) {
  if (!currentOwner) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Please login first.</p>;
  }

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto" }}>
      <h2>{currentOwner.name}'s Items</h2>
      <ul>
        {currentOwner.items.map((item, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            <strong>{item.name}</strong> - ₹{item.price} ({item.category})
          </li>
        ))}
      </ul>
    </div>
  );
}
