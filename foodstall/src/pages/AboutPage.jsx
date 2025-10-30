import React from "react";
import "../styles/AboutPage.css";

function AboutPage() {
  return (
    <div className="about-container">
      {/* Page Header */}
      <h1>About Food Stall</h1>
      <p className="intro">
        Welcome to <strong>Food Stall</strong> – your go-to destination for fresh, tasty, and authentic snacks and desserts at wedding events. We bring joy to every occasion with food prepared with love and care.
      </p>

      {/* Our Story */}
      <section className="section story">
        <h2>Our Story</h2>
        <p>
          Founded in 2023, Food Stall started as a small family venture passionate about street food and desserts. Over the years, we’ve grown into a trusted provider for wedding events, serving hundreds of happy guests with delicious treats.
        </p>
      </section>

      {/* Our Mission */}
      <section className="section mission">
        <h2>Our Mission</h2>
        <p>
          To deliver happiness through every meal. We aim to create memorable culinary experiences for every wedding event, combining taste, quality, and creativity.
        </p>
      </section>

      {/* Our Vision */}
      <section className="section vision">
        <h2>Our Vision</h2>
        <p>
          To become the most loved and trusted food stall provider for wedding events across the country, spreading joy and flavor to every celebration.
        </p>
      </section>

      {/* Meet Our Team */}
      <section className="section team">
        <h2>Meet Our Team</h2>
        <p>
          Our passionate chefs and friendly stall owners work together to make every event special. From ice cream and chaat to cakes and snacks, our team ensures top-notch quality and service.
        </p>
      </section>

      {/* Closing Note */}
      <section className="section closing">
        <p>
          Join us at Food Stall, where every bite is a celebration! 🍰🍦🍲
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
