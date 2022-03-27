import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ApolloProvider } from "@apollo/react-hooks"
import ApolloClient from "apollo-boost"
import { StoreProvider } from "./utils/GlobalState"

// Components
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import News from "./pages/News"
import Merch from "./pages/Merch"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Tour from "./pages/Tour"
import Media from "./pages/Media"
import Home from "./pages/Home"
import Images from "./pages/Images"
import Music from "./pages/Music"
import Videos from "./pages/Videos"
import AdminSignup from "./pages/AdminSignup"
import Admin from "./pages/Admin"
import MerchDetails from "./pages/MerchDetails"
import MusicDetails from "./pages/MusicDetails"
import AddMerch from "./pages/AddMerch"
import EditNews from "./pages/EditNews"
import AdminEdit from "./pages/AdminEdit"

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem("id_token")

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      }
    })
  },
  uri: "/graphql"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <StoreProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            //News
            <Route path="/news" element={<News />} />
            <Route path="/editnews" element={<EditNews />} />
            //About
            <Route path="/about" element={<About />} />
            //Merch
            <Route path="/merch" element={<Merch />} />
            <Route path="/addmerch" element={<AddMerch />} />
            <Route path="/merchdetails" element={<MerchDetails />} />
            //Cart
            <Route path="/cart" element={<Cart />} />
            <Route path="/media" element={<Media />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/images" element={<Images />} />
            <Route path="/music" element={<Music />} />
            <Route path="/musicdetails" element={<MusicDetails />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/create-new-admin-user" element={<AdminSignup />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/adminedit" element={<AdminEdit />} />
          </Routes>
          <Footer />
        </StoreProvider>
      </Router>
    </ApolloProvider>
  )
}

export default App
