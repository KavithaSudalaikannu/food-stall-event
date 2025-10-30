import { useEffect, useState } from "react";

export default function Owner() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/orders");
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.log(err);
        alert("Failed to fetch orders");
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>All Orders</h1>
      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((order) => (
          <div key={order.id}>
            <p>Name: {order.name}</p>
            <p>Food: {order.foodItem}</p>
            <p>Quantity: {order.quantity}</p>
            <p>Phone: {order.phone}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}
