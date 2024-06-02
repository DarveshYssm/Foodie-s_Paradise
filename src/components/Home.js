import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Foodie's Paradise</h1>
          <p>Your ultimate destination for delicious recipes and food inspiration.</p>
          <Link to="/gallery" className="cta-button">Explore Recipes</Link>
        </div>
      </header>
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          At Foodie's Paradise, we believe that food brings people together. Whether you're a seasoned chef or just starting out, 
          we have something for everyone. Our recipes are easy to follow and guaranteed to satisfy your taste buds.
        </p>
        <Link to="/about" className="learn-more-button">Learn More</Link>
      </section>
      <section className="gallery-section">
        <h2>Featured Recipes</h2>
        <div className="gallery-grid">
          <div className="gallery-item"><img src="recipe1.jpg" alt="Recipe 1" /></div>
          <div className="gallery-item"><img src="recipe2.jpg" alt="Recipe 2" /></div>
          <div className="gallery-item"><img src="recipe3.jpg" alt="Recipe 3" /></div>
          <div className="gallery-item"><img src="recipe4.jpg" alt="Recipe 4" /></div>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; Yasmeen's project</p>
      </footer>
    </div>
  );
}

export default Home;
