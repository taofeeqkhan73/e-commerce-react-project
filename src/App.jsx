import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './components/Navbar'
import Nav from './components/Nav'
import Header from "./components/Header";
import Sliders from "./components/Sliders";
import Row from "./components/Row"
import Grid from "./components/Grid"
import Shop from "./components/Shop"
import Products from "./components/products"
import Blogs from "./components/Blogs"
import Footer from './components/Footer';
import MyAccount from './pages/MyAccount';
import Product from "./pages/Product";

import './App.css'

const Home = () => {
  return (
    <>
      <Sliders />
      <Row />
      <Grid />
      <Shop />
      <Products />
      <Blogs />
    </>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/login" element={<Navigate to="/my-account" replace />} />
        <Route path="/register" element={<Navigate to="/my-account?action=register" replace />} />
        {/* shop section */}
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<Product />}
        />

      </Routes>
      <Footer />
    </>
  )
}

export default App


