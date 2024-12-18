import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/footer';
import AboutUs from './page/aboutus';
import LandingPage from './page/landing';
import Products from './page/product';
import LoginPage from './page/loginpage';
import SignupPage from './page/signup';

// AppLayout Component for conditional Navbar/Footer
function AppLayout() {
  const location = useLocation();
  
  // Define routes without Navbar and Footer
  const noLayoutRoutes = ["/signin","/signup"]; 

  return (
    <>
      {/* Conditionally render Navbar and Footer */}
      {!noLayoutRoutes.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/support" element={<h1>Support</h1>} />
        <Route path="/signin" element={<LoginPage />} />
        
        <Route path='/signup' element={<SignupPage/>}/>
      </Routes>
      
      {!noLayoutRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
