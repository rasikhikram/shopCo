import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import NewArrivals from './components/NewArrivals'
import TopSelling from './components/TopSelling'
import Browse from './components/Browse'
import Footer from './components/Footer'
import Shop from './pages/Shop';
import Cart from './pages/Cart';

import { CartProvider } from './pages/Context';
import SignIn from './pages/SignIn';
import Delivery from './pages/Delivery';

const App = () => {
  return (
    <div>
      <Navbar />
      <CartProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />

                <div id="new-arrivals">
                  <NewArrivals />
                </div>
                <TopSelling />
                <Browse /> 
              </>
            }
          />
          
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/delivery" element={<Delivery />} />

        </Routes>
      </CartProvider>
      <Footer />
    </div>
  )
}

export default App

