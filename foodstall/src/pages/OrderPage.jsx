import { useCart } from "../context/CartContext";

export default function OrderPage() {
  const { cart } = useCart();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Orders</h1>
      {cart.length === 0 ? (
        <p>No items added yet!</p>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
          >
            <img src={item.img} alt={item.name} width="80" />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}
