import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { auth } from "./firebase/firebase-config";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Error Logging Out", error);
    }
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <nav className="mt-3 w-full bg-white shadow-md">
      <div className="mx-auto max-w-8xl px-6 lg:px-12">
        <div className="flex h-24 items-center justify-between">
          
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/images/SHOP.CO.png" alt="LOGO" className="h-10" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center space-x-6">
            <a href="/shop" className="text-black text-xl px-3 hover:text-gray-600">
              SHOP
            </a>
            <a href="/allproducts" className="text-black text-xl px-3 hover:text-gray-600">
              PRODUCTS
            </a>
            <a href="#new-arrivals" className="text-black text-xl px-3 hover:text-gray-600">
              NEW ARRIVALS
            </a>
            <a href="/cart" className="text-black text-xl px-3 hover:text-gray-600">
              MY CART
            </a>
          </div>

          {/* Search Input */}
          <div className="hidden lg:flex flex-1 justify-center">
            <input
              type="text"
              placeholder="Search for products"
              className="py-3 px-12 border rounded-3xl bg-gray-200 w-[600px] focus:outline-none"
            />
          </div>

          {/* Cart & User Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            <FontAwesomeIcon className="text-3xl cursor-pointer" icon={faCartShopping} />

            {user ? (
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded-full"
                onClick={handleLogOut}
              >
                LOG OUT
              </button>
            ) : (
              <button onClick={handleSignIn}>
                <FontAwesomeIcon className="text-3xl cursor-pointer" icon={faUser} />
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-3xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-24 left-0 w-full p-6">
          <div className="flex flex-col space-y-4 text-center">
            <a href="/shop" className="text-black text-xl hover:text-gray-600">
              SHOP
            </a>
            <a href="/allproducts" className="text-black text-xl hover:text-gray-600">
              PRODUCTS
            </a>
            <a href="#new-arrivals" className="text-black text-xl hover:text-gray-600">
              NEW ARRIVALS
            </a>
            <a href="/cart" className="text-black text-xl hover:text-gray-600">
              MY CART
            </a>
            <input
              type="text"
              placeholder="Search for products"
              className="py-3 px-6 border rounded-3xl bg-gray-200 w-full focus:outline-none"
            />
            <div className="flex justify-center space-x-6 mt-4">
              <FontAwesomeIcon className="text-3xl cursor-pointer" icon={faCartShopping} />
              {user ? (
                <button className="bg-gray-300 text-black px-4 py-2 rounded-full" onClick={handleLogOut}>
                  LOG OUT
                </button>
              ) : (
                <button onClick={handleSignIn}>
                  <FontAwesomeIcon className="text-3xl cursor-pointer" icon={faUser} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
