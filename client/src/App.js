import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import News from "./pages/News"
import Merch from "./pages/Merch"
import About from "./pages/About"
import Cart from "./pages/Cart"

// Components
import Home from "./pages/Home"

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
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
