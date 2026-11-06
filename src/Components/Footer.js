import React from "react";
import {Link} from 'react-router-dom' ;
import '../styles/Footer.css'


const Footer = () => {
    return (
         <div className="footer" >
           <div className="footerInfo">

            <h2>MKM-SHOP</h2>
            <p>Find your style with our latest collection.</p>

           </div>

           <div className="footerLinks" >
               <h3>Quick Links</h3>
               <Link to='/'>Home</Link>
               <Link to="/products">Products</Link>
               <Link to="/about">About</Link>
               <Link to="/contact">Contact</Link>
           </div>

           <div className="footerCotact">
               <h3>Contact us</h3>
               <p>support@MKMshop.com</p>
               <p>Tyre,Lebanon</p>
           </div>

         </div>

    );
}
export default Footer ;
