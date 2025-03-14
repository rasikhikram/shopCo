import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "./Context";

const Shop = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);

    const { product } = location.state || {
        product: {
            image: "/images/MT1.png",
            productName: "ONE LIFE GRAPHIC T-SHIRT",
            productPrice: "RS. 800",
        },
    };

    const [activeColor, setActiveColor] = useState(null);
    const [activeSize, setActiveSize] = useState(null);
    const [count, setCount] = useState(1);

    const handleAddToCart = () => {
        if (activeColor === null || activeSize === null) {
            alert("Please select size and color.");
            return;
        }

        const newCartItem = {
            product,
            quantity: count,
            selectedSize: ["Small", "Medium", "Large", "X-Large"][activeSize],
            selectedColor: ["#4F4631", "#314F4A", "#31344F"][activeColor],
        };

        addToCart(newCartItem);

        setTimeout(() => {
            navigate("/cart");
        }, 300);
    };

    return (
        <div className="max-w-[1450px] mx-auto p-4 md:p-6">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                {/* Product Image */}
                <img 
                    className="h-auto w-full max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-xl"
                    src={product.image} 
                    alt={product.productName} 
                />

                {/* Product Details */}
                <div className="w-full lg:w-1/2">
                    <h1 className="text-2xl md:text-4xl font-superbold">{product.productName}</h1>
                    <h2 className="text-xl md:text-3xl mt-2 font-superbold">{product.productPrice}</h2>
                    <p className="text-gray-600 text-base md:text-lg mt-4">Soft and breathable fabric for ultimate comfort.</p>

                    {/* Color Selection */}
                    <div className="mt-4">
                        <p className="text-gray-600 text-lg">Select Colors</p>
                        <div className="flex space-x-4 mt-2">
                            {["#4F4631", "#314F4A", "#31344F"].map((color, index) => (
                                <button
                                    key={index}
                                    className={`p-4 rounded-full transition-all duration-300 ${
                                        activeColor === index ? "ring-4 ring-black" : ""
                                    }`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => setActiveColor(index)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Size Selection */}
                    <div className="mt-4">
                        <p className="text-gray-600 text-lg">Choose Size</p>
                        <div className="flex flex-wrap gap-2 md:gap-4 mt-2">
                            {["S", "M", "L", "XL"].map((size, index) => (
                                <button
                                    key={index}
                                    className={`py-3 px-6 rounded-full font-bold text-sm md:text-lg transition-all duration-300 ${
                                        activeSize === index ? "bg-black text-white" : "bg-gray-200 text-gray-600"
                                    }`}
                                    onClick={() => setActiveSize(index)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity & Add to Cart */}
                    <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
                        <div className="bg-gray-200 rounded-full flex items-center px-6 py-2">
                            <button className="text-2xl" onClick={() => setCount(Math.max(count - 1, 1))}>−</button>
                            <span className="text-2xl font-bold mx-4">{count}</span>
                            <button className="text-2xl" onClick={() => setCount(count + 1)}>+</button>
                        </div>
                        <button 
                            className="bg-black text-white px-16 py-4 rounded-full text-lg w-full md:w-auto"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
