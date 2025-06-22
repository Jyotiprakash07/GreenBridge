import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Example page components
function Home() {
  return (
    <section>
      <h2>Welcome to GreenBridge</h2>
      <p>Your one-stop shop for eco-friendly products!</p>
    </section>
  );
}

function Products() {
  return (
    <section>
      <h2>Our Products</h2>
      <p>Explore our curated selection of sustainable goods.</p>
      {/* Product list would go here */}
    </section>
  );
}

function Contact() {
  return (
    <section>
      <h2>Contact Us</h2>
      <p>We would love to hear from you! Reach out for any queries.</p>
    </section>
  );
}

// Main App component
function App() {
  return (
    <Router>
      <header>
        <nav>
          <h1>GreenBridge</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} GreenBridge. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
