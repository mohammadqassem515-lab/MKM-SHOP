import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import "../styles/Home.css";

const Home = () => {

  const deals = [
    { product: products[1], oldPrice: 65, newPrice: 49 },
    { product: products[5], oldPrice: 90, newPrice: 69 },
    { product: products[14], oldPrice: 55, newPrice: 39 },
    { product: products[21], oldPrice: 75, newPrice: 59 }
  ];

  return (
    <div className="home">

      <section className="hero">
        <img
          src={products[35].image}
          alt="MKM Collection"
        />

        <div className="heroOverlay">
          <div className="heroText">
            <p className="welcome">WELCOME TO</p>
            <h1>MKM-SHOP</h1>
            <p>Modern style for every occasion.</p>

            <Link to="/products" className="shopButton">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <section className="summerSection">

        <div className="summerImage">
          <img
            src={products[6].image}
            alt="Summer Collection"
          />
        </div>

        <div className="summerText">
          <p className="sectionLabel">NEW COLLECTION</p>

          <h2>Summer Collection</h2>

          <p>
            Discover fresh styles and comfortable outfits
            made for your everyday look.
          </p>

          <Link to="/products" className="darkButton">
            Explore Collection
          </Link>
        </div>

      </section>

              

     <section className="dealsSection">

        <div className="sectionHeading">
          <p className="sectionLabel">SPECIAL OFFERS</p>

          <h2>Our Best Deals</h2>

          <p>
            Discover selected styles from our collection.
          </p>
        </div>

        <div className="dealsGrid">

          {deals.map((deal) => (

            <div className="dealCard" key={deal.product.id}>

              <div className="dealImage">

                <span className="saleBadge">SALE</span>

                <img
                  src={deal.product.image}
                  alt={deal.product.title}
                />

              </div>

              <div className="dealInfo">

                <h3>{deal.product.title}</h3>

                <div className="dealPrices">
                  <span className="oldPrice">
                    ${deal.oldPrice}
                  </span>

                  <span className="newPrice">
                    ${deal.newPrice}
                  </span>
                </div>

                <Link to="/products" className="dealButton">
                  Shop Now
                </Link>

              </div>

            </div>

          ))}

        </div>

        <Link to="/products" className="lightButton">
          View All Products
        </Link>

      </section>


      <section className="feedbackSection">

        <p className="sectionLabel">CUSTOMER EXPERIENCE</p>

        <h2>What Our Customers Say</h2>

        <div className="feedbackGrid">

          <div className="feedbackCard">
            <div className="stars">★★★★★</div>

            <p>
              "Great quality and modern designs.
              I love the collection!"
            </p>

            <h3>Customer</h3>
          </div>

          <div className="feedbackCard">
            <div className="stars">★★★★★</div>

            <p>
              "Excellent shopping experience
              and stylish products."
            </p>

            <h3>Customer</h3>
          </div>

          <div className="feedbackCard">
            <div className="stars">★★★★★</div>

            <p>
              "Beautiful outfits and a great
              variety of styles."
            </p>

            <h3>Customer</h3>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;