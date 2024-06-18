import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import JuiceList from './components/JuiceList';
import AboutUs from './components/AboutUs';
import FeaturedProducts from './components/FeaturedProducts';
import ContactUs from './components/ContactUs';
import Reviews from './components/Reviews';
import HeroCarousel from './components/Hero'; // Make sure this file is correctly named
import JuiceDetail from './components/JuiceDetail';
import Footer from './components/Footer';
const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <HeroCarousel />
      <Routes>
        <Route exact path="/" element={<JuiceList />} /> {/* Wrap JuiceList in Route component */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/featured-products" element={<FeaturedProducts />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/juice/:id" element={<JuiceDetail />} /> {/* Route for JuiceDetail */}
      </Routes>
      <Reviews />
      <Footer/>
    </Router>
  );
};

export default App;
