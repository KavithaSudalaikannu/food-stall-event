import React from "react";

function MenuItemCard({ item }) {
  return (
    <div className="menu-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>₹{item.price}</p>
    </div>
  );
}

export default MenuItemCard;
