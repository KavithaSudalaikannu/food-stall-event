import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Chaat", img: "/images/chaat.jpg" },
  { name: "Cakes", img: "/images/cakes.jpg" },
  { name: "Icecreams", img: "/images/icecream.jpg" },
  { name: "Salads", img: "/images/salads.webp" },
];

export default function MenuPage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Our Menu</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => navigate(`/menu/${cat.name.toLowerCase()}`)}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              cursor: "pointer",
              textAlign: "center",
              transition: "transform 0.2s",
            }}
          >
            <img
              src={cat.img}
              alt={cat.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <h3 style={{ marginTop: "10px" }}>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
