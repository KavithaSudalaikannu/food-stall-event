import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import CategoryPage from "./pages/CategoryPage";
import OrderPage from "./pages/OrderPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import OwnerListPage from "./pages/OwnerListPage";
import OwnerDetailsPage from "./pages/OwnerDetailsPage";
import BookingPage from "./pages/BookingPage";
import Owner from "./pages/Owner";
import OwnerLogin from "./pages/OwnerLogin";
import OwnerOrders from "./pages/OwnerOrders";

function App() {
  const [currentOwner, setCurrentOwner] = useState(null);

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu/:category" element={<CategoryPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/search" element={<SearchResultsPage />} />

          {/* Owner Pages */}
          <Route path="/owners" element={<OwnerListPage />} />
          <Route path="/owner/:id" element={<OwnerDetailsPage />} />
          <Route path="/booking/:ownerId" element={<BookingPage />} />
          <Route path="/owner-dashboard" element={<Owner />} />
          <Route
            path="/owner-login"
            element={<OwnerLogin setCurrentOwner={setCurrentOwner} />}
          />
          <Route
            path="/owner-orders"
            element={<OwnerOrders currentOwner={currentOwner} />}
          />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
