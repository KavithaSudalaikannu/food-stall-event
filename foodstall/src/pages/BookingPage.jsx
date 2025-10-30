import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/BookingPage.css";

export default function BookingPage() {
  const { state } = useLocation();
  const item = state?.item || { name: "Sample Item", price: 100 }; // fallback
  const [quantity, setQuantity] = useState(1);
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [booked, setBooked] = useState(false);

  const total = item.price * quantity;

  const handleBooking = (e) => {
    e.preventDefault();
    setBooked(true);

    const booking = {
      item: item.name,
      price: item.price,
      quantity,
      total,
      eventDate,
      eventLocation,
      contact,
      email,
    };
    console.log("Booking submitted:", booking);
  };

  if (booked) {
    return (
      <div className="booking-success">
        <h2>🎉 Your order is booked!</h2>
        <p>We’ll contact you shortly with more details.</p>
      </div>
    );
  }

  return (
    <div className="booking-container">
      <form onSubmit={handleBooking} className="booking-form">
        <h2>Booking: {item.name}</h2>
        <p className="price">Price: ₹{item.price}</p>

        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            min={1}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          />
        </label>

        <p className="total">Total: ₹{total}</p>

        <label>
          Event Date:
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </label>

        <label>
          Event Location:
          <input
            type="text"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            placeholder="Enter location"
            required
          />
        </label>

        <label>
          Contact:
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Phone number"
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </label>

        <button type="submit" className="book-btn">
          Book Now
        </button>
      </form>
    </div>
  );
}
