// src/pages/OwnerDetailsPage.js
import { useParams, useNavigate } from "react-router-dom";
import { owners } from "../data/owners";

export default function OwnerDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const owner = owners.find((o) => o.id === parseInt(id));

  if (!owner) return <p>Owner not found</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Owner Info */}
      <h1>{owner.name}</h1>
      <p><strong>Location:</strong> {owner.location}</p>
      <p><strong>Contact:</strong> {owner.contact}</p>
      <p><strong>Rating:</strong> ⭐ {owner.rating}</p>
      <p><strong>Experience:</strong> {owner.experience}</p>
      <p><strong>Working Hours:</strong> {owner.workingHours}</p>
      <p><strong>Specialties:</strong> {owner.specialties.join(", ")}</p>

      {/* Items Section */}
      <h2 style={{ marginTop: "30px" }}>Items</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {owner.items.map((item, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              textAlign: "center",
              width: "200px",
              borderRadius: "8px",
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "180px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <h4 style={{ margin: "10px 0 5px" }}>{item.name}</h4>
            <p style={{ margin: "5px 0" }}>₹{item.price}</p>
            <button
              style={{
                background: "#6c63ff",
                color: "#fff",
                border: "none",
                padding: "6px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() =>
                navigate(`/booking/${owner.id}`, { state: { item } })
              }
            >
              Select Item
            </button>
          </div>
        ))}
      </div>

      {/* Previous Events Section */}
      <h2 style={{ marginTop: "30px" }}>Previous Events</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {owner.previousEvents.map((ev, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              textAlign: "center",
              width: "200px",
              borderRadius: "8px",
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            {ev.img && (
              <img
                src={ev.img}
                alt={ev.event}
                style={{
                  width: "180px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
              />
            )}
            <h4 style={{ margin: "10px 0 5px" }}>{ev.event}</h4>
            <p style={{ margin: 0 }}>Rating: ⭐ {ev.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
