import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import News from "./pages/News";
import Merch from "./pages/Merch";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Tour from "./pages/Tour";
import Media from "./pages/Media";
import Home from "./pages/Home";
import AdminSignup from "./pages/AdminSignup";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/media" element={<Media />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/create-new-admin-user" element={<AdminSignup />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
