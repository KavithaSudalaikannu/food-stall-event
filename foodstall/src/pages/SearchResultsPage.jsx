import { useLocation, useNavigate } from "react-router-dom";
import { owners } from "../data/owners";


export default function SearchResultsPage() {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search).get("q") || "";
  const lowerQuery = query.trim().toLowerCase();

  // Filter owners by category or item name (case-insensitive, partial match)
  const matchedOwners = owners.filter((owner) =>
  // check location OR items
  owner.location.toLowerCase().includes(lowerQuery) ||
  owner.items.some((item) =>
    item.category.toLowerCase().includes(lowerQuery) ||
    item.name.toLowerCase().includes(lowerQuery)
  )
);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Search results for "{query}"</h1>
      {matchedOwners.length === 0 && <p>No results found.</p>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {matchedOwners.map((owner) => (
          <div
            key={owner.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/owner/${owner.id}`)}
          >
            <img
              src={owner.img}
              alt={owner.name}
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h3>{owner.name}</h3>
            <p>Rating: {owner.rating}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}
