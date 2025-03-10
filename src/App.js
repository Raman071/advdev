import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <header>
        <h1>Welcome to My Website</h1>
      </header>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="home">
        <h2>Home</h2>
        <p>Welcome to our single-page website! Scroll or use the navigation bar to explore more.</p>
      </section>

      <section id="about">
        <h2>About</h2>
        <p>We are a company dedicated to providing the best services to our clients. Learn more about us here.</p>
      </section>

      <section id="services">
        <h2>Services</h2>
        <p>Our services include web development, design, and marketing strategies tailored to your needs.</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Get in touch with us at <a href="mailto:info@example.com">info@example.com</a>.</p>
      </section>

      <footer>
        <p>&copy; 2025 My Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
