import React from 'react';
import '../styles/About.css';
import mkmShopImage from '../assets/MKM-SHOP.jpeg'

const About = () => {
  return (
    <div className="aboutPage">
      <div className="aboutHero">
        <h1>About MKM-SHOP</h1>
        <p>Redefining modern elegance and timeless style for every occasion.</p>
      </div>

      <div className="aboutStorySection">
        <div className="aboutImageWrapper">
          <img 
            src={mkmShopImage} 
            alt="MKM Shop" 
          />
        </div>
        <div className="aboutTextContent">
          <span className="aboutLabel">OUR STORY</span>
          <h2>Crafting Quality & Style Since Day One</h2>
          <p>
            Welcome to <strong>MKM-SHOP</strong>, where fashion meets sophistication. We believe that what you wear is an extension of your personality. That's why we meticulously curate our collections, bringing you premium suits, stylish casual wear, and top-tier footwear designed to make you stand out.
          </p>
          <p>
            Our commitment is driven by exceptional quality, modern designs, and unmatched comfort, ensuring you look and feel your absolute best wherever you go.
          </p>
        </div>
      </div>


      <div className="aboutFeaturesGrid">
        <div className="featureCard">
          <h3>Premium Quality</h3>
          <p>We source the finest materials to ensure long-lasting durability and comfort.</p>
        </div>
        <div className="featureCard">
          <h3>Modern Designs</h3>
          <p>Stay ahead of the trends with our carefully designed contemporary collections.</p>
        </div>
        <div className="featureCard">
          <h3>Customer Satisfaction</h3>
          <p>Your style journey matters to us with dedicated support every step of the way.</p>
        </div>
      </div>
    </div>
  );
};

export default About;