import React from "react";
import { HashRouter,Route , Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./Components/Cart";
import "./App.css";

const App = () => {
  return (
    <HashRouter>
      <div className="app">
        <Navbar />

        <main className="mainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;