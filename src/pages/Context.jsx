import React, { createContext, useState, useEffect } from "react";

// Create Context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Load cart from local storage when the app starts
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Save cart to local storage whenever it updates
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Function to add item to cart
    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]); // Append item to cart
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider };
