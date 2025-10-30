import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const items = {
  chaat: [
    { name: "Pani Puri", price: 50, img: "/images/panipuri.webp" },
    { name: "Bhel Puri", price: 60, img: "/images/bhelpuri.webp" },
    { name: "Dahi Puri", price: 70, img: "/images/dahipuri.webp" },
  ],
  cakes: [
    { name: "Chocolate Cake", price: 200, img: "/images/chocolate.jpg" },
    { name: "Vanilla Cake", price: 180, img: "/images/vennila.webp" },
    { name: "blackforest Cake", price:300, img: "/images/black.webp" },
    { name: "strawberry Cake", price: 250, img: "/images/stra.webp" },
  ],
  icecreams: [
    { name: "Strawberry", price: 90, img: "/images/straw.webp" },
    { name: "Mango", price: 100, img: "/images/mango.webp" },
    { name: "chocolate cone", price: 70, img: "/images/cone.webp" },
    { name: "kulfi", price: 50, img: "/images/kulfi.webp" },
  ],
  salads: [
    { name: "Caesar Salad", price: 120, img: "/images/caser.webp" },
    { name: "Fruit Salad", price: 110, img: "/images/fruit.webp" },
    { name: "veg Salad", price: 110, img: "/images/veg.webp" },
  ],
};

export default function CategoryPage() {
  const { category } = useParams();
  const { addToCart } = useCart();

  const categoryItems = items[category] || [];

  return (
    <div style={{ padding: "20px" }}>
      <h1>{category.toUpperCase()}</h1>
      {categoryItems.map((item) => (
        <div
          key={item.name}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <img src={item.img} alt={item.name} width="100" />
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
