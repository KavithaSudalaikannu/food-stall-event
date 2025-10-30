import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  
  const handleSearch = (e) => {
  e.preventDefault();
  if (search.trim()) {
    navigate(`/search?q=${search.toLowerCase()}`);
  }
};


  return (
    <div
      className="homepage"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg2.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay">
        <h1 className="title">Welcome to Event Food Stall</h1>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for food (e.g. Chaat, Cake, Salad)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
