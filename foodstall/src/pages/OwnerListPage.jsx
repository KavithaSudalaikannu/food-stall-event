import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

// Hardcoded owner data
const allOwners = [
  { id: 1, name: "Owner 1", stall_name: "Delight shop", foods: ["Chaat","Samosa"], profile_pic: "/images/owner1.jpeg" },
  { id: 2, name: "Owner 2", stall_name: "Aruvi", foods: ["Ice Cream","Cake"], profile_pic: "/images/owner2.webp" },
  { id: 3, name: "Owner 3", stall_name: "Nila stalls", foods: ["Chaat","Popcorn.icecream"], profile_pic: "/images/owner3.webp" },
  { id: 4, name: "Owner 4", stall_name: "Daily Delights", foods: ["Chaat","Juice,salad"], profile_pic: "/images/owner4.webp" }
];

export default function OwnerListPage() {
  const { food } = useParams();
  const [owners, setOwners] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filtered = allOwners.filter(owner => owner.foods.includes(food));
    setOwners(filtered);
  }, [food]);

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>Owners selling "{food}"</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {owners.map(owner => (
            <div
              key={owner.id}
              onClick={() => navigate(`/order/${food}/${owner.id}`)}
              style={{
                width: "200px",
                padding: "15px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                cursor: "pointer",
                textAlign: "center",
                backgroundColor: "#fdf3e7"
              }}
            >
              <img src={owner.profile_pic} alt={owner.name} style={{ width: "100%", borderRadius: "8px" }} />
              <h3>{owner.stall_name}</h3>
              <p>{owner.name}</p>
            </div>
          ))}
          {owners.length === 0 && <p>No owners found for "{food}"</p>}
        </div>
      </div>
    </div>
  );
}
